<template>
  <div class="mx-auto container px-10 md:px-0 md:max-w-[597px] lg:max-w-5xl py-[4rem]">
    <h1 class="text-[20px] md;text-[25px] font-bold mb-4 text-[#121212]">Notifications</h1>
    <div class="md:space-y-4">
      <div class="flex items-center md:items-start py-4 px-0 pr-3 md:p-4 bg-white border-b border-[#E0E0E0]">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#8D54FF"/>
              <path d="M22.2 30.95H29.1M29.1 30.95V18.3C29.1 17.69 28.8577 17.105 28.4263 16.6737C27.995 16.2423 27.41 16 26.8 16H15.3C14.69 16 14.105 16.2423 13.6737 16.6737C13.2423 17.105 13 17.69 13 18.3V29.8C13 30.105 13.1212 30.3975 13.3368 30.6132C13.5525 30.8288 13.845 30.95 14.15 30.95H15.3M29.1 30.95V20.6H31.4C32.62 20.6 33.79 21.0846 34.6527 21.9473C35.5154 22.81 36 23.98 36 25.2V29.8C36 30.105 35.8788 30.3975 35.6632 30.6132C35.4475 30.8288 35.155 30.95 34.85 30.95M29.1 30.95H34.85M34.85 30.95C34.85 31.865 34.4865 32.7425 33.8395 33.3895C33.1925 34.0365 32.315 34.4 31.4 34.4C30.485 34.4 29.6075 34.0365 28.9605 33.3895C28.3135 32.7425 27.95 31.865 27.95 30.95H34.85ZM36 27.5H33.7" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 34.4C20.6554 34.4 22.2 32.8554 22.2 30.95C22.2 29.0446 20.6554 27.5 18.75 27.5C16.8447 27.5 15.3 29.0446 15.3 30.95C15.3 32.8554 16.8447 34.4 18.75 34.4Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="ml-4 flex-grow">
          <h2 class="font-bold font-Montserrat-Medium text-[14px] text-[#121212]">Order Shipped</h2>
          <p class="text-[14px] text-[#949494] py-[6px] hidden md:block">Your order is on the way from Barrie to Waterloo</p>
          <p class="text-[12px] text-[#949494]">March 1, 2023</p>
        </div>
        <button class="ml-auto text-[#949494] hover:text-black flex items-center">
          <span class="bg-[#FF364A] w-[9px] h-[9px] block rounded-[10px]"></span>
          <span class="block md:hidden">
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="hidden md:block">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.48438L12 12.4844" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      <div class="flex items-center md:items-start py-4 px-0 pr-3 md:p-4 bg-white border-b border-[#E0E0E0]">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#C3C3C3"/>
              <path d="M22.2 30.95H29.1M29.1 30.95V18.3C29.1 17.69 28.8577 17.105 28.4263 16.6737C27.995 16.2423 27.41 16 26.8 16H15.3C14.69 16 14.105 16.2423 13.6737 16.6737C13.2423 17.105 13 17.69 13 18.3V29.8C13 30.105 13.1212 30.3975 13.3368 30.6132C13.5525 30.8288 13.845 30.95 14.15 30.95H15.3M29.1 30.95V20.6H31.4C32.62 20.6 33.79 21.0846 34.6527 21.9473C35.5154 22.81 36 23.98 36 25.2V29.8C36 30.105 35.8788 30.3975 35.6632 30.6132C35.4475 30.8288 35.155 30.95 34.85 30.95M29.1 30.95H34.85M34.85 30.95C34.85 31.865 34.4865 32.7425 33.8395 33.3895C33.1925 34.0365 32.315 34.4 31.4 34.4C30.485 34.4 29.6075 34.0365 28.9605 33.3895C28.3135 32.7425 27.95 31.865 27.95 30.95H34.85ZM36 27.5H33.7" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 34.4C20.6554 34.4 22.2 32.8554 22.2 30.95C22.2 29.0446 20.6554 27.5 18.75 27.5C16.8447 27.5 15.3 29.0446 15.3 30.95C15.3 32.8554 16.8447 34.4 18.75 34.4Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="ml-4 flex-grow">
          <h2 class="font-bold font-Montserrat-Medium text-[14px] text-[#121212]">Order Shipped</h2>
          <p class="text-[14px] text-[#949494] py-[6px] hidden md:block">Your order is on the way from Barrie to Waterloo</p>
          <p class="text-[12px] text-[#949494]">March 1, 2023</p>
        </div>
        <button class="ml-auto text-[#949494] hover:text-black flex items-center">
          <span class="block md:hidden">
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="hidden md:block">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.48438L12 12.4844" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      <div class="flex items-center md:items-start py-4 px-0 pr-3 md:p-4 bg-white border-b border-[#E0E0E0]">
        <div class="flex-shrink-0">
          <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#C3C3C3"/>
              <path d="M22.2 30.95H29.1M29.1 30.95V18.3C29.1 17.69 28.8577 17.105 28.4263 16.6737C27.995 16.2423 27.41 16 26.8 16H15.3C14.69 16 14.105 16.2423 13.6737 16.6737C13.2423 17.105 13 17.69 13 18.3V29.8C13 30.105 13.1212 30.3975 13.3368 30.6132C13.5525 30.8288 13.845 30.95 14.15 30.95H15.3M29.1 30.95V20.6H31.4C32.62 20.6 33.79 21.0846 34.6527 21.9473C35.5154 22.81 36 23.98 36 25.2V29.8C36 30.105 35.8788 30.3975 35.6632 30.6132C35.4475 30.8288 35.155 30.95 34.85 30.95M29.1 30.95H34.85M34.85 30.95C34.85 31.865 34.4865 32.7425 33.8395 33.3895C33.1925 34.0365 32.315 34.4 31.4 34.4C30.485 34.4 29.6075 34.0365 28.9605 33.3895C28.3135 32.7425 27.95 31.865 27.95 30.95H34.85ZM36 27.5H33.7" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 34.4C20.6554 34.4 22.2 32.8554 22.2 30.95C22.2 29.0446 20.6554 27.5 18.75 27.5C16.8447 27.5 15.3 29.0446 15.3 30.95C15.3 32.8554 16.8447 34.4 18.75 34.4Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="ml-4 flex-grow">
          <h2 class="font-bold font-Montserrat-Medium text-[14px] text-[#121212]">Order Shipped</h2>
          <p class="text-[14px] text-[#949494] py-[6px] hidden md:block">Your order is on the way from Barrie to Waterloo</p>
          <p class="text-[12px] text-[#949494]">March 1, 2023</p>
        </div>
        <button class="ml-auto text-[#949494] hover:text-black flex items-center">
          <span class="block md:hidden">
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10.5 10.5L16 16L10.5 21.5" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="hidden md:block">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.48438L12 12.4844" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1.48438L12 12.4844" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 12.4844L12 1.48438" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
};
</script>

<style scoped>
/* Add any additional styles here */
</style>