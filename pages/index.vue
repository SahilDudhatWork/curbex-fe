<template>
  <div class="bg-[#FCFCFC]">
    <div
      class="container px-6 md:px-0 mx-auto rounded-[25px] overflow-hidden md:pt-[2.6rem]"
    >
      <HomePageSlider />
    </div>
    <div
      class="hidden lg:block container px-6 md:px-0 mx-auto lg:text-center text-[24px] font-bold text-[#121212] h-[155px] overflow-hidden"
    >
      <h2
        class="text-changed font-Montserrat-Bold text-[30px] md:text-[61px] lg:text-[74px] capitalize py-[2rem] leading-[normal] relative h-[155px] flex items-center justify-center gap-[20px]"
      >
        <span class="your-span">your brand,</span>
        <!-- <span class="brand-span"></span> -->
        <span class="anytime-span">anytime, </span>
        <span class="anywhere-span">anywhere</span>
      </h2>
    </div>
    <div
      class="lg:hidden container px-6 md:px-0 mx-auto lg:text-center text-[24px] font-bold text-[#121212]"
    >
      <h2
        class="font-Montserrat-Bold text-[30px] md:text-[61px] lg:text-[74px] capitalize py-[2rem] leading-[normal]"
      >
        your brand,
        <p class="lg:hidden"></p>
        anytime, anywhere
      </h2>
    </div>
    <div
      class="container px-6 md:px-0 mx-auto lg:border-[2px] lg:border-[#F3F3F3] rounded-[20px] lg:bg-[#FFFFFF]"
    >
      <div class="lg:text-center text-[#121212] lg:bg-[#121212] rounded-[20px]">
        <p
          class="bg-[#121212] md:p-[20px] px-6 text-[20px] md:text-[27px] lg:py-[3rem] lg:px-[2rem] text-[#FFFFFF] p-[18px_18px] rounded-[20px]"
        >
          Curbside Express Advertising in your community.
          <span class="p-[6px] md:p-[0px] block md:hidden"></span>

          Help us create your customer journey
        </p>
      </div>
      <div
        class="md:p-[2.5rem_2rem_1rem] lg:p-[3rem] border-t border-b mt-[2rem] pt-[2rem] md:mt-[2.5rem] md:border-[2px] md:border-[#F3F3F3] md:bg-[#FFFFFF] lg:border-[0px] md:rounded-[20px]"
      >
        <div
          class="flex flex-wrap justify-between items-center md:max-w-[768px] lg:max-w-full mx-auto"
        >
          <div
            @click="goToPage('/small-business-franchise')"
            class="group cursor-pointer w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/1.mp4"
              autoplay
              playsinline
              muted
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 right-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Small Business & Franchise 
            </div>
          </div>
          <div
            @click="goToPage('/government-non-profits')"
            class="group cursor-pointer w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/2.mp4"
              autoplay
              muted
              playsinline
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 right-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Government & Non-Profit
            </div>
          </div>
          <div
            @click="goToPage('/media-buyers-agencies')"
            class="group cursor-pointer w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/3.mp4"
              autoplay
              muted
              playsinline
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 right-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Media Buyers/ Agencies
            </div>
          </div>
          <div
            @click="goToPage('/commercial-property-owners')"
            class="group cursor-pointer w-full md:w-[48%] mb-[2rem] lg:mb-0 lg:w-[24%] overflow-hidden rounded-[25px] h-[137px] md:h-[215px] lg:h-[375px] relative md:hover:h-[420px] transition-all duration-300"
          >
            <video
              src="/Videos/4.mp4"
              autoplay
              muted
              playsinline
              loop
              class="w-full md:h-[215px] lg:h-[420px] object-cover"
            ></video>
            <div
              class="p-[2rem] absolute top-0 bottom-0 left-0 right-0 gradient-background text-white text-[22px] md:text-[25px] font-Montserrat-Bold mt-auto h-full flex items-end lg:text-[27px] transition-all duration-300"
            >
              Commercial Property Owners
            </div>
          </div>
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
        style="background-image: url(/Images/car-banner.png)"
        class="w-full min-h-[227px] md:min-h-[464px] bg-no-repeat bg-cover bg-[10%] md:bg-[14%] rounded-[25px]"
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
        class="w-full min-h-[227px] md:min-h-[464px] bg-no-repeat bg-[length:220%_100%] md:bg-cover bg-[20%] rounded-[25px]"
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
  layout: "productLayout",
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
      images: [
        {
          src: "/Images/homeSlider/1.png",
          bgPosition: "bg-[80%_100%] md:bg-[74%_180%] lg:bg-center",
        },
        {
          src: "/Images/homeSlider/2.png",
          bgPosition: "bg-[30%_100%] md:bg-[24%_180%] lg:bg-[24%_center]",
        },
        {
          src: "/Images/homeSlider/3.png",
          bgPosition: "bg-[10%_100%] md:bg-[4%_180%] lg:bg-center",
        },
        {
          src: "/Images/homeSlider/4.png",
          bgPosition: "bg-[4%_100%] md:bg-[10%_180%] lg:bg-center",
        },
        {
          src: "/Images/homeSlider/5.png",
          bgPosition: "bg-[100%_100%] md:bg-[94%_180%] lg:bg-center",
        },
        {
          src: "/Images/homeSlider/6.png",
          bgPosition: "bg-[80%_100%] md:bg-[4%_180%] lg:bg-center",
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
  methods: {
    async goToPage(path) {
      this.$router.push(path);
    },
  },
  async mounted() {},
};
</script>
<style scoped>
@keyframes slideInOut {
  0% {
    transform: translateY(117px);
    opacity: 0;
  }
  20% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateY(0);
    opacity: 0;
  } /* Hold position */
  100% {
    transform: translateY(117px);
    opacity: 0;
  }
}

.your-span,
.anytime-span,
.anywhere-span {
  display: block;
  opacity: 0;
  transform: translateY(117px);
  animation: slideInOut 4s ease-in-out infinite;
}

.your-span {
  animation-delay: 0s;
}
.anytime-span {
  animation-delay: 0.5s;
}
.anywhere-span {
  animation-delay: 1s;
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .text-changed {
    font-size: 53px;
  }
}
</style>
