<template>
    <div class="container mx-auto flex flex-wrap py-0 md:py-[3rem] lg:py-[10rem]">
      <div class="flex-1 lg:max-w-[580px] px-6 mx-auto bg-white order-2 lg:order-1">
        <h1 class="mb-2 text-[24px] md:text-[25px] text-[#121212] font-Montserrat-Medium font-bold pb-[2px]">Forget Password? </h1>
        <p class="inline-block text-black mb-6 text-[12px] md:text-[16px] text-[#121212] font-Montserrat-Medium">No worries, we send you the reset instructions</p>  
        <div class="mb-4">
          <input type="email" v-model="formData.email" placeholder="Enter you email address" :class="{ 'border-[red]': errors?.email }" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"/>
          <span v-if="errors?.email" class="text-[red] text-[12px] pl-[3px]">{{errors?.email}}</span>
        </div>        
        <button class="mb-[2rem] w-full p-3 px-5 bg-black hover:bg-[#8D54FF] text-white rounded-lg text-[12px] md:text-base cursor-pointer flex items-center justify-between gap-2">
            Reset Password 
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.875 4.20703L13.375 8.70703L8.875 13.207M12.75 8.70703H3.625" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>   
        <NuxtLink to="/auth/login" class="underline flex items-center text-black mb-4 text-[12px] md:text-[16px] text-[#121212] font-Montserrat-Medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8L12.875 8" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8L12.875 8" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8L12.875 8" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8L12.875 8" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8L12.875 8" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="pl-2">Back to login</span>
        </NuxtLink>         
      </div>
  
      <div class="lg:max-w-[580px] w-[90%] md:w-full p-6 mx-auto order-1 lg:order-2 mb-[2rem] lg:h-[243px] md:h-[402px] h-[167px] rounded-[20px] bg-cover bg-no-repeat bg-[0%_70%]" style="background-image:url('/Images/auth/ForgotPassword.png');">
        <!-- <img src="/Images/auth/ForgotPassword.png" alt="login" class="w-full object-cover lg:h-[243px] md:h-[402px] h-[167px] rounded-[20px]"/> -->
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        formData: {
          email: "",
        },
        errors: {},
      };
    },
    methods: {
      ...mapActions({
        userLogin: "auth/userLogin",
      }),
    },
  };
  </script>
  