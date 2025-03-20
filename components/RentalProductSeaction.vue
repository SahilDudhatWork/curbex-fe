<template>
  <div>
    <div class="item transition-all duration-300 rent-produt">
      <div class="border-2 border-[#F3F3F3] rounded-t-[20px] relative">
        <img
          :src="heroImage ? heroImage : '/Images/Product/product.png'"
          alt=""
          class="rounded-t-[20px] first-image"
        />
        <div class="absolute top-[15px] right-[15px]">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer border border-[#F3F3F3] p-[0.425rem] md:p-2.5 block w-[33px] md:w-[45px] h-[33px] md:h-[45px] rounded-full bg-[#FCFCFC] mb-3"
            @click="$emit('shareProduct')"
          >
            <g clip-path="url(#clip0_4661_37639)">
              <path
                d="M19.0833 18.5858C18.1721 18.59 17.2955 18.9324 16.6254 19.5459L7.68278 14.3732C7.75175 14.0874 7.78945 13.795 7.79521 13.5011C7.78945 13.2072 7.75175 12.9148 7.68278 12.629L16.5254 7.50591C17.1586 8.08809 17.9742 8.43581 18.835 8.49059C19.6959 8.54538 20.5494 8.30387 21.2522 7.80671C21.9549 7.30955 22.4639 6.58706 22.6935 5.76078C22.9231 4.93449 22.8594 4.05482 22.513 3.26974C22.1667 2.48466 21.5588 1.84207 20.7917 1.45006C20.0246 1.05804 19.145 0.940527 18.3009 1.11728C17.4568 1.29402 16.6998 1.75425 16.157 2.42055C15.6143 3.08684 15.3191 3.91854 15.3209 4.77576C15.3267 5.06964 15.3644 5.36205 15.4334 5.64788L6.59072 10.7709C6.05518 10.2728 5.38478 9.94108 4.66202 9.81662C3.93925 9.69217 3.19563 9.78039 2.52266 10.0704C1.84969 10.3605 1.27672 10.8397 0.874236 11.4491C0.471755 12.0585 0.257324 12.7716 0.257324 13.5006C0.257324 14.2295 0.471755 14.9426 0.874236 15.552C1.27672 16.1614 1.84969 16.6406 2.52266 16.9307C3.19563 17.2207 3.93925 17.3089 4.66202 17.1845C5.38478 17.06 6.05518 16.7283 6.59072 16.2302L15.5219 21.4163C15.4556 21.6814 15.4207 21.9533 15.4178 22.2264C15.4178 22.9462 15.6325 23.6499 16.035 24.2484C16.4374 24.8469 17.0094 25.3134 17.6786 25.5889C18.3478 25.8643 19.0842 25.9364 19.7947 25.796C20.5051 25.6555 21.1577 25.3089 21.6699 24.7999C22.1821 24.2909 22.5309 23.6424 22.6722 22.9364C22.8135 22.2304 22.741 21.4986 22.4638 20.8336C22.1866 20.1686 21.7172 19.6002 21.1149 19.2002C20.5126 18.8003 19.8045 18.5869 19.0802 18.5869L19.0833 18.5858Z"
                fill="#C3C3C3"
              />
            </g>
            <defs>
              <clipPath id="clip0_4661_37639">
                <rect
                  width="26.3572"
                  height="26.3572"
                  fill="white"
                  transform="translate(0.503418 0.53125)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer border border-[#F3F3F3] p-[0.425rem] md:p-2.5 block w-[33px] md:w-[45px] h-[33px] md:h-[45px] rounded-full bg-[#FCFCFC] mb-3"
            @click="$emit('toggleFavorite')"
          >
            <g clip-path="url(#clip0_4949_3589)">
              <path
                d="M23.2248 5.65198C22.6576 5.08445 21.984 4.63424 21.2427 4.32708C20.5014 4.01991 19.7069 3.86182 18.9044 3.86182C18.102 3.86182 17.3074 4.01991 16.5661 4.32708C15.8248 4.63424 15.1513 5.08445 14.584 5.65198L13.4067 6.82927L12.2295 5.65198C11.0836 4.50614 9.52952 3.86241 7.90905 3.86241C6.28858 3.86241 4.73449 4.50614 3.58864 5.65198C2.4428 6.79783 1.79907 8.35192 1.79907 9.97239C1.79907 11.5929 2.4428 13.147 3.58864 14.2928L4.76593 15.4701L13.4067 24.1109L22.0476 15.4701L23.2248 14.2928C23.7924 13.7255 24.2426 13.052 24.5497 12.3107C24.8569 11.5694 25.015 10.7748 25.015 9.97239C25.015 9.16996 24.8569 8.3754 24.5497 7.63409C24.2426 6.89278 23.7924 6.21925 23.2248 5.65198V5.65198Z"
                :stroke="
                  favoriteProductIds.includes(product.id)
                    ? '#FF364A'
                    : '#C3C3C3'
                "
                stroke-width="1.64535"
                stroke-linecap="round"
                stroke-linejoin="round"
                :fill="favoriteProductIds.includes(product.id) ? '#FF364A' : ''"
              />
            </g>
            <defs>
              <clipPath id="clip0_4949_3589">
                <rect
                  width="26.6555"
                  height="26.6555"
                  fill="white"
                  transform="translate(0.0788574 0.532227)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="bg-[#F3F3F3] rounded-b-[20px] p-2 md:p-3 lg:p-5">
        <div
          class="flex items-end justify-between pb-[5px] md:pb-[0] lg:pb-[5px]"
        >
          <p
            class="text-[20px] lg:text-[30px] text-[#121212] font-Montserrat-Medium font-bold whitespace-nowrap max-w-[80%] w-full overflow-hidden text-ellipsis"
          >
            {{ product?.name }}
          </p>
          <div>
            <p class="text-[9px] lg:text-[13px] text-[#121212]">Per Month</p>
            <p class="text-[20px] lg:text-[30px] text-[#121212] font-semibold">
              ${{ product?.price }}
            </p>
          </div>
        </div>
        <p
          v-html="product.description"
          class="text-[#121212] text-[13px] lg:text-[19px] description"
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
          class="border border-[#F5F5F5] rounded-[12px] overflow-hidden"
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
import { mapGetters, mapActions, mapMutations } from "vuex";

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
  computed: {
    ...mapGetters({
      favoriteProductIds: "product/getFavoriteProductIds",
    }),
    isolatedImages() {
      return this.product?.images && this.product?.images.length
        ? this.product?.images.filter((x) => x.imageType == "isolated")
        : [];
    },
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
