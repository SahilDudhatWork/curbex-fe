<template>
  <div class="bg-[#FCFCFC]">
    <div
      class="container px-6 md:px-0 mx-auto rounded-[25px] overflow-hidden md:pt-[2.6rem]"
    >
      <Carousel
        :perPage="1"
        :autoplay="true"
        :autoplayTimeout="3000"
        loop
        :nav="false"
        :dots="false"
      >
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[80%_100%] md:bg-[74%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/1.png)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[80%_100%] md:bg-[74%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/2.png)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[80%_100%] md:bg-[74%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/4.png)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[94%_100%] md:bg-[99%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/5.png)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[80%_100%] md:bg-[74%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/6.png)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[80%_100%] md:bg-[74%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/7.webp)"
          ></div>
        </Slide>
        <Slide class="h-[439px] md:h-[483px]">
          <div
            class="h-[439px] md:h-[483px] w-full bg-no-repeat bg-[14%_100%] md:bg-[20%_180%] lg:bg-center bg-cover"
            style="background-image: url(/Images/8.webp)"
          ></div>
        </Slide>
      </Carousel>
    </div>
    <div class="hidden lg:block container px-6 md:px-0 mx-auto lg:text-center text-[24px] font-bold text-[#121212] h-[155px] overflow-hidden">
      <h2 class="font-Montserrat-Bold text-[30px] md:text-[61px] lg:text-[74px] capitalize py-[2rem] leading-[normal] relative h-[155px] flex items-center justify-center gap-[20px] ">
        <span class="your-span">your </span>
        <span class="brand-span">brand,</span>
        <span class="anytime-span">anytime, </span>
        <span class="anywhere-span">anywhere</span>
      </h2>
    </div>
    <div class="lg:hidden container px-6 md:px-0 mx-auto lg:text-center text-[24px] font-bold text-[#121212]">
      <h2 class="font-Montserrat-Bold text-[30px] md:text-[61px] lg:text-[74px] capitalize py-[2rem] leading-[normal]">
        your brand,
        <p class="lg:hidden"></p>
        anytime, anywhere
      </h2>
    </div>
    <div class="container medium-s-section mx-auto lg:border-[2px] lg:border-[#F3F3F3] rounded-[20px] lg:bg-[#FFFFFF]">
      <div class="lg:text-center text-[#121212] lg:bg-[#121212] rounded-[20px]">
        <h2 class="md:bg-[#121212] lg:bg-[#12121200] md:p-[20px] md:max-w-[768px] lg:max-w-full md:mx-auto px-6 md:rounded-[20px] text-[#121212] md:text-[#FFFFFF] leading-[normal] text-[17px] md:text-[27px] capitalize lg:py-[3rem] font-bold lg:font-normal lg:px-[2rem] ml-[10px]">
          <p class="md:inline bg-[#121212] md:bg-[#121212] text-[#FFFFFF] p-[18px_18px] rounded-[20px] mb-6 md:p-0 md:mb-0 ml-[-10px] md:ml-0">
            Curbside Express Advertising in your community.
          </p>
          Help us create your customer journey
        </h2>
      </div>
      <div
        class="px-6 md:p-[2.5rem_2rem_1rem] lg:p-[3rem] border-t border-b mt-[2rem] pt-[2rem] md:mt-[2.5rem] md:border-[2px] md:border-[#F3F3F3] md:bg-[#FFFFFF] lg:border-[0px] md:rounded-[20px]"
      >
        <div
          class="flex flex-wrap justify-between items-center md:max-w-[768px] lg:max-w-full mx-auto"
        >
          <NuxtLink
            to="/small-business-franchise"
            class="group w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/1.mp4"
              autoplay
              muted
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Small Business & Franchise 
            </div>
          </NuxtLink>
          <NuxtLink
            to="/government-non-profits"
            class="group w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/2.mp4"
              autoplay
              muted
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Government & Non-Profit
            </div>
          </NuxtLink>
          <NuxtLink
            to="/media-buyers-agencies"
            class="group w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/3.mp4"
              autoplay
              muted
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Media Buyers/ Agencies
            </div>
          </NuxtLink>
          <NuxtLink
            to="/commercial-property-owners"
            class="group w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/4.mp4"
              autoplay
              muted
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Commercial Property Owners
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="mt-10 md:mt-[2.5rem] lg:mt-[2.5rem] container mx-auto px-6 md:px-0"
    >
      <p
        class="font-Montserrat-Medium w-fit bg-[#121212] text-[#FFFFFF] text-[16px] md:text-[20px] rounded-full py-[6px] px-7 mb-[29px]"
      >
        For Rent
      </p>
      <CarouselSlider
        :data="
          rentalProductData && rentalProductData?.records
            ? rentalProductData?.records
            : []
        "
        type="rental"
      />
    </div>
    <div
      class="mt-10 md:mt-[2.5rem] lg:mt-[3rem] container mx-auto px-6 md:px-0"
    >
      <p
        class="font-Montserrat-Medium w-fit bg-[#121212] text-[#FFFFFF] text-[16px] md:text-[20px] rounded-full py-[6px] px-7 mb-[29px]"
      >
        For Purchase
      </p>
      <CarouselSlider
        :data="
          retailProductData && retailProductData?.records
            ? retailProductData?.records
            : []
        "
        type="retail"
      />
    </div>
    <div class="container px-6 md:px-0 mx-auto my-[3rem]">
      <div
        style="background-image: url(/Images/banner-1.png)"
        class="w-full min-h-[348px] md:min-h-[464px] bg-no-repeat bg-cover bg-[14%] rounded-[25px]"
      ></div>
      <!-- <img src="/Images/3.png" alt="" > -->
    </div>
    <div
      class="mt-6 md:mt-[2.5rem] lg:mt-[2.5rem] container mx-auto px-6 md:px-0"
    >
      <p
        class="font-Montserrat-Medium w-fit bg-[#121212] text-[#FFFFFF] text-[16px] md:text-[20px] rounded-full py-[6px] px-7 mb-[29px]"
      >
      Customer Experiences
      </p>
      <Testimonial :testiminoalSlider="testiminoalSlider" />
    </div>
    <div
      class="container mx-auto px-6 md:px-0 md:mt-[3rem] mb-[5rem] mt-[4rem] lg:mt-[4rem]"
    >
      <div
        style="background-image: url(/Images/banner-2.png)"
        class="w-full min-h-[348px] md:min-h-[464px] bg-no-repeat bg-[length:220%_100%] md:bg-cover bg-[0%] rounded-[25px]"
      >
        <img
          src="/Images/banner-2.png"
          alt=""
          class="w-full rounded-[25px] min-h-[348px] xs:min-h-auto bg-no-repeat bg-center hidden lg:block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fmi from "@/static/Images/Testimonial/fmi.png";
import Panera from "@/static/Images/Testimonial/Panera.png";
import Tim from "@/static/Images/Testimonial/Tim.png";
import Pizza from "@/static/Images/Testimonial/pizza.png";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      testiminoalSlider: [
        {
          id: 1,
          title: "Sydney Henderson",
          shortTitle: "Marketing Specialist at FMI Group",
          description:
            "The signage has been incredibly beneficial in bringing brand awareness, promoting our offers, and getting more local exposure. The design team is always quick to send along proofs, which makes the process even smoother. Curbex and the entire team have been wonderful to work with-10/10, would recommend!",
          image: fmi,
        },
        {
          id: 2,
          title: "Heather Greenly",
          shortTitle: "VP Marketing at Panera Bread",
          description:
            "The signage has been incredibly beneficial in bringing brand awareness, promoting our offers, and getting more local exposure. The design team is always quick to send along proofs, which makes the process even smoother. Curbex and the entire team have been wonderful to work with-10/10, would recommend!",
          image: Panera,
        },
        {
          id: 3,
          title: "Ashley Hum ",
          shortTitle: "Marketing Manager at Tim Hortons",
          description:
            "Managing signage for multiple locations can be challenging, but Curbex makes it easy. They handle every detail-including navigating the permit process-ensuring that our signs are installed on time and to code. We’ve seen a great response from customers at each location, and we appreciate how effortless Curbex makes the whole process.",
          image: Tim,
        },
        {
          id: 4,
          title: "AshElizabeth Janik",
          shortTitle: "Marketing Manager at Pizza Nova",
          description:
            "Working with Curbex Media has been fantastic for Pizza Nova. Their efficient team supports us with bookings, quotes, and creative changes. The signage has been great for promoting specials and driving more traffic to our locations. Curbex consistently exceeds our expectations, making them a reliable advertising partner.",
          image: Pizza,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      rentalProductData: "product/getRentalProductData",
      retailProductData: "product/getRetailProductData",
    }),
  },
  methods: {},
  async mounted() {},
};
</script>
<style scoped>
    @keyframes slideInOut {
    0% { transform: translateY(117px); opacity: 0; }
    20% { transform: translateY(0); opacity: 1; }
    80% { transform: translateY(0); opacity: 0; } /* Hold position */
    100% { transform: translateY(117px); opacity: 0; }
  }

  .your-span, .brand-span, .anytime-span, .anywhere-span {
    display: block;
    opacity: 0;
    transform: translateY(117px);
    animation: slideInOut 4s ease-in-out infinite;
  }

  .your-span { animation-delay: 0s; }
  .brand-span { animation-delay: 0.5s; }
  .anytime-span { animation-delay: 1s; }
  .anywhere-span { animation-delay: 1.5s; }
</style>
