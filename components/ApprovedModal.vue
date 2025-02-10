
<template>
    <div class="modal-overlay">
      <div class="modal">
        <div class="p-5">
          <div class="flex justify-center">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9811 0C15.3635 0 11.8272 1.14365 8.81935 3.28634C5.81147 5.42903 3.46711 8.47451 2.08273 12.0377C0.698355 15.6008 0.336139 19.5216 1.04189 23.3043C1.74764 27.0869 3.48965 30.5615 6.04765 33.2886C8.60564 36.0157 11.8647 37.8729 15.4128 38.6253C18.9608 39.3777 22.6385 38.9916 25.9806 37.5156C29.3228 36.0397 32.1794 33.5404 34.1892 30.3336C36.199 27.1269 37.2718 23.3567 37.2718 19.5C37.2718 14.3283 35.3447 9.36838 31.9146 5.71142C28.4844 2.05446 23.8321 0 18.9811 0ZM18.2495 27.625L9.83577 20.7837L12.6251 16.9325L17.6703 21.125L24.5445 12.87L27.9588 16.12L18.2495 27.625Z" fill="#29CC6A"/>
            </svg>
          </div>
          <p class="text-center text-[20px] text-[#29CC6A] py-4">Your proof is approved!</p>
          <p class="text-center text-[16px] text-[#000000] pb-4 font-Montserrat-Medium">Our team is currently in the process of finalizing your order.</p>
          <button class="flex justify-center w-[90%] m-auto text-[16px] bg-[#121212] text-[#FFFFFF] rounded-[20px] min-w-[132px] p-[5px_20px] border border-[#121212]">Back to User Dashboard</button>
        </div>
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
      z-index: 9;
    }
    .modal {
      background: #FCFCFC;
      border-radius: 16px;
      box-shadow: 0px -3px 30px -12px #0000001a;
      max-width: 470px;
      width: 90%;
      position: relative;
      overflow: hidden;
    }
    @media screen and (max-width:767px){
        .border-seaction::after{
            content: "";
            border: solid transparent;
        }
        .topSectionXS{
            display: none;
        }
        .modal-overlay{
            position: relative;
            background: transparent;
            margin: 2rem 0;
            display: flex;
        }
        .modal{
            box-shadow: none;
            background: #FFFFFF;
        }
    }
  </style>
  