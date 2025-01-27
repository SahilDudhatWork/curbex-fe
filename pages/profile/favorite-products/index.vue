<template>
  <div>
    <div class="mx-auto md:p-6">
      <h1 class="text-[18px] md:text-[20px] font-semibold mb-3 md:pt-[1rem]">
        Favorite products
      </h1>
    </div>
    <div
      v-if="favoriteProducts.records && favoriteProducts.records.length"
      class="max-w-5xl grid grid-cols-2 lg:grid-cols-3 gap-3 md:px-6"
    >
      <div
        v-for="(item, index) in favoriteProducts.records"
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
          <!-- <p class="text-[#C3C3C3] text-[10px] description hidden lg:block">
            The billboard that's always out front
          </p> -->
          <!-- <button class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] lg:text-[12px] w-full mt-3 text-center p-1 lg:p-2 font-semibold">Add To Cart</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "profileLayout",
  computed: {
    ...mapGetters({
      favoriteProducts: "product/getProductData",
    }),
  },
  methods: {
    ...mapActions({
      fetchFavoriteProducts: "product/fetchFavoriteProducts",
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
    }),
    async viewProduct(id) {
      this.$router.push(`/product-view/${id}`);
    },
    async getFavoriteProducts() {
      await this.fetchFavoriteProducts();
    },
    async removeFromFavorite(id) {
      try {
        await this.toggleFavoriteProduct({ id: id });
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
    await this.getFavoriteProducts();
  },
};
</script>

<style scoped></style>
