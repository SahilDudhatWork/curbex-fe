<template>
  <div class="max-w-[1200px] md:p-6 space-y-8 lg:pb-[4rem]">
    <!-- My Cards Section -->
    <div>
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">My Cards</h2>
      <div class="max-w-[730px]">
        <Carousel
          :autoplay="false"
          :autoplayTimeout="3000"
          :loop="false"
          :nav="false"
          :dots="false"
          :perPageCustom="perPageCustom"
        >
          <Slide v-for="item in cards" :key="item.id" class="relative p-2">
            <div
              class="min-w-[270px] md:min-w-[340px] p-3 md:p-6 rounded-[20px] text-white w-[100%] h-[175px] md:h-[225px] max-w-[357px] flex flex-col justify-between"
              style="
                background: url('/Images/Profile/CardBG.png') no-repeat center
                  center / cover;
              "
            >
              <div class="flex justify-between items-center mb-8">
                <img
                  src="/Images/Profile/CardChips.png"
                  alt="CardChips"
                  class="h-[27px]"
                />
                <img
                  :src="getCardTypeImage(item?.type)"
                  :alt="item?.type"
                  class="h-[17px]"
                />
              </div>
              <div
                class="text-[17px] md:text-[20px] font-bold mb-4 tracking-[5px]"
              >
                {{ item?.card }}
              </div>
              <div class="flex justify-between items-center">
                <div>
                  <div class="text-[10px] md:text-[12px] pb-[5px]">
                    Card Holder Name
                  </div>
                  <div class="text-[16px] md:text-[18px] font-bold">
                    {{ item?.nameOnCard }}
                  </div>
                </div>
                <div>
                  <div class="text-[8px] md:text-[10px] pb-[5px]">
                    Expiry Date
                  </div>
                  <div class="text-[14px] md:text-[16px]">
                    {{ item?.expdate }}
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

    <!-- Saved Payment Options -->
    <div class="pb-[2rem] pt-[1rem] lg:py-[2rem]">
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">
        Saved Payment Options
      </h2>
      <div class="flex gap-2">
        <img
          v-for="cardType in uniqueCardTypes"
          :key="cardType"
          :src="getSmallCardTypeImage(cardType)"
          :alt="cardType"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain"
        />
        <img
          @click="addPaymentToggle"
          src="/Images/Profile/AddButton.png"
          alt="Add"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain cursor-pointer"
        />
      </div>
      <div v-if="paymentDetailsShow" class="pt-5">
        <p class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]">
          Add new payment method
        </p>
        <div class="p-[15px_0px] mb-5">
          <div class="flex flex-col gap-1 w-full mb-5">
            <label
              class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
              >Name on the card</label
            >
            <input
              type="text"
              placeholder="Ryan Reynolds"
              v-model="paymentCard.nameOnCard"
              :class="{ 'border-[red]': cardError?.nameOnCard }"
              class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
            />
            <span
              v-if="cardError?.nameOnCard"
              class="text-[red] text-[12px] pl-[3px]"
              >{{ cardError?.nameOnCard }}</span
            >
          </div>
          <div class="flex flex-col gap-1 w-full mb-5">
            <label
              class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
              >Card number</label
            >
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              maxlength="19"
              v-model="paymentCard.card"
              @input="validateCardNumber"
              :class="{ 'border-[red]': cardError?.card }"
              class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
            />

            <span
              v-if="cardError?.card"
              class="text-[red] text-[12px] pl-[3px]"
              >{{ cardError?.card }}</span
            >
          </div>
          <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-1 w-[49%]">
              <label
                class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                >Expiration Date</label
              >
              <input
                type="text"
                placeholder="MM / YY"
                maxlength="7"
                v-model="paymentCard.expiry"
                @input="validateExpiryDate"
                :class="{ 'border-[red]': cardError?.expiry }"
                class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
              />
              <span
                v-if="cardError?.expiry"
                class="text-[red] text-[12px] pl-[3px]"
                >{{ cardError?.expiry }}</span
              >
            </div>
            <div class="flex flex-col gap-1 w-[49%]">
              <label
                class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                >CVV</label
              >
              <input
                type="text"
                placeholder="665"
                maxlength="4"
                v-model="paymentCard.cvv"
                @input="validateCVV"
                :class="{ 'border-[red]': cardError?.cvv }"
                class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
              />
              <span
                v-if="cardError?.cvv"
                class="text-[red] text-[12px] pl-[3px]"
                >{{ cardError?.cvv }}</span
              >
            </div>
          </div>
          <div>
            <button
              @click="createPaymentCard"
              class="text-[16px] md:text-[18px] bg-[#8D54FF] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]"
            >
              Create payment method
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "profileLayout",
  data() {
    return {
      paymentDetailsShow: false,
      paymentCard: {
        nameOnCard: "",
        card: "",
        expiry: "",
        cvv: "",
      },
      cardError: {},
      perPageCustom: [
        [320, 2], // Show 1 slide if width >= 320px
        [768, 3], // Show 3 slides if width >= 768px
        [1024, 2], // Show 5 slides if width >= 1024px
      ],
    };
  },
  computed: {
    ...mapGetters({
      cards: "payment/getCards",
    }),
    uniqueCardTypes() {
      if (this.cards.length > 0) {
        return [...new Set(this.cards.map((card) => card.type))];
      }
      return [];
    },
  },
  methods: {
    ...mapActions({
      fetchCards: "payment/fetchCards",
      createCard: "payment/createCard",
    }),
    async fetchPaymentCards() {
      try {
        await this.fetchCards();
      } catch (error) {
        console.log("error", error);
      }
    },
    addPaymentToggle() {
      this.paymentDetailsShow = !this.paymentDetailsShow;
      this.selectedCard = null;
    },
    getCardTypeImage(cardType) {
      switch (cardType) {
        case "Visa":
          return "/Images/Profile/visaLogo.png";

        case "MasterCard":
          return "/Images/Profile/mastercard-1.png";
        case "AmericanExpress":
          return "/Images/Profile/AmexLogo.png";

        case "Discover":
          return "/Images/Profile/DiscoverLogo.png";
        default:
          return "/Images/Profile/DefaultCard.png"; // Default card image
      }
    },
    getSmallCardTypeImage(cardType) {
      switch (cardType) {
        case "Visa":
          return "/Images/Profile/Visa.png";

        case "MasterCard":
          return "/Images/Profile/Mastercard.png";

        default:
          return "/Images/Profile/DefaultCard.png"; // Default card image
      }
    },
    async validateCVV(e) {
      this.paymentCard.cvv = await this.$formatCVV(e);
    },
    async validateExpiryDate(e) {
      this.paymentCard.expiry = await this.$formatExpiryDate(e);
    },
    async validateCardNumber(e) {
      this.paymentCard.card = await this.$formatCardNumber(e);
    },
    async createPaymentCard() {
      try {
        this.cardError = await this.$validatePaymentFormData({
          form: this.paymentCard,
        });
        if (Object.keys(this.cardError).length > 0) {
          this.$toast.open({
            message: "Please fix the errors before submitting.",
            type: "error",
          });
          return;
        }
        const formattedCard = {
          nameOnCard: this.paymentCard.nameOnCard,
          card: this.paymentCard.card.replace(/\s/g, ""), // Remove all spacesxpiry.replace(/\s/g, ""), // Remove spaces
          cvv: this.paymentCard.cvv,
          expiry: this.paymentCard.expiry.replace(/\s/g, ""), // Remove spaces from expiry
        };

        await this.createCard(formattedCard);
        await this.fetchPaymentCards();
        this.paymentCard = {};
        this.paymentDetailsShow = false;
        this.$toast.open({
          message: this.$i18n.t("paymentCardCreatedSuccessfully"),
          type: "success",
        });
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
    await this.fetchPaymentCards();
  },
};
</script>
<style scoped>
.styled-checkbox {
  position: absolute;
  opacity: 0;
}
.styled-checkbox + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}
.styled-checkbox + label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #000000;
}

.styled-checkbox:checked + label:before {
  background: #000000;
}

.styled-checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 10px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
