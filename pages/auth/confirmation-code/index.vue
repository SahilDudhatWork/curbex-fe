<template>
  <div
    class="flex flex-col justify-center p-4 max-w-md mx-auto pt-[10rem] pb-[15rem]"
  >
    <h1
      class="font-semibold mb-3 text-[20px] md:text-[24px] text-[#121212] font-Montserrat-Medium text-left"
    >
      Confirmation Code
    </h1>
    <form @submit.prevent="handleSubmit" class="w-full">
      <input
        type="text"
        v-model="formData.code"
        placeholder="123456"
        @input="validateCodeInput"
        :class="errors?.code ? 'border-[red] mb-0' : 'mb-4'"
        class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
      />
      <span v-if="errors?.code" class="text-[red] text-[12px] pl-[3px]">{{
        errors?.code
      }}</span>
      <button
        class="w-full hover:bg-[#8D54FF] p-3 px-5 bg-black text-white rounded-lg text-[12px] md:text-base cursor-pointer flex items-center justify-between gap-2"
      >
        Submit
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.875 4.20703L13.375 8.70703L8.875 13.207M12.75 8.70703H3.625"
            stroke="#FCFCFC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        email: "",
        code: "",
      },
      errors: {},
    };
  },
  methods: {
    ...mapActions({
      userLoginConfirmation: "auth/userLoginConfirmation",
    }),
    async handleSubmit() {
      try {
        if (this.formData.code.length == 0) {
          this.errors = { code: "confirmation code is required" };
          return;
        }
        this.formData.email = this.$cookies.get("email");
        await this.userLoginConfirmation(this.formData);
        this.$cookies.remove("email");
        const redirectPath = this.$route.query.redirect;
        if (redirectPath) {
          this.$router.push(redirectPath);
        } else {
          this.$router.push("/profile");
        }
        this.$toast.open({
          message: this.$i18n.t("loginMessage"),
        });
      } catch (error) {
        console.log(error);

        this.$toast.open({
          message:
            error?.response?.data?.message || this.$i18n.t("errorMessage"),
          type: "error",
        });
      }
    },
    async validateCodeInput(event) {
      this.formData.code = await this.$validateNumber(event.target.value);
    },
  },
};
</script>
