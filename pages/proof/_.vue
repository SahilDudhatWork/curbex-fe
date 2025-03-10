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
            Order Number : {{ orderDetails?.id }}
          </p>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Client Name : {{ orderDetails?.customer?.firstName }}
            {{ orderDetails?.customer?.lastName }}
          </p>
          <p
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Address : {{ fullShippingAddress }}
          </p>
          <p
            v-if="orderDetails?.rentalStartDate && orderDetails?.rentalEndDate"
            class="text-[12px] md:text-[16px] text-[#2C2C2E] p-[0px_10px] w-fit mb-3"
          >
            Rental Dates :
            {{
              orderDetails?.rentalStartDate && orderDetails?.rentalEndDate
                ? `${$moment.formatMonthDay(
                    orderDetails?.rentalStartDate
                  )} - ${$moment.formatMonthDay(orderDetails?.rentalEndDate)}`
                : ""
            }}
          </p>
        </div>
      </div>
      <div class="container px-6 mx-auto">
        <div class="border-b border-[#F5F5F5] mb-7 pb-3">
          <div
            class="flex items-start justify-between flex-wrap lg:flex-nowrap"
          >
            <div v-if="orderDetails?.notes" class="w-full lg:w-[60%]">
              <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
                Signage description
              </p>
              <p
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#FCFCFC] rounded-[20px] p-7"
              >
                {{ orderDetails?.notes }}
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
            <div
              v-if="latestAdminNote?.images && latestAdminNote?.images.length"
              class="w-full lg:w-[60%]"
            >
              <div
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#E3E3E3] bg-[#E3E3E3] rounded-[20px] mt-6"
              >
                <p
                  class="mb-[-15px] mt-[-16px] z-[2] relative p-[4px_15px] lg:p-[4px_23px] w-fit rounded-[30px_20px_20px_0px] text-[15px] text-[#FFFFFF] bg-[#FF364A]"
                >
                  <span>New Proof</span>
                </p>
                <img
                  v-for="(item, index) in latestAdminNote?.images"
                  :key="index"
                  :src="item.imageUrl || '/Images/Proof/newProof.png '"
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
            <div
              v-if="latestAdminNote && latestAdminNote?.note"
              class="w-full lg:w-[38%]"
            >
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
                >{{ latestAdminNote?.note }}</pre
              >
              <p
                v-if="latestAdminNote?.createdAt"
                class="text-right text-[15px] text-[#000000] py-5"
              >
                {{ $moment.formatTime(latestAdminNote?.createdAt) }} -
                {{ $moment.formatStartDate(latestAdminNote?.createdAt) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="sortedChatNotes && sortedChatNotes.length"
        class="container px-6 mx-auto"
      >
        <p
          class="font-Montserrat-Medium font-[600] w-fit bg-[#FFA900] text-[#121212] text-[16px] md:text-[20px] rounded-full py-[4px] px-6 mb-[29px]"
        >
          For Rent
        </p>
        <!-- <p
          class="font-Montserrat-Regular w-fit bg-[#121212] text-[#FFFFFF] text-[16px] rounded-full py-[4px] px-6 mb-[10px]"
        >
          Proof 1
        </p> -->
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
        <div
          v-for="(item, index) in sortedChatNotes"
          class="pb-3 border-seaction"
        >
          <p
            class="relative z-[5] text-[16px] text-[#121212] pb-5 pt-6 flex items-center font-[600]"
          >
            <span
              :class="
                item.type != 'customer' ? 'bg-[#FFA900]' : 'bg-[#8D54FF] '
              "
              class="w-[22px] h-[22px] block mr-[10px] rounded-[50px]"
            ></span>
            {{
              item.type != "customer"
                ? "Sent by Curbex designer"
                : "Sent by You"
            }}
          </p>
          <div
            class="flex items-start justify-between flex-wrap lg:flex-nowrap"
          >
            <div class="w-full lg:w-[60%]">
              <pre
                class="text-[12px] md:text-[16px] text-[#000000] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[20px] p-7 text-wrap font-Montserrat-Regular leading-[26px]"
                >{{ item?.note }}</pre
              >
              <p
                v-if="item?.createdAt"
                class="text-right text-[15px] text-[#000000] py-5"
              >
                {{ $moment.formatTime(item?.createdAt) }} -
                {{ $moment.formatStartDate(item?.createdAt) }}
              </p>
            </div>
            <div
              v-if="item.type != 'customer'"
              class="w-full lg:w-[38%] hidden lg:block"
            >
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
            <div
              v-if="item.type == 'customer'"
              class="w-full lg:w-[38%] mb-[3.5rem] hidden lg:block"
            >
              <p class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium">
                Reference Images
              </p>
              <ReferenceImagesSlide />
            </div>
          </div>
        </div>
        <!-- <div v-if="item.type == 'customer'" class="pb-[3rem] border-seaction">
            <p
              class="relative z-[3] text-[16px] text-[#121212] pb-5 pt-6 flex items-center font-[600]"
            >
              <span
                class="w-[22px] h-[22px] bg-[#8D54FF] block mr-[10px] rounded-[50px]"
              ></span>
              Sent by You
            </p>
            <div
              class="flex items-end justify-between flex-wrap lg:flex-nowrap"
            >
              <div class="w-full lg:w-[60%]">
                <pre
                  class="text-[12px] md:text-[16px] text-[#000000] border border-[#F5F5F5] bg-[#F5F5F5] rounded-[20px] p-7 text-wrap font-Montserrat-Regular leading-[26px]"
                  >{{ item?.note }}</pre
                >
                <p
                  v-if="item?.createdAt"
                  class="text-right text-[15px] text-[#000000] py-5"
                >
                  {{ $moment.formatTime(item?.createdAt) }} -
                  {{ $moment.formatStartDate(item?.createdAt) }}
                </p>
              </div>
              <div class="w-full lg:w-[38%] mb-[3.5rem] hidden lg:block">
                <p
                  class="text-[18px] text-[#2C2C2E] pb-5 font-Montserrat-Medium"
                >
                  Reference Images
                </p>
                <ReferenceImagesSlide />
              </div>
            </div>
          </div> -->
      </div>
    </div>
    <div v-if="isApproved">
      <ApprovedModal @close="isApproved = false" />
    </div>
    <div v-if="isRequest">
      <RequestRevisionModal @close="isRequest = false" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  middleware: "auth",

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
  async asyncData({ params }) {
    return {
      orderId: params.pathMatch,
    };
  },
  computed: {
    ...mapGetters({
      orderDetails: "order/getOrderDetails",
      orderProof: "order/getOrderProof",
    }),
    fullShippingAddress() {
      if (!this.orderDetails) return "";

      const {
        shippingStreet,
        shippingCity,
        shippingProvince,
        shippingPostalCode,
        shippingCountry,
      } = this.orderDetails;

      return `${shippingStreet}, ${shippingCity}, ${shippingProvince} ${shippingPostalCode}, ${shippingCountry}`;
    },
    latestAdminNote() {
      if (!this.orderProof?.notes) return null;

      return (
        this.orderProof.notes
          .filter((note) => note.type.toLowerCase() != "customer") // Exclude customer notes
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] ||
        null
      ); // Get latest note
    },
    sortedChatNotes() {
      let data = {
        id: 23,
        revisionsAvailable: 1,
        status: "Revising",
        createdAt: "2025-03-05T15:10:49.257Z",
        updatedAt: "2025-03-05T15:10:49.257Z",
        deletedAt: null,
        notes: [
          {
            id: 9,
            proofId: 23,
            type: "customer",
            note: "test2",
            createdAt: "2025-03-05T15:10:49.291Z",
            deletedAt: null,
            images: [
              {
                id: 11,
                proofNoteId: 9,
                imageUrl:
                  "https://curbex-storage.s3.amazonaws.com/cart/32/MiniB-19d5090e-50c8-4d28-8e33-eef55c9d85f2.jpg",
                createdAt: "2025-03-05T15:10:49.316Z",
              },
            ],
          },
          {
            id: 10,
            proofId: 23,
            type: "customer",
            note: "Tresting",
            createdAt: "2025-03-05T15:12:31.425Z",
            deletedAt: null,
            images: [
              {
                id: 12,
                proofNoteId: 10,
                imageUrl:
                  "https://curbex-storage.s3.amazonaws.com/proofs/49/MiniB-80438ee6-6da4-463c-9742-33df24c3a389.jpg",
                createdAt: "2025-03-05T15:12:31.457Z",
              },
            ],
          },
          {
            id: 10,
            proofId: 23,
            type: "admin",
            note: "Tresting",
            createdAt: "2025-03-05T15:09:31.425Z",
            deletedAt: null,
            images: [
              {
                id: 12,
                proofNoteId: 10,
                imageUrl:
                  "https://curbex-storage.s3.amazonaws.com/proofs/49/MiniB-80438ee6-6da4-463c-9742-33df24c3a389.jpg",
                createdAt: "2025-03-05T15:12:31.457Z",
              },
            ],
          },
          {
            id: 10,
            proofId: 23,
            type: "admin",
            note: "Tresting",
            createdAt: "2025-03-05T15:20:31.425Z",
            deletedAt: null,
            images: [
              {
                id: 12,
                proofNoteId: 10,
                imageUrl:
                  "https://curbex-storage.s3.amazonaws.com/proofs/49/MiniB-80438ee6-6da4-463c-9742-33df24c3a389.jpg",
                createdAt: "2025-03-05T15:12:31.457Z",
              },
            ],
          },
          {
            id: 10,
            proofId: 23,
            type: "admin",
            note: "Tresting",
            createdAt: "2025-03-05T12:12:31.425Z",
            deletedAt: null,
            images: [
              {
                id: 12,
                proofNoteId: 10,
                imageUrl:
                  "https://curbex-storage.s3.amazonaws.com/proofs/49/MiniB-80438ee6-6da4-463c-9742-33df24c3a389.jpg",
                createdAt: "2025-03-05T15:12:31.457Z",
              },
            ],
          },
        ],
      };
      if (!data?.notes) return null;

      return [...data.notes].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
  },
  data() {
    return {
      isApproved: false,
      isRequest: false,
    };
  },
  methods: {
    ...mapActions({
      fetchOrderDetails: "order/fetchOrderDetails",
      fetchProofByOrder: "order/fetchProofByOrder",
    }),
    async getOrderDetails() {
      try {
        await this.fetchOrderDetails({ id: this.orderId });
      } catch (error) {
        this.$toast.open({
          message: error?.response?.data?.message || "Something went wrong",
          type: "error",
        });
        console.log("error", error);
      }
    },
    async getProofByOrder() {
      try {
        await this.fetchProofByOrder({ id: this.orderId });
      } catch (error) {
        this.$toast.open({
          message: error?.response?.data?.message || "Something went wrong",
          type: "error",
        });
        console.log("error", error);
      }
    },
  },
  async mounted() {
    await this.getOrderDetails();
    await this.getProofByOrder();
  },
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
