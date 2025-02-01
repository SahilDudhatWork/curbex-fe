<template>
    <div class="container mx-auto flex flex-wrap py-0 md:py-[3rem] lg:py-[10rem]">
      <div class="flex-1 lg:max-w-[580px] px-6 mx-auto bg-white order-2 lg:order-1">
        <h1 class="mb-2 text-[24px] md:text-[25px] text-[#121212] font-Montserrat-Medium font-bold pb-[2px]">Set new password</h1>
        <div class="mb-3 relative">
            <input :type="isPasswordVisible ? 'text' : 'password'" v-model="formData.password" placeholder="New Password" :class="{ 'border-[red]': errors?.password }" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"/>
            <span v-if="errors?.password" class="text-[red] text-[12px] pl-[3px]">{{errors?.password}}</span>
            <button @click="isPasswordVisible = !isPasswordVisible" class="absolute right-3 top-[11px] md:top-[21px] bg-transparent border-none cursor-pointer w-[17px] h-[17px] md:w-[24px] md:h-[24px]" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block w-full">
                    <path d="M11.9841 5.25C8.33067 5.25 4.58301 7.36453 1.6327 11.5936C1.54849 11.7156 1.50234 11.8599 1.50009 12.0082C1.49783 12.1564 1.53958 12.302 1.62004 12.4266C3.88692 15.975 7.58442 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1043 8.07562 16.3032 5.25 11.9841 5.25Z" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#C3C3C3" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </button>
        </div>        
        <div class="mb-3 relative">
            <input :type="isPasswordVisible ? 'text' : 'password'" v-model="formData.password" placeholder="Confirm New Password" :class="{ 'border-[red]': errors?.password }" class="text-[12px] md:text-[16px] w-full md:mt-2 px-4 py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"/>
            <span v-if="errors?.password" class="text-[red] text-[12px] pl-[3px]">{{errors?.password}}</span>
            <button @click="isPasswordVisible = !isPasswordVisible" class="absolute right-3 top-[11px] md:top-[21px] bg-transparent border-none cursor-pointer w-[17px] h-[17px] md:w-[24px] md:h-[24px]" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="block w-full">
                    <path d="M11.9841 5.25C8.33067 5.25 4.58301 7.36453 1.6327 11.5936C1.54849 11.7156 1.50234 11.8599 1.50009 12.0082C1.49783 12.1564 1.53958 12.302 1.62004 12.4266C3.88692 15.975 7.58442 18.75 11.9841 18.75C16.336 18.75 20.1094 15.9666 22.3805 12.4102C22.4591 12.2881 22.5009 12.1459 22.5009 12.0007C22.5009 11.8555 22.4591 11.7134 22.3805 11.5912C20.1043 8.07562 16.3032 5.25 11.9841 5.25Z" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#C3C3C3" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </button>
            <p class="text-black mb-4 text-[12px] md:text-[12px] text-[#121212] font-Montserrat-Medium">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>
        </div>
        <button class="mb-[2rem] w-full p-3 px-5 bg-black hover:bg-[#8D54FF] text-white rounded-lg text-[12px] md:text-base cursor-pointer flex items-center justify-between gap-2">
            Reset Password 
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.875 4.20703L13.375 8.70703L8.875 13.207M12.75 8.70703H3.625" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="lg:max-w-[580px] w-[90%] md:w-full p-6 mx-auto order-1 lg:order-2 mb-[2rem] lg:h-[257px] md:h-[402px] h-[167px] rounded-[20px] bg-cover bg-no-repeat bg-[0%_70%]" style="background-image:url('/Images/auth/new-password.png');"></div>
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
  