<template>
  <div class="flex-1">
    <div class="max-w-4xl md:p-8">
      <!-- Business Address Section -->
      <div class="mb-1">
        <h1 class="text-[16px] md:text-[20px] font-semibold mb-3 md:mb-6">
          My Addresses
        </h1>
        <div
          v-for="(address, index) in sortedAddresses"
          :key="index"
          class="mb-3"
          :class="
            address.id == userProfile.defaultShippingAddressId
              ? 'address-tab-Active'
              : 'address-tab'
          "
        >
          <div
            @click="defaultAddress(address.id)"
            class="flex items-center flex-wrap lg:flex-row"
          >
            <div
              class="radio-section bg-[#E3E3E3] text-[#121212] flex item-center w-fit p-[15px_25px] rounded-[60px_0px_0px_60px] border border-[#E3E3E3]"
            >
              <span
                class="w-[22px] h-[22px] bg-[#FFFFFF] block rounded-[30px] mr-[10px]"
              ></span>
              <p>{{ address.city }}- {{ address.country }}</p>
            </div>
            <div
              class="address-details bg-[#FFFFFF] text-[#C3C3C3] flex item-center justify-between w-[75%] p-[15px] rounded-[0px_60px_60px_0px] border border-[#E3E3E3]"
            >
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
              <p class="p-[0px_10px]">
                {{ address.street }}
              </p>
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
          <p
            v-if="address.id == userProfile.defaultShippingAddressId"
            class="text-[12px] p-[3px_2rem]"
          >
            Default Address
          </p>
          <p v-else class="hover-active text-[12px] p-[3px_2rem] opacity-0">
            Make it your Default Address
          </p>
        </div>
        <button
          @click="toggleGrid"
          :class="isGridVisible ? 'buttonActive'  : ''"
          class="w-[94.5%] bg-[#E3E3E3] text-[#121212] rounded-[35px] p-[14px] text-[16px] hover:bg-[#DAC8FF] mb-[2rem] "
        >
          + Add a new address
        </button>
        <div v-if="isGridVisible">
          <div class="grid grid-cols-1 gap-2 md:gap-4 w-[94.5%]">
            <!-- Business Name -->
            <!-- <div
              class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4"
            >
              <div class="flex flex-col gap-1 w-full">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >Business Name</label
                >
                <input
                  type="text"
                  placeholder="Business Name"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
              </div>
            </div> -->

            <!-- Business Address Lines -->
            <div
              class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4"
            >
              <div class="flex flex-col gap-1 w-full">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >Business Address Line 1</label
                >
                <input
                  type="text"
                  placeholder="Address Line 1"
                  v-model="formData.street"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  :class="{ 'border-[red]': errors?.street }"
                  @keyup="initAutocomplete"
                />
                <span
                  v-if="errors?.street"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ errors?.street }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full relative">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >Province</label
                >
                <input
                  type="text"
                  placeholder="Province"
                  v-model="formData.province"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  :class="{ 'border-[red]': errors?.province }"
                />
                <span
                  v-if="errors?.province"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ errors?.province }}</span
                >
                <button
                  class="hidden md:block absolute right-[-50px] top-9"
                  @click="openMapModal"
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4999 13.6673C16.7245 13.6673 13.6666 16.7252 13.6666 20.5007C13.6666 24.2761 16.7245 27.334 20.4999 27.334C24.2753 27.334 27.3333 24.2761 27.3333 20.5007C27.3333 16.7252 24.2753 13.6673 20.4999 13.6673ZM35.7724 18.7923C35.3855 15.328 33.832 12.0983 31.3671 9.63342C28.9023 7.16856 25.6725 5.61511 22.2083 5.22815V3.41732C22.2083 2.47773 21.4395 1.70898 20.4999 1.70898C19.5603 1.70898 18.7916 2.47773 18.7916 3.41732V5.22815C15.3273 5.61511 12.0975 7.16856 9.63269 9.63342C7.16783 12.0983 5.61438 15.328 5.22742 18.7923H3.41659C2.477 18.7923 1.70825 19.5611 1.70825 20.5007C1.70825 21.4402 2.477 22.209 3.41659 22.209H5.22742C5.61438 25.6733 7.16783 28.903 9.63269 31.3679C12.0975 33.8327 15.3273 35.3862 18.7916 35.7732V37.584C18.7916 38.5236 19.5603 39.2923 20.4999 39.2923C21.4395 39.2923 22.2083 38.5236 22.2083 37.584V35.7732C25.6725 35.3862 28.9023 33.8327 31.3671 31.3679C33.832 28.903 35.3855 25.6733 35.7724 22.209H37.5833C38.5228 22.209 39.2916 21.4402 39.2916 20.5007C39.2916 19.5611 38.5228 18.7923 37.5833 18.7923H35.7724ZM20.4999 32.459C13.8887 32.459 8.54158 27.1119 8.54158 20.5007C8.54158 13.8894 13.8887 8.54232 20.4999 8.54232C27.1112 8.54232 32.4583 13.8894 32.4583 20.5007C32.4583 27.1119 27.1112 32.459 20.4999 32.459Z"
                      fill="#8D54FF"
                    />
                  </svg>
                </button>
              </div>
              <!-- <div class="flex flex-col gap-1 w-full lg:max-w-[100%] lg:w-auto">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >Province</label
                >
                <input
                  type="text"
                  placeholder="Province"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                />
                <button
                  class="hidden md:block absolute right-[-50px] top-9"
                  @click="openMapModal"
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4999 13.6673C16.7245 13.6673 13.6666 16.7252 13.6666 20.5007C13.6666 24.2761 16.7245 27.334 20.4999 27.334C24.2753 27.334 27.3333 24.2761 27.3333 20.5007C27.3333 16.7252 24.2753 13.6673 20.4999 13.6673ZM35.7724 18.7923C35.3855 15.328 33.832 12.0983 31.3671 9.63342C28.9023 7.16856 25.6725 5.61511 22.2083 5.22815V3.41732C22.2083 2.47773 21.4395 1.70898 20.4999 1.70898C19.5603 1.70898 18.7916 2.47773 18.7916 3.41732V5.22815C15.3273 5.61511 12.0975 7.16856 9.63269 9.63342C7.16783 12.0983 5.61438 15.328 5.22742 18.7923H3.41659C2.477 18.7923 1.70825 19.5611 1.70825 20.5007C1.70825 21.4402 2.477 22.209 3.41659 22.209H5.22742C5.61438 25.6733 7.16783 28.903 9.63269 31.3679C12.0975 33.8327 15.3273 35.3862 18.7916 35.7732V37.584C18.7916 38.5236 19.5603 39.2923 20.4999 39.2923C21.4395 39.2923 22.2083 38.5236 22.2083 37.584V35.7732C25.6725 35.3862 28.9023 33.8327 31.3671 31.3679C33.832 28.903 35.3855 25.6733 35.7724 22.209H37.5833C38.5228 22.209 39.2916 21.4402 39.2916 20.5007C39.2916 19.5611 38.5228 18.7923 37.5833 18.7923H35.7724ZM20.4999 32.459C13.8887 32.459 8.54158 27.1119 8.54158 20.5007C8.54158 13.8894 13.8887 8.54232 20.4999 8.54232C27.1112 8.54232 32.4583 13.8894 32.4583 20.5007C32.4583 27.1119 27.1112 32.459 20.4999 32.459Z"
                      fill="#8D54FF"
                    />
                  </svg>
                </button>
              </div> -->
            </div>

            <!-- Province and City -->
            <div
              class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4"
            >
              <div class="flex flex-col gap-1 w-full lg:max-w-[100%] lg:w-auto">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >City</label
                >
                <input
                  type="text"
                  placeholder="City"
                  v-model="formData.city"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  :class="{ 'border-[red]': errors?.city }"
                />
                <span
                  v-if="errors?.city"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ errors?.city }}</span
                >
              </div>
              <div class="flex flex-col gap-1 w-full">
                <label
                  class="hidden md:block font-medium text-[#121212] text-[18px]"
                  >Postal Code</label
                >
                <input
                  type="text"
                  placeholder="Postal Code"
                  v-model="formData.postal"
                  class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]"
                  :class="{ 'border-[red]': errors?.postal }"
                />
                <span
                  v-if="errors?.postal"
                  class="text-[red] text-[12px] pl-[3px]"
                  >{{ errors?.postal }}</span
                >
              </div>
            </div>

            <!-- Postal Code -->
            <!-- <div
              class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4"
            >
             
            </div> -->
            <div class="flex justify-between items-center mb-6">
              <input
                class="styled-checkbox"
                id="sameAddress"
                type="checkbox"
                value="value1"
              />
              <label for="sameAddress">Make this my default address</label>
            </div>
            <button
              @click="openMapModal"
              class="block md:hidden bg-[#121212] text-[#FCFCFC] text-[12px] p-[0.60rem] rounded-[6px] mb-[2rem]"
            >
              Mark On Map
            </button>
          </div>
          <!-- Action Buttons -->
          <div
            class="flex flex-col gap-4 md:col-span-2 mt-[10px] justify-end w-full lg:max-w-[94.5%] lg:w-full pb-[2rem] md:pb-0"
          >
            <button
              @click="handleSaveAddress()"
              class="w-full flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium bg-[#121212] text-white rounded-lg hover:bg-violet-500 transition"
            >
              {{ formData && formData.id ? "Update" : "Save" }}
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4301 2.29987L6.68009 13.0499C6.58646 13.1438 6.47521 13.2184 6.35271 13.2692C6.23021 13.3201 6.09887 13.3463 5.96623 13.3463C5.83358 13.3463 5.70225 13.3201 5.57974 13.2692C5.45724 13.2184 5.34599 13.1438 5.25236 13.0499L0.549233 8.34675C0.455487 8.253 0.381123 8.14171 0.330388 8.01922C0.279653 7.89674 0.25354 7.76546 0.25354 7.63288C0.25354 7.5003 0.279653 7.36903 0.330388 7.24654C0.381123 7.12405 0.455487 7.01276 0.549233 6.91901C0.64298 6.82527 0.754273 6.7509 0.876758 6.70017C0.999244 6.64943 1.13052 6.62332 1.2631 6.62332C1.39568 6.62332 1.52696 6.64943 1.64944 6.70017C1.77193 6.7509 1.88322 6.82527 1.97697 6.91901L5.96707 10.9091L16.004 0.873818C16.1934 0.684489 16.4502 0.578125 16.7179 0.578125C16.9857 0.578125 17.2424 0.684489 17.4318 0.873818C17.6211 1.06315 17.7275 1.31993 17.7275 1.58769C17.7275 1.85544 17.6211 2.11222 17.4318 2.30155L17.4301 2.29987Z"
                  fill="#FCFCFC"
                />
              </svg>
            </button>
            <button
              @click="toggleGrid"
              class="group w-full flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium border border-gray-300 text-[#121212] rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition"
            >
              Cancel
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z"
                  fill="#121212"
                  class="group-hover:fill-[#7B61FF]"
                />
                <path
                  d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z"
                  fill="black"
                  class="group-hover:fill-[#7B61FF]"
                  fill-opacity="0.2"
                />
                <path
                  d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z"
                  fill="black"
                  class="group-hover:fill-[#7B61FF]"
                  fill-opacity="0.2"
                />
                <path
                  d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z"
                  fill="black"
                  class="group-hover:fill-[#7B61FF]"
                  fill-opacity="0.2"
                />
                <path
                  d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z"
                  fill="black"
                  class="group-hover:fill-[#7B61FF]"
                  fill-opacity="0.2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MapModal
        :isVisible="isVisible"
        :addressDetails="addressDetails"
        @closeModal="closeModal"
        @openMapModal="openMapModal"
        @handleClick="handleMap"
        @getAddress="getAddress"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "profileLayout",
  data() {
    return {
      isVisible: false,
      isGridVisible: false,
      addressDetails: {},
      formData: {
        street: "",
        province: "",
        city: "",
        postal: "",
      },
      errors: {},
    };
  },
  computed: {
    ...mapGetters({
      userProfile: "auth/getUserProfile",
    }),
    customerAddress() {
      return this.userProfile.customerAddress &&
        this.userProfile.customerAddress.length
        ? this.userProfile.customerAddress
        : [];
    },
    sortedAddresses() {
      // Clone the array to avoid mutating the original
      const addresses = [...this.userProfile.customerAddress];

      // Sort with the default shipping address at the top
      addresses.sort((a, b) => {
        if (a.id === this.userProfile.defaultShippingAddressId) return -1; // Move to top
        if (b.id === this.userProfile.defaultShippingAddressId) return 1;
        return 0; // Maintain order otherwise
      });

      return addresses;
    },
  },
  methods: {
    ...mapActions({
      createAddress: "profile/createAddress",
      updateAddress: "profile/updateAddress",
      setDefaultAddress: "profile/setDefaultAddress",
      profile: "auth/profile",
      fetchAddressFromCoordinates: "auth/fetchAddressFromCoordinates",
      fetchAutocomplete: "auth/fetchAutocomplete",
    }),
    closeModal() {
      this.isVisible = false;
    },
    openMapModal() {
      this.getCurrentLocation();
      this.isVisible = true;
    },
    handleMap() {
      this.isVisible = false;
    },
    toggleGrid() {
      this.isGridVisible = !this.isGridVisible;
    },
    async editAddress(address) {
      this.formData = { ...address };
      this.isGridVisible = true;
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.handleSuccess);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    handleSuccess(position) {
      this.formData.latitude = position.coords.latitude;
      this.formData.longitude = position.coords.longitude;
      this.addressDetails = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
    },
    async getAddressFromCoordinates(location) {
      try {
        let res = await this.fetchAddressFromCoordinates({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      } catch (error) {
        console.error("Error fetching address:", error);
      } finally {
      }
    },
    initAutocomplete() {
      try {
        const input = this.formData.street;
        // this.fetchAutocomplete({ query: input });
      } catch (error) {
        console.log(error, "error");
      }
    },
    async handleSaveAddress() {
      try {
        this.errors = await this.$validateAddressFormData({
          form: this.formData,
        });
        if (Object.keys(this.errors).length > 0) {
          this.$toast.open({
            message: "Please fix the errors before submitting.",
            type: "error",
          });
          return;
        }
        this.formData.country = "CA";
        this.formData.customerId = this.userProfile.id;
        if (this.formData.id) {
          await this.updateAddress(this.formData);
          this.$toast.open({
            message: this.$i18n.t("addressUpdatedSuccessfully"),
          });
        } else {
          await this.createAddress(this.formData);
          this.$toast.open({
            message: this.$i18n.t("addressCreatedSuccessfully"),
          });
        }
        await this.profile();
        
        this.formData = {};
      } catch (error) {
        console.log(error, "error");
        this.$toast.open({
          message:
            error?.response?.data?.message || this.$i18n.t("errorMessage"),
          type: "error",
        });
      }
    },
    async defaultAddress(id) {
      try {
        if (id == this.userProfile.defaultShippingAddressId) {
          return;
        }
        await this.setDefaultAddress({ id: id });
        await this.profile();
        this.$toast.open({
          message: this.$i18n.t("addressSetAsDefaultSuccessfully"),
        });
      } catch (error) {
        console.log(error);
      }
    },
    getAddress(item) {
      this.formData = item;
    },
  },
  mounted() {},
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
.address-tab:hover .radio-section {
  background-color: #c3c3c3;
  border-color: #c3c3c3;
}
.address-tab:hover .radio-section span {
  background-color: #ffa900;
}
.address-tab:hover .address-details {
  border-color: #c3c3c3;
  color: #121212;
}
.address-tab:hover .address-details svg path {
  stroke: #121212;
}
.address-tab:hover .hover-active {
  opacity: 1;
}

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
.buttonActive{
  background-color: #8D54FF;
  color: #ffffff;
}
@media screen and (max-width: 1023px) {
  .radio-section {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  .address-details {
    width: 100%;
    border-radius: 0px 0px 10px 10px;
  }
}
</style>
