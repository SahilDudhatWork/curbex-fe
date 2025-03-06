<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 overflow-hidden"
  >
    <div class="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 relative">
      <!-- Close Icon -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- Success Icon -->
      <div class="flex justify-center mb-4">
        <div class="bg-[#29CC6A] rounded-full p-2">
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <!-- Success Text -->
      <h2 class="text-center text-[#29CC6A] text-xl mb-4">Payment Success!</h2>

      <!-- Amount -->
      <div class="text-center text-3xl font-bold mb-6">
        $ {{ $formatCurrency(paymentDetails?.finalPaymentAmount) }}
      </div>

      <!-- Payment Details Button -->

      <!-- Details Grid -->
      <div class="space-y-4 mb-6 border border-gray-200 rounded-xl p-4">
        <button
          class="w-full bg-black text-white rounded-xl py-4 mb-4 font-medium"
        >
          Payment Details
        </button>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Ref Number</span>
          <span class="text-black">{{ paymentDetails?.refNumber }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Payment Time</span>
          <span class="text-black">{{ paymentDetails?.paymentTime }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Payment Method</span>
          <span class="text-black">{{ paymentDetails?.paymentMethod }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Sender Name</span>
          <span class="text-black">{{ paymentDetails?.senderName }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Amount</span>
          <span class="text-black"
            >${{ $formatCurrency(paymentDetails?.amount) }}</span
          >
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-500">{{
            paymentDetails?.taxes?.type || "Estimated Tax"
          }}</span>
          <span class="text-black">
            ${{ $formatCurrency(paymentDetails?.taxesRate) || 0 }}</span
          >
        </div>

        <div class="flex justify-between text-sm">
          <span class="text-gray-500">Payment Status</span>
          <span class="bg-[#29CC6A] text-white px-3 py-1 rounded-full text-xs">
            Success
          </span>
        </div>
      </div>

      <!-- Action Buttons -->
      <button
        class="w-full border border-black rounded-[75px_75px_75px_75px] py-2 mb-4 text-black font-medium"
        @click="downloadInvoice"
      >
        Download PDF Receipt
      </button>

      <button
        @click="backToHome"
        class="w-full bg-[#FFA900] text-black rounded-xl py-3 font-bold text-[16px]"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PaymentSuccessModal",
  props: {
    paymentDetails: {
      type: Object,
      default: {},
    },
  },
  methods: {
    ...mapActions({
      generateInvoice: "order/generateInvoice",
    }),
    closeModal() {
      this.$emit("close");
    },
    downloadReceipt() {
      // Implement download logic
    },
    backToHome() {
      this.$router.push("/");
    },
    async downloadInvoice() {
      try {
        let response = await this.generateInvoice({
          id: this.paymentDetails?.id,
        });
        new Promise((resolve, reject) => {
          this.$fileDownload(response, `order-${this.paymentDetails?.id}.pdf`);
        });
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
  mounted() {
    document.body.style.overflow = "hidden";
  },
  beforeDestroy() {
    document.body.style.overflow = "auto";
  },
};
</script>
