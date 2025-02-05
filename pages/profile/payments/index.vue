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
            <div class="min-w-[270px] md:min-w-[340px] p-3 md:p-6 rounded-[20px] text-white w-[100%] h-[175px] md:h-[225px] max-w-[357px] flex flex-col justify-between"
              style="background: url('/Images/Profile/CardBG.png') no-repeat center center / cover;"
            >
              <div class="flex justify-between items-center mb-8">
                <img src="/Images/Profile/CardChips.png" alt="CardChips" class="h-[27px]" />
                <img :src=" item?.type === 'Visa' ? '/Images/Profile/VisaLogo.png': '/Images/Profile/Mastercard-1.png'" alt="Visa" class="h-[17px]"/>
              </div>
              <div class="text-[17px] md:text-[20px] font-bold mb-4 tracking-[5px]">{{ item?.card }}</div>
              <div class="flex justify-between items-center">
                <div>
                  <div class="text-[10px] md:text-[12px] pb-[5px]">Card Holder Name</div>
                  <div class="text-[16px] md:text-[18px] font-bold">{{ item?.nameOnCard }}</div>
                </div>
                <div>
                  <div class="text-[8px] md:text-[10px] pb-[5px]">Expiry Date</div>
                  <div class="text-[14px] md:text-[16px]">{{ item?.expdate }}</div>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
        <!-- Card 1 -->
        <!-- <div
          v-for="item in cards"
          :key="item.id"
          class="min-w-[270px] md:min-w-[340px] p-3 md:p-6 rounded-xl text-white w-[100%] h-[175px] md:h-[225px] max-w-[357px] flex flex-col justify-between"
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
              :src="
                item?.type === 'Visa'
                  ? '/Images/Profile/VisaLogo.png'
                  : '/Images/Profile/Mastercard-1.png'
              "
              alt="Visa"
              class="h-[17px]"
            />
          </div>
          <div class="text-[17px] md:text-[20px] font-bold mb-4 tracking-[5px]">
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
              <div class="text-[8px] md:text-[10px] pb-[5px]">Expiry Date</div>
              <div class="text-[14px] md:text-[16px]">{{ item?.expdate }}</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Saved Payment Options -->
    <div class="pb-[2rem] pt-[1rem] lg:py-[2rem]">
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">
        Saved Payment Options
      </h2>
      <div class="flex gap-2">
        <img
          src="/Images/Profile/Visa.png"
          alt="Visa"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain"
        />
        <img
          src="/Images/Profile/Mastercard.png"
          alt="Mastercard"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain"
        />
        <img
          src="/Images/Profile/PayPal.png"
          alt="PayPal"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain"
        />
        <img @click="addPaymentToggle"
          src="/Images/Profile/AddButton.png"
          alt="Add"
          class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain cursor-pointer"
        />
      </div>
      <div v-if="paymentDetailsShow" class="pt-5">
        <p class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]">Add new payment method</p>
        <div class="p-[15px_0px] mb-5">
          <div class="flex flex-col gap-1 w-full mb-5">
            <label class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]">Name on the card</label>
            <input type="text" placeholder="Ryan Reynolds"
              class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
            />
            <!-- <span v-if="cardError?.nameOnCard" class="text-[red] text-[12px] pl-[3px]" >{{ cardError?.nameOnCard }}</span> -->
          </div>
          <div class="flex flex-col gap-1 w-full mb-5">
            <label class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]">Card number</label>
            <input
              type="text" placeholder="1234 1234 1234 1234" maxlength="19" 
              class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
            />
            <!-- <span v-if="cardError?.card" class="text-[red] text-[12px] pl-[3px]">{{ cardError?.card }}</span> -->
          </div>
          <div class="flex items-center justify-between mb-5">
            <div class="flex flex-col gap-1 w-[49%]">
              <label class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]">Expiration Date</label>
              <input type="text" placeholder="MM / YY" maxlength="7" 
                class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
              />
              <!-- <span v-if="cardError?.expiry" class="text-[red] text-[12px] pl-[3px]">{{ cardError?.expiry }}</span> -->
            </div>
            <div class="flex flex-col gap-1 w-[49%]">
              <label class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]">CVV</label>
              <input type="text" placeholder="665" maxlength="4" 
                class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
              />
              <!-- <span v-if="cardError?.cvv" class="text-[red] text-[12px] pl-[3px]">{{ cardError?.cvv }}</span> -->
            </div>
          </div>
          <div>
            <button class="text-[16px] md:text-[18px] bg-[#8D54FF] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]">Create payment method</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Transactions -->
    <!-- <div>
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">
        My Transactions
      </h2>
      <div class="overflow-x-auto hidden lg:block">
        <table class="w-full">
          <thead>
            <tr class="text-left border-b">
              <th class="p-4 font-bold text-[16px]"></th>
              <th class="p-4 font-bold text-[16px]">Product</th>
              <th class="p-4 font-bold text-[16px]">Order ID</th>
              <th class="p-4 font-bold text-[16px]">Date</th>
              <th class="p-4 font-bold text-[16px] text-center">
                Payment Method
              </th>
              <th class="p-4 font-bold text-[16px] text-center">Status</th>
              <th class="p-4 font-bold text-[16px]">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4" :key="i" class="border-b">
              <td class="p-4">
                <input
                  class="styled-checkbox"
                  :id="'keepLoggedIn' + i"
                  type="checkbox"
                  value="value1"
                />
                <label :for="'keepLoggedIn' + i"></label>
              </td>
              <td class="p-4">Downtowner</td>
              <td class="p-4">#25421</td>
              <td class="p-4">Jan 8th,2024</td>
              <td class="p-4 text-center">PayPal</td>
              <td class="p-4 text-center">
                <span class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#FFA900]"></span>
                  Delivered
                </span>
              </td>
              <td class="p-4">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="lg:hidden">
        <div class="border-b border-[#F3F3F3] mb-[15px]">
          <div class="flex items-center justify-between pb-[2px]">
            <p>Downtowner</p>
            <p>$ 100.00</p>
          </div>
          <div class="flex items-center justify-between pb-[15px]">
            <p>#25421</p>
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">
              Delivered
            </p>
          </div>
          <div
            class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]"
          >
            <p>Transaction ID</p>
            <p>17 Sep 2023</p>
          </div>
          <div class="flex items-center justify-between pb-[15px] text-[12px]">
            <p>564925374920</p>
            <p class="text-[#C3C3C3]">10:34 AM</p>
          </div>
        </div>
        <div class="border-b border-[#F3F3F3] mb-[15px]">
          <div class="flex items-center justify-between pb-[2px]">
            <p>Downtowner</p>
            <p>$ 100.00</p>
          </div>
          <div class="flex items-center justify-between pb-[15px]">
            <p>#25421</p>
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">
              Delivered
            </p>
          </div>
          <div
            class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]"
          >
            <p>Transaction ID</p>
            <p>17 Sep 2023</p>
          </div>
          <div class="flex items-center justify-between pb-[15px] text-[12px]">
            <p>564925374920</p>
            <p class="text-[#C3C3C3]">10:34 AM</p>
          </div>
        </div>
        <div class="border-b border-[#F3F3F3] mb-[15px]">
          <div class="flex items-center justify-between pb-[2px]">
            <p>Downtowner</p>
            <p>$ 100.00</p>
          </div>
          <div class="flex items-center justify-between pb-[15px]">
            <p>#25421</p>
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">
              Delivered
            </p>
          </div>
          <div
            class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]"
          >
            <p>Transaction ID</p>
            <p>17 Sep 2023</p>
          </div>
          <div class="flex items-center justify-between pb-[15px] text-[12px]">
            <p>564925374920</p>
            <p class="text-[#C3C3C3]">10:34 AM</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "profileLayout",
  data() {
    return {
      paymentDetailsShow: false,
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
  },
  methods: {
    ...mapActions({
      fetchCards: "payment/fetchCards",
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
