<template>
  <div style="z-index: 999" class="fixed top-0 w-full lef-0">
    <div class="fixed inset-0" v-if="isVisible">
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="fixed inset-0 transition-opacity"
          @click="$emit('closeModal')"
        >
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="max-w-4xl mx-auto z-50 bg-white rounded-[15px]">
          <div
            class="bg-[#FFFFFF] rounded-[15px] sm:w-[772px] w-[358px] mt-5 mb-5 relative px-6"
          >
            <div
              class="flex justify-end mt-2 cursor-pointer"
              @click="$emit('closeModal')"
            >
              <img
                src="@/static/svg/cancle.svg"
                alt=""
                class="absolute right-[11px]"
              />
            </div>
            <div class="sm:mt-12 mt-16">
              <div class="flex justify-center mt-1.5 relative">
                <div class="absolute z-50 -top-[22px]">
                  <img
                    src="@/static/svg/search.svg"
                    alt=""
                    class="absolute right-0"
                  />
                  <input
                    type="text"
                    class="border border-[#121212] rounded-[30px] text-[#C3C3C3] font-normal text-sm h-[44px] sm:w-[412px] w-[327px] px-4"
                    placeholder="Search for address"
                    style=""
                  />
                </div>
              </div>
              <GoogleMap :height="343" @updateAddress="getAddress" />
            </div>
            <div
              class="flex justify-between items-center sm:flex-row flex-col mt-6 pb-5"
            >
              <div class="flex items-center gap-2.5">
                <img src="@/static/svg/location.svg" alt="" />
                <h1 class="text-[#121212] font-medium text-base">
                  {{ location?.street || "" }}
                </h1>
              </div>
              <button
                @click="$emit('handleClick')"
                class="order-1 sm:mt-0 mt-4 md:order-2 w-full md:w-auto flex justify-center items-center gap-2 px-[14px] py-[0.60rem] md:py-[9px] sm:font-medium sm:text-base text-sm font-normal text-[#FCFCFC] rounded-md bg-[#121212] hover:bg-violet-500 transition"
              >
                Confirm
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4301 2.29987L6.68009 13.0499C6.58646 13.1438 6.47521 13.2184 6.35271 13.2692C6.23021 13.3201 6.09887 13.3463 5.96623 13.3463C5.83358 13.3463 5.70225 13.3201 5.57974 13.2692C5.45724 13.2184 5.34599 13.1438 5.25236 13.0499L0.549233 8.34675C0.455487 8.253 0.381123 8.14171 0.330388 8.01922C0.279653 7.89674 0.25354 7.76546 0.25354 7.63288C0.25354 7.5003 0.279653 7.36903 0.330388 7.24654C0.381123 7.12405 0.455487 7.01276 0.549233 6.91901C0.64298 6.82527 0.754273 6.7509 0.876758 6.70017C0.999244 6.64943 1.13052 6.62332 1.2631 6.62332C1.39568 6.62332 1.52696 6.64943 1.64944 6.70017C1.77193 6.7509 1.88322 6.82527 1.97697 6.91901L5.96707 10.9091L16.004 0.873818C16.1934 0.684489 16.4502 0.578125 16.7179 0.578125C16.9857 0.578125 17.2424 0.684489 17.4318 0.873818C17.6211 1.06315 17.7275 1.31993 17.7275 1.58769C17.7275 1.85544 17.6211 2.11222 17.4318 2.30155L17.4301 2.29987Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      location: {},
    };
  },
  methods: {
    getAddress(item) {
      this.location = item;
      this.$emit("getAddress", this.location);
    },
  },
};
</script>
