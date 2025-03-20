<template>
  <Carousel
    :perPage="1"
    :autoplay="false"
    :autoplayTimeout="3000"
    loop
    :nav="true"
    :dots="true"
    :navigationEnabled="true"
    navigationNextLabel="<svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M10 17.2858L15.1428 12.1429L10 7' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
<path d='M12.1429 1C5.98883 1 1 5.98883 1 12.1429C1 18.2969 5.98882 23.2858 12.1429 23.2858C18.2969 23.2858 23.2858 18.2969 23.2858 12.1429C23.2858 5.98883 18.2969 1 12.1429 1Z' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
</svg>
"
    navigationPrevLabel="<svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.1429 7L9 12.1428L14.1429 17.2857' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
    <path d='M12.1429 23.2857C18.2969 23.2857 23.2857 18.2968 23.2857 12.1428C23.2857 5.98882 18.2969 1 12.1429 1C5.98883 1 1 5.98882 1 12.1428C1 18.2968 5.98883 23.2857 12.1429 23.2857Z' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>
</svg>
"
    class="relative"
  >
    <Slide
      v-for="(image, index) in currentImages"
      :key="index"
      class="slider-h-lg-seaction h-[230px] lg:h-[483px] md:h-[503px]"
    >
      <div
        class="slider-h-lg-seaction h-[230px] lg:h-[483px] md:h-[503px] w-full bg-[length:100%_100%] bg-no-repeat sm:bg-cover"
        :class="image.bgPosition"
        :style="{ backgroundImage: `url(${image.src})` }"
      ></div>
    </Slide>
  </Carousel>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      imagesDesktop: [
        { src: "/Images/homeSlider/desktop/1.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/desktop/2.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/desktop/3.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/desktop/4.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/desktop/5.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/desktop/6.png", bgPosition: "bg-center" },
      ],
      imagesTablet: [
        { src: "/Images/homeSlider/tablet/1.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/2.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/3.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/4.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/5.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/6.png", bgPosition: "bg-center" },
      ],
      imagesMobile: [
        { src: "/Images/homeSlider/tablet/1.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/2.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/3.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/4.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/5.png", bgPosition: "bg-center" },
        { src: "/Images/homeSlider/tablet/6.png", bgPosition: "bg-center" },
      ],
    };
  },
  computed: {
    currentImages() {
      if (this.screenWidth >= 1024) {
        return this.imagesDesktop;
      } else if (this.screenWidth >= 768) {
        return this.imagesTablet;
      } else {
        return this.imagesMobile;
      }
    },
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
};
</script>

<style scoped>
::v-deep .VueCarousel-pagination {
  display: flex;
  justify-content: center;
  bottom: 10px;
  position: absolute;
  width: 100%;
}

::v-deep .VueCarousel-navigation-prev:focus,
::v-deep .VueCarousel-navigation-next:focus {
  outline: none;
}

::v-deep .VueCarousel-navigation-prev {
  left: 50px !important;
}

::v-deep .VueCarousel-navigation-next {
  right: 50px !important;
}
::v-deep .VueCarousel-dot {
  background-color: #ffffff99 !important;
  padding: 5px !important;
  width: 9px !important;
  height: 9px !important;
}
::v-deep .VueCarousel-dot--active {
  background-color: #ffffff !important;
}
@media screen and (max-width: 1023px) {
  ::v-deep .VueCarousel-navigation {
    position: absolute;
    bottom: 20px;
    left: 50%;
    display: flex;
    justify-content: space-between;
    width: 230px;
    transform: translate(-50%, 0px);
    z-index: 9;
  }
}
@media screen and (max-width: 767px) {
  ::v-deep .VueCarousel-dot {
    background-color: #ffffff99 !important;
    padding: 2px !important;
    width: 5px !important;
    height: 5px !important;
  }
  ::v-deep .VueCarousel-navigation-prev {
    left: 90px !important;
    width: 30px;
    height: 30px;
  }
  ::v-deep .VueCarousel-navigation-prev svg,
  ::v-deep .VueCarousel-navigation-next svg {
    width: 100%;
    height: 100%;
  }
  ::v-deep .VueCarousel-navigation-next {
    right: 90px !important;
    width: 30px;
    height: 30px;
  }
}
</style>
