<template>
  <div>
    <div class="mx-auto md:p-6">
      <h1 class="text-[18px] md:text-[20px] font-semibold mb-3 md:pt-[1rem]">
        Favorite products
      </h1>
    </div>
    <div
      v-if="
        filterProducts &&
        filterProducts.records &&
        filterProducts.records.length
      "
      class="max-w-5xl grid grid-cols-2 lg:grid-cols-3 gap-3 md:px-6"
    >
      <div
        v-for="(item, index) in filterProducts.records"
        :key="index"
        @click="viewProduct(item)"
        class="group item transition-all duration-300 rent-produt border-2 border-[#F3F3F3] rounded-[24px] hover:border-[#8D54FF]"
      >
        <p
          :class="
            item.isTrending || item.isBestSeller
              ? 'bg-[#FFA900] lg:bg-[#FF364A]'
              : 'bg-[#FFFFF] lg:bg-[#FFFFF]'
          "
          class="mb-[-15px] mt-[-11px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[10px] lg:text-[12px] text-[#121212] lg:text-[#FFFFFF]"
        >
          <span class="" v-if="item.isTrending">Trending</span>

          <span class="" v-else-if="item.isBestSeller">Best Seller</span>
          <span class="" v-else>{{ "\u200B" }}</span>
        </p>
        <div class="rounded-t-[23px] relative overflow-hidden">
          <img
            :src="
              item.heroImage
                ? item.heroImage.imageUrl
                : '/Images/Product/product-1.png'
            "
            alt=""
            class="rounded-t-[23px] transition-scale duration-300 group-hover:scale-110"
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
        <div class="bg-[#F3F3F3] rounded-b-[23px] p-2 md:p-3 lg:p-5">
          <p
            :class="item?.type === 'rental' ? 'bg-[#DAC8FF]' : 'bg-[#FFEBC3]'"
            class="text-[10px] lg:text-[12px] text-[#121212] w-fit mt-[-22px] lg:mt-[-30px] relative mb-[10px] rounded-[5px] p-[1px_6px] border border-[#FFFFFF] capitalize"
          >
            {{ item?.type }}
          </p>
          <div
            class="flex items-start justify-between pb-[5px] md:pb-[0] lg:pb-[5px]"
          >
            <p
              class="text-[12px] lg:text-[14px] text-[#121212] font-semibold whitespace-nowrap max-w-[80%] w-full overflow-hidden text-ellipsis"
            >
              {{ item?.name }}
            </p>
            <div>
              <p class="text-[14px] text-[#121212] font-semibold">
                ${{ item?.price }}
              </p>
            </div>
          </div>
          <p
            class="text-[#C3C3C3] text-[10px] description hidden md:block whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis mb-[1px]"
          >
            {{
              item?.description
                ? item?.description.length > 40
                  ? item?.description?.substring(0, 40) + "..."
                  : item?.description
                : "The billboard that's always out front"
            }}
          </p>
        </div>
      </div>
      <!-- <div
        v-for="(item, index) in allProductData.records"
        :key="index"
        @click="viewProduct(item.id)"
        class="item transition-all duration-300 rent-produt cursor-pointer"
      >
        <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
          <img
            src="/Images/Product/product.png"
            alt=""
            class="rounded-t-[10px] first-image"
          />
          <img
            :src="
              item.images && item.images.length
                ? item.images[0].imageUrl
                : '/Images/Product/product-1.png'
            "
            alt=""
            class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300"
          />
          <span
            @click.stop="removeFromFavorite(item.id)"
            class="border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[28px] md:w-[40px] h-[28px] md:h-[40px] block absolute top-[10px] right-[10px] rounded-full flex justify-center items-center pointer"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.768 4.42684C17.348 4.00669 16.8494 3.67339 16.3006 3.446C15.7518 3.2186 15.1636 3.10156 14.5695 3.10156C13.9755 3.10156 13.3873 3.2186 12.8385 3.446C12.2897 3.67339 11.791 4.00669 11.3711 4.42684L10.4995 5.2984L9.62798 4.42684C8.7797 3.57856 7.62918 3.102 6.42953 3.102C5.22988 3.102 4.07937 3.57856 3.23109 4.42684C2.38281 5.27512 1.90625 6.42564 1.90625 7.62529C1.90625 8.82493 2.38281 9.97545 3.23109 10.8237L4.10264 11.6953L10.4995 18.0922L16.8964 11.6953L17.768 10.8237C18.1881 10.4038 18.5214 9.90515 18.7488 9.35636C18.9762 8.80756 19.0933 8.21933 19.0933 7.62529C19.0933 7.03124 18.9762 6.44302 18.7488 5.89422C18.5214 5.34542 18.1881 4.8468 17.768 4.42684Z"
                fill="#FF364A"
                stroke="#FF364A"
                stroke-width="1.21807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div class="bg-[#F3F3F3] rounded-b-[10px] p-2 lg:p-5">
          <div class="flex items-start justify-between pb-[5px]">
            <p class="text-[12px] lg:text-[14px] text-[#121212] font-semibold">
              {{ item?.name }}
            </p>
            <p class="text-[12px] lg:text-[14px] text-[#121212] font-semibold">
              ${{ item?.price }}
            </p>
          </div>
        </div>
      </div> -->
    </div>
    <p v-else class="md:px-6">No favorite products added</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "profileLayout",
  data() {
    return {
      favoriteProducts: [],
    };
  },
  computed: {
    ...mapGetters({
      favoriteProductIds: "product/getFavoriteProductIds",
      allProductData: "product/getAllProductData",
    }),
    filterProducts() {
      if (this.allProductData.records && this.allProductData.records.length) {
        return {
          totalCount: this.allProductData.totalCount,
          records: this.allProductData.records.map((product) => ({
            ...product,
            heroImage:
              product.images.find((image) => image.imageType === "primary") ||
              null,
          })),
        };
      } else {
        return this.allProductData;
      }
    },
  },
  methods: {
    ...mapActions({
      fetchFavoriteProductsIds: "product/fetchFavoriteProducts",
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
      fetchProducts: "product/fetchProducts",
    }),
    async viewProduct(product) {
      if (product.type == "retail") {
        this.$router.push(`/product-view/${product.id}`);
      } else {
        this.$router.push(`/rental/${product.id}`);
      }
    },
    async getFavoriteProducts() {
      let payload = {
        where: {
          id: {
            operator: "$in",
            value: this.favoriteProductIds,
          },
        },
        skip: 0,
        take: 100,
        order: { id: "ASC" },
        relations: ["images"],
      };
      await this.fetchProducts(payload);
    },
    async removeFromFavorite(id) {
      try {
        await this.toggleFavoriteProduct({ id: id });
        await this.fetchFavoriteProductsIds();
        await this.getFavoriteProducts();
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
  async mounted() {
    await this.fetchFavoriteProductsIds();
    await this.getFavoriteProducts();
  },
};
</script>

<style scoped></style>
