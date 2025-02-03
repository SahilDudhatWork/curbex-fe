<template>
  <div class="max-w-[995px] mx-auto">
    <div class="flex justify-between flex-wrap md:flex-nowrap">
      <div
        class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[20px] w-full md:w-[35%] h-fit mb-5 md:mb-0"
      >
        <div class="item transition-all duration-300 rent-produt">
          <div class="border-2 border-[#F3F3F3] rounded-[20px] relative">
            <img
              :src="heroImage || '/Images/Product/product-1.png'"
              alt=""
              class="rounded-[20px] transition-opacity duration-300"
            />
            <span
              class="border-2 bg-[#FCFCFC] border-[#F3F3F3] w-[28px] md:w-[40px] h-[28px] md:h-[40px] block absolute top-[10px] right-[10px] rounded-full flex justify-center items-center pointer"
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
                  stroke="#C3C3C3"
                  stroke-width="1.21817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div class="pt-3">
            <div class="">
              <div class="flex items-center pb-2">
                <p class="text-[18px] text-[#121212] font-semibold mr-3">
                  {{ product.name }}
                </p>
                <p
                  class="text-[14px] text-[#121212] bg-[#FFEBC3] w-fit relative rounded-[5px] p-[1px_6px] border border-[#FFFFFF]"
                >
                  {{ product.type }}
                </p>
              </div>
              <div class="flex justify-between">
                <p v-if="product?.discount > 0">
                  <span
                    class="bg-[#29CC6A] rounded-[5px] text-[#FFFFFF] text-[14px] font-normal font-Montserrat-Medium p-[2px_8px]"
                    >Save 18%</span
                  >
                </p>
                <div class="flex">
                  <p
                    v-if="product?.discount > 0"
                    class="mr-5 text-[14px] text-[#A0A0A0] font-semibold line-through"
                  >
                    ${{ product?.price }}
                  </p>
                  <p class="text-[14px] text-[#121212] font-semibold">
                    ${{ product?.price }}
                  </p>
                </div>
              </div>
            </div>
            <button
              @click="downloadFileItem"
              class="rounded-full bg-[#FFFFFF] border border-[#121212] text-[#121212] text-[14px] w-full mt-3 text-center p-2 font-semibold"
            >
              Download Artwork Specs
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-[60%]">
        <div
          class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[15px]"
        >
          <p class="text-[14px] flex items-center">
            <span class="m-1 mr-2 w-[23px] h-[23px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-auto"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM8.64 12.75L4.5 9.5925L5.8725 7.815L8.355 9.75L11.7375 5.94L13.4175 7.44L8.64 12.75Z"
                  fill="#29CC6A"
                />
              </svg>
            </span>
            Receive proof within 1-2 business days
          </p>
          <p class="text-[14px] flex items-center">
            <span class="m-1 mr-2 w-[23px] h-[23px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-auto"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM8.64 12.75L4.5 9.5925L5.8725 7.815L8.355 9.75L11.7375 5.94L13.4175 7.44L8.64 12.75Z"
                  fill="#29CC6A"
                />
              </svg>
            </span>
            3 Revisions
          </p>
        </div>

        <p class="border-b border-[#F5F5F5] my-4"></p>
        <p class="text-[#121212] text-[14px] pb-2">
          Share some design instructions
        </p>
        <textarea
          v-model="notes"
          :class="{ 'border-[red]': errors?.notes }"
          class="border border-[#F5F5F5] bg-[#FCFCFC] rounded-[18px] w-full p-[15px] resize-none text-[12px]"
          rows="4"
          placeholder="Design a clean and eye-catching physical banner that highlights the key message with bold typography, vibrant visuals, and a clear call-to-action, ensuring high visibility from a distance."
        ></textarea>
        <span
          v-if="errors?.notes"
          class="text-[red] text-[12px] pl-[3px] block w-full"
          >{{ errors?.notes }}</span
        >

        <p class="border-b border-[#F5F5F5] my-4"></p>
        <div class="flex flex-wrap items-start">
          <div
            v-for="(file, index) in uploadedFiles"
            :key="index"
            class="w-[105px] lg:w-[125px] relative group cursor-pointer mr-3 mb-3"
          >
            <div
              class="w-[105px] lg:w-[125px] h-[105px] lg:h-[125px] overflow-hidden rounded-[18px]"
            >
              <img
                :src="file.preview"
                alt=""
                class="w-full object-cover h-full"
              />
            </div>
            <p class="text-[10px] text-[#C3C3C3] text-center py-2">
              {{ file.name }}
            </p>
            <p
              @click="removeFile(index)"
              class="hidden w-[105px] lg:w-[125px] h-[105px] lg:h-[125px] overflow-hidden rounded-[18px] bg-[#00000060] absolute top-0 group-hover:flex items-center justify-center"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_4849_59457)">
                  <rect
                    x="4.5"
                    y="0.5"
                    width="22.8936"
                    height="22.8936"
                    rx="11.4468"
                    fill="white"
                    fill-opacity="0.41"
                    stroke="#FCFCFC"
                  />
                  <path
                    d="M12.7637 9.14844L19.2914 15.6762"
                    stroke="#FCFCFC"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.7637 15.291L19.2914 8.76329"
                    stroke="#FCFCFC"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4849_59457"
                    x="0"
                    y="0"
                    width="31.8945"
                    height="31.8936"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4849_59457"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4849_59457"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </p>
          </div>
          <div
            class="w-[105px] lg:w-[125px] relative group cursor-pointer mr-3 opacity-[0.5] hover:opacity-[1]"
          >
            <p
              @click="uploadFileItem"
              class="w-[105px] lg:w-[125px] h-[105px] lg:h-[125px] overflow-hidden rounded-[18px] border border-[#121212] flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  stroke="#121212"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="22.8936"
                  height="22.8936"
                  rx="11.4468"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <path
                  d="M11.9473 7.60352V16.8351"
                  stroke="#121212"
                  stroke-linecap="round"
                />
                <path
                  d="M11.9473 7.60352V16.8351"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M11.9473 7.60352V16.8351"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M11.9473 7.60352V16.8351"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M11.9473 7.60352V16.8351"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.60352 11.9473L16.8351 11.9473"
                  stroke="#121212"
                  stroke-linecap="round"
                />
                <path
                  d="M7.60352 11.9473L16.8351 11.9473"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.60352 11.9473L16.8351 11.9473"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.60352 11.9473L16.8351 11.9473"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.60352 11.9473L16.8351 11.9473"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <p class="border-b border-[#F5F5F5] my-4"></p>

        <!-- <p class="text-[#121212] text-[14px]">Add reference links</p>
        <div class="flex items-center py-2">
          <input
            type="url"
            class="border border-[#F5F5F5] bg-[#FCFCFC] rounded-[18px] w-full p-[7px_15px] text-[12px] mr-4 focus:border-[#4F8DFF] outline-none"
            rows="4"
            placeholder="https://"
          />
          <span>
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="group"
            >
              <rect
                x="0.5"
                y="0.5"
                width="29"
                height="28"
                rx="14"
                fill="#F5F5F5"
                stroke="#C3C3C3"
                class="group-hover:stroke-[#DAC8FF] group-hover:fill-[#DAC8FF]"
              />
              <path
                d="M15.3672 9.44434V21.0002"
                stroke="#C3C3C3"
                stroke-linecap="round"
                class="group-hover:stroke-[#121212]"
              />
              <path
                d="M10.1055 14.8818L21.2886 14.8818"
                stroke="#C3C3C3"
                stroke-linecap="round"
                class="group-hover:stroke-[#121212]"
              />
            </svg>
          </span>
        </div> -->
        <p class="border-b border-[#F5F5F5] my-4"></p>
        <button
          @click="productAddToCart"
          class="bg-[#FFA900] text-[#121212] rounded-[6px] w-full text-[18px] p-[9px]"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  layout: "designMethodLayout",
  middleware: "designMethodAuth",
  data() {
    return {
      notes: "",
      uploadedFiles: [],
      maxFileSize: 5 * 1024 * 1024, // 5MB in bytes
      errors: {},
    };
  },
  computed: {
    ...mapGetters({
      product: "product/getSingleProductData",
      cartDetail: "product/getCartItem",
    }),
    heroImage() {
      return this.product.images && this.product.images.length
        ? this.product.images[0].imageUrl
        : null;
    },
  },
  methods: {
    ...mapActions({
      addToCart: "product/addToCart",
      updateCartItem: "product/updateCartItem",
      fetchCartItems: "product/fetchCartItems",
    }),
    async productAddToCart() {
      try {
        const cartData = this.cartDetail?.cartItems?.find(
          (x) => x.productId === this.product.id
        );

        if (cartData?.id) {
          await this.addDesignerToCart(cartData.id, cartData.quantity);
        } else {
          await this.addToCart({ productId: this.product.id, quantity: 1 });
          this.$toast.open({
            message: this.$i18n.t("productAddedToCartMessage"),
          });
          await this.fetchCartItems();

          const newCartData = this.cartDetail?.cartItems?.find(
            (x) => x.productId === this.product.id
          );
          if (newCartData?.id) {
            await this.addDesignerToCart(newCartData.id, newCartData.quantity);
          }
        }
      } catch (error) {
        this.$toast.open({
          message: error?.response?.data?.message || "Something went wrong",
          type: "error",
        });
      }
    },
    async addDesignerToCart(cartItemId, quantity) {
      if (this.notes == "") {
        this.errors = { notes: "Please add some notes" };
        return;
      }
      const formData = new FormData();
      this.uploadedFiles.forEach((fileObj, index) => {
        formData.append(`images[${index}]`, fileObj.file);
      });

      // Add other data
      formData.append("notes", this.notes);
      formData.append("id", cartItemId);
      formData.append("requestedDesigner", 1);
      formData.append("quantity", quantity);
      await this.updateCartItem(formData);
      this.$toast.open({
        message: this.$i18n.t("designerAddedToProductMessage"),
      });
    },
    downloadFileItem() {
      if (this.product.artworkSpecsURL && this.product.artworkSpecsURL != "") {
        const fileName = this.product.artworkSpecsURL.split("/").pop();
        this.$downloadFile({
          src: this.product.artworkSpecsURL,
          name: fileName,
        });
      }
    },
    uploadFileItem() {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.multiple = true;

      fileInput.onchange = (e) => {
        const files = Array.from(e.target.files);

        files.forEach((file) => {
          // Check file size
          //   if (file.size > this.maxFileSize) {
          //     alert(`File ${file.name} is too large. Maximum size is 5MB`);
          //     return;
          //   }

          // Check if file is an image
          if (!file.type.startsWith("image/")) {
            this.$toast.open({
              message: this.$i18n.t("fileNotImageMessage"),
              type: "error",
            });
            return;
          }

          // Create preview URL
          const reader = new FileReader();
          reader.onload = (e) => {
            this.uploadedFiles.push({
              file: file,
              name: file.name,
              preview: e.target.result,
            });
          };
          reader.readAsDataURL(file);
        });
      };

      fileInput.click();
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
  },
  beforeDestroy() {
    // Clean up any object URLs to prevent memory leaks
    this.uploadedFiles.forEach((file) => {
      if (file.preview.startsWith("blob:")) {
        URL.revokeObjectURL(file.preview);
      }
    });
  },
};
</script>
