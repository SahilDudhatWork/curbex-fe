<template>
  <div>
    <div class="container mx-auto my-[20px] pt-[1rem] px-6 md:px-0">
      <div
        class="w-full h-full min-h-[220px] md:min-h-[330px] bg-cover bg-left lg:bg-center rounded-[20px]"
        style="background-image: url(/Images/Product/product-banner.png)"
      ></div>
      <!-- <img src="/Images/Product/product-banner.png" alt="product-banner" class="w-full h-full min-h-[330px] object-cover"> -->
    </div>
    <div class="container mx-auto pt-[20px] px-6 md:px-0">
      <!-- Filter Section -->
      <div
        class="flex items-center gap-2 lg:gap-4 mb-[3.5rem] md:mb-[4.5rem] flex-wrap"
      >
        <!-- Product Type Filter -->
        <div class="relative order-2 lg:order-1">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#F3F3F3] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            Product type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Price Filter -->
        <div class="relative order-3 lg:order-2">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#F3F3F3] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            Price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Review Filter -->
        <div class="relative order-4 lg:order-3">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#F3F3F3] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Location Filter -->
        <div class="relative order-5 lg:order-4">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#F3F3F3] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            Location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Offer Filter -->
        <div class="relative order-6 lg:order-5">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#F3F3F3] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            Offer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- For Purchase Button -->
        <div class="lg:ml-auto order-1 lg:order-6">
          <button
            class="flex items-center gap-2 px-3 lg:px-3 py-2 lg:py-[0.55rem] bg-[#FFA900] text-[#121212] text-[10px] lg:text-[15px] font-Montserrat-Medium rounded-[35px] hover:bg-gray-200"
          >
            For Purchase
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto px-6 md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6"
    >
      <div
        v-for="(item, key) in allProductData.records"
        :key="key"
        class="item transition-all duration-300 rent-produt"
      >
        <p
          :class="
            item.isTrending || item.isBestSeller
              ? 'bg-[#FFA900] lg:bg-[#FF364A]'
              : 'bg-[#FFFFF] lg:bg-[#FFFFF]'
          "
          class="mb-[-15px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[10px] lg:text-[12px] text-[#121212] lg:text-[#FFFFFF]"
        >
          <span class="hidden lg:block" v-if="item.isTrending">Trending</span>

          <span class="hidden lg:block" v-else-if="item.isBestSeller"
            >Best Seller</span
          >
          <span class="hidden lg:block" v-else>{{ "\u200B" }}</span>
        </p>
        <div class="border-2 border-[#F3F3F3] rounded-t-[10px] relative">
          <img
            src="/Images/Product/product.png"
            alt=""
            class="rounded-t-[10px] first-image"
          />
          <img
            v-if="item.images && item.images.length"
            :src="item.images[0].imageUrl"
            alt=""
            class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300"
          />
          <img
            v-else
            src="/Images/Product/product-1.png"
            alt=""
            class="rounded-t-[10px] hidden-important absolute inset-0 transition-opacity duration-300"
          />
          <span
            @click="toggleFavorite(item)"
            class="cursor-pointer border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[40px] h-[40px] block absolute top-[10px] right-[10px] rounded-full flex justify-center items-center pointer"
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
                :stroke="item?.isFavorite ? '#FF364A' : '#C3C3C3'"
                stroke-width="1.21817"
                stroke-linecap="round"
                stroke-linejoin="round"
                :fill="item?.isFavorite ? '#FF364A' : ''"
              />
            </svg>
          </span>
        </div>
        <div class="bg-[#F3F3F3] rounded-b-[10px] p-2 md:p-3 lg:p-5">
          <p
            class="text-[10px] lg:text-[12px] text-[#121212] bg-[#DAC8FF] w-fit mt-[-22px] lg:mt-[-30px] relative mb-[10px] rounded-[5px] p-[1px_6px] border border-[#FFFFFF]"
          >
            {{ item?.type }}
          </p>
          <div
            class="flex items-start justify-between pb-[5px] md:pb-[0] lg:pb-[5px]"
          >
            <p class="text-[12px] lg:text-[14px] text-[#121212] font-semibold">
              {{ item?.name }}
            </p>
            <div>
              <p class="text-[7px] text-[#121212] hidden lg:block">Per Month</p>
              <p class="text-[14px] text-[#121212] font-semibold">
                ${{ item?.price }}
              </p>
            </div>
          </div>
          <p class="text-[#C3C3C3] text-[10px] description hidden lg:block">
            The billboard that's always out front
          </p>
          <nuxt-link :to="`/product-view/${item.id}`">
            <button
              class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] lg:text-[12px] w-full mt-3 text-center p-1 lg:p-2 font-semibold"
            >
              Customize it
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Add pagination section -->

    <div
      class="container mx-auto flex items-center justify-center gap-2 my-8 text-[14px] font-Montserrat-Medium pb-[5rem] pt-[2rem]"
    >
      <button
        class="px-4 py-2 text-[9px] lg:text-[14px] text-[#121212]"
        :disabled="pagination.currentPage === 1"
        @click="changePage(pagination.currentPage - 1)"
      >
        Previous
      </button>

      <div class="flex items-center gap-2">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="[
            'w-[28px] md:w-[40px] h-[28px] md:h-[40px] rounded-md',
            page === pagination.currentPage
              ? 'bg-[#FFA900] text-[#121212]'
              : 'hover:bg-gray-100 border border-[#F3F3F3] text-[#121212]',
          ]"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        class="px-4 py-2 text-[9px] lg:text-[14px] text-[#121212]"
        :disabled="pagination.currentPage === totalPages"
        @click="changePage(pagination.currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      pagination: {
        currentPage: 1,
        limit: 10,
        total: 0,
      },
    };
  },
  watch: {
    allProductData: {
      immediate: true,
      handler(newVal) {
        if (newVal?.totalCount) {
          this.pagination.total = newVal.totalCount;
        }
      },
    },
  },
  computed: {
    ...mapGetters({
      allProductData: "product/getAllProductData",
    }),
    totalPages() {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts",
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
    }),
    async getAllProducts() {
      try {
        const { currentPage, limit } = this.pagination;
        const skip = (currentPage - 1) * limit;

        let payload = {
          skip,
          take: limit,
          order: { id: "ASC" },
          relations: ["images"],
        };
        await this.fetchProducts(payload);
      } catch (error) {
        console.log(error);
      }
    },
    async toggleFavorite(product) {
      try {
        await this.toggleFavoriteProduct({ id: product.id, type: this.type });
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
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.pagination.currentPage = page;
        this.getAllProducts();
      }
    },
  },
  async mounted() {
    await this.getAllProducts();
  },
};
</script>
