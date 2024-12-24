<template>
  <div class="max-w-[1200px] md:p-6 space-y-8 lg:pb-[4rem]">
    <!-- My Cards Section -->
    <div>
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">My Cards</h2>
      <div class="flex gap-6 overflow-auto">
        <!-- Card 1 -->
        <div class="min-w-[270px] md:min-w-[340px] p-3 md:p-6 rounded-xl text-white w-[100%] h-[175px] md:h-[225px] max-w-[357px] flex flex-col justify-between" style="background: url('/Images/Profile/CardBG.png') no-repeat center center / cover">
          <div class="flex justify-between items-center mb-8">
              <img src="/Images/Profile/CardChips.png" alt="CardChips" class="h-[27px]" />
              <img src="/Images/Profile/VisaLogo.png" alt="Visa" class="h-[17px]" />
            </div>
            <div class="text-[17px] md:text-[20px] font-bold mb-4 tracking-[5px]">**** **** **** 3135</div>
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-[10px] md:text-[12px] pb-[5px]">Card Holder Name</div>
                    <div class="text-[16px] md:text-[18px] font-bold">Ryan Reynolds</div>
                </div>
                <div>
                    <div class="text-[8px] md:text-[10px] pb-[5px]">Expiry Date</div>
                    <div class="text-[14px] md:text-[16px]">09/08</div>
                </div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[270px] md:min-w-[340px] p-3 md:p-6 rounded-xl text-white w-[100%] h-[175px] md:h-[225px] max-w-[357px] flex flex-col justify-between" style="background: url('/Images/Profile/CardBG.png') no-repeat center center / cover">
          <div class="flex justify-between items-center mb-8">
              <img src="/Images/Profile/CardChips.png" alt="CardChips" class="h-[27px]" />
              <img src="/Images/Profile/VisaLogo.png" alt="Visa" class="h-[17px]" />
            </div>
            <div class="text-[17px] md:text-[20px] font-bold mb-4 tracking-[5px]">**** **** **** 3135</div>
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-[10px] md:text-[12px] pb-[5px]">Card Holder Name</div>
                    <div class="text-[16px] md:text-[18px] font-bold">Ryan Reynolds</div>
                </div>
                <div>
                    <div class="text-[8px] md:text-[10px] pb-[5px]">Expiry Date</div>
                    <div class="text-[14px] md:text-[16px]">09/08</div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Saved Payment Options -->
    <div class="pb-[2rem] pt-[1rem] lg:py-[2rem]">
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">Saved Payment Options</h2>
      <div class="flex gap-2">
        <img src="/Images/Profile/Visa.png" alt="Visa" class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain" />
        <img src="/Images/Profile/Mastercard.png" alt="Mastercard" class=" h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain" />
        <img src="/Images/Profile/PayPal.png" alt="PayPal" class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain" />
        <img src="/Images/Profile/AddButton.png" alt="Add" class="h-[45px] w-[66px] lg:h-[48px] lg:w-[48px] object-contain" />
      </div>
    </div>

    <!-- Transactions -->
    <div>
      <h2 class="text-[20px] lg:text-[24px] font-semibold mb-6">My Transactions</h2>
      <div class="overflow-x-auto hidden lg:block">
        <table class="w-full">
          <thead>
            <tr class="text-left border-b">
              <th class="p-4 font-bold text-[16px]"></th>
              <th class="p-4 font-bold text-[16px]">Product</th>
              <th class="p-4 font-bold text-[16px]">Order ID</th>
              <th class="p-4 font-bold text-[16px]">Date</th>
              <th class="p-4 font-bold text-[16px] text-center">Payment Method</th>
              <th class="p-4 font-bold text-[16px] text-center">Status</th>
              <th class="p-4 font-bold text-[16px]">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4" :key="i" class="border-b">
              <td class="p-4">
                <input class="styled-checkbox" :id="'keepLoggedIn'+i" type="checkbox" value="value1">
                <label :for="'keepLoggedIn'+i"></label>
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
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">Delivered</p>
          </div>
          <div class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]">
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
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">Delivered</p>
          </div>
          <div class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]">
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
            <p class="bg-[#FFA90040] text-[#FFA900] rounded-[4px] p-[3px_10px]">Delivered</p>
          </div>
          <div class="flex items-center justify-between pb-[2px] text-[12px] text-[#C3C3C3]">
            <p>Transaction ID</p>
            <p>17 Sep 2023</p>
          </div>
          <div class="flex items-center justify-between pb-[15px] text-[12px]">
            <p>564925374920</p>
            <p class="text-[#C3C3C3]">10:34 AM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "profileLayout",
}
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
    content: '';
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
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
 
</style>