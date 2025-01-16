<template>
    <div class="container mx-auto flex flex-wrap min-h-screen py-0 md:py-[3rem] lg:py-[5rem] pb-[3rem]">
      <div class="flex-1 lg:max-w-[640px] p-6 mx-auto lg:p-10 pt-0 bg-white order-2 lg:order-1 lg:pt-[1.5rem] ">
        <h1 class="mb-3 text-[24px] md:text-[25px] text-[#121212] font-Montserrat-Medium font-bold pb-[2px]">Complete your profile</h1>
      
        <h1 class="text-[16px] mb-3 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Your Name</h1>
        <div class="mb-4">
          <input type="text" v-model="name" placeholder="First Name" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
  
        <div class="mb-4 relative">
          <input type="text" v-model="password" placeholder="Last Name"class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
        <h1 class="text-[16px] mb-3 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Business Name</h1>
        <div class="mb-4">
          <input type="text" v-model="businessName" placeholder="Business Name"class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
        <h1 class="text-[16px] mb-3 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Business Address</h1>
        <div class="mb-4">
          <input type="text" v-model="businessAddress" placeholder="Address Line 1"class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
        <div class="mb-4">
          <input type="text" v-model="businessAddress2" placeholder="Address Line 2"class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
        <div class="flex flex-wrap justify-between">
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input type="text" v-model="businessCity" placeholder="City" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
            </div>
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input type="text" v-model="businessPostalCode" placeholder="Postal Code" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
            </div>
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input type="text" v-model="businessProvince" placeholder="Province" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
            </div>
        </div>
        <div class="flex items-center gap-2 text-[16px] text-[#121212] py-2">
          <input class="styled-checkbox" id="preferredAddress" type="checkbox" value="value1">
          <label for="preferredAddress">Make this my preferred address</label>
        </div>
        <div class="flex items-center gap-2 mb-6 text-[16px] text-[#121212] py-2">
          <input class="styled-checkbox" id="saveAddress" type="checkbox" value="value1">
          <label for="saveAddress">Save this address to my profile</label>
        </div>
        
        <h1 class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Contact information</h1>
        
        <div class="mb-4">
          <input type="Email" v-model="email" placeholder="Email" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>
        <div class="mb-6 pb-1">
          <input type="text" v-model="phoneNumber" placeholder="Phone Number" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
        </div>

        <h1 class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Password</h1>
        <div class="mb-4 relative">
          <input type="password" class="w-full mt-1 px-4 py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]" placeholder="Password"/>
          <div class="absolute top-[18px] right-[13px] cursor-pointer">
            <span v-if="isNewPasswordVisible">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="black"/>
                <path d="M23.0091 11.1844C21.7687 9.26625 20.1595 7.63688 18.3558 6.47203C16.3603 5.18203 14.1572 4.5 11.985 4.5C9.99187 4.5 8.03203 5.06953 6.15984 6.19266C4.25062 7.33781 2.52093 9.01078 1.01859 11.1647C0.84899 11.4081 0.755584 11.6965 0.750243 11.9931C0.744901 12.2897 0.827865 12.5813 0.988591 12.8306C2.22656 14.768 3.81984 16.3997 5.59547 17.5486C7.59468 18.8438 9.74625 19.5 11.985 19.5C14.1745 19.5 16.3823 18.8236 18.3694 17.5444C20.1722 16.3833 21.7781 14.7478 23.0137 12.8137C23.1689 12.5702 23.251 12.2872 23.2502 11.9984C23.2493 11.7096 23.1656 11.4271 23.0091 11.1844ZM12.0009 16.5C11.1109 16.5 10.2409 16.2361 9.50087 15.7416C8.76085 15.2471 8.18407 14.5443 7.84348 13.7221C7.50288 12.8998 7.41377 11.995 7.5874 11.1221C7.76103 10.2492 8.18962 9.44736 8.81895 8.81802C9.44829 8.18868 10.2501 7.7601 11.123 7.58647C11.9959 7.41283 12.9007 7.50195 13.723 7.84254C14.5453 8.18314 15.2481 8.75991 15.7425 9.49993C16.237 10.24 16.5009 11.11 16.5009 12C16.4996 13.1931 16.025 14.3369 15.1814 15.1805C14.3378 16.0241 13.194 16.4986 12.0009 16.5Z" fill="black"/>
              </svg>
            </span>
            <span v-else>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9841 6.17383C8.33067 6.17383 4.58301 8.28836 1.6327 12.5174C1.54849 12.6395 1.50234 12.7837 1.50009 12.932C1.49783 13.0802 1.53958 13.2258 1.62004 13.3504C3.88692 16.8988 7.58442 19.6738 11.9841 19.6738C16.336 19.6738 20.1094 16.8904 22.3805 13.334C22.4591 13.2119 22.5009 13.0697 22.5009 12.9245C22.5009 12.7793 22.4591 12.6372 22.3805 12.5151C20.1043 8.99945 16.3032 6.17383 11.9841 6.17383Z" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16.6738C14.0711 16.6738 15.75 14.9949 15.75 12.9238C15.75 10.8528 14.0711 9.17383 12 9.17383C9.92893 9.17383 8.25 10.8528 8.25 12.9238C8.25 14.9949 9.92893 16.6738 12 16.6738Z" stroke="#C3C3C3" stroke-width="1.5" stroke-miterlimit="10"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="mb-4 relative">
          <input type="password" class="w-full mt-1 px-4 py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]" placeholder="Confirm Password"/>
          <div class="absolute top-[18px] right-[13px] cursor-pointer">
            <span v-if="isNewPasswordVisible">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="black"/>
                <path d="M23.0091 11.1844C21.7687 9.26625 20.1595 7.63688 18.3558 6.47203C16.3603 5.18203 14.1572 4.5 11.985 4.5C9.99187 4.5 8.03203 5.06953 6.15984 6.19266C4.25062 7.33781 2.52093 9.01078 1.01859 11.1647C0.84899 11.4081 0.755584 11.6965 0.750243 11.9931C0.744901 12.2897 0.827865 12.5813 0.988591 12.8306C2.22656 14.768 3.81984 16.3997 5.59547 17.5486C7.59468 18.8438 9.74625 19.5 11.985 19.5C14.1745 19.5 16.3823 18.8236 18.3694 17.5444C20.1722 16.3833 21.7781 14.7478 23.0137 12.8137C23.1689 12.5702 23.251 12.2872 23.2502 11.9984C23.2493 11.7096 23.1656 11.4271 23.0091 11.1844ZM12.0009 16.5C11.1109 16.5 10.2409 16.2361 9.50087 15.7416C8.76085 15.2471 8.18407 14.5443 7.84348 13.7221C7.50288 12.8998 7.41377 11.995 7.5874 11.1221C7.76103 10.2492 8.18962 9.44736 8.81895 8.81802C9.44829 8.18868 10.2501 7.7601 11.123 7.58647C11.9959 7.41283 12.9007 7.50195 13.723 7.84254C14.5453 8.18314 15.2481 8.75991 15.7425 9.49993C16.237 10.24 16.5009 11.11 16.5009 12C16.4996 13.1931 16.025 14.3369 15.1814 15.1805C14.3378 16.0241 13.194 16.4986 12.0009 16.5Z" fill="black"/>
              </svg>
            </span>
            <span v-else>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9841 6.17383C8.33067 6.17383 4.58301 8.28836 1.6327 12.5174C1.54849 12.6395 1.50234 12.7837 1.50009 12.932C1.49783 13.0802 1.53958 13.2258 1.62004 13.3504C3.88692 16.8988 7.58442 19.6738 11.9841 19.6738C16.336 19.6738 20.1094 16.8904 22.3805 13.334C22.4591 13.2119 22.5009 13.0697 22.5009 12.9245C22.5009 12.7793 22.4591 12.6372 22.3805 12.5151C20.1043 8.99945 16.3032 6.17383 11.9841 6.17383Z" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16.6738C14.0711 16.6738 15.75 14.9949 15.75 12.9238C15.75 10.8528 14.0711 9.17383 12 9.17383C9.92893 9.17383 8.25 10.8528 8.25 12.9238C8.25 14.9949 9.92893 16.6738 12 16.6738Z" stroke="#C3C3C3" stroke-width="1.5" stroke-miterlimit="10"/>
              </svg>
            </span>
          </div>
        </div>
  
        <div class="flex items-center gap-2 mb-6 text-[12px] md:text-[14px] lg:text-[16px] md:font-bold lg:font-normal text-[#121212] py-">
          <input class="styled-checkbox" id="terms" type="checkbox" value="value1">
          <label for="terms" class="flex">
            <span class="block mt-[-4px]" style="width: calc(100% - 25px);">
              By clicking 'Log In' you agree to our website 
              <NuxtLink to="/terms" class="text-black underline">Terms & Conditions</NuxtLink>,
              <NuxtLink to="/privacy" class="text-black underline">Privacy Notice</NuxtLink> and
              <NuxtLink to="/terms" class="text-black underline">Terms & Conditions</NuxtLink>.
            </span>
          </label>
        </div>
  
        <button @click="handleLogin" class="w-full p-3 px-5 bg-black hover:bg-[#8D54FF] text-white rounded-lg text-base cursor-pointer flex items-center justify-between gap-2">
            Register
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.875 4.20703L13.375 8.70703L8.875 13.207M12.75 8.70703H3.625" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
  
        
      </div>
  
      <div class="lg:max-w-[640px] w-full p-6 mx-auto order-1 lg:order-2 md:mb-[1rem]">
        <!-- Image will be handled via background image -->
         <img src="/Images/auth/account-details.png" alt="register" class="w-full lg:h-[100%] md:h-[478px] h-[308px] object-cover rounded-[20px]">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const businessName = ref('')
  const businessAddress = ref('')
  const email = ref('')
  const password = ref('')
  const terms = ref('')
  const saveAddress = ref('')
  const preferredAddress = ref('')
  const businessProvince = ref('')
  const businessCity = ref('')
  const businessPostalCode = ref('')
  const businessAddress2 = ref('')
  const phoneNumber = ref('')
  
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login attempted', { email: email.value, password: password.value })
  }
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
    content: '';
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
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
 
</style>