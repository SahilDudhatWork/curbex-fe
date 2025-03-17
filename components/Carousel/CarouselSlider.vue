<template>
  <div>
    <Carousel
      :autoplay="false"
      :autoplayTimeout="3000"
      loop
      :nav="false"
      :dots="false"
      :perPageCustom="perPageCustom"
    >
      <Slide
        v-for="(item, index) in filterProducts"
        :key="index"
        class="relative p-2"
      >
        <div
          class="group item transition-all duration-300 rent-produt border-2 border-[#F3F3F3] bg-[#F3F3F3] rounded-[24px] hover:border-[#8D54FF]"
        >
          <p
            :class="
              item.isTrending || item.isBestSeller
                ? 'bg-[#FFA900] lg:bg-[#FF364A]'
                : 'bg-[#FFFFF] lg:bg-[#FFFFF]'
            "
            class="mb-[-12px] lg:mb-[-15px] mt-[-11px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[10px] lg:text-[12px] text-[#121212] lg:text-[#FFFFFF]"
          >
            <span class="" v-if="item.isTrending">Trending</span>
            <span class="" v-else-if="item.isBestSeller">Best Seller</span>
            <span class="" v-else>{{ "\u200B" }}</span>
          </p>
          <!-- <p
            v-if="item.isBestSeller"
            class="bg-[#FFA900] lg:bg-[#FF364A] mb-[-15px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[10px] lg:text-[12px] text-[#121212] lg:text-[#FFFFFF]"
          >
            <span class="hidden lg:block">Best Seller</span>
          </p> -->
          <div class="rounded-t-[23px] relative overflow-hidden">
            <img
              v-if="item.heroImage"
              :src="item.heroImage.imageUrl"
              alt=""
              class="rounded-t-[20px] transition-scale duration-300 group-hover:scale-110"
            />
            <img
              v-else
              src="/Images/Product/product-1.png"
              alt=""
              class="rounded-t-[20px] transition-scale duration-300 group-hover:scale-110"
            />
            <span
              @click="toggleFavorite(item)"
              class="cursor-pointer border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[40px] h-[40px] absolute top-[10px] right-[10px] rounded-full flex justify-center items-center pointer"
            >
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7707 2.425C16.3507 2.00481 15.8521 1.67149 15.3032 1.44407C14.7544 1.21666 14.1661 1.09961 13.572 1.09961C12.9779 1.09961 12.3897 1.21666 11.8408 1.44407C11.292 1.67149 10.7933 2.00481 10.3733 2.425L9.50169 3.29663L8.63006 2.425C7.78171 1.57665 6.6311 1.10005 5.43135 1.10005C4.2316 1.10005 3.08099 1.57665 2.23263 2.425C1.38428 3.27335 0.907684 4.42396 0.907684 5.62371C0.907684 6.82346 1.38428 7.97407 2.23263 8.82242L3.10426 9.69405L9.50169 16.0915L15.8991 9.69405L16.7707 8.82242C17.1909 8.40243 17.5242 7.90377 17.7517 7.35492C17.9791 6.80608 18.0961 6.2178 18.0961 5.62371C18.0961 5.02962 17.9791 4.44134 17.7517 3.8925C17.5242 3.34365 17.1909 2.84499 16.7707 2.425V2.425Z"
                  :stroke="
                    favoriteProductIds.includes(item.id) ? '#FF364A' : '#C3C3C3'
                  "
                  stroke-width="1.21817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :fill="favoriteProductIds.includes(item.id) ? '#FF364A' : ''"
                />
              </svg>
            </span>
          </div>
          <div class="bg-[#F3F3F3] rounded-b-[23px] p-2 md:p-5 md:pb-[10px]">
            <p
              :class="item?.type == 'rental' ? 'bg-[#DAC8FF]' : 'bg-[#FFEBC3]'"
              class="capitalize text-[10px] lg:text-[12px] text-[#121212] w-fit mt-[-22px] md:mt-[-28px] lg:mt-[-30px] relative mb-[10px] rounded-[5px] p-[1px_6px] border border-[#F5F5F5]"
            >
              {{ item?.type }}
            </p>
            <div class="flex items-end justify-between pb-[5px]">
              <p
                class="text-hidden-lg text-[14px] text-[#121212] font-semibold whitespace-nowrap w-full overflow-hidden text-ellipsis"
              >
                {{ item?.name }}
              </p>
              <div>
                <p class="text-[7px] text-[#121212] hidden lg:block">
                  Per Month
                </p>
                <p class="text-[14px] text-[#121212] font-semibold">
                  ${{ item?.price }}
                </p>
              </div>
            </div>
            <p
              v-html="
                item?.description
                  ? item?.description.length > 40
                    ? item?.description?.substring(0, 40) + '...'
                    : item?.description
                  : 'The billboard that`s always out front'
              "
              class="text-hidden-lg text-[#C3C3C3] text-[10px] description hidden md:block whitespace-nowrap w-full overflow-hidden text-ellipsis"
            ></p>

            <button
              class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] md:text-[12px] w-full mt-3 text-center p-[7px] md:p-[9px] font-semibold mb-[5px]"
              @click.stop="openProduct(item)"
            >
              Get Started
            </button>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
        [320, 2],
        [768, 2.5],
        [1024, 5],
      ],
    };
  },
  computed: {
    ...mapGetters({
      favoriteProductIds: "product/getFavoriteProductIds",
    }),
    filterProducts() {
      return this.data.map((product) => {
        return {
          ...product,
          heroImage:
            product.images.find((image) => image.imageType === "primary") ||
            null,
        };
      });
    },
    hasToken() {
      return this.$cookies.get("token") ? true : false;
    },
  },
  methods: {
    ...mapActions({
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
    }),
    openProduct(product) {
      if (product.type == "retail") {
        this.$router.push(`/product-view/${product.id}`);
      } else {
        if (!this.hasToken) {
          this.$router.push(`/product-view/${product.id}`);
        } else {
          this.$router.push(`/rental/${product.id}`);
        }
      }
    },
    async toggleFavorite(product) {
      try {
        await this.toggleFavoriteProduct({ id: product.id, type: this.type });
        // this.$toast.open({
        //     message: "Please log in to add or remove items from your favorites",
        //   });
      } catch (error) {
        console.log(error, "error");
        if (error.status == 401) {
          this.$toast.open({
            message: this.$i18n.t("authFavoriteErrorMessage"),
            type: "warning",
          });
          this.$router.push(`/auth/login`);
        }
      }
    },
  },
  mounted() {},
};
</script>
