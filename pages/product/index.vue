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
        class="flex items-center gap-2 lg:gap-4 mb-[1.5rem] md:mb-[2.5rem] justify-between flex-wrap md:flex-nowrap"
      >
        <div
          class="flex items-center gap-2 lg:gap-4 w-full lg:w-[50%] flex-wrap md:flex-nowrap"
        >
          <!-- Product Type Filter -->
          <div class="relative z-10 w-full md:w-fit order-2 md:order-1">
            <button
              @click="toggleProductTypeDropdown"
              class="min-w-[150px] flex items-center justify-between md:justify-normal w-full gap-2 px-3 py-[0.55rem] bg-[#121212] text-[#F3F3F3] md:text-[15px] font-Montserrat-Medium rounded-[35px] relative z-10"
            >
              {{
                selectedProductType == "Retail" ? "For Purchase" : "For Rent"
              }}
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
            <div
              v-if="isProductTypeOpen"
              class="bg-[#FFFFFF] p-[10px_15px] border border-[#C3C3C3] mt-[-33px] lg:mt-[-41px] rounded-[25px] absolute left-0 right-0 z-1 overflow-hidden opacity-0 transition-all openDropdown"
            >
              <!-- @click="selectProductType(type)" -->
              <div
                @click="selectProductType"
                class="py-2 text-[#121212] text-[10px] lg:text-[15px] cursor-pointer"
              >
                {{
                  selectedProductType == "Retail" ? "For Rent" : "For Purchase"
                }}
              </div>
            </div>
          </div>
          <!-- Search Bar -->
          <div
            class="relative search-bar-section w-full max-w-full md:max-w-[393px] order-1 md:order-2"
          >
            <input
              v-model="searchQuery"
              @keyup="searchProduct()"
              type="text"
              placeholder="Search product"
              class="w-full mt-1 p-[7px_15px] lg:px-4 lg:py-[7px] border border-[#949494] bg-[transparent] rounded-[50px] lg:rounded-[50px] outline-[#8D54FF] focus:border-[#8D54FF]"
            />
            <span class="absolute right-[14px] top-[14px] lg:top-[13px]">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.11133 1.33789C7.62797 1.33789 6.17792 1.77776 4.94455 2.60187C3.71119 3.42598 2.74989 4.59732 2.18223 5.96776C1.61458 7.33821 1.46605 8.84621 1.75544 10.3011C2.04483 11.7559 2.75914 13.0923 3.80803 14.1412C4.85692 15.1901 6.1933 15.9044 7.64815 16.1938C9.10301 16.4832 10.611 16.3346 11.9815 15.767C13.3519 15.1993 14.5232 14.238 15.3474 13.0047C16.1715 11.7713 16.6113 10.3212 16.6113 8.83789C16.6112 6.8488 15.821 4.94122 14.4145 3.53473C13.008 2.12823 11.1004 1.33802 9.11133 1.33789Z"
                  stroke="#949494"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15 14.6631L20 20.6631"
                  stroke="#949494"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <!-- Price Filter -->
        <div class="flex items-center gap-3">
          <button @click="handleSortData" class="flex items-center gap-2">
            <svg
              v-if="sortOrder == 'desc'"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                :fill="isPriceSelect || isNameSelect ? '#8D54FF' : '#121212'"
                :stroke="isPriceSelect || isNameSelect ? '#8D54FF' : '#121212'"
              />
              <path
                d="M9 15H15.5865"
                stroke="white"
                stroke-width="1.64663"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 24.8828H20.5264"
                stroke="white"
                stroke-width="1.64663"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 19.9414H17.2331"
                stroke="white"
                stroke-width="1.64663"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.587 16.6456V25.4716"
                stroke="white"
                stroke-width="1.64663"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.5098 21.5469L26.5871 25.4695L22.6644 21.5469"
                stroke="white"
                stroke-width="1.64663"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_2)">
                <path
                  d="M39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5C30.7696 39.5 39.5 30.7696 39.5 20Z"
                  :fill="isPriceSelect || isNameSelect ? '#8D54FF' : '#121212'"
                  :stroke="
                    isPriceSelect || isNameSelect ? '#8D54FF' : '#121212'
                  "
                />
                <path
                  d="M15.5865 24.8828L9 24.8828"
                  stroke="white"
                  stroke-width="1.64663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5264 15L9 15"
                  stroke="white"
                  stroke-width="1.64663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2331 19.9433L9 19.9433"
                  stroke="white"
                  stroke-width="1.64663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.587 16.6456V25.4716"
                  stroke="white"
                  stroke-width="1.64663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.6644 18.9226L26.5871 15L30.5098 18.9226"
                  stroke="white"
                  stroke-width="1.64663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            @click="togglePriceSort"
            class="flex items-center gap-2 px-4 py-[0.50rem] bg-[#FFFFFF] border border-[#121212] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px]"
            :class="
              isPriceSelect
                ? 'border-[#8D54FF] border-[2px] text-[#8D54FF]'
                : ''
            "
          >
            Price
          </button>
          <button
            @click="toggleNameSort"
            class="flex items-center gap-2 px-4 py-[0.50rem] bg-[#FFFFFF] border border-[#121212] text-[#121212] text-[15px] font-Montserrat-Medium rounded-[35px]"
            :class="
              isNameSelect ? 'border-[#8D54FF] border-[2px] text-[#8D54FF]' : ''
            "
          >
            Name
          </button>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto px-6 md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6"
    >
      <div
        v-for="(item, key) in filterProducts.records"
        :key="key"
        class="group item transition-all duration-300 rent-produt border-2 border-[#F3F3F3] bg-[#F3F3F3] rounded-[15px] hover:border-[#8D54FF]"
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
        <div class="rounded-t-[14px] relative overflow-hidden">
          <img
            :src="
              item.heroImage
                ? item.heroImage.imageUrl
                : '/Images/Product/product-1.png'
            "
            alt=""
            class="rounded-t-[14px] transition-scale duration-300 group-hover:scale-110"
          />
          <span
            @click="toggleFavorite(item)"
            class="cursor-pointer border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[40px] h-[40px] absolute top-[5px] right-[5px] rounded-full flex justify-center items-center pointer scale-75 lg:scale-100 lg:top-[10px] lg:right-[10px]"
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
        <div class="bg-[#F3F3F3] rounded-b-[14px] p-2 md:p-3 lg:p-5">
          <p
            :class="item?.type === 'rental' ? 'bg-[#DAC8FF]' : 'bg-[#FFEBC3]'"
            class="text-[10px] lg:text-[12px] text-[#121212] w-fit mt-[-22px] lg:mt-[-30px] relative mb-[10px] rounded-[5px] p-[1px_6px] border border-[#FFFFFF] capitalize"
          >
            {{ item?.type }}
          </p>
          <div
            class="flex items-end justify-between pb-[5px] md:pb-[0] lg:pb-[5px]"
          >
            <p
              class="text-[12px] lg:text-[14px] text-[#121212] font-semibold whitespace-nowrap max-w-[80%] w-full overflow-hidden text-ellipsis"
            >
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

          <button
            @click.stop="openProduct(item)"
            class="rounded-full bg-[#121212] hover:bg-[#8D54FF] text-[#ffffff] text-[10px] lg:text-[12px] w-full mt-3 text-center p-1 lg:p-2 font-semibold"
          >
            Get Started
          </button>
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
        <!-- First page -->
        <button
          v-if="totalPages > 0"
          :class="[
            'w-[28px] md:w-[40px] h-[28px] md:h-[40px] rounded-md',
            1 === pagination.currentPage
              ? 'bg-[#FFA900] text-[#121212]'
              : 'hover:bg-gray-100 border border-[#F3F3F3] text-[#121212]',
          ]"
          @click="changePage(1)"
        >
          1
        </button>

        <!-- Ellipsis if needed -->
        <span v-if="pagination.currentPage > 3" class="text-[#121212]"
          >...</span
        >

        <!-- Current page and surrounding pages -->
        <button
          v-for="page in visiblePages"
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

        <!-- Ellipsis if needed -->
        <span
          v-if="pagination.currentPage < totalPages - 2"
          class="text-[#121212]"
          >...</span
        >

        <!-- Last page -->
        <button
          v-if="totalPages > 1"
          :class="[
            'w-[28px] md:w-[40px] h-[28px] md:h-[40px] rounded-md',
            totalPages === pagination.currentPage
              ? 'bg-[#FFA900] text-[#121212]'
              : 'hover:bg-gray-100 border border-[#F3F3F3] text-[#121212]',
          ]"
          @click="changePage(totalPages)"
        >
          {{ totalPages }}
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
      searchQuery: "",
      isPriceSelect: false,
      isNameSelect: false,
      sortOrder: "desc",

      pagination: {
        currentPage: 1,
        limit: 10,
        total: 0,
      },
      isProductTypeOpen: false,
      selectedProductType: "Retail",
      productTypes: ["Rental", "Retail"],
    };
  },

  watch: {
    filterProducts: {
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
      favoriteProductIds: "product/getFavoriteProductIds",
    }),
    hasToken() {
      return this.$cookies.get("token") ? true : false;
    },
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
    totalPages() {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
    visiblePages() {
      let pages = [];
      const current = this.pagination.currentPage;

      if (this.totalPages <= 5) {
        // If total pages are 5 or less, show all pages
        for (let i = 2; i < this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        if (current > 2 && current < this.totalPages - 1) {
          pages = [current - 1, current, current + 1];
        } else if (current <= 2) {
          pages = [2, 3];
        } else if (current >= this.totalPages - 1) {
          pages = [this.totalPages - 2, this.totalPages - 1];
        }
      }

      return pages;
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts",
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
    }),
    async handleSortData() {
      this.sortOrder = this.sortOrder === "desc" ? "asc" : "desc";
      if (this.isNameSelect || this.isPriceSelect) {
        this.getAllProducts();
      }
    },
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
    toggleProductTypeDropdown() {
      this.isProductTypeOpen = !this.isProductTypeOpen;
    },
    togglePriceSort() {
      this.isNameSelect = false;
      this.isPriceSelect = !this.isPriceSelect;
      this.getAllProducts();
    },
    toggleNameSort() {
      this.isPriceSelect = false;
      this.isNameSelect = !this.isNameSelect;
      this.getAllProducts();
    },

    selectProductType() {
      this.isProductTypeOpen = false;
      let type = this.selectedProductType == "Rental" ? "Retail" : "Rental";

      if (this.selectedProductType == type) {
        return;
      }
      this.selectedProductType = type;
      this.getAllProducts();
    },
    async getAllProducts() {
      try {
        const { currentPage, limit } = this.pagination;
        const skip = (currentPage - 1) * limit;

        let apiPayload = {
          skip,
          take: limit,
          relations: ["images"],
          where: {},
        };
        if (this.selectedProductType) {
          apiPayload.where.type = this.selectedProductType.toLowerCase();
        }

        if (this.searchQuery && this.searchQuery.trim() !== "") {
          apiPayload.where.name = {
            operator: "$like",
            value: `%${this.searchQuery}%`,
          };
        }
        // Add sorting based on priceSort
        if (this.isPriceSelect) {
          apiPayload.order = {
            price: this.sortOrder.toUpperCase(),
          };
        } else if (this.isNameSelect) {
          apiPayload.order = {
            name: this.sortOrder.toUpperCase(),
          };
        } else {
          apiPayload.order = {
            id: "ASC",
          };
        }

        await this.fetchProducts(apiPayload);
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
    async searchProductData() {
      try {
        this.getAllProducts();
      } catch (error) {
        this.$toast.open({
          message:
            error?.response?.data?.message || this.$i18n.t("errorMessage"),
          type: "error",
        });
        console.log("error", error);
      }
    },
  },
  async mounted() {
    await this.getAllProducts();
  },
  async created() {
    this.searchProduct = this.$lodash.debounce(async () => {
      await this.searchProductData();
    }, 1000);
  },
};
</script>
<style scoped>
.openDropdown {
  height: auto;
  padding-top: 52px;
  opacity: 1;
}
/* .search-bar-section {
  width: calc(100% - 376px);
} */
@media screen and (max-width: 1023px) {
  .openDropdown {
    padding-top: 35px;
  }
  /* .search-bar-section {
    width: calc(100% - 291px);
  } */
}
@media screen and (max-width: 767px) {
  /* .search-bar-section {
    width: 100%;
  } */
}
input:focus ~ span svg path {
  stroke: #8d54ff;
}
</style>
