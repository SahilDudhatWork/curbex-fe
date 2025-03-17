<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="p-5" v-click-outside="closeModal">
        <div class="">
          <div
            class="flex justify-between items-center flex-wrap md:flex-nowrap"
          >
            <p
              class="text-[18px] text-[#2C2C2E] font-Montserrat-Bold mb-3 md:mb-0"
            >
              Request Revision -
            </p>
            <p
              class="text-[16px] bg-[#FF364A] text-[#FFFFFF] rounded-[20px] p-[5px_20px]"
            >
              Only one free revision left
            </p>
          </div>
          <p
            class="text-[#121212] text-[16px] font-Montserrat-Medium my-4 mb-2"
          >
            Your notes
          </p>
          <textarea
            class="border border-[#F5F5F5] bg-[#FFFFFF] rounded-[18px] w-full p-[15px] resize-none text-[12px]"
            rows="4"
            v-model="notes"
            placeholder="Design a clean and eye-catching physical banner that highlights the key message with bold typography, vibrant visuals, and a clear call-to-action, ensuring high visibility from a distance."
          ></textarea>
          <div class="bg-[#F5F5F5] w-full h-[1px] my-5"></div>
          <p
            class="text-[#121212] text-[16px] font-Montserrat-Medium my-4 mb-2"
          >
            Uploaded Artworks
          </p>
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
        </div>
        <div class="bg-[#F5F5F5] w-full h-[1px] my-5"></div>
        <button
          @click="submit"
          class="mt-5 flex justify-center w-[90%] m-auto text-[16px] bg-[#121212] text-[#FFFFFF] rounded-[20px] min-w-[132px] p-[5px_20px] border border-[#121212]"
        >
          <span class="hidden lg:block">Submit</span>
          <span class="block lg:hidden">Submit</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      notes: "",
      uploadedFiles: [],
      errors: {},
    };
  },
  methods: {
    hireDesigner() {
      this.$router.push("/hire-designer");
    },
    uploadArtwork() {
      this.$router.push("/upload-artwork");
    },
    closeModal() {
      this.$emit("close");
    },
    submit() {
      let files = this.uploadedFiles.map((x) => x.file);
      let data = {
        images: files,
        note: this.notes,
      };
      this.$emit("submit", data);
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
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.modal {
  background: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px -3px 30px -12px #0000001a;
  max-width: 470px;
  width: 90%;
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 767px) {
  .border-seaction::after {
    content: "";
    border: solid transparent;
  }
  .topSectionXS {
    display: none;
  }
  .modal-overlay {
    position: relative;
    background: transparent;
    margin: 2rem 0;
    display: flex;
  }
  .modal {
    box-shadow: none;
    background: #ffffff;
  }
}
</style>
