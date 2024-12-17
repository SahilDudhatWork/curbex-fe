<template>
    <div>
      <Carousel :autoplay="true"
      :autoplayTimeout="3000"
      loop
      :nav="false"
      :dots="false"
      :perPageCustom="perPageCustom">
        <Slide class="relative m-2">
          <NuxtLink to="/product-view" class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </NuxtLink>
        </Slide>   
        <Slide class="relative m-2">
          <div class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </div>
        </Slide> 
        <Slide class="relative m-2">
          <div class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </div>
        </Slide> 
        <Slide class="relative m-2">
          <div class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </div>
        </Slide> 
        <Slide class="relative m-2">
          <div class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </div>
        </Slide> 
        <Slide class="relative m-2">
          <div class="item transition-all duration-300 rent-produt">
            <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
              <img src="/Images/Product/product.png" alt="" class="rounded-t-[10px] first-image">
              <img src="/Images/Product/product-1.png" alt="" class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300">
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
              <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]">Add To Cart</button>
            </div>
          </div>
        </Slide>     
      </Carousel>
    </div>
</template>

<script>
export default {
  data() {
    return {
      perPageCustom: [
        [320, 2], // Show 1 slide if width >= 320px
        [768, 3], // Show 3 slides if width >= 768px
        [1024, 5], // Show 5 slides if width >= 1024px
      ],
    };
  }
};
</script>