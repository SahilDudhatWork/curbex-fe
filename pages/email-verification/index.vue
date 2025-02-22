<template>
  <div
    class="text-center my-[8rem] max-w-[320px] w-[90%] mx-auto bg-white rounded-[20px] p-8 border border-[#F5F5F5]"
  >
    <div class="mb-4">
      <svg
        width="43"
        height="42"
        viewBox="0 0 43 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto"
      >
        <path
          d="M21.5 0C17.2477 0 13.0909 1.23163 9.55525 3.53914C6.01959 5.84665 3.26388 9.1264 1.6366 12.9636C0.00931565 16.8009 -0.416456 21.0233 0.413126 25.0969C1.24271 29.1705 3.29038 32.9123 6.29721 35.8492C9.30404 38.7861 13.135 40.7862 17.3056 41.5965C21.4762 42.4068 25.7991 41.9909 29.7277 40.4015C33.6563 38.812 37.0141 36.1204 39.3766 32.667C41.739 29.2135 43 25.1534 43 21C43 15.4305 40.7348 10.089 36.7028 6.15076C32.6708 2.21249 27.2022 0 21.5 0ZM20.64 29.75L10.75 22.3825L14.0288 18.235L19.9592 22.75L28.0396 13.86L32.0529 17.36L20.64 29.75Z"
          fill="#29CC6A"
        />
      </svg>
    </div>
    <h3 class="text-[16px] font-medium text-gray-900 mb-4">
      Email Verification
    </h3>
    <p class="text-[14px] text-gray-500 mb-6">
      Your email was verified. You can continue using the application.
    </p>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      emailVerification: "auth/emailVerification",
    }),
  },
  async mounted() {
    try {
      await this.emailVerification({ code: this.$route.query.code });
      this.$router.push("/");
    } catch (error) {
      this.$toast.open({
        message: error?.response?.data?.message || this.$i18n.t("errorMessage"),
        type: "error",
      });
      console.log("error", error);
    }
  },
};
</script>
