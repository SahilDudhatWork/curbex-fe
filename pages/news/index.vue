<template>
    <div>
      <div class="container mx-auto my-[20px] mb-[5rem] px-6 lg:px-0 ">
        <img src="/Images/news/news-banner.png" alt="news-banner" class="w-full min-h-[220px] h-full object-cover rounded-[20px]">
      </div>     
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-6 px-6 lg:px-0">
        <div v-for="(image, index) in images" :key="index" class="item transition-all duration-300 rent-produt">
          <div class="rounded-t-[10px] relative">
            <img :src="image" alt="" class="rounded-t-[11px] lg:rounded-t-[20px] first-image w-full">
          </div>
          <div class="bg-[#FFFFFF] rounded-b-[11px] lg:rounded-b-[20px] p-2 md:p-2 lg:p-5 border-2 border-[#F7F5F7]">
            <p class="text-[10px] lg:text-[16px] text-[#3B3B3B] font-Montserrat-Medium pb-[15px] lg:leading-[19px]">Behind the Scenes: A Day in the Life of a Curbex Advertising Specialist</p>
            <div class="flex items-center justify-between text-[#949494] pt-[0.5rem] lg:pt-[1rem]">
              <p class="flex items-center gap-2 text-[7px] lg:text-[12px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.90178 0.614989C11.7605 0.614989 14.8868 3.74136 14.8868 7.60003C14.8868 11.4587 11.7605 14.5851 7.90178 14.5851C4.0431 14.5851 0.91673 11.4587 0.91673 7.60003C0.91673 3.74136 4.0431 0.614989 7.90178 0.614989ZM10.493 9.43079C10.5493 9.37446 10.6057 9.2618 10.6057 9.14914C10.6057 9.00831 10.5212 8.89565 10.4367 8.81115L8.80307 7.60003V3.5442C8.80307 3.31888 8.57775 3.09355 8.35242 3.09355H7.45113C7.19764 3.09355 7.00048 3.31888 7.00048 3.5442V7.93802C7.00048 8.30417 7.14131 8.61399 7.42296 8.81115L9.31005 10.2194C9.36638 10.2758 9.47904 10.3321 9.56354 10.3321C9.73253 10.3321 9.8452 10.2476 9.92969 10.1349L10.493 9.43079Z" fill="#949494"/>
                </svg>
                5-7 minutes read
              </p>
              <p class="text-[7px] lg:text-[12px]">12 July 2024</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Add pagination section -->
      <div class="container mx-auto flex items-center justify-center gap-2 my-8 text-[10px] lg:text-[14px] font-Montserrat-Medium pb-[5rem] pt-[2rem]">
        <button class="px-4 py-2 text-[#121212] ">Previews</button>        
        <div class="flex items-center gap-2">
          <button class="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-md bg-[#FFA900] text-[#121212] ">1</button>
          <button class="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">2</button>
          <button class="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">3</button>
          <button class="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-md hover:bg-gray-100 border border-[#F3F3F3] text-[#121212] ">4</button>
        </div>  
        <button class="px-4 py-2 text-[#121212] ">Next</button>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        images: [
          '/Images/news/news-1.png',
          '/Images/news/news-2.png',
          '/Images/news/news-3.png',
          '/Images/news/news-4.png',
          '/Images/news/news-1.png',
          '/Images/news/news-2.png',
          '/Images/news/news-3.png',
          '/Images/news/news-4.png',
          '/Images/news/news-1.png',
          '/Images/news/news-2.png',
          '/Images/news/news-3.png',
          '/Images/news/news-4.png',
          '/Images/news/news-1.png',
          '/Images/news/news-2.png',
          '/Images/news/news-3.png',
          '/Images/news/news-4.png',
          // Add more images as needed
        ]
      };
    }
  };
</script>
  