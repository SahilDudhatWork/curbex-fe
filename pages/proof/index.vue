<template>
    <div>
        <div class="container px-6 mx-auto">
            <div class="border-b border-[#F5F5F5] mb-7 pb-3">
                <h2 class="text-[24px] font-[700] text-[#121212] pt-[3rem] pb-3 font-Montserrat-Bold">Mini B</h2>
                <p class="text-[16px] text-[#2C2C2E] bg-[#F5F5F5] w-fit p-[5px_10px] rounded-[33px] mb-3">Order Number : 1234567</p>
                <p class="text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3">Client Name : Ryan Reynolds</p>
                <p class="text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3">Address : 310 Bayfield</p>
                <p class="text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3">Rental Dates : 20.09.2024 - 20.09.2025 </p>
            </div>
        </div>
        <div class="container px-6 mx-auto">
            <div class="border-b border-[#F5F5F5] mb-7 pb-3">
                <div class="flex items-start justify-between">
                    <div class="w-[56%]">
                        <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">Signage description</p>
                        <p class="text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#FCFCFC] rounded-[20px] p-7">We’d like to order a mini B with the message “Upgrade Your Space – ABC Home Furnishings!” on a blue gradient background, featuring our logo and a living room image. Include a yellow call-to-action and external LED lighting. Installation on Downtown Main Street is needed by October 20, 2024, with 50% payment upfront.</p>
                    </div>
                    <div class="w-[42%]">
                        <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">Reference Images</p>
                        <Carousel :autoplay="false" :autoplayTimeout="3000" :loop="false" :nav="false" :dots="false" :perPageCustom="perPageCustom">
                            <Slide class="relative p-2">
                                <div class="item transition-all duration-300 rent-produt w-[176px] h-[166px]">
                                    <img src="/Images/Proof/s1.png" alt="" class="w-[176px] h-[166px] object-cover"/>
                                </div>
                            </Slide>
                            <Slide class="relative p-2">
                                <div class="item transition-all duration-300 rent-produt w-[176px] h-[166px]">
                                    <img src="/Images/Proof/s2.jpg" alt="" class="w-[176px] h-[166px] object-cover"/>
                                </div>
                            </Slide>
                            <Slide class="relative p-2">
                                <div class="item transition-all duration-300 rent-produt w-[176px] h-[166px]">
                                    <img src="/Images/Proof/s3.png" alt="" class="w-[176px] h-[166px] object-cover"/>
                                </div>
                            </Slide>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      perPageCustom: [
        // [320, 2], // Show 1 slide if width >= 320px
        // [768, 3], // Show 3 slides if width >= 768px
        // [1024, 2], // Show 5 slides if width >= 1024px
      ],
    };
  },
  methods: {
 
  },
};
</script>