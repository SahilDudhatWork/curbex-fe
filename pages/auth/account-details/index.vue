<template>
  <div
    class="container mx-auto flex flex-wrap min-h-screen py-0 md:py-[3rem] lg:py-[5rem]"
  >
    <div
      class="flex-1 lg:max-w-[640px] p-6 mx-auto lg:p-10 pt-0 bg-white order-2 lg:order-1 lg:pt-[1rem]"
    >
      <h1
        class="mb-2 text-[24px] md:text-[25px] text-[#121212] font-Montserrat-Medium font-bold pb-[2px]"
      >
        Register
      </h1>
      <h1
        class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]"
      >
        Sign up with
      </h1>
      <div class="my-2 flex gap-4">
        <button
          class="flex-1 p-[0.15rem] md:p-3 bg-white border border-[#121212] rounded-lg cursor-pointer flex items-center justify-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4782_61047)">
              <path
                d="M24.1469 12.5782C24.1469 11.5963 24.0653 10.8798 23.8889 10.1367H12.4137V14.5685H19.1494C19.0136 15.6699 18.2803 17.3285 16.6506 18.4431L16.6278 18.5915L20.256 21.3378L20.5074 21.3624C22.816 19.2791 24.1469 16.2139 24.1469 12.5782Z"
                fill="#4285F4"
              />
              <path
                d="M12.4136 24.256C15.7136 24.256 18.4839 23.1945 20.5074 21.3634L16.6506 18.4441C15.6185 19.1474 14.2333 19.6383 12.4136 19.6383C9.18161 19.6383 6.43846 17.5552 5.4606 14.6758L5.31727 14.6877L1.54458 17.5405L1.49524 17.6745C3.50507 21.5756 7.63342 24.256 12.4136 24.256Z"
                fill="#34A853"
              />
              <path
                d="M5.46091 14.6753C5.20289 13.9322 5.05357 13.136 5.05357 12.3134C5.05357 11.4906 5.20289 10.6945 5.44733 9.95147L5.4405 9.79322L1.62053 6.89453L1.49555 6.95262C0.667202 8.57147 0.191895 10.3894 0.191895 12.3134C0.191895 14.2374 0.667202 16.0552 1.49555 17.674L5.46091 14.6753Z"
                fill="#FBBC05"
              />
              <path
                d="M12.4136 4.9887C14.7086 4.9887 16.2567 5.95734 17.1395 6.76681L20.5888 3.47606C18.4704 1.55205 15.7136 0.371094 12.4136 0.371094C7.63342 0.371094 3.50507 3.05143 1.49524 6.9525L5.44702 9.95136C6.43846 7.07197 9.18161 4.9887 12.4136 4.9887Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_4782_61047">
                <rect
                  width="23.9667"
                  height="23.9667"
                  fill="white"
                  transform="translate(0.19165 0.371094)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          class="flex-1 p-[0.15rem] md:p-3 bg-white border border-[#121212] rounded-lg cursor-pointer flex items-center justify-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.535 22.8759C17.3118 24.0616 15.9764 23.8744 14.6908 23.3127C13.3304 22.7386 12.0823 22.7136 10.647 23.3127C8.84969 24.0865 7.90113 23.8619 6.82775 22.8759C0.736994 16.5979 1.63563 7.0374 8.55014 6.68793C10.2351 6.7753 11.4083 7.61153 12.3943 7.68642C13.8671 7.38687 15.2774 6.52568 16.85 6.63801C18.7347 6.78778 20.1575 7.53664 21.0936 8.8846C17.1995 11.2186 18.1231 16.3483 21.6927 17.7836C20.9813 19.6558 20.0577 21.5154 18.5225 22.8884L18.535 22.8759ZM12.2695 6.61305C12.0823 3.82977 14.3414 1.53325 16.9374 1.30859C17.2994 4.52871 14.0168 6.92507 12.2695 6.61305Z"
              fill="#121212"
            />
            <path
              d="M18.535 22.8759C17.3118 24.0616 15.9764 23.8744 14.6908 23.3127C13.3304 22.7386 12.0823 22.7136 10.647 23.3127C8.84969 24.0865 7.90113 23.8619 6.82775 22.8759C0.736994 16.5979 1.63563 7.0374 8.55014 6.68793C10.2351 6.7753 11.4083 7.61153 12.3943 7.68642C13.8671 7.38687 15.2774 6.52568 16.85 6.63801C18.7347 6.78778 20.1575 7.53664 21.0936 8.8846C17.1995 11.2186 18.1231 16.3483 21.6927 17.7836C20.9813 19.6558 20.0577 21.5154 18.5225 22.8884L18.535 22.8759ZM12.2695 6.61305C12.0823 3.82977 14.3414 1.53325 16.9374 1.30859C17.2994 4.52871 14.0168 6.92507 12.2695 6.61305Z"
              fill="black"
              fill-opacity="0.2"
            />
            <path
              d="M18.535 22.8759C17.3118 24.0616 15.9764 23.8744 14.6908 23.3127C13.3304 22.7386 12.0823 22.7136 10.647 23.3127C8.84969 24.0865 7.90113 23.8619 6.82775 22.8759C0.736994 16.5979 1.63563 7.0374 8.55014 6.68793C10.2351 6.7753 11.4083 7.61153 12.3943 7.68642C13.8671 7.38687 15.2774 6.52568 16.85 6.63801C18.7347 6.78778 20.1575 7.53664 21.0936 8.8846C17.1995 11.2186 18.1231 16.3483 21.6927 17.7836C20.9813 19.6558 20.0577 21.5154 18.5225 22.8884L18.535 22.8759ZM12.2695 6.61305C12.0823 3.82977 14.3414 1.53325 16.9374 1.30859C17.2994 4.52871 14.0168 6.92507 12.2695 6.61305Z"
              fill="black"
              fill-opacity="0.2"
            />
            <path
              d="M18.535 22.8759C17.3118 24.0616 15.9764 23.8744 14.6908 23.3127C13.3304 22.7386 12.0823 22.7136 10.647 23.3127C8.84969 24.0865 7.90113 23.8619 6.82775 22.8759C0.736994 16.5979 1.63563 7.0374 8.55014 6.68793C10.2351 6.7753 11.4083 7.61153 12.3943 7.68642C13.8671 7.38687 15.2774 6.52568 16.85 6.63801C18.7347 6.78778 20.1575 7.53664 21.0936 8.8846C17.1995 11.2186 18.1231 16.3483 21.6927 17.7836C20.9813 19.6558 20.0577 21.5154 18.5225 22.8884L18.535 22.8759ZM12.2695 6.61305C12.0823 3.82977 14.3414 1.53325 16.9374 1.30859C17.2994 4.52871 14.0168 6.92507 12.2695 6.61305Z"
              fill="black"
              fill-opacity="0.2"
            />
            <path
              d="M18.535 22.8759C17.3118 24.0616 15.9764 23.8744 14.6908 23.3127C13.3304 22.7386 12.0823 22.7136 10.647 23.3127C8.84969 24.0865 7.90113 23.8619 6.82775 22.8759C0.736994 16.5979 1.63563 7.0374 8.55014 6.68793C10.2351 6.7753 11.4083 7.61153 12.3943 7.68642C13.8671 7.38687 15.2774 6.52568 16.85 6.63801C18.7347 6.78778 20.1575 7.53664 21.0936 8.8846C17.1995 11.2186 18.1231 16.3483 21.6927 17.7836C20.9813 19.6558 20.0577 21.5154 18.5225 22.8884L18.535 22.8759ZM12.2695 6.61305C12.0823 3.82977 14.3414 1.53325 16.9374 1.30859C17.2994 4.52871 14.0168 6.92507 12.2695 6.61305Z"
              fill="black"
              fill-opacity="0.2"
            />
          </svg>
        </button>
        <button
          class="flex-1 p-[0.15rem] md:p-3 bg-white border border-[#121212] rounded-lg cursor-pointer flex items-center justify-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4782_61056)">
              <path
                d="M24.8082 12.3544C24.8082 5.73626 19.4431 0.371094 12.8249 0.371094C6.20672 0.371094 0.841553 5.73616 0.841553 12.3544C0.841553 18.3356 5.22371 23.2932 10.9525 24.1922V15.8184H7.90985V12.3544H10.9525V9.71435C10.9525 6.71103 12.7416 5.05208 15.4787 5.05208C16.7899 5.05208 18.1612 5.28613 18.1612 5.28613V8.23516H16.6502C15.1614 8.23516 14.6973 9.1589 14.6973 10.1066V12.3544H18.0208L17.4895 15.8184H14.6973V24.1922C20.4261 23.2932 24.8082 18.3357 24.8082 12.3544Z"
                fill="#1877F2"
              />
              <path
                d="M17.4894 15.8171L18.0207 12.3531H14.6972V10.1053C14.6972 9.15751 15.1615 8.23385 16.6501 8.23385H18.1612V5.28483C18.1612 5.28483 16.7898 5.05078 15.4787 5.05078C12.7415 5.05078 10.9524 6.70972 10.9524 9.71305V12.3531H7.90979V15.8171H10.9524V24.1909C11.5718 24.288 12.1979 24.3366 12.8248 24.3365C13.4518 24.3366 14.0778 24.288 14.6972 24.1909V15.8171H17.4894Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4782_61056">
                <rect
                  width="23.9667"
                  height="23.9667"
                  fill="white"
                  transform="translate(0.841675 0.371094)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <h1
        class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold py-[10px]"
      >
        OR
      </h1>

      <h1
        class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]"
      >
        Your Name
      </h1>
      <div class="mb-4">
        <input
          type="text"
          v-model="name"
          placeholder="First Name"
          class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
        />
      </div>

      <div class="mb-4 relative">
        <input
          type="text"
          v-model="LastName"
          placeholder="Last Name"
          class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
        />
      </div>
      <h1
        class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]"
      >
        Business Name
      </h1>
      <div class="mb-4">
        <input
          type="text"
          v-model="businessName"
          placeholder="Business Name"
          class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
        />
      </div>
      <h1
        class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]"
      >
        Login Details
      </h1>
      <div class="mb-4">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
        />
      </div>
      <div class="mb-4 relative">
        <input
          :type="isNewPasswordVisible ? 'text' : 'password'"
          class="w-full mt-1 px-4 py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          placeholder="Password"
        />
        <div
          class="absolute top-[18px] right-[13px] cursor-pointer"
          @click="togglePasswordVisibility('new')"
        >
          <span v-if="isNewPasswordVisible">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="black"
              />
              <path
                d="M23.0091 11.1844C21.7687 9.26625 20.1595 7.63688 18.3558 6.47203C16.3603 5.18203 14.1572 4.5 11.985 4.5C9.99187 4.5 8.03203 5.06953 6.15984 6.19266C4.25062 7.33781 2.52093 9.01078 1.01859 11.1647C0.84899 11.4081 0.755584 11.6965 0.750243 11.9931C0.744901 12.2897 0.827865 12.5813 0.988591 12.8306C2.22656 14.768 3.81984 16.3997 5.59547 17.5486C7.59468 18.8438 9.74625 19.5 11.985 19.5C14.1745 19.5 16.3823 18.8236 18.3694 17.5444C20.1722 16.3833 21.7781 14.7478 23.0137 12.8137C23.1689 12.5702 23.251 12.2872 23.2502 11.9984C23.2493 11.7096 23.1656 11.4271 23.0091 11.1844ZM12.0009 16.5C11.1109 16.5 10.2409 16.2361 9.50087 15.7416C8.76085 15.2471 8.18407 14.5443 7.84348 13.7221C7.50288 12.8998 7.41377 11.995 7.5874 11.1221C7.76103 10.2492 8.18962 9.44736 8.81895 8.81802C9.44829 8.18868 10.2501 7.7601 11.123 7.58647C11.9959 7.41283 12.9007 7.50195 13.723 7.84254C14.5453 8.18314 15.2481 8.75991 15.7425 9.49993C16.237 10.24 16.5009 11.11 16.5009 12C16.4996 13.1931 16.025 14.3369 15.1814 15.1805C14.3378 16.0241 13.194 16.4986 12.0009 16.5Z"
                fill="black"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9841 6.17383C8.33067 6.17383 4.58301 8.28836 1.6327 12.5174C1.54849 12.6395 1.50234 12.7837 1.50009 12.932C1.49783 13.0802 1.53958 13.2258 1.62004 13.3504C3.88692 16.8988 7.58442 19.6738 11.9841 19.6738C16.336 19.6738 20.1094 16.8904 22.3805 13.334C22.4591 13.2119 22.5009 13.0697 22.5009 12.9245C22.5009 12.7793 22.4591 12.6372 22.3805 12.5151C20.1043 8.99945 16.3032 6.17383 11.9841 6.17383Z"
                stroke="#C3C3C3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.6738C14.0711 16.6738 15.75 14.9949 15.75 12.9238C15.75 10.8528 14.0711 9.17383 12 9.17383C9.92893 9.17383 8.25 10.8528 8.25 12.9238C8.25 14.9949 9.92893 16.6738 12 16.6738Z"
                stroke="#C3C3C3"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </span>
        </div>
      </div>

      <p
        class="text-[8px] md:text-[12px] text-[#121212] mb-4 font-Montserrat-Medium mt-[-10px]"
      >
        Minimum 8 characters with at least one uppercase, one lowercase, one
        special character and a number
      </p>

      <div
        class="flex items-center gap-2 mb-1 text-[12px] md:text-[14px] lg:text-[16px] md:font-bold lg:font-normal text-[#121212] py-2"
      >
        <input
          class="styled-checkbox"
          id="terms"
          type="checkbox"
          value="value1"
        />
        <label for="terms" class="flex">
          <span class="block mt-[-4px]" style="width: calc(100% - 25px)">
            By clicking 'Log In' you agree to our website
            <NuxtLink to="/terms" class="text-black underline"
              >Terms & Conditions</NuxtLink
            >,
            <NuxtLink to="/privacy-policy" class="text-black underline"
              >Privacy Notice</NuxtLink
            >
            and
            <NuxtLink to="/terms" class="text-black underline"
              >Terms & Conditions</NuxtLink
            >.
          </span>
        </label>
      </div>
      <div
        class="flex items-center gap-2 mb-6 text-[12px] md:text-[14px] lg:text-[16px] md:font-bold lg:font-normal text-[#121212] py-2"
      >
        <!-- <input type="checkbox" v-model="keepLoggedIn" id="keepLoggedIn"> -->
        <input
          class="styled-checkbox"
          id="keepLoggedIn"
          type="checkbox"
          value="value1"
        />
        <label for="keepLoggedIn"
          >Keep me logged in - applies to all log in options below.
          <NuxtLink to="/more-info" class="text-black underline"
            >More info</NuxtLink
          >
        </label>
      </div>

      <button
        class="w-full p-3 px-5 bg-black hover:bg-[#8D54FF] text-white rounded-lg text-[12px] md:text-base cursor-pointer flex items-center justify-between gap-2"
      >
        Register
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
    </div>

    <div
      class="lg:max-w-[640px] w-full p-6 mx-auto order-1 lg:order-2 md:mb-[4rem]"
    >
      <!-- Image will be handled via background image -->
      <img
        src="/Images/auth/register.png"
        alt="register"
        class="w-full lg:h-auto md:h-[478px] h-[308px] object-cover rounded-[20px]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNewPasswordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility(field) {
      if (field === "new") {
        this.isNewPasswordVisible = !this.isNewPasswordVisible;
      }
    },
  },
};
</script>

<style scoped>
.styled-checkbox {
  position: absolute;
  opacity: 0;
}
.styled-checkbox + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}
.styled-checkbox + label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #000000;
}

.styled-checkbox:checked + label:before {
  background: #000000;
}

.styled-checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 10px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
