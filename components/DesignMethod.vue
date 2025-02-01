<!-- components/LogoutModal.vue -->
<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <p class="bg-[#8D54FF] text-[18px] text-[#FFFFFF] p-[15px] text-center">
        Select Design Method
      </p>
      <div class="p-5">
        <div class="flex items-center">
          <div
            @click="hireDesigner"
            class="border border-[#F5F5F5] rounded-[20px] overflow-hidden m-2 grayscale hover:grayscale-0 cursor-pointer"
          >
            <p
              class="bg-[#121212] text-[16px] text-[#FFFFFF] p-[8px] text-center"
            >
              Hire A Designer
            </p>
            <img src="/Images/Product/designer.png" alt="" />
            <div class="p-2 bg-[#F5F5F5]">
              <p class="text-[12px] flex items-center">
                <span class="m-1 mr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM8.64 12.75L4.5 9.5925L5.8725 7.815L8.355 9.75L11.7375 5.94L13.4175 7.44L8.64 12.75Z"
                      fill="#29CC6A"
                    />
                  </svg>
                </span>
                1 on 1 consultations
              </p>
              <p class="text-[12px] flex items-center">
                <span class="m-1 mr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
          </div>
          <div
            @click="uploadArtwork"
            class="border border-[#F5F5F5] rounded-[20px] overflow-hidden m-2 grayscale hover:grayscale-0 cursor-pointer"
          >
            <p
              class="bg-[#121212] text-[16px] text-[#FFFFFF] p-[8px] text-center"
            >
              Upload Artwork
            </p>
            <img src="/Images/Product/artwork.png" alt="" />
            <div class="p-2 bg-[#F5F5F5]">
              <p class="text-[12px] flex items-center">
                <span class="m-1 mr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM8.64 12.75L4.5 9.5925L5.8725 7.815L8.355 9.75L11.7375 5.94L13.4175 7.44L8.64 12.75Z"
                      fill="#29CC6A"
                    />
                  </svg>
                </span>
                Free design proofing
              </p>
              <p class="text-[12px] flex items-center">
                <span class="m-1 mr-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0ZM8.64 12.75L4.5 9.5925L5.8725 7.815L8.355 9.75L11.7375 5.94L13.4175 7.44L8.64 12.75Z"
                      fill="#29CC6A"
                    />
                  </svg>
                </span>
                Perfect print
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        @click="$emit('close')"
        class="text-center mb-[14px] text-[12px] underline cursor-pointer"
      >
        Skip for now
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hireDesigner() {
      this.$router.push("/hire-designer");
    },
    uploadArtwork() {
      this.$router.push("/upload-artwork");
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
  z-index: 99;
}
.modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0px -3px 30px -12px #0000001a;
  max-width: 539px;
  width: 90%;
  position: relative;
  overflow: hidden;
}
</style>
