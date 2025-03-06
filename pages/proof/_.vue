<template>
  <div>
    <div :class="isRequest || isApproved ? 'topSectionXS' : ''" class="">
      <div class="container px-6 mx-auto">
        <div class="border-b border-[#F5F5F5] mb-7 pb-3">
          <h2
            class="text-[18px] md:text-[24px] font-[700] text-[#121212] pt-[3rem] pb-3 font-Montserrat-Bold"
          >
            Mini B
          </h2>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] bg-[#F5F5F5] w-fit p-[5px_10px] rounded-[33px] mb-3"
          >
            Order Number : 1234567
          </p>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Client Name : Ryan Reynolds
          </p>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Address : 310 Bayfield
          </p>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Rental Dates : 20.09.2024 - 20.09.2025
          </p>
        </div>
      </div>
      <div class="container px-6 mx-auto">
        <div class="border-b border-[#F5F5F5] mb-7 pb-3">
          <div
            class="flex items-start justify-between flex-wrap lg:flex-nowrap"
          >
            <div class="w-full lg:w-[60%]">
              <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
                Signage description
              </p>
              <p
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#FCFCFC] rounded-[20px] p-7"
              >
                We’d like to order a mini B with the message “Upgrade Your Space
                – ABC Home Furnishings!” on a blue gradient background,
                featuring our logo and a living room image. Include a yellow
                call-to-action and external LED lighting. Installation on
                Downtown Main Street is needed by October 20, 2024, with 50%
                payment upfront.
              </p>
            </div>
            <div class="w-full lg:w-[38%] pt-[2rem] lg:pt-0">
              <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
                Reference Images
              </p>
              <ReferenceImagesSlide />
            </div>
          </div>
        </div>
      </div>
      <div class="container px-6 mx-auto">
        <div class="border-b border-[#F5F5F5] mb-7 pb-3">
          <div
            class="flex items-start justify-between flex-wrap lg:flex-nowrap"
          >
            <div class="w-full lg:w-[60%]">
              <div
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#E3E3E3] rounded-[20px] mt-6"
              >
                <p
                  class="mb-[-15px] mt-[-16px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[15px] text-[#FFFFFF] bg-[#FF364A]"
                >
                  <span>New Proof</span>
                </p>
                <img
                  src="/Images/Proof/newProof.png"
                  alt=""
                  class="rounded-[20px]"
                />
              </div>
              <div class="flex items-center pt-6">
                <button
                  @click="(isApproved = true), (isRequest = false)"
                  class="text-[12px] md:text-[16px] bg-[#29CC6A] text-[#FFFFFF] rounded-[20px] mr-3 min-w-[132px] p-[5px_20px] border border-[#29CC6A]"
                >
                  Approve
                </button>
                <button
                  @click="(isRequest = true), (isApproved = false)"
                  class="text-[12px] md:text-[16px] bg-[#FFFFFF] text-[#121212] rounded-[20px] mr-3 min-w-[132px] p-[5px_20px] border border-[#121212]"
                >
                  Request Revision
                </button>
              </div>
            </div>
            <div class="w-full lg:w-[38%]">
              <p
                class="text-[16px] text-[#121212] pb-5 pt-6 font-[500] flex items-center"
              >
                <span
                  class="w-[22px] h-[22px] bg-[#DAC8FF] block mr-[10px] rounded-[50px]"
                ></span>
                Curbex designer Note
              </p>
              <pre
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[20px] p-7 text-wrap font-Montserrat-Regular leading-[26px]"
              >
Hi,
    Thank you for the detailed feedback! I’ve made the requested changes:
    1.	Headline Font Size: Increased by 10% for better visibility.
    2.	Logo Placement: Centered the logo horizontally.
    3.	Color Contrast: Adjusted the purple text to a darker shade (#5A3DA1) and added a subtle white outline for contrast.</pre
              >
              <p class="text-right text-[15px] text-[#000000] py-5">
                10:50 AM - 2024-08-11
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-6 mx-auto">
        <p
          class="font-Montserrat-Medium font-[600] w-fit bg-[#FFA900] text-[#121212] text-[16px] md:text-[20px] rounded-full py-[4px] px-6 mb-[29px]"
        >
          For Rent
        </p>
        <p
          class="font-Montserrat-Regular w-fit bg-[#121212] text-[#FFFFFF] text-[16px] rounded-full py-[4px] px-6 mb-[10px]"
        >
          Proof 1
        </p>
        <div>
          <div class="w-full lg:hidden">
            <p class="text-[16px] text-[#121212] font-[500] flex items-center">
              <span
                class="w-[22px] h-[22px] bg-[#FF364A] block mr-[10px] rounded-[50px]"
              ></span>
              Only one free revision left
            </p>
            <div
              class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#E3E3E3] rounded-[20px] mt-5 h-[275px] overflow-hidden"
            >
              <img
                src="/Images/Proof/OnlyOneFree.png"
                alt=""
                class="h-full w-full object-cover rounded-[20px] grayscale-[1] hover:grayscale-0"
              />
            </div>
          </div>
          <div class="w-full lg:hidden pt-5">
            <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
              Reference Images
            </p>
            <ProofSlider />
          </div>
        </div>
        <div class="pb-3 border-seaction">
          <p
            class="relative z-[5] text-[16px] text-[#121212] pb-5 pt-6 flex items-center font-[600]"
          >
            <span
              class="w-[22px] h-[22px] bg-[#FFA900] block mr-[10px] rounded-[50px]"
            ></span>
            Sent by Curbex designer
          </p>
          <div
            class="flex items-start justify-between flex-wrap lg:flex-nowrap"
          >
            <div class="w-full lg:w-[60%]">
              <pre
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[20px] p-7 text-wrap font-Montserrat-Regular leading-[26px]"
              >
Hi
    Here'’'s the first proof of your signage design . I’ve attached the mockup, dimensions, and material details.
    •	Design Highlights:
    •	The color palette aligns with your branding (HEX: #8D54FF for accents).
    •	The headline font to maintain readability.
    •	Mockup showcases how the sign will appear in daylight and evening settings.

    Please review and let me know if there are any adjustments you’d like. I’ve included an annotation tool on the proofing page for easy feedback.</pre
              >
              <p class="text-right text-[15px] text-[#000000] py-5">
                10:50 AM - 2024-08-11
              </p>
            </div>
            <div class="w-full lg:w-[38%] hidden lg:block">
              <p
                class="text-[16px] text-[#121212] font-[500] flex items-center"
              >
                <span
                  class="w-[22px] h-[22px] bg-[#FF364A] block mr-[10px] rounded-[50px]"
                ></span>
                Only one free revision left
              </p>
              <div
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#E3E3E3] rounded-[20px] mt-5 h-[275px] overflow-hidden"
              >
                <img
                  src="/Images/Proof/OnlyOneFree.png"
                  alt=""
                  class="h-full w-full object-cover rounded-[20px] grayscale-[1] hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="pb-[3rem] border-seaction">
          <p
            class="relative z-[3] text-[16px] text-[#121212] pb-5 pt-6 flex items-center font-[600]"
          >
            <span
              class="w-[22px] h-[22px] bg-[#8D54FF] block mr-[10px] rounded-[50px]"
            ></span>
            Sent by You
          </p>
          <div class="flex items-end justify-between flex-wrap lg:flex-nowrap">
            <div class="w-full lg:w-[60%]">
              <pre
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[20px] p-7 text-wrap font-Montserrat-Regular leading-[26px]"
              >
Hi
    Here'’'s the first proof of your signage design . I’ve attached the mockup, dimensions, and material details.
    •	Design Highlights:
    •	The color palette aligns with your branding (HEX: #8D54FF for accents).
    •	The headline font to maintain readability.
    •	Mockup showcases how the sign will appear in daylight and evening settings.

    Please review and let me know if there are any adjustments you’d like. I’ve included an annotation tool on the proofing page for easy feedback.</pre
              >
              <p class="text-right text-[15px] text-[#000000] py-5">
                10:50 AM - 2024-08-11
              </p>
            </div>
            <div class="w-full lg:w-[38%] mb-[3.5rem] hidden lg:block">
              <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
                Reference Images
              </p>
              <ReferenceImagesSlide />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isApproved">
      <ApprovedModal />
    </div>
    <div v-if="isRequest">
      <RequestRevisionModal />
    </div>
  </div>
</template>
<script>
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
      isApproved: false,
      isRequest: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
.border-seaction {
  position: relative;
}
.border-seaction::after {
  content: "";
  width: 45px;
  position: absolute;
  top: 35px;
  left: -30px;
  height: calc(100% + 2px);
  border: solid #c3c3c3;
  border-width: 1px 0 1px 1px;
  border-radius: 17px;
  z-index: 0;
}
.border-seaction:last-child::after {
  content: "";
  width: 45px;
  position: absolute;
  top: 33px;
  left: -30px;
  height: calc(100% + 2px);
  border: solid #c3c3c3;
  border-width: 0px 0 0px 0px;
  border-radius: 17px;
  z-index: 0;
}
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
