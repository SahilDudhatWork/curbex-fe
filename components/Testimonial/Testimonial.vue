<template>
    <Carousel  
      :nav="false"
      :dots="false"
      :perPageCustom="perPageCustom"
      class="py-[15px]"
    >
        <Slide v-for="(item, index) in testiminoalSlider"
        :key="index"
        class="relative">
          <div class="item relative p-[9px] md:pl-[20px] h-[100%]">
            <div class="group block relative p-[5px_12px_23px] md:p-[20px_15px] bg-[#FCFCFC] border-[2px] border-[#F3F3F3] hover:border-[#8D54FF] rounded-[59px_25px_1px_25px] h-[100%]">
              <div class="block bg-[#8D54FF] w-[128px] h-[128px] absolute rounded-[64px_8px_8px_8px] left-[-7px] md:left-[-9px] top-[-7px] md:top-[-9px] z-[-1]"></div>
              <div class="w-full h-[70px] mb-[-10px] md:h-[100px] bg-contain bg-no-repeat grayscale group-hover:grayscale-[0]"          :style="{ backgroundImage: `url(${item.image})` }"
              ></div>
              <div class="text pl-2 md:pl-4 ">
                  <p class="text-[15px] md:text-[20px] font-Montserrat-Medium font-bold py-[5px] text-[#121212]">{{item.title}}</p>
                  <span class="text-[#949494] group-hover:text-[#8D54FF] text-[12px] md:text-[16px] pb-[5px] block max-w-[360px]">{{item.shortTitle}}</span>
                  <p class="text-[10px] lg:text-[14px] md:text-[13px] tracking-[0px] leading-[12px] md:leading-[17px] max-w-[380px] lg:pb-[10px]">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </Slide> 
    </Carousel>
</template>
<script>
export default {
  props:{
    testiminoalSlider:{
      type: Array,
      default: () => [],      
    }
  },
  data() {
    return {
      perPageCustom: [
        [320, 1.5], // Show 1 slide if width >= 320px
        [768, 1.7], // Show 3 slides if width >= 768px
        [1024, 3], // Show 5 slides if width >= 1024px
      ],
    };
  }
};
</script>