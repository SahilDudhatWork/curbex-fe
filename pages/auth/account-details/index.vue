<template>
    <div class="container mx-auto flex flex-wrap min-h-screen py-0 md:py-[3rem] lg:py-[5rem] pb-[3rem]">
      <div class="flex-1 lg:max-w-[640px] p-6 mx-auto lg:p-10 pt-0 bg-white order-2 lg:order-1 ">
        <h1 class="mb-2 text-[24px] md:text-[25px] text-[#121212] font-Montserrat-Medium font-bold pb-[2px]">Complete your profile</h1>
      
        <h1 class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Your Name</h1>
        <div class="mb-4">
          <input 
            type="text" 
            v-model="name" 
            placeholder="First Name"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
  
        <div class="mb-4 relative">
          <input 
            type="text" 
            v-model="password" 
            placeholder="Password"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
        <h1 class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Business Name</h1>
        <div class="mb-4">
          <input 
            type="text" 
            v-model="businessName" 
            placeholder="Business Name"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
        <h1 class="text-[16px] mb-2 md:text-[20px] text-[#121212] font-Montserrat-Medium md:font-bold pb-[2px]">Business Address</h1>
        <div class="mb-4">
          <input 
            type="text" 
            v-model="businessAddress" 
            placeholder="Address Line 1"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
        <div class="mb-4">
          <input 
            type="text" 
            v-model="businessAddress2" 
            placeholder="Address Line 2"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
        <div class="flex flex-wrap justify-between">
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input 
                    type="text" 
                    v-model="businessCity" 
                    placeholder="City"
                    class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                >
            </div>
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input 
                    type="text" 
                    v-model="businessPostalCode" 
                    placeholder="Postal Code"
                    class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                >
            </div>
            <div class="mb-4 w-[48%] md:w-[32%] lg:w-[48%] w-full">
                <input 
                    type="text" 
                    v-model="businessProvince" 
                    placeholder="Province"
                    class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                >
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
          <input 
            type="Email" 
            v-model="email" 
            placeholder="Email"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
        </div>
        <div class="mb-6">
          <input 
            type="text" 
            v-model="phoneNumber" 
            placeholder="Phone Number"
            class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
          >
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
  
        <button @click="handleLogin" class="w-full p-3 px-5 bg-black text-white rounded-lg text-base cursor-pointer flex items-center justify-between gap-2">
            Register
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.875 4.20703L13.375 8.70703L8.875 13.207M12.75 8.70703H3.625" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
  
        
      </div>
  
      <div class="lg:max-w-[640px] w-full p-6 mx-auto order-1 lg:order-2 md:mb-[4rem]">
        <!-- Image will be handled via background image -->
         <img src="/Images/auth/account-details.png" alt="register" class="w-full lg:h-auto md:h-[478px] h-[308px] object-cover rounded-[20px]">
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