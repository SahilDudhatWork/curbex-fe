<!-- components/LogoutModal.vue -->
<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <h2 class="log-out-title">
        Are you sure you want to <br />
        Log out?
      </h2>
      <div class="close-button" @click="cancelLogout">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="10.5" fill="#121212" />
          <circle cx="18" cy="18" r="10.5" fill="black" fill-opacity="0.2" />
          <circle cx="18" cy="18" r="10.5" fill="black" fill-opacity="0.2" />
          <circle cx="18" cy="18" r="10.5" fill="black" fill-opacity="0.2" />
          <circle cx="18" cy="18" r="10.5" fill="black" fill-opacity="0.2" />
          <g filter="url(#filter0_b_5736_7654)">
            <path
              d="M12.375 25.2L18 19.575L23.625 25.2L25.2 23.625L19.575 18L25.2 12.375L23.625 10.8L18 16.425L12.375 10.8L10.8 12.375L16.425 18L10.8 23.625L12.375 25.2ZM18 33C15.95 33 14.0125 32.6063 12.1875 31.8188C10.3625 31.0313 8.76875 29.9563 7.40625 28.5938C6.04375 27.2313 4.96875 25.6375 4.18125 23.8125C3.39375 21.9875 3 20.05 3 18C3 15.925 3.39375 13.975 4.18125 12.15C4.96875 10.325 6.04375 8.7375 7.40625 7.3875C8.76875 6.0375 10.3625 4.96875 12.1875 4.18125C14.0125 3.39375 15.95 3 18 3C20.075 3 22.025 3.39375 23.85 4.18125C25.675 4.96875 27.2625 6.0375 28.6125 7.3875C29.9625 8.7375 31.0313 10.325 31.8188 12.15C32.6063 13.975 33 15.925 33 18C33 20.05 32.6063 21.9875 31.8188 23.8125C31.0313 25.6375 29.9625 27.2313 28.6125 28.5938C27.2625 29.9563 25.675 31.0313 23.85 31.8188C22.025 32.6063 20.075 33 18 33Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_5736_7654"
              x="-93"
              y="-93"
              width="222"
              height="222"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="48" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_5736_7654"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_5736_7654"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="modal-buttons">
        <button @click="confirmLogout" class="confirm-button">
          Yes, I’m Sure
        </button>
        <button @click="cancelLogout" class="cancel-button">
          No, I’m Good
        </button>
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
  methods: {
    confirmLogout() {
      // Logic for logging out
      this.$emit("logoutConfirmed");
    },
    cancelLogout() {
      this.$emit("logoutCancelled");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0px -3px 30px -12px #0000001a;
  max-width: 420px;
  width: 90%;
  position: relative;
}
.log-out-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  padding-bottom: 23px;
}
.close-button {
  position: absolute;
  top: 6px;
  right: 11px;
  z-index: 9;
  cursor: pointer;
}
.modal-buttons {
  /* display: flex;
    justify-content: space-between; */
}
.confirm-button {
  background: #ff364a;
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 15px;
}
.cancel-button {
  background: transparent;
  border: 1px solid #ff364a;
  color: #ff364a;
  padding: 16px 20px;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  width: 100%;
}
</style>
