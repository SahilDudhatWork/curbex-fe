<template>
  <div>
    <div class="item transition-all duration-300 rent-produt">
      <div class="border-2 border-[#F3F3F3] rounded-t-[20px] relative">
        <img
          :src="heroImage ? heroImage : '/Images/Product/product.png'"
          alt=""
          class="rounded-t-[20px] first-image"
        />
      </div>
      <div class="bg-[#F3F3F3] rounded-b-[20px] p-2 md:p-3 lg:p-5">
        <div
          class="flex items-end justify-between pb-[5px] md:pb-[0] lg:pb-[5px]"
        >
          <p
            class="text-[20px] lg:text-[27px] text-[#121212] font-Montserrat-Medium font-bold whitespace-nowrap max-w-[80%] w-full overflow-hidden text-ellipsis"
          >
            {{ product?.name }}
          </p>
          <div>
            <p class="text-[9px] lg:text-[13px] text-[#121212]">Per Month</p>
            <p class="text-[20px] lg:text-[27px] text-[#121212] font-semibold">
              ${{ product?.price }}
            </p>
          </div>
        </div>
        <p
          v-html="product.description"
          class="text-[#121212] text-[13px] lg:text-[17px] description"
        ></p>
      </div>
    </div>
    <div class="bg-[#F5F5F5] h-[1px] my-5 w-full"></div>
    <div class="w-[90%] mx-auto">
      <VueSlickCarousel
        v-if="product.images && product.images.length"
        v-bind="carouselSettings"
        class="section"
      >
        <div
          v-for="(item, index) in product.images"
          :key="index"
          @click="heroImage = item.imageUrl"
          class="border border-[#F5F5F5] rounded-[12px]"
        >
          <img
            :src="item.imageUrl"
            alt="Carousel Image"
            class="object-contain"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      heroImage: null,

      carouselSettings: {
        dots: false,
        infinite: false,
        nav: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        touchThreshold: 5,
        focusOnSelect: true,
      },
    };
  },
  watch: {
    product: {
      immediate: true,
      handler(newVal) {
        this.heroImage =
          this.product?.images && this.product?.images.length
            ? this.product.images[0].imageUrl
            : null;
      },
    },
  },
  mounted() {
    this.heroImage =
      this.product?.images && this.product?.images.length
        ? this.product.images[0].imageUrl
        : null;
  },
};
</script>
<style scoped>
::v-deep .slick-prev:before,
::v-deep .slick-next:before {
  color: #000000;
}
::v-deep .slick-slide > div:first-child {
  margin: 5px;
}
</style>
