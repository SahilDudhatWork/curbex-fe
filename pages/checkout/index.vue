<template>
  <div>
    <div class="container mx-auto py-[3rem] px-6 lg:px-0">
      <div class="flex justify-between flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-[48%]">
          <p
            class="text-[18px] md:text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
          >
            Shipping Address
          </p>
          <p
            v-if="sortedAddresses.length > 0"
            class="text-[14px] md:text-[18px] text-[#121212] font-Montserrat-Medium"
          >
            Select from saved addresses
          </p>
          <div
            class="max-h-[323px] my-[15px] pr-3 overflow-auto [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div
              v-for="(address, index) in sortedAddresses"
              :key="index"
              @click="selectAddress(address)"
              class="mb-3 address-tab"
              :class="addressData.id == address.id ? 'address-tab-Active' : ''"
            >
              <div class="flex items-center flex-wrap">
                <div
                  class="radio-section bg-[#E3E3E3] text-[#121212] flex items-center w-fit p-[10px_20px] rounded-[60px_0px_0px_60px] border border-[#E3E3E3]"
                >
                  <span
                    class="w-[13px] h-[13px] bg-[#FFFFFF] block rounded-[30px] mr-[10px]"
                  ></span>
                  <p class="text-[14px]">
                    {{ address.city }} - {{ address.province }}
                  </p>
                </div>
                <div
                  class="address-details bg-[#FFFFFF] text-[#C3C3C3] flex item-center justify-between w-[75%] p-[15px] rounded-[0px_60px_60px_0px] border border-[#E3E3E3]"
                >
                  <div class="flex items-center">
                    <span>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p class="p-[0px_10px] text-[14px]">
                      {{ address.street }}
                    </p>
                  </div>
                  <span @click.stop="editAddress(address)">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_6742_73450)">
                        <path
                          d="M9.83765 11.8054L5.90259 12.5137L6.55843 8.52617L14.0744 1.03643C14.1963 0.91349 14.3414 0.815908 14.5013 0.749315C14.6611 0.682723 14.8325 0.648437 15.0057 0.648438C15.1789 0.648437 15.3503 0.682723 15.5101 0.749315C15.67 0.815908 15.8151 0.91349 15.937 1.03643L17.3274 2.42682C17.4503 2.54876 17.5479 2.69384 17.6145 2.85368C17.6811 3.01352 17.7154 3.18496 17.7154 3.35812C17.7154 3.53128 17.6811 3.70272 17.6145 3.86257C17.5479 4.02241 17.4503 4.16748 17.3274 4.28942L9.83765 11.8054Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.7402 12.4617V16.3967C15.7402 16.7446 15.602 17.0783 15.356 17.3243C15.11 17.5702 14.7764 17.7084 14.4285 17.7084H1.96745C1.61957 17.7084 1.28594 17.5702 1.03995 17.3243C0.793957 17.0783 0.655762 16.7446 0.655762 16.3967V3.93571C0.655762 3.58783 0.793957 3.2542 1.03995 3.00821C1.28594 2.76222 1.61957 2.62402 1.96745 2.62402H5.90251"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6742_73450">
                          <rect width="18.3636" height="18.3636" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center m-[15px_0px_25px]"
          >
            <span class="block mr-3 cursor-pointer" @click="addNewAddress">
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.375"
                  y="0.75"
                  width="22.5"
                  height="21.5"
                  rx="10.75"
                  fill="#F5F5F5"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M12.918 7.49023V16.6553"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8.70898 11.8027L17.6555 11.8027"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span class="block">Add a new address</span>
          </div>
          <div
            v-if="isNewAddress"
            class="md:bg-[#FCFCFC] md:border md:border-[#F5F5F5] md:rounded-[25px] md:p-[25px] mb-5"
          >
            <p
              class="text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem]"
            >
              {{ addressData?.id ? "Edit address" : "Enter new address" }}
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
                  :class="{ 'border-[red]': addressError?.street }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="addressError?.street"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ addressError?.street }}</span
                >
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
                  :class="{ 'border-[red]': addressError?.street }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="addressError?.street"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ addressError?.street }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.city"
                  :readonly="isInputShippingDisabled"
                  type="tel"
                  placeholder="City"
                  :class="{ 'border-[red]': addressError?.city }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="addressError?.city"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ addressError?.city }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.province"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Province"
                  :class="{ 'border-[red]': addressError?.province }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="addressError?.province"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ addressError?.province }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="addressData.postal"
                  :readonly="isInputShippingDisabled"
                  type="text"
                  placeholder="Postal Code"
                  :class="{ 'border-[red]': addressError?.postal }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="addressError?.postal"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ addressError?.postal }}</span
                >
              </div>
            </div>
            <div
              v-if="
                isNewAddress || (sortedAddresses && sortedAddresses.length == 0)
              "
              class="flex justify-between items-center"
            >
              <input
                v-model="isShippingDefaultAddress"
                class="styled-checkbox"
                id="sameAddress"
                type="checkbox"
                value="value1"
              />
              <label for="sameAddress">Make this my default address</label>
            </div>
          </div>
          <p
            class="text-[18px] md:text-[22px] text-[#121212] font-Montserrat-Medium pb-[1rem] pt-[3rem]"
          >
            Billing Address
          </p>
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
          <p
            v-if="!isBillingSameAddress && sortedAddresses.length > 0"
            class="text-[14px] md:text-[18px] text-[#121212] font-Montserrat-Medium"
          >
            Select from saved addresses
          </p>
          <div
            v-if="!isBillingSameAddress && sortedAddresses.length > 0"
            class="max-h-[323px] my-[15px] pr-3 overflow-auto [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div
              v-for="(address, index) in sortedAddresses"
              :key="index"
              @click="selectBillingAddress(address)"
              class="mb-3 address-tab"
              :class="
                billingAddressData.id == address.id ? 'address-tab-Active' : ''
              "
            >
              <div class="flex items-center flex-wrap">
                <div
                  class="radio-section bg-[#E3E3E3] text-[#121212] flex items-center w-fit p-[10px_20px] rounded-[60px_0px_0px_60px] border border-[#E3E3E3]"
                >
                  <span
                    class="w-[13px] h-[13px] bg-[#FFFFFF] block rounded-[30px] mr-[10px]"
                  ></span>
                  <p class="text-[14px]">
                    {{ address.city }} - {{ address.province }}
                  </p>
                </div>
                <div
                  class="address-details bg-[#FFFFFF] text-[#C3C3C3] flex item-center justify-between w-[75%] p-[15px] rounded-[0px_60px_60px_0px] border border-[#E3E3E3]"
                >
                  <div class="flex items-center">
                    <span>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8929 8.21415C18.8929 12.3049 11.5 22.1784 11.5 22.1784C11.5 22.1784 4.10718 12.3049 4.10718 8.21415C4.10718 6.25344 4.88607 4.37304 6.2725 2.98661C7.65892 1.60018 9.53933 0.821289 11.5 0.821289C13.4607 0.821289 15.3411 1.60018 16.7276 2.98661C18.114 4.37304 18.8929 6.25344 18.8929 8.21415V8.21415Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4999 10.6786C12.8609 10.6786 13.9642 9.57527 13.9642 8.21429C13.9642 6.8533 12.8609 5.75 11.4999 5.75C10.1389 5.75 9.03564 6.8533 9.03564 8.21429C9.03564 9.57527 10.1389 10.6786 11.4999 10.6786Z"
                          stroke="#C3C3C3"
                          stroke-opacity="0.2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p class="p-[0px_10px] text-[14px]">
                      {{ address.street }}
                    </p>
                  </div>
                  <span>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_6742_73450)">
                        <path
                          d="M9.83765 11.8054L5.90259 12.5137L6.55843 8.52617L14.0744 1.03643C14.1963 0.91349 14.3414 0.815908 14.5013 0.749315C14.6611 0.682723 14.8325 0.648437 15.0057 0.648438C15.1789 0.648437 15.3503 0.682723 15.5101 0.749315C15.67 0.815908 15.8151 0.91349 15.937 1.03643L17.3274 2.42682C17.4503 2.54876 17.5479 2.69384 17.6145 2.85368C17.6811 3.01352 17.7154 3.18496 17.7154 3.35812C17.7154 3.53128 17.6811 3.70272 17.6145 3.86257C17.5479 4.02241 17.4503 4.16748 17.3274 4.28942L9.83765 11.8054Z"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.7402 12.4617V16.3967C15.7402 16.7446 15.602 17.0783 15.356 17.3243C15.11 17.5702 14.7764 17.7084 14.4285 17.7084H1.96745C1.61957 17.7084 1.28594 17.5702 1.03995 17.3243C0.793957 17.0783 0.655762 16.7446 0.655762 16.3967V3.93571C0.655762 3.58783 0.793957 3.2542 1.03995 3.00821C1.28594 2.76222 1.61957 2.62402 1.96745 2.62402H5.90251"
                          stroke="#C3C3C3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6742_73450">
                          <rect width="18.3636" height="18.3636" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="!isBillingSameAddress"
            
            class="flex items-center m-[15px_0px_25px] "
          >
            <span class="block mr-3 cursor-pointer" @click="addNewBillingAddress" >
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.375"
                  y="0.75"
                  width="22.5"
                  height="21.5"
                  rx="10.75"
                  fill="#F5F5F5"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M12.918 7.49023V16.6553"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8.70898 11.8027L17.6555 11.8027"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span class="block">Add a new address</span>
          </div>
          <div
            v-if="!isBillingSameAddress && isNewBillingAddress"
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
                  :readonly="isInputBillingDisabled"
                  type="text"
                  placeholder="Address Line 1"
                  :class="{ 'border-[red]': billingError?.street }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="billingError?.street"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ billingError?.street }}</span
                >
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
                  :readonly="isInputBillingDisabled"
                  type="text"
                  placeholder="Apt, Suite,Unit"
                  :class="{ 'border-[red]': billingError?.street }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="billingError?.street"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ billingError?.street }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.city"
                  :readonly="isInputBillingDisabled"
                  type="tel"
                  placeholder="City"
                  :class="{ 'border-[red]': billingError?.city }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="billingError?.city"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ billingError?.city }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.province"
                  :readonly="isInputBillingDisabled"
                  type="email"
                  placeholder="Province"
                  :class="{ 'border-[red]': billingError?.province }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="billingError?.province"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ billingError?.province }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full md:w-auto">
                <input
                  v-model="billingAddressData.postal"
                  :readonly="isInputBillingDisabled"
                  type="text"
                  placeholder="Postal Code"
                  :class="{ 'border-[red]': billingError?.postal }"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[#FFFFFF] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <span
                  v-if="billingError?.postal"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ billingError?.postal }}</span
                >
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
                v-model="isBillingDefaultAddress"
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
              class="text-[16px] md:text-[18px] text-[#121212] font-Montserrat-Medium md:pb-[1.7rem]"
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
                ${{ finalPaymentAmount }}
              </p>
            </div>
            <div
              class="flex justify-between items-center bg-[#121212] text-[#FFFFFF] p-[20px_25px] m-[0px_-25px_-25px] rounded-b-[25px]"
            >
              <p class="text-[16px] font-Montserrat-Medium">
                Total after discount
              </p>
              <p class="text-[16px] font-Montserrat-Medium">
                ${{ finalPaymentAmount }}
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
                    item.heroImage
                      ? item.heroImage.imageUrl
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
            <div class="flex justify-between items-center">
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
              class="bg-[#FFFFFF] border border-[#F5F5F5] rounded-[75px_25px_25px_75px] p-[15px] flex items-center justify-between mg-4 mt-[1rem]"
            >
              <div class="flex items-center">
                <div
                  class="bg-[#FAFAFA] flex items-center justify-center w-[72px] h-[72px] rounded-[72px] mr-5"
                >
                  <img
                    :src="getCardTypeImage(cardItem?.type)"
                    :alt="cardItem?.type"
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
              class="bg-[#FFFFFF] border border-[#F5F5F5] rounded-[75px_75px_75px_75px] p-[15px] flex items-center justify-center mg-4 mt-[1rem]"
            >
              <p class="text-[18px]">
                You don't have any saved payment methods
              </p>
            </div>
          </div>
          <div v-if="paymentDetailsShow" class="pt-[1rem]">
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
                  v-model="paymentCard.card"
                  @input="validateCardNumber"
                  maxlength="19"
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
                    v-model="paymentCard.expiry"
                    @input="validateExpiryDate"
                    maxlength="7"
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
                    v-model="paymentCard.cvv"
                    @input="validateCVV"
                    maxlength="4"
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
              <!-- <div class="flex flex-col gap-1 w-full mb-5">

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
              </div> -->
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
              class="text-[16px] md:text-[18px] bg-[#8D54FF] hover:bg-[#121212] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]"
            >
              Place order
            </button>
          </div>
          <div v-if="paymentDetailsShow">
            <button
              @click="createPaymentCard"
              class="text-[16px] md:text-[18px] bg-[#8D54FF] hover:bg-[#121212] rounded-[8px] w-full p-[13px] mb-[1.5rem] text-[#FFFFFF]"
            >
              Create payment method
            </button>
          </div>
        </div>
      </div>
    </div>
    <PaymentSuccessModal
      v-if="showPaymentSuccess"
      :payment-details="paymentDetails"
      @close="showPaymentSuccess = false"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
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
      cardError: {},
      addressError: {},
      billingError: {},
      isShippingDefaultAddress: false,
      isBillingDefaultAddress: false,
      showPaymentSuccess: false,
      paymentDetails: {},
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
          let heroImage = null;
          if (item.product.images && item.product.images.length) {
            heroImage =
              item.product.images.find(
                (image) => image.imageType === "primary"
              ) || null;
          }

          // Return a new object with the total price included
          return {
            ...item,
            totalFees,
            totalPrice,
            heroImage,
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
    finalPaymentAmount() {
      return this.cartTotal + (this.cartTotal * (this.taxes?.rate || 0)) / 100;
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
      createAddress: "profile/createAddress",
      updateAddress: "profile/updateAddress",
      fetchProfile: "auth/profile",
      setDefaultAddress: "profile/setDefaultAddress",
      createOrder: "order/createOrder",
      removeCart: "product/removeCart",
    }),
    ...mapMutations({
      setCartItemCount: "product/setCartItemCount",
      setCartItem: "product/setCartItem",
    }),
    dropdownToggle() {
      this.showDropdown = !this.showDropdown;
      this.isNewAddress = false;
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
      this.isShippingDefaultAddress = false;
    },
    addNewBillingAddress() {
      this.showBillingDropdown = false;
      this.billingAddressData = {};
      this.isNewBillingAddress = true;
      this.isBillingDefaultAddress = false;
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
          requestedDesigner: item.requestedDesigner,
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
            requestedDesigner: item.requestedDesigner,
          });
          await this.fetchCartItems();
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async editAddress(address) {
      this.addressData = { ...address };

      this.isNewAddress = true;
      this.isShippingDefaultAddress = false;
    },
    async removeItem(cart) {
      try {
        await this.removeCartItem({ id: cart.id });
        await this.fetchCartItems();
        this.$toast.open({
          message: this.$i18n.t("removeItemSuccessMessage"),
          type: "success",
        });
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
    async handleSaveShippingAddress(type = "add") {
      try {
        this.addressError = await this.$validateAddressFormData({
          form: this.addressData,
        });
        if (Object.keys(this.addressError).length > 0) {
          return;
        }
        this.addressData.country = "CA";
        this.addressData.customerId = this.profile.id;
        let res;
        if (type == "add") {
          res = await this.createAddress(this.addressData);
        } else {
          res = await this.updateAddress(this.addressData);
        }

        this.isNewAddress = false;
        this.addressData = res;
        if (this.isShippingDefaultAddress) {
          await this.setDefaultAddress({
            id: this.addressData.id,
          });
        }
      } catch (error) {
        this.$toast.open({
          message:
            error?.response?.data?.message || this.$i18n.t("errorMessage"),
          type: "error",
        });
        console.log(error, "error");
      }
    },
    async handleSaveBillingAddress() {
      try {
        this.billingError = await this.$validateAddressFormData({
          form: this.billingAddressData,
        });
        if (Object.keys(this.billingError).length > 0) {
          return;
        }
        this.billingAddressData.country = "CA";
        this.billingAddressData.customerId = this.profile.id;

        let res = await this.createAddress(this.billingAddressData);
        this.isNewBillingAddress = false;
        this.billingAddressData = res;
        if (this.isBillingDefaultAddress) {
          await this.setDefaultAddress({
            id: this.billingAddressData.id,
          });
        }
      } catch (error) {
        this.$toast.open({
          message:
            error?.response?.data?.message || this.$i18n.t("errorMessage"),
          type: "error",
        });
        console.log(error, "error");
      }
    },
    async placeOrder() {
      try {
        if (this.addressData && !this.addressData.id) {
          await this.handleSaveShippingAddress("add");
        } else if (
          this.addressData &&
          this.addressData.id &&
          this.isNewAddress
        ) {
          await this.handleSaveShippingAddress("edit");
        }

        if (this.billingAddressData && !this.billingAddressData.id) {
          await this.handleSaveBillingAddress();
        }
        await this.fetchProfile();
        let data = {
          shippingAddressId: this.addressData.id,
          billingAddressId: this.isBillingSameAddress
            ? this.addressData.id
            : this.billingAddressData.id,
          dataKeyId: this.selectedCard,
          price: this.finalPaymentAmount,
        };
        await this.createOrder(data);
        this.paymentDetails = {
          amount: this.cartTotal,
          refNumber: "N/A",
          paymentTime: new Date().toLocaleString(),
          paymentMethod: "Credit card",
          senderName: this.profile.firstName.concat(" ", this.profile.lastName),
          taxes: this.taxes,
        };
        this.showPaymentSuccess = true;
        await this.removeCart();
        await this.setCartItemCount(0);
        await this.setCartItem({});
        // await this.fetchCartItems();
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
  async mounted() {
    if (this.profile) {
      this.profileData = { ...this.profile };
    }
    this.addressData =
      this.profile?.customerAddress?.find(
        (addr) => addr.id === this.profile?.defaultShippingAddressId
      ) ||
      (this.profile?.customerAddress && this.profile?.customerAddress.length
        ? this.profile?.customerAddress[0]
        : {});
    if (this.addressData) {
      await this.fetchTaxes({
        province: this.addressData.province,
      });
    }
    this.billingAddressData = this.addressData;

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

/* Custom scrollbar styles */
.scrollbar::-webkit-scrollbar {
  width: 6px;
}

.scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #8d54ff;
  border-radius: 3px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b3cc9;
}
.address-tab .radio-section {
  background-color: #c3c3c3;
  border-color: #c3c3c3;
}
.address-tab:hover .radio-section {
  background-color: #121212;
  border-color: #121212;
  color: #ffffff;
}
.address-tab:hover .radio-section span {
  background-color: #ffa900;
}
.address-tab .address-details {
  border-color: #c3c3c3;
  color: #121212;
}

.address-tab .address-details svg path {
  stroke: #121212;
}
/* .address-tab:hover .hover-active {
  opacity: 1;
} */

.address-tab-Active .radio-section {
  background-color: #121212;
  border-color: #121212;
  color: #ffffff;
}
.address-tab-Active .radio-section span {
  background-color: #ffa900;
}
.address-tab-Active .address-details {
  border-color: #121212;
  color: #121212;
}
.address-tab-Active .address-details svg path {
  stroke: #121212;
}
.radio-section {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.address-details {
  width: 100%;
  border-radius: 0px 0px 10px 10px;
}
</style>
