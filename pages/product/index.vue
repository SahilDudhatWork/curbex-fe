<template>
  <div>
    <div class="container mx-auto my-[20px] pt-[1rem]">
        <img src="/Images/Product/product-banner.png" alt="product-banner" class="w-full h-full">
    </div>
    <div class="container mx-auto pt-[20px]">
      <!-- Filter Section -->
      <div class="flex items-center gap-4 mb-6">
        <!-- Product Type Filter -->
        <div class="relative">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#F3F3F3] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            Product type
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Price Filter -->
        <div class="relative">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#F3F3F3] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            Price
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Review Filter -->
        <div class="relative">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#F3F3F3] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            Review
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Location Filter -->
        <div class="relative">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#F3F3F3] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            Location
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Offer Filter -->
        <div class="relative">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#F3F3F3] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            Offer
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- For Purchase Button -->
        <div class="ml-auto">
          <button class="flex items-center gap-2 px-4 py-3 bg-[#FFA900] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200">
            For Purchase
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <NuxtLink  v-for="index in 20" :key="index" to="/product-view" class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
                <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
                <img src="/Images/Product/product-1.png" alt="" class="border-2 border-[#F3F3F3] rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
                <span class="border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[40px] h-[40px] block absolute top-[10px] right-[10px] rounded-full flex justify-center items-center pointer">
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7707 2.425C16.3507 2.00481 15.8521 1.67149 15.3032 1.44407C14.7544 1.21666 14.1661 1.09961 13.572 1.09961C12.9779 1.09961 12.3897 1.21666 11.8408 1.44407C11.292 1.67149 10.7933 2.00481 10.3733 2.425L9.50169 3.29663L8.63006 2.425C7.78171 1.57665 6.6311 1.10005 5.43135 1.10005C4.2316 1.10005 3.08099 1.57665 2.23263 2.425C1.38428 3.27335 0.907684 4.42396 0.907684 5.62371C0.907684 6.82346 1.38428 7.97407 2.23263 8.82242L3.10426 9.69405L9.50169 16.0915L15.8991 9.69405L16.7707 8.82242C17.1909 8.40243 17.5242 7.90377 17.7517 7.35492C17.9791 6.80608 18.0961 6.2178 18.0961 5.62371C18.0961 5.02962 17.9791 4.44134 17.7517 3.8925C17.5242 3.34365 17.1909 2.84499 16.7707 2.425V2.425Z" stroke="#C3C3C3" stroke-width="1.21817" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="bg-[#F3F3F3] rounded-b-[10px] p-2 md:p-5">
                <div class="flex items-start justify-between pb-[5px]">
                    <p class="text-[14px] text-[#121212] font-semibold">Mini B</p>
                    <p class="text-[14px] text-[#121212] font-semibold">$209</p>
                </div>
                <p class="text-[#C3C3C3] text-[10px] description hidden md:block">The billboard that's always out front</p>
                <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[12px] w-full mt-3 text-center p-2 font-semibold">Add To Cart</button>
            </div>
        </NuxtLink>  
        <div class="">

        </div>  
    </div>
    <!-- Add pagination section -->
    <div class="container mx-auto flex items-center justify-center gap-2 my-8 text-[14px] font-Montserrat-Medium pb-[5rem] pt-[2rem]">
      <button class="px-4 py-2 text-[#121212] ">Previews</button>
      
      <div class="flex items-center gap-2">
        <button class="w-[40px] h-[40px] rounded-md bg-[#FFA900] text-[#121212] ">1</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">2</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">3</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">4</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">5</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">6</button>
        <button class="w-[40px] h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">7</button>
      </div>

      <button class="px-4 py-2 text-[#121212] ">Next</button>
    </div>
  </div>
</template>
