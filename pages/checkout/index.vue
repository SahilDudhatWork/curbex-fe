<template>
  <div>
    <div class="container mx-auto py-[3rem] px-6 lg:px-0">
      <div class="flex justify-between flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-[48%]">
          <p
            class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
          >
            Shipping Address
          </p>
          <p
            v-if="sortedAddresses.length > 0"
            class="text-[18px] text-[#121212] font-Montserrat-Medium"
          >
            Select from saved addresses
          </p>
          <div class="relative mt-[18px] min-h-[33px] mb-[20px] pb-[5px]">
            <div
              v-if="!showDropdown && sortedAddresses.length > 0"
              @click="dropdownToggle"
              :class="showDropdown ? 'sidemenu-sm-active' : ''"
              class="flex flex-col sidemenu-sm z-[10] relative"
            >
              <div
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span v-if="isNewAddress" class="text-[20px]">
                  Add new address
                </span>
                <span v-else class="text-[20px]">
                  {{ addressData.city }} - {{ addressData.province }}
                </span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.75L6.5 6.25L1 0.75"
                    stroke="#8D54FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div
              :class="showDropdown ? 'sidemenu-sm-active' : ''"
              class="flex flex-col sidemenu-sm w-[176px] absolute top-0"
            >
              <p
                v-for="(address, index) in sortedAddresses"
                :key="index"
                @click="selectAddress(address)"
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span class="text-[20px]"
                  >{{ address.city }} - {{ address.province }}</span
                >
              </p>
              <p
                @click="addNewAddress"
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span class="text-[20px]">Add new address</span>
              </p>
            </div>
          </div>
          <div
            class="md:bg-[#FCFCFC] md:border md:border-[#F5F5F5] md:rounded-[25px] md:p-[25px] mb-5"
          >
            <p
              class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
            >
              Enter new address
            </p>
            <div
              class="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >First Name</label
                >
                <input
                  type="text"
                  v-model="profileData.firstName"
                  placeholder="First Name"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px] opacity-0"
                  >Last Name</label
                >
                <input
                  type="text"
                  v-model="profileData.lastName"
                  placeholder="Last Name"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Company</label
                >
                <input
                  v-model="profileData.company"
                  type="text"
                  placeholder="Curbex"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Phone Number</label
                >
                <input
                  v-model="profileData.phoneNumber"
                  type="tel"
                  placeholder="E.g. (123) 456-7890"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
            </div>
            <div
              class="flex flex-wrap md:grid grid-cols-1 lg:grid-cols-1 gap-3 md:gap-3 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Address</label
                >
                <input
                  v-model="addressData.street"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Address Line 1"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <!-- <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Address Line 2"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div> -->
            </div>
            <div
              class="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.street"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Apt, Suite,Unit"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.city"
                  :readonly="isInputShippingDisabled"
                  type="tel"
                  placeholder="City"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.province"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Province"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.postal"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Postal Code"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
            </div>
            <div
              v-if="
                isNewAddress || (sortedAddresses && sortedAddresses.length == 0)
              "
              class="flex justify-between items-center"
            >
              <input
                class="styled-checkbox"
                id="sameAddress"
                type="checkbox"
                value="value1"
              />
              <label for="sameAddress">Make this my default address</label>
            </div>
          </div>
          <p
            class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
          >
            Billing Address
          </p>
          <p
            v-if="sortedAddresses.length > 0"
            class="text-[18px] text-[#121212] font-Montserrat-Medium"
          >
            Select from saved addresses
          </p>
          <div class="relative mt-[18px] min-h-[33px] mb-[20px] pb-[5px] z-[2]">
            <div
              v-if="!showBillingDropdown && sortedAddresses.length > 0"
              @click="dropdownBillingToggle"
              :class="showBillingDropdown ? 'sidemenu-sm-active' : ''"
              class="flex flex-col sidemenu-sm z-[10] relative"
            >
              <div
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span v-if="isNewBillingAddress" class="text-[20px]">
                  Add new address
                </span>
                <span v-else class="text-[20px]"
                  >{{ billingAddressData.city }} -
                  {{ billingAddressData.province }}</span
                >
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.75L6.5 6.25L1 0.75"
                    stroke="#8D54FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div
              :class="showBillingDropdown ? 'sidemenu-sm-active' : ''"
              class="flex flex-col sidemenu-sm w-[176px] absolute top-0"
            >
              <p
                v-for="(address, index) in sortedAddresses"
                :key="index"
                @click="selectBillingAddress(address)"
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span class="text-[20px]"
                  >{{ address.city }} - {{ address.province }}</span
                >
              </p>
              <p
                @click="addNewBillingAddress"
                class="flex items-center gap-3 text-[#121212] cursor-pointer"
              >
                <span class="text-[20px]">Add new address</span>
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center mb-6">
            <input
              class="styled-checkbox"
              id="BillingAddressSameShipping"
              type="checkbox"
              value="value1"
              v-model="isBillingSameAddress"
            />
            <label for="BillingAddressSameShipping"
              >Billing address is the same as shipping address</label
            >
          </div>
          <div
            v-if="!isBillingSameAddress"
            class="md:bg-[#FCFCFC] md:border md:border-[#F5F5F5] md:rounded-[25px] md:p-[25px] mb-5"
          >
            <p
              class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
            >
              Enter new address
            </p>
            <div
              class="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >First Name</label
                >
                <input
                  v-model="profileData.firstName"
                  type="text"
                  placeholder="First Name"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px] opacity-0"
                  >Last Name</label
                >
                <input
                  v-model="profileData.lastName"
                  type="text"
                  placeholder="Last Name"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Company</label
                >
                <input
                  v-model="profileData.company"
                  type="text"
                  placeholder="Curbex"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Phone Number</label
                >
                <input
                  v-model="profileData.phoneNumber"
                  type="tel"
                  placeholder="E.g. (123) 456-7890"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
            </div>
            <div
              class="flex flex-wrap md:grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-3 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <label
                  class="hidden md:block font-bold text-[#121212] text-[18px]"
                  >Address</label
                >
                <input
                  v-model="billingAddressData.street"
                  type="text"
                  placeholder="Address Line 1"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <!-- <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Address Line 2"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div> -->
            </div>
            <div
              class="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3 mb-5"
            >
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.street"
                  type="text"
                  placeholder="Apt, Suite,Unit"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.city"
                  type="tel"
                  placeholder="City"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.province"
                  type="email"
                  placeholder="Province"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.postal"
                  type="text"
                  placeholder="Postal Code"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
            </div>
            <div
              v-if="
                isNewBillingAddress ||
                (sortedAddresses && sortedAddresses.length == 0)
              "
              class="flex justify-between items-center"
            >
              <input
                class="styled-checkbox"
                id="BillingSameAddress"
                type="checkbox"
                value="value1"
              />
              <label for="BillingSameAddress"
                >Make this my default address</label
              >
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[48%]">
          <div
            class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[25px] mb-5"
          >
            <p
              class="text-[16px] md:text-[18px] text-[#121212] font-Montserrat-Medium md:pb-[1.7rem] md:pt-[1rem]"
            >
              Order Summary
            </p>
            <div class="flex justify-between items-center pb-[2rem]">
              <p class="text-[16px] font-Montserrat-Medium">
                {{ cartItemCount }} Items
              </p>
              <p class="text-[16px] font-Montserrat-Medium">${{ cartTotal }}</p>
            </div>
            <div class="flex justify-between items-center pb-[1rem]">
              <p class="text-[16px] font-Medium">
                {{ taxes?.type || "Estimated Tax" }}
              </p>
              <p class="text-[16px] font-Montserrat-Medium">
                ${{ taxes?.rate || 0 }}
              </p>
            </div>
            <!-- <div class="flex justify-between items-center pb-[1rem]">
              <p class="text-[16px] font-Medium">
                Estimated shipping & Handling
              </p>
              <p class="text-[16px] font-Montserrat-Medium">$29</p>
            </div> -->
            <div class="flex justify-between items-center pb-[1rem]">
              <p class="text-[16px] font-Medium">Discount</p>
              <p class="text-[16px] font-Montserrat-Medium">$0</p>
            </div>
            <div class="flex justify-between items-center pb-[2rem]">
              <p class="text-[16px] font-Montserrat-Medium">
                Total before discount
              </p>
              <p class="text-[16px] font-Montserrat-Medium">
                ${{ cartTotal + (taxes?.rate || 0) }}
              </p>
            </div>
            <div
              class="flex justify-between items-center bg-[#121212] text-[#FFFFFF] p-[20px_25px] m-[0px_-25px_-25px] rounded-b-[25px]"
            >
              <p class="text-[16px] font-Montserrat-Medium">
                Total after discount
              </p>
              <p class="text-[16px] font-Montserrat-Medium">
                ${{ cartTotal + (taxes?.rate || 0) }}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center py-[1.5rem]">
            <p class="text-[20px] font-Montserrat-Medium">Items</p>
            <p
              @click="editCart"
              class="cursor-pointer text-[14px] font-Montserrat-Medium"
            >
              Edit Cart
            </p>
          </div>
          <div
            v-if="productsWithTotalPrice && productsWithTotalPrice.length"
            class="w-full"
          >
            <div
              v-for="(item, index) in productsWithTotalPrice"
              :key="index"
              class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[15px] flex items-start mb-5"
            >
              <div
                class="border-2 border-[#F3F3F3] rounded-[20px] relative max-w-[125px] mr-3 md:mr-5"
              >
                <img
                  :src="
                    item.product.images && item.product.images.length
                      ? item.product.images[0].imageUrl
                      : '/Images/Product/product-1.png'
                  "
                  alt=""
                  class="rounded-[20px] transition-opacity duration-300"
                />
              </div>
              <div class="w-full flex flex-col justify-between min-h-[125px]">
                <div>
                  <div class="flex items-center justify-between">
                    <p
                      class="text-[16px] md:text-[18px] text-[#121212] font-Montserrat-Medium"
                    >
                      {{ item?.product?.name }}
                    </p>
                    <p @click="removeItem(item)" class="cursor-pointer">
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="18.5" cy="18" r="10.5" fill="#111111" />
                        <g filter="url(#filter0_b_5828_42050)">
                          <path
                            d="M12.0875 24.4125C12.5224 24.8474 13.2276 24.8474 13.6625 24.4125L18.5 19.575L23.3375 24.4125C23.7724 24.8474 24.4776 24.8474 24.9125 24.4125C25.3474 23.9776 25.3474 23.2724 24.9125 22.8375L20.075 18L24.9125 13.1625C25.3474 12.7276 25.3474 12.0224 24.9125 11.5875C24.4776 11.1526 23.7724 11.1526 23.3375 11.5875L18.5 16.425L13.6625 11.5875C13.2276 11.1526 12.5224 11.1526 12.0875 11.5875C11.6526 12.0224 11.6526 12.7276 12.0875 13.1625L16.925 18L12.0875 22.8375C11.6526 23.2724 11.6526 23.9776 12.0875 24.4125ZM18.5 33C16.45 33 14.5125 32.6062 12.6875 31.8187C10.8625 31.0312 9.26875 29.9563 7.90625 28.5938C6.54375 27.2313 5.46875 25.6375 4.68125 23.8125C3.89375 21.9875 3.5 20.05 3.5 18C3.5 15.925 3.89375 13.975 4.68125 12.15C5.46875 10.325 6.54375 8.7375 7.90625 7.3875C9.26875 6.0375 10.8625 4.96875 12.6875 4.18125C14.5125 3.39375 16.45 3 18.5 3C20.575 3 22.525 3.39375 24.35 4.18125C26.175 4.96875 27.7625 6.0375 29.1125 7.3875C30.4625 8.7375 31.5312 10.325 32.3187 12.15C33.1062 13.975 33.5 15.925 33.5 18C33.5 20.05 33.1062 21.9875 32.3187 23.8125C31.5312 25.6375 30.4625 27.2313 29.1125 28.5938C27.7625 29.9563 26.175 31.0312 24.35 31.8187C22.525 32.6062 20.575 33 18.5 33Z"
                            fill="#FCFCFC"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_5828_42050"
                            x="-92.5"
                            y="-93"
                            width="222"
                            height="222"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="48"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_5828_42050"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_5828_42050"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                  <p
                    :class="
                      item?.product?.type === 'rental'
                        ? 'bg-[#DAC8FF]'
                        : 'bg-[#FFEBC3]'
                    "
                    class="rounded-[5px] p-[2px_6px] text-[12px] md:text-[14px] w-fit capitalize"
                  >
                    {{ item?.product?.type }}
                  </p>
                </div>
                <div v-if="item.product.type === 'rental'">
                  <p
                    class="flex p-[2px_0px] text-[12px] md:text-[14px] w-fit mb-1"
                  >
                    <span class="mr-2">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.075"
                          y="3.33574"
                          width="14.6938"
                          height="13.8135"
                          rx="1.425"
                          stroke="#121212"
                          stroke-width="1.15"
                        />
                        <rect
                          x="1.075"
                          y="3.33574"
                          width="14.6938"
                          height="13.8135"
                          rx="1.425"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.15"
                        />
                        <rect
                          x="1.075"
                          y="3.33574"
                          width="14.6938"
                          height="13.8135"
                          rx="1.425"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.15"
                        />
                        <rect
                          x="1.075"
                          y="3.33574"
                          width="14.6938"
                          height="13.8135"
                          rx="1.425"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.15"
                        />
                        <rect
                          x="1.075"
                          y="3.33574"
                          width="14.6938"
                          height="13.8135"
                          rx="1.425"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="1.15"
                        />
                        <path
                          d="M11.9421 1V4.52083"
                          stroke="#121212"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9421 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9421 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9421 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9421 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.90137 1V4.52083"
                          stroke="#121212"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.90137 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.90137 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.90137 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.90137 1V4.52083"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-linecap="round"
                        />
                        <path d="M16.3431 8.04102H0.939453" stroke="#121212" />
                        <path
                          d="M16.3431 8.04102H0.939453"
                          stroke="black"
                          stroke-opacity="0.2"
                        />
                        <path
                          d="M16.3431 8.04102H0.939453"
                          stroke="black"
                          stroke-opacity="0.2"
                        />
                        <path
                          d="M16.3431 8.04102H0.939453"
                          stroke="black"
                          stroke-opacity="0.2"
                        />
                        <path
                          d="M16.3431 8.04102H0.939453"
                          stroke="black"
                          stroke-opacity="0.2"
                        />
                      </svg>
                    </span>
                    April 28th - April 30th
                  </p>
                  <p class="text-[14px]">$209.00</p>
                </div>
                <div v-else>
                  <div class="flex justify-between items-center pb-[5px]">
                    <div
                      class="flex items-center p-[2px_6px] text-[12px] md:text-[14px] w-fit bg-[#F5F5F5] rounded-[4px]"
                    >
                      <button
                        @click="decrementQuantity(item)"
                        class="bg-[#FFFFFF] border border-[#121212] rounded-[6px] w-[18px] h-[18px] flex items-center justify-center"
                      >
                        <span class="text-[#000]">-</span>
                      </button>
                      <span
                        class="mx-2 text-[12px] md:text-[14px] leading-normal"
                        >{{ item.quantity }}</span
                      >
                      <button
                        @click="incrementQuantity(item)"
                        class="bg-[#FFFFFF] border border-[#121212] rounded-[6px] w-[18px] h-[18px] flex items-center justify-center"
                      >
                        <span class="text-[#000]">+</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-[14px]">${{ item.totalPrice }}</p>
                </div>
              </div>
            </div>
            <!-- <div
              class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[15px] flex items-start mb-5"
            >
              <div
                class="border-2 border-[#F3F3F3] rounded-[20px] relative max-w-[125px] mr-3 md:mr-5"
              >
                <img
                  src="/Images/Product/product-1.png"
                  alt=""
                  class="rounded-[20px] transition-opacity duration-300"
                />
              </div>
              <div class="w-full flex flex-col justify-between min-h-[125px]">
                <div>
                  <div class="flex items-center justify-between">
                    <p
                      class="text-[16px] md:text-[18px] text-[#121212] font-Montserrat-Medium"
                    >
                      Pedestal
                    </p>
                    <p class="cursor-pointer">
                      <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="18.5" cy="18" r="10.5" fill="#111111" />
                        <g filter="url(#filter0_b_5828_42050)">
                          <path
                            d="M12.0875 24.4125C12.5224 24.8474 13.2276 24.8474 13.6625 24.4125L18.5 19.575L23.3375 24.4125C23.7724 24.8474 24.4776 24.8474 24.9125 24.4125C25.3474 23.9776 25.3474 23.2724 24.9125 22.8375L20.075 18L24.9125 13.1625C25.3474 12.7276 25.3474 12.0224 24.9125 11.5875C24.4776 11.1526 23.7724 11.1526 23.3375 11.5875L18.5 16.425L13.6625 11.5875C13.2276 11.1526 12.5224 11.1526 12.0875 11.5875C11.6526 12.0224 11.6526 12.7276 12.0875 13.1625L16.925 18L12.0875 22.8375C11.6526 23.2724 11.6526 23.9776 12.0875 24.4125ZM18.5 33C16.45 33 14.5125 32.6062 12.6875 31.8187C10.8625 31.0312 9.26875 29.9563 7.90625 28.5938C6.54375 27.2313 5.46875 25.6375 4.68125 23.8125C3.89375 21.9875 3.5 20.05 3.5 18C3.5 15.925 3.89375 13.975 4.68125 12.15C5.46875 10.325 6.54375 8.7375 7.90625 7.3875C9.26875 6.0375 10.8625 4.96875 12.6875 4.18125C14.5125 3.39375 16.45 3 18.5 3C20.575 3 22.525 3.39375 24.35 4.18125C26.175 4.96875 27.7625 6.0375 29.1125 7.3875C30.4625 8.7375 31.5312 10.325 32.3187 12.15C33.1062 13.975 33.5 15.925 33.5 18C33.5 20.05 33.1062 21.9875 32.3187 23.8125C31.5312 25.6375 30.4625 27.2313 29.1125 28.5938C27.7625 29.9563 26.175 31.0312 24.35 31.8187C22.525 32.6062 20.575 33 18.5 33Z"
                            fill="#FCFCFC"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_5828_42050"
                            x="-92.5"
                            y="-93"
                            width="222"
                            height="222"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="48"
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_5828_42050"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_5828_42050"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                  <p
                    class="bg-[#FFEBC3] rounded-[5px] p-[2px_6px] text-[12px] md:text-[14px] w-fit"
                  >
                    Retail
                  </p>
                </div>
                <div>
                  <div class="flex justify-between items-center pb-[5px]">
                    <div
                      class="flex items-center p-[2px_6px] text-[12px] md:text-[14px] w-fit bg-[#F5F5F5] rounded-[4px]"
                    >
                      <button
                        @click="decrementQuantity"
                        class="bg-[#FFFFFF] border border-[#121212] rounded-[6px] w-[18px] h-[18px] flex items-center justify-center"
                      >
                        <span class="text-[#000]">-</span>
                      </button>
                      <span
                        class="mx-2 text-[12px] md:text-[14px] leading-normal"
                        >{{ quantity }}</span
                      >
                      <button
                        @click="incrementQuantity"
                        class="bg-[#FFFFFF] border border-[#121212] rounded-[6px] w-[18px] h-[18px] flex items-center justify-center"
                      >
                        <span class="text-[#000]">+</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-[14px]">$76.00</p>
                </div>
              </div>
            </div> -->
          </div>
          <div
            class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[25px] mb-5"
          >
            <div class="flex justify-between items-center pb-[1rem]">
              <p class="text-[18px] font-Montserrat-Medium">
                Choose how to pay
              </p>
              <p
                @click="addPaymentToggle"
                class="text-[16px] font-Montserrat-Medium text-[#8D54FF] cursor-pointer hidden md:block"
              >
                +Add new method
              </p>
            </div>
            <div
              v-if="cards.length > 0"
              v-for="cardItem in cards"
              @click="cardSelect(cardItem.id)"
              :class="selectedCard === cardItem.id ? 'card-active' : ''"
              class="bg-[#FFFFFF] border border-[#F5F5F5] rounded-[75px_25px_25px_75px] p-[15px] mb-5 flex items-center justify-between mg-4"
            >
              <div class="flex items-center">
                <div
                  class="bg-[#FAFAFA] flex items-center justify-center w-[72px] h-[72px] rounded-[72px] mr-5"
                >
                  <img
                    v-if="cardItem.type == 'Visa'"
                    src="/Images/Profile/visa-logo.png"
                    alt="Visa"
                  />
                  <img
                    v-else
                    src="/Images/Profile/mastercard-1.png"
                    alt="MasterCard"
                  />
                </div>
                <p class="text-[18px]">
                  {{ cardItem.type }} {{ cardItem.card }}
                </p>
              </div>
              <div
                class="active-round w-[24px] h-[24px] border border-[#C3C3C3] bg-[#FFFFFF] rounded-[24px] flex items-center justify-center"
              >
                <div
                  class="w-[12px] h-[12px] bg-[#F5F5F5] rounded-[12px]"
                ></div>
              </div>
            </div>
            <div
              v-else
              class="bg-[#FFFFFF] border border-[#F5F5F5] rounded-[75px_75px_75px_75px] p-[15px] mb-5 flex items-center justify-center mg-4"
            >
              <p class="text-[18px]">
                You don't have any saved payment methods
              </p>
            </div>
          </div>
          <div v-if="paymentDetailsShow">
            <p
              class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
            >
              Add new payment method
            </p>
            <div
              class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[25px] p-[15px] mb-5"
            >
              <div class="flex flex-col gap-1 w-full mb-5">
                <label
                  class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                  >Name on the card</label
                >
                <input
                  type="text"
                  placeholder="Ryan Reynolds"
                  v-model="paymentCard.nameOnCard"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full mb-5">
                <label
                  class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                  >Card number</label
                >
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  v-model="paymentCard.card"
                  @input="validateCardNumber"
                  maxlength="19"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
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
                    v-model="paymentCard.expiry"
                    @input="validateExpiryDate"
                    maxlength="7"
                    class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  />
                </div>
                <div class="flex flex-col gap-1 w-[49%]">
                  <label
                    class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                    >CVV</label
                  >
                  <input
                    type="text"
                    placeholder="665"
                    v-model="paymentCard.cvv"
                    @input="validateCVV"
                    maxlength="4"
                    class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-1 w-full mb-5">
                <label
                  class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                  >Country</label
                >
                <input
                  type="text"
                  placeholder="Canada"
                  v-model="paymentCard.country"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <div class="flex flex-col gap-1 w-full mb-5">
                <label
                  class="hidden md:block font-Medium font-Montserrat-Medium text-[#121212] text-[18px]"
                  >ZIP Code</label
                >
                <input
                  type="text"
                  placeholder="A1B 2C3"
                  v-model="paymentCard.zip"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
              <!-- <div
                class="flex items-center gap-2 mb-2 text-[12px] md:text-[14px] lg:text-[16px] md:font-bold lg:font-normal text-[#121212] py-2"
              >
                <input
                  class="styled-checkbox"
                  id="keepLoggedIn"
                  type="checkbox"
                  value="value1"
                />
                <label for="keepLoggedIn"
                  >By clicking 'Log In' you agree to our website
                  <span class="underline">Terms & Conditions</span>,
                  <span class="underline">Privacy Notice </span> and
                  <span class="underline">Terms & Conditions.</span>
                  <NuxtLink to="/more-info" class="text-black underline"
                    >More info</NuxtLink
                  >
                </label>
              </div> -->
            </div>
          </div>
          <div v-if="selectedCard">
            <button
              @click="placeOrder"
              class="text-[16px] md:text-[18px] bg-[#8D54FF] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]"
            >
              Place order
            </button>
          </div>
          <div v-if="paymentDetailsShow">
            <button
              @click="createPaymentCard"
              class="text-[16px] md:text-[18px] bg-[#8D54FF] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]"
            >
              Place order
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
  middleware: "auth",

  data() {
    return {
      showDropdown: false,
      showBillingDropdown: false,
      quantity: 1,
      paymentDetailsShow: false,
      selectedCard: null,
      addressData: {},
      billingAddressData: {},
      isNewAddress: false,
      isNewBillingAddress: false,
      profileData: {},
      isBillingSameAddress: false,
      paymentCard: {},
    };
  },
  computed: {
    ...mapGetters({
      cartDetail: "product/getCartItem",
      cartItemCount: "product/getCartItemCount",
      taxes: "product/getTaxes",
      profile: "auth/getUserProfile",
      cards: "payment/getCards",
    }),
    isInputShippingDisabled() {
      return this.sortedAddresses.length > 0 && !this.isNewAddress;
    },
    isInputBillingDisabled() {
      return this.sortedAddresses.length > 0 && !this.isNewBillingAddress;
    },
    sortedAddresses() {
      // Check if profile and customerAddress exist
      if (!this.profile?.customerAddress) {
        return [];
      }

      // Clone the array to avoid mutating the original
      const addresses = [...this.profile.customerAddress];

      // Sort with the default shipping address at the top
      addresses.sort((a, b) => {
        if (a.id === this.profile?.defaultShippingAddressId) return -1; // Move to top
        if (b.id === this.profile?.defaultShippingAddressId) return 1;
        return 0; // Maintain order otherwise
      });

      return addresses;
    },
    productsWithTotalPrice() {
      if (this.cartDetail.cartItems && this.cartDetail.cartItems.length) {
        return this.cartDetail.cartItems.map((item) => {
          // Calculate the total fees for the product
          const totalFees = item.product.fees.reduce(
            (sum, fee) => sum + fee.price,
            0
          );

          // Calculate the base price multiplied by the quantity
          const basePriceTotal = item.price * item.quantity;

          // Add the total price (base price total + total fees) for the product
          const totalPrice = basePriceTotal + totalFees;

          // Return a new object with the total price included
          return {
            ...item,
            totalFees,
            totalPrice,
          };
        });
      } else {
        return [];
      }
    },
    cartTotal() {
      let total = this.productsWithTotalPrice.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      return total;
    },
  },
  methods: {
    ...mapActions({
      removeCartItem: "product/removeCartItem",
      fetchCartItems: "product/fetchCartItems",
      updateCartItem: "product/updateCartItem",
      fetchTaxes: "product/fetchTaxes",
      createCard: "payment/createCard",
      fetchCards: "payment/fetchCards",
    }),
    dropdownToggle() {
      this.showDropdown = !this.showDropdown;
      this.isNewAddress = false;
    },
    async validateExpiryDate(e) {
      this.paymentCard.expiry = await this.$formatExpiryDate(e);
    },
    async validateCardNumber(e) {
      this.paymentCard.card = await this.$formatCardNumber(e);
    },
    async validateCVV(e) {
      this.paymentCard.cvv = await this.$formatCVV(e);
    },
    async selectAddress(address) {
      this.showDropdown = false;
      this.addressData = address;
      this.isNewAddress = false;
      await this.fetchTaxes({
        province: address.province,
      });
    },
    selectBillingAddress(address) {
      this.showBillingDropdown = false;

      this.billingAddressData = address;
      this.isNewBillingAddress = false;
    },
    addNewAddress() {
      this.showDropdown = false;
      this.addressData = {};
      this.isNewAddress = true;
    },
    addNewBillingAddress() {
      this.showBillingDropdown = false;
      this.billingAddressData = {};
      this.isNewBillingAddress = true;
    },
    dropdownBillingToggle() {
      this.showBillingDropdown = !this.showBillingDropdown;
      this.isNewBillingAddress = false;
    },
    async incrementQuantity(item) {
      try {
        item.quantity++;
        await this.updateCartItem({
          id: item.id,
          quantity: item.quantity,
        });
        await this.fetchCartItems();
      } catch (error) {
        console.log("error", error);
      }
    },
    async decrementQuantity(item) {
      try {
        if (item.quantity > 1) {
          item.quantity--;
          await this.updateCartItem({
            id: item.id,
            quantity: item.quantity,
          });
          await this.fetchCartItems();
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async removeItem(cart) {
      try {
        await this.removeCartItem({ id: cart.id });
        await this.fetchCartItems();
      } catch (error) {
        console.log("error", error);
      }
    },
    addPaymentToggle() {
      this.paymentDetailsShow = !this.paymentDetailsShow;
      this.selectedCard = null;
    },
    cardSelect(cardId) {
      this.selectedCard = cardId;
      this.paymentDetailsShow = false;
    },

    editCart() {
      this.$router.push(`/cart`);
    },
    async fetchPaymentCards() {
      try {
        await this.fetchCards();
      } catch (error) {
        console.log("error", error);
      }
    },

    async createPaymentCard() {
      try {
        const formattedCard = {
          nameOnCard: this.paymentCard.nameOnCard,
          card: this.paymentCard.card.replace(/\s/g, ""), // Remove all spaces
          expiry: this.paymentCard.expiry.replace(/\s/g, ""), // Remove spaces
          cvv: this.paymentCard.cvv,
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
    async placeOrder() {
      try {
        // await this.createOrder();
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  async mounted() {
    this.addressData =
      this.profile?.customerAddress && this.profile?.customerAddress.length
        ? this.profile?.customerAddress[0]
        : {};
    if (this.addressData) {
      await this.fetchTaxes({
        province: this.addressData.province,
      });
    }
    this.billingAddressData =
      this.profile?.customerAddress && this.profile?.customerAddress.length
        ? this.profile?.customerAddress[0]
        : {};

    if (this.profile) {
      this.profileData = { ...this.profile };
    }

    await this.fetchPaymentCards();
  },
};
</script>
<style scoped>
.sidemenu-sm {
  border: 1px solid #8d54ff;
  min-width: 193px;
  border-radius: 5px;
  padding: 0 10px;
  height: 48px;
  overflow: hidden;
  background-color: #ffffff;
  max-width: fit-content;
}
.sidemenu-sm-active {
  height: auto;
  max-width: fit-content;
}
.sidemenu-sm div span,
.sidemenu-sm p span {
  font-size: 16px;
  border-bottom: 1px solid #c3c3c3;
  /* min-width: 129px; */
  padding: 11px 0;
  color: #8d54ff;
  width: 100%;
}
.content-flex {
  width: 100%;
}
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
.card-active {
  border-color: #8d54ff;
  border-width: 3px;
}
.card-active .active-round {
  border-color: #8d54ff;
}
.card-active .active-round div {
  background-color: #8d54ff;
}
</style>
