<template>
  <div>
    <div class="container mx-auto pt-[4rem] px-6">
      <div
        class="flex justify-between items-start flex-wrap lg:flex-nowrap pb-[3rem]"
      >
        <div class="lg:hidden mb-5">
          <div
            class="w-full h-[370px] md:h-[454px] rounded-[19px] overflow-hidden mb-[1rem]"
          >
            <img
              src="/Images/Rental/map.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <!-- When click on READ MORE the add class "h-auto" -->
          <p
            class="text-[#121212] text-[12px] font-Montserrat-Medium lg:font-[600] leading-[25px] pt-5 line-clamp-2 overflow-hidden mb-[15px]"
          >
            310 Bayfield St in Barrie is a prime commercial property that boasts
            a vibrant mix of popular stores, making it a bustling hub for
            shoppers. Situated on Bayfield Street, one of Barrie's busiest
            thoroughfares, the location is surrounded by a variety of amenities,
            including retail shops, dining establishments, and service
            providers. The area attracts a high volume of foot and vehicle
            traffic, ensuring excellent visibility for advertisements. With its
            strategic location and diverse consumer base, placing billboards
            here offers advertisers a unique opportunity to reach a wide and
            engaged audience. 
          </p>
          <p class="flex items-center text-[12px] text-[#121212]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="19.5"
                width="19"
                height="19"
                rx="9.5"
                transform="rotate(-90 0.5 19.5)"
                fill="#FCFCFC"
              />
              <path
                d="M6.62903 8.46869L10 11.5332L13.371 8.46869"
                stroke="#121212"
                stroke-width="1.22581"
                stroke-linecap="round"
              />
              <path
                d="M6.62903 8.46869L10 11.5332L13.371 8.46869"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.22581"
                stroke-linecap="round"
              />
              <path
                d="M6.62903 8.46869L10 11.5332L13.371 8.46869"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.22581"
                stroke-linecap="round"
              />
              <path
                d="M6.62903 8.46869L10 11.5332L13.371 8.46869"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.22581"
                stroke-linecap="round"
              />
              <path
                d="M6.62903 8.46869L10 11.5332L13.371 8.46869"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.22581"
                stroke-linecap="round"
              />
            </svg>
            Read More
          </p>
        </div>
        <div class="w-full lg:w-[35%] flex flex-wrap justify-between lg:block">
          <div class="relative pb-[1rem]">
            <div
              v-if="selectedAddress"
              @click="showAddress = !showAddress"
              :class="!showAddress ? 'z-10' : 'z-0'"
              class="relative flex items-center justify-between bg-[#FFFFFF] border border-[#C3C3C3] rounded-[50px] cursor-pointer mb-[8px]"
            >
              <p
                class="bg-[#121212] text-[#FFFFFF] text-[14px] p-[12px_30px] rounded-[50px] whitespace-nowrap max-w-[96px] md:max-w-[155px] w-full overflow-hidden text-ellipsis text-center"
              >
                {{ selectedAddress?.city }}
              </p>
              <p
                class="text-[14px] whitespace-nowrap max-w-[120px] md:max-w-[280px] w-full overflow-hidden text-ellipsis text-left"
              >
                {{ selectedAddress.street }}
              </p>
              <span class="flex items-center w-[15px] h-[15px] mr-3">
                <svg
                  :class="showAddress ? 'rotate-180' : 'rotate-0'"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L7.5 8L2 2"
                    stroke="#121212"
                    stroke-width="2.07955"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </div>

            <div
              v-if="showAddress && sortedAddresses.length"
              class="bg-[#FFFFFF] w-full absolute z-10 max-h-[250px] overflow-auto mb-[20px] transition-all [&::-webkit-scrollbar]:w-[0px] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
              <div
                v-for="(address, index) in sortedAddresses"
                :key="index"
                @click="selectAddress(address)"
                class="group flex items-center justify-between bg-[#FFFFFF] border border-[#C3C3C3] hover:border-[#121212] rounded-[50px] cursor-pointer mb-[8px]"
              >
                <p
                  class="bg-[#F5F5F5] border border-[#C3C3C3] group-hover:border-[#121212] text-[#121212] m-[-1px] text-[14px] p-[12px_30px] rounded-[50px] whitespace-nowrap max-w-[96px] md:max-w-[155px] w-full overflow-hidden text-ellipsis text-center"
                >
                  {{ address.city }}
                </p>
                <p
                  class="text-[14px] whitespace-nowrap max-w-[150px] md:max-w-[336px] w-full overflow-hidden text-ellipsis text-left"
                >
                  {{ address.street }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-[48%] lg:w-full">
            <!-- <div class="flex items-center pb-3">
              <p
                class="bg-[#121212] w-fit p-[7px_16px] rounded-full text-[16px] lg:text-[20px] text-[#FFFFFF]"
              >
                3
              </p>
              <p
                class="pl-2 text-[16px] lg:text-[20px] text-[#121212] underline"
              >
                1004-1005 Burnhamthorpe Rd.
              </p>
            </div> -->
            <RentalProductSeaction
              v-if="productData && productData?.product"
              :product="productData.product"
              @toggleFavorite="toggleFavorite"
            />

            <div class="hidden md:block lg:hidden">
              <div class="bg-[#F5F5F5] h-[1px] my-5 w-full"></div>
              <p
                class="bg-[#121212] text-[#FFFFFF] font-Montserrat-Medium font-[600] text-[15px] p-[5px_15px] rounded-[25px] w-fit"
              >
                310 Bayfield
              </p>
              <p
                class="text-[#121212] text-[16px] lg:text-[13px] font-Montserrat-Medium lg:font-[600] leading-[25px] lg:leading-[19px] py-5"
              >
                310 Bayfield St in Barrie is a prime commercial property that
                boasts a vibrant mix of popular stores, making it a bustling hub
                for shoppers. Situated on Bayfield Street, one of Barrie's
                busiest thoroughfares, the location is surrounded by a variety
                of amenities, including retail shops, dining establishments, and
                service providers. The area attracts a high volume of foot and
                vehicle traffic, ensuring excellent visibility for
                advertisements. With its strategic location and diverse consumer
                base, placing billboards here offers advertisers a unique
                opportunity to reach a wide and engaged audience. 
              </p>
            </div>
          </div>
          <div ref="duration" class="w-full md:w-[48%] lg:w-full">
            <div
              class="bg-[#F5F5F5] md:bg-[#F5F5F500] h-[1px] my-5 w-full"
            ></div>
            <div
              class="bg-[#FCFCFC] border border-[#F3F3F3] rounded-[20px] p-[15px] lg:p-[20px_30px]"
            >
              <div class="flex justify-between items-center pb-5">
                <p
                  class="text-[14px] lg:text-[17px] text-[#121212] font-Montserrat-Medium"
                >
                  Pick Rental Duration
                </p>
                <p
                  class="text-[14px] text-[#121212] bg-[#DAC8FF] rounded-[34px] p-[5px_15px] font-Montserrat-Medium"
                >
                  {{ selectedPermit?.duration }} Days
                </p>
              </div>
              <div
                class="flex items-center justify-between flex-wrap lg:flex-nowrap"
              >
                <label
                  class="flex items-center lg:block bg-[#FFFFFF] border border-[#C3C3C3] hover:border-[#FFA900] rounded-[22px] lg:rounded-[11px] p-0 lg:p-[10px] w-full lg:w-[48%] mb-[10px] lg:mb-[0]"
                >
                  <span
                    class="dateSelect block text-[13px] text-[#121212] pb-[1px] font-Montserrat-Medium"
                    >START</span
                  >
                  <input
                    type="date"
                    v-model="startDate"
                    :min="todayDate"
                    @change="changeStartDate"
                    class="block text-[17px] text-[#121212] font-Montserrat-Medium w-full !outline-none mr-5 lg:mr-0"
                  />
                </label>
                <label
                  class="flex items-center lg:block bg-[#FFFFFF] border border-[#C3C3C3] hover:border-[#FFA900] rounded-[22px] lg:rounded-[11px] p-0 lg:p-[10px] w-full lg:w-[48%]"
                >
                  <span
                    class="dateSelect block text-[13px] text-[#121212] pb-[1px] font-Montserrat-Medium"
                    >End</span
                  >
                  <input
                    type="date"
                    :min="startDate"
                    v-model="endDate"
                    :disabled="true"
                    class="block text-[17px] text-[#121212] font-Montserrat-Medium w-full !outline-none mr-5 lg:mr-0"
                  />
                </label>
              </div>
              <p
                class="text-[12px] lg:text-[14px] font-Montserrat-Medium text-center lg:text-left pr-[25px] pt-5 md:pt-0"
                :class="!isAvailable ? 'text-red-500' : 'text-green'"
              >
                {{
                  !isAvailable
                    ? $t("productNotAvailableForRent", { startDate, endDate })
                    : $t("productAvailableForRent", { startDate, endDate })
                }}
              </p>
            </div>
            <div class="bg-[#F5F5F5] h-[1px] my-5 w-full"></div>
            <div
              v-if="productData.permits && productData.permits.length"
              class="lg:bg-[#FCFCFC] lg:border border-[#F3F3F3] rounded-[60px] lg:p-[15px_15px_15px_30px]"
            >
              <div class="lg:flex justify-between items-center">
                <p
                  class="selectPermit text-[14px] lg:text-[17px] text-[#121212] font-Montserrat-Medium lg:w-[48%]"
                >
                  Select permit type
                </p>
                <div class="lg:w-[48%] relative">
                  <div
                    @click="togglePermitType"
                    class="bg-[#FFFFFF] rounded-[34px] p-[10px_15px] border border-[#C3C3C3] cursor-pointer flex justify-between items-center relative z-[1]"
                  >
                    <p
                      class="text-[18px] text-[#121212] font-Montserrat-Medium"
                    >
                      {{ selectedPermit?.duration }} Days
                    </p>
                    <p>
                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.25 2L9.625 9.625L2 2"
                          stroke="#121212"
                          stroke-width="2.07955"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.25 2L9.625 9.625L2 2"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="2.07955"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.25 2L9.625 9.625L2 2"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="2.07955"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.25 2L9.625 9.625L2 2"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="2.07955"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.25 2L9.625 9.625L2 2"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="2.07955"
                          stroke-linecap="round"
                        />
                      </svg>
                    </p>
                  </div>
                  <div
                    :class="togglePermit ? 'openDropdown' : ''"
                    class="bg-[#FFFFFF] p-[10px_15px] border border-[#C3C3C3] h-0 mt-[-50px] rounded-[25px] absolute left-0 right-0 z-0 overflow-hidden opacity-0 transition-all"
                  >
                    <p
                      v-for="(item, index) in productData.permits"
                      class="text-[18px] text-[#121212] font-Montserrat-Medium"
                      @click="selectPermit(item)"
                    >
                      {{ item?.duration }} Days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#F5F5F5] h-[1px] my-5 w-full"></div>
            <div
              class="bg-[#FCFCFC] border border-[#F3F3F3] rounded-[20px] pt-[15px] overflow-hidden"
            >
              <div class="flex justify-between items-center p-[5px_15px]">
                <p
                  class="text-[12px] lg:text-[17px] text-[#121212] font-Montserrat-Medium font-[600]"
                >
                  {{ selectedPermit?.name }}
                </p>
                <p
                  class="text-[12px] lg:text-[17px] text-[#121212] font-Montserrat-Medium font-[600]"
                  :class="selectedPermitPrice == 'Free' ? 'text-green' : ''"
                >
                  {{
                    selectedPermitPrice == "Free"
                      ? selectedPermitPrice
                      : `$${selectedPermit?.price}`
                  }}
                </p>
              </div>
              <div
                v-if="
                  productData.product.fees && productData.product.fees.length
                "
                v-for="(feeItem, index) in productData.product.fees"
                class="flex justify-between items-center p-[5px_15px]"
              >
                <p
                  class="text-[12px] lg:text-[17px] text-[#121212] font-Montserrat-Medium font-[600]"
                >
                  {{ feeItem?.name }}
                </p>
                <p
                  class="text-[12px] lg:text-[17px] text-[#121212] font-Montserrat-Medium font-[600]"
                >
                  ${{ $formatCurrency(feeItem?.price) }}
                </p>
              </div>
              <div
                class="flex justify-between items-center p-[16px_15px] bg-[#121212]"
              >
                <p
                  class="text-[12px] lg:text-[17px] text-[#FFFFFF] font-Montserrat-Medium font-[600]"
                >
                  Total before taxes
                </p>
                <p
                  class="text-[12px] lg:text-[17px] text-[#FFFFFF] font-Montserrat-Medium font-[600]"
                >
                  ${{ $formatCurrency(totalPriceWithCharges) || 0 }}
                </p>
              </div>
            </div>
            <div class="bg-[#F5F5F5] h-[1px] my-5 w-full hidden md:block"></div>
            <div class="w-full">
              <p
                class="text-[#A0A0A0] text-[12px] lg:text-[14px] font-Montserrat-Medium text-center lg:text-left pr-[25px] pt-5 md:pt-0"
              >
                *Permit Fee may be required based on location
              </p>
              <div class="bg-[#F5F5F5] h-[1px] my-5 w-full md:hidden"></div>
              <div
                class="flex py-[15px] border-b border-[#F5F5F5] flex-wrap lg:flex-nowrap"
              >
                <div
                  class="flex items-center m-[5px] lg:m-0 md:mr-[0.5rem] border lg:border-0 lg:border-r border-[#F5F5F5] lg:border-[#121212] min-w-[148px] rounded-[5px] lg:rounded-[0px] p-[10px] lg:p-0 lg:pr-0 lg:mr-[15px]"
                >
                  <div class="mr-2">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1522 3.90332C18.4276 3.90318 18.6934 4.00473 18.8985 4.18849C19.1036 4.37224 19.2337 4.62527 19.2637 4.89903L19.2698 5.02096V7.96745H20.2859C21.0633 7.96741 21.8115 8.26446 22.3771 8.79784C22.9428 9.33121 23.2833 10.0606 23.3289 10.8367L23.334 11.0156V18.1278C23.3341 18.6404 23.1405 19.1342 22.7919 19.5101C22.4433 19.8861 21.9655 20.1163 21.4543 20.1548L21.3019 20.1598H19.2698V22.0903C19.27 22.3657 19.1684 22.6315 18.9847 22.8366C18.8009 23.0417 18.5479 23.1718 18.2741 23.2018L18.1522 23.2079H8.19507C7.91967 23.2081 7.65391 23.1065 7.44878 22.9228C7.24364 22.739 7.11358 22.486 7.08353 22.2122L7.07744 22.0903V20.1598H5.04537C4.53271 20.16 4.03892 19.9664 3.66301 19.6178C3.2871 19.2692 3.05684 18.7914 3.01839 18.2802L3.01331 18.1278V11.0156C3.01326 10.2381 3.31032 9.48996 3.84369 8.92429C4.37707 8.35862 5.10644 8.01814 5.88258 7.97253L6.0614 7.96745H7.07744V5.02096C7.0773 4.74555 7.17884 4.47979 7.3626 4.27466C7.54636 4.06953 7.79939 3.93946 8.07315 3.90942L8.19507 3.90332H18.1522ZM17.2378 17.1117H9.1095V21.1759H17.2378V17.1117ZM20.2859 9.99952H6.0614C5.81254 9.99955 5.57235 10.0909 5.38638 10.2563C5.20041 10.4217 5.0816 10.6495 5.05248 10.8967L5.04537 11.0156V18.1278H7.07744V16.1973C7.0773 15.9219 7.17884 15.6562 7.3626 15.451C7.54636 15.2459 7.79939 15.1158 8.07315 15.0858L8.19507 15.0797H18.1522C18.4276 15.0795 18.6934 15.1811 18.8985 15.3648C19.1036 15.5486 19.2337 15.8016 19.2637 16.0754L19.2698 16.1973V18.1278H21.3019V11.0156C21.3019 10.7461 21.1949 10.4876 21.0043 10.2971C20.8138 10.1066 20.5553 9.99952 20.2859 9.99952ZM18.2538 11.0156C18.5128 11.0158 18.7618 11.115 18.9502 11.2928C19.1385 11.4705 19.2518 11.7135 19.267 11.972C19.2821 12.2306 19.198 12.4851 19.0318 12.6837C18.8656 12.8823 18.6298 13.0099 18.3727 13.0405L18.2538 13.0476H16.2217C15.9628 13.0473 15.7137 12.9482 15.5254 12.7704C15.3371 12.5926 15.2238 12.3496 15.2086 12.0911C15.1934 11.8326 15.2775 11.578 15.4437 11.3795C15.6099 11.1809 15.8457 11.0532 16.1029 11.0227L16.2217 11.0156H18.2538ZM17.2378 5.93539H9.1095V7.96745H17.2378V5.93539Z"
                        fill="#121212"
                      />
                      <path
                        d="M18.1522 3.90332C18.4276 3.90318 18.6934 4.00473 18.8985 4.18849C19.1036 4.37224 19.2337 4.62527 19.2637 4.89903L19.2698 5.02096V7.96745H20.2859C21.0633 7.96741 21.8115 8.26446 22.3771 8.79784C22.9428 9.33121 23.2833 10.0606 23.3289 10.8367L23.334 11.0156V18.1278C23.3341 18.6404 23.1405 19.1342 22.7919 19.5101C22.4433 19.8861 21.9655 20.1163 21.4543 20.1548L21.3019 20.1598H19.2698V22.0903C19.27 22.3657 19.1684 22.6315 18.9847 22.8366C18.8009 23.0417 18.5479 23.1718 18.2741 23.2018L18.1522 23.2079H8.19507C7.91967 23.2081 7.65391 23.1065 7.44878 22.9228C7.24364 22.739 7.11358 22.486 7.08353 22.2122L7.07744 22.0903V20.1598H5.04537C4.53271 20.16 4.03892 19.9664 3.66301 19.6178C3.2871 19.2692 3.05684 18.7914 3.01839 18.2802L3.01331 18.1278V11.0156C3.01326 10.2381 3.31032 9.48996 3.84369 8.92429C4.37707 8.35862 5.10644 8.01814 5.88258 7.97253L6.0614 7.96745H7.07744V5.02096C7.0773 4.74555 7.17884 4.47979 7.3626 4.27466C7.54636 4.06953 7.79939 3.93946 8.07315 3.90942L8.19507 3.90332H18.1522ZM17.2378 17.1117H9.1095V21.1759H17.2378V17.1117ZM20.2859 9.99952H6.0614C5.81254 9.99955 5.57235 10.0909 5.38638 10.2563C5.20041 10.4217 5.0816 10.6495 5.05248 10.8967L5.04537 11.0156V18.1278H7.07744V16.1973C7.0773 15.9219 7.17884 15.6562 7.3626 15.451C7.54636 15.2459 7.79939 15.1158 8.07315 15.0858L8.19507 15.0797H18.1522C18.4276 15.0795 18.6934 15.1811 18.8985 15.3648C19.1036 15.5486 19.2337 15.8016 19.2637 16.0754L19.2698 16.1973V18.1278H21.3019V11.0156C21.3019 10.7461 21.1949 10.4876 21.0043 10.2971C20.8138 10.1066 20.5553 9.99952 20.2859 9.99952ZM18.2538 11.0156C18.5128 11.0158 18.7618 11.115 18.9502 11.2928C19.1385 11.4705 19.2518 11.7135 19.267 11.972C19.2821 12.2306 19.198 12.4851 19.0318 12.6837C18.8656 12.8823 18.6298 13.0099 18.3727 13.0405L18.2538 13.0476H16.2217C15.9628 13.0473 15.7137 12.9482 15.5254 12.7704C15.3371 12.5926 15.2238 12.3496 15.2086 12.0911C15.1934 11.8326 15.2775 11.578 15.4437 11.3795C15.6099 11.1809 15.8457 11.0532 16.1029 11.0227L16.2217 11.0156H18.2538ZM17.2378 5.93539H9.1095V7.96745H17.2378V5.93539Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M18.1522 3.90332C18.4276 3.90318 18.6934 4.00473 18.8985 4.18849C19.1036 4.37224 19.2337 4.62527 19.2637 4.89903L19.2698 5.02096V7.96745H20.2859C21.0633 7.96741 21.8115 8.26446 22.3771 8.79784C22.9428 9.33121 23.2833 10.0606 23.3289 10.8367L23.334 11.0156V18.1278C23.3341 18.6404 23.1405 19.1342 22.7919 19.5101C22.4433 19.8861 21.9655 20.1163 21.4543 20.1548L21.3019 20.1598H19.2698V22.0903C19.27 22.3657 19.1684 22.6315 18.9847 22.8366C18.8009 23.0417 18.5479 23.1718 18.2741 23.2018L18.1522 23.2079H8.19507C7.91967 23.2081 7.65391 23.1065 7.44878 22.9228C7.24364 22.739 7.11358 22.486 7.08353 22.2122L7.07744 22.0903V20.1598H5.04537C4.53271 20.16 4.03892 19.9664 3.66301 19.6178C3.2871 19.2692 3.05684 18.7914 3.01839 18.2802L3.01331 18.1278V11.0156C3.01326 10.2381 3.31032 9.48996 3.84369 8.92429C4.37707 8.35862 5.10644 8.01814 5.88258 7.97253L6.0614 7.96745H7.07744V5.02096C7.0773 4.74555 7.17884 4.47979 7.3626 4.27466C7.54636 4.06953 7.79939 3.93946 8.07315 3.90942L8.19507 3.90332H18.1522ZM17.2378 17.1117H9.1095V21.1759H17.2378V17.1117ZM20.2859 9.99952H6.0614C5.81254 9.99955 5.57235 10.0909 5.38638 10.2563C5.20041 10.4217 5.0816 10.6495 5.05248 10.8967L5.04537 11.0156V18.1278H7.07744V16.1973C7.0773 15.9219 7.17884 15.6562 7.3626 15.451C7.54636 15.2459 7.79939 15.1158 8.07315 15.0858L8.19507 15.0797H18.1522C18.4276 15.0795 18.6934 15.1811 18.8985 15.3648C19.1036 15.5486 19.2337 15.8016 19.2637 16.0754L19.2698 16.1973V18.1278H21.3019V11.0156C21.3019 10.7461 21.1949 10.4876 21.0043 10.2971C20.8138 10.1066 20.5553 9.99952 20.2859 9.99952ZM18.2538 11.0156C18.5128 11.0158 18.7618 11.115 18.9502 11.2928C19.1385 11.4705 19.2518 11.7135 19.267 11.972C19.2821 12.2306 19.198 12.4851 19.0318 12.6837C18.8656 12.8823 18.6298 13.0099 18.3727 13.0405L18.2538 13.0476H16.2217C15.9628 13.0473 15.7137 12.9482 15.5254 12.7704C15.3371 12.5926 15.2238 12.3496 15.2086 12.0911C15.1934 11.8326 15.2775 11.578 15.4437 11.3795C15.6099 11.1809 15.8457 11.0532 16.1029 11.0227L16.2217 11.0156H18.2538ZM17.2378 5.93539H9.1095V7.96745H17.2378V5.93539Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M18.1522 3.90332C18.4276 3.90318 18.6934 4.00473 18.8985 4.18849C19.1036 4.37224 19.2337 4.62527 19.2637 4.89903L19.2698 5.02096V7.96745H20.2859C21.0633 7.96741 21.8115 8.26446 22.3771 8.79784C22.9428 9.33121 23.2833 10.0606 23.3289 10.8367L23.334 11.0156V18.1278C23.3341 18.6404 23.1405 19.1342 22.7919 19.5101C22.4433 19.8861 21.9655 20.1163 21.4543 20.1548L21.3019 20.1598H19.2698V22.0903C19.27 22.3657 19.1684 22.6315 18.9847 22.8366C18.8009 23.0417 18.5479 23.1718 18.2741 23.2018L18.1522 23.2079H8.19507C7.91967 23.2081 7.65391 23.1065 7.44878 22.9228C7.24364 22.739 7.11358 22.486 7.08353 22.2122L7.07744 22.0903V20.1598H5.04537C4.53271 20.16 4.03892 19.9664 3.66301 19.6178C3.2871 19.2692 3.05684 18.7914 3.01839 18.2802L3.01331 18.1278V11.0156C3.01326 10.2381 3.31032 9.48996 3.84369 8.92429C4.37707 8.35862 5.10644 8.01814 5.88258 7.97253L6.0614 7.96745H7.07744V5.02096C7.0773 4.74555 7.17884 4.47979 7.3626 4.27466C7.54636 4.06953 7.79939 3.93946 8.07315 3.90942L8.19507 3.90332H18.1522ZM17.2378 17.1117H9.1095V21.1759H17.2378V17.1117ZM20.2859 9.99952H6.0614C5.81254 9.99955 5.57235 10.0909 5.38638 10.2563C5.20041 10.4217 5.0816 10.6495 5.05248 10.8967L5.04537 11.0156V18.1278H7.07744V16.1973C7.0773 15.9219 7.17884 15.6562 7.3626 15.451C7.54636 15.2459 7.79939 15.1158 8.07315 15.0858L8.19507 15.0797H18.1522C18.4276 15.0795 18.6934 15.1811 18.8985 15.3648C19.1036 15.5486 19.2337 15.8016 19.2637 16.0754L19.2698 16.1973V18.1278H21.3019V11.0156C21.3019 10.7461 21.1949 10.4876 21.0043 10.2971C20.8138 10.1066 20.5553 9.99952 20.2859 9.99952ZM18.2538 11.0156C18.5128 11.0158 18.7618 11.115 18.9502 11.2928C19.1385 11.4705 19.2518 11.7135 19.267 11.972C19.2821 12.2306 19.198 12.4851 19.0318 12.6837C18.8656 12.8823 18.6298 13.0099 18.3727 13.0405L18.2538 13.0476H16.2217C15.9628 13.0473 15.7137 12.9482 15.5254 12.7704C15.3371 12.5926 15.2238 12.3496 15.2086 12.0911C15.1934 11.8326 15.2775 11.578 15.4437 11.3795C15.6099 11.1809 15.8457 11.0532 16.1029 11.0227L16.2217 11.0156H18.2538ZM17.2378 5.93539H9.1095V7.96745H17.2378V5.93539Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M18.1522 3.90332C18.4276 3.90318 18.6934 4.00473 18.8985 4.18849C19.1036 4.37224 19.2337 4.62527 19.2637 4.89903L19.2698 5.02096V7.96745H20.2859C21.0633 7.96741 21.8115 8.26446 22.3771 8.79784C22.9428 9.33121 23.2833 10.0606 23.3289 10.8367L23.334 11.0156V18.1278C23.3341 18.6404 23.1405 19.1342 22.7919 19.5101C22.4433 19.8861 21.9655 20.1163 21.4543 20.1548L21.3019 20.1598H19.2698V22.0903C19.27 22.3657 19.1684 22.6315 18.9847 22.8366C18.8009 23.0417 18.5479 23.1718 18.2741 23.2018L18.1522 23.2079H8.19507C7.91967 23.2081 7.65391 23.1065 7.44878 22.9228C7.24364 22.739 7.11358 22.486 7.08353 22.2122L7.07744 22.0903V20.1598H5.04537C4.53271 20.16 4.03892 19.9664 3.66301 19.6178C3.2871 19.2692 3.05684 18.7914 3.01839 18.2802L3.01331 18.1278V11.0156C3.01326 10.2381 3.31032 9.48996 3.84369 8.92429C4.37707 8.35862 5.10644 8.01814 5.88258 7.97253L6.0614 7.96745H7.07744V5.02096C7.0773 4.74555 7.17884 4.47979 7.3626 4.27466C7.54636 4.06953 7.79939 3.93946 8.07315 3.90942L8.19507 3.90332H18.1522ZM17.2378 17.1117H9.1095V21.1759H17.2378V17.1117ZM20.2859 9.99952H6.0614C5.81254 9.99955 5.57235 10.0909 5.38638 10.2563C5.20041 10.4217 5.0816 10.6495 5.05248 10.8967L5.04537 11.0156V18.1278H7.07744V16.1973C7.0773 15.9219 7.17884 15.6562 7.3626 15.451C7.54636 15.2459 7.79939 15.1158 8.07315 15.0858L8.19507 15.0797H18.1522C18.4276 15.0795 18.6934 15.1811 18.8985 15.3648C19.1036 15.5486 19.2337 15.8016 19.2637 16.0754L19.2698 16.1973V18.1278H21.3019V11.0156C21.3019 10.7461 21.1949 10.4876 21.0043 10.2971C20.8138 10.1066 20.5553 9.99952 20.2859 9.99952ZM18.2538 11.0156C18.5128 11.0158 18.7618 11.115 18.9502 11.2928C19.1385 11.4705 19.2518 11.7135 19.267 11.972C19.2821 12.2306 19.198 12.4851 19.0318 12.6837C18.8656 12.8823 18.6298 13.0099 18.3727 13.0405L18.2538 13.0476H16.2217C15.9628 13.0473 15.7137 12.9482 15.5254 12.7704C15.3371 12.5926 15.2238 12.3496 15.2086 12.0911C15.1934 11.8326 15.2775 11.578 15.4437 11.3795C15.6099 11.1809 15.8457 11.0532 16.1029 11.0227L16.2217 11.0156H18.2538ZM17.2378 5.93539H9.1095V7.96745H17.2378V5.93539Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </svg>
                  </div>
                  <div class="text-[12px]">
                    <p
                      class="text-[#121212] text-[14px] pb-[3px] font-Montserrat-Bold"
                    >
                      Digital Print
                    </p>
                    <p class="text-[#A0A0A0] text-[12px]">Full color</p>
                  </div>
                </div>
                <div
                  class="flex items-center m-[5px] lg:m-0 md:mr-[0.5rem] border lg:border-0 lg:border-r border-[#F5F5F5] lg:border-[#121212] min-w-[148px] rounded-[5px] lg:rounded-[0px] p-[10px] lg:p-0 lg:pr-0 lg:mr-[15px]"
                >
                  <div class="mr-2">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.84697"
                        y="1.76781"
                        width="16.0059"
                        height="11.4601"
                        rx="2.39493"
                        stroke="#121212"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.84697"
                        y="1.76781"
                        width="16.0059"
                        height="11.4601"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.84697"
                        y="1.76781"
                        width="16.0059"
                        height="11.4601"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.84697"
                        y="1.76781"
                        width="16.0059"
                        height="11.4601"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.84697"
                        y="1.76781"
                        width="16.0059"
                        height="11.4601"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <path
                        d="M5.63666 13.627V17.4151"
                        stroke="black"
                        stroke-width="2.17721"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.9713 13.627V17.4151"
                        stroke="black"
                        stroke-width="2.17721"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="text-[12px]">
                    <p
                      class="text-[#121212] text-[14px] pb-[3px] font-Montserrat-Bold"
                    >
                      Topper Board
                    </p>
                    <p class="text-[#A0A0A0] text-[12px]">
                      {{ productData?.product?.length || 0 }}' (l) x
                      {{ productData?.product?.weight || 0 }}' (w)
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center m-[5px] lg:m-0 md:mr-[0.5rem] border lg:border-0 border-[#F5F5F5] lg:border-[#121212] min-w-[148px] rounded-[5px] lg:rounded-[0px] p-[10px] lg:p-0 lg:pr-0"
                >
                  <div class="mr-2">
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.62431"
                        y="1.29759"
                        width="18.724"
                        height="13.4987"
                        rx="2.39493"
                        stroke="#121212"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.62431"
                        y="1.29759"
                        width="18.724"
                        height="13.4987"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.62431"
                        y="1.29759"
                        width="18.724"
                        height="13.4987"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.62431"
                        y="1.29759"
                        width="18.724"
                        height="13.4987"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <rect
                        x="1.62431"
                        y="1.29759"
                        width="18.724"
                        height="13.4987"
                        rx="2.39493"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="2.17721"
                      />
                      <path
                        d="M6.52557 5.94775H10.4446"
                        stroke="black"
                        stroke-width="2.17721"
                        stroke-linecap="round"
                      />
                      <path
                        d="M6.52557 9.86719H10.4446"
                        stroke="black"
                        stroke-width="2.17721"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="text-[12px]">
                    <p
                      class="text-[#121212] text-[14px] pb-[3px] font-Montserrat-Bold"
                    >
                      Main Board
                    </p>
                    <p class="text-[#A0A0A0] text-[12px]">
                      {{ productData?.product?.height || 0 }}' (h) x
                      {{ productData?.product?.width || 0 }}' (w)
                    </p>
                  </div>
                </div>
              </div>
              <div class="border-b border-[#F5F5F5] p-[10px_0px] mb-5 pb-4">
                <p
                  class="text-[14px] md:text-[16px] text-[#121212] font-Montserrat-Medium mb-[5px]"
                >
                  Double Sided
                </p>
                <p
                  class="text-[14px] md:text-[16px] text-[#121212] font-Montserrat-Medium mb-[10px]"
                >
                  Changeable Graphic Inserts
                </p>
                <p
                  class="text-[#A0A0A0] text-[12px] md:text-[14px] font-Montserrat-Medium mb-[5px]"
                >
                  *Bylaw restrictions may apply
                </p>
                <p
                  class="text-[#A0A0A0] text-[12px] md:text-[14px] font-Montserrat-Medium"
                >
                  *While supplies last. Subject to change without notice.
                </p>
              </div>
            </div>
            <div
              class="flex flex-wrap justify-between border-b border-[#F5F5F5] mb-5"
            >
              <button
                @click="productAddToCart"
                class="bg-[#FFA900] text-[16px] md:text-[16px] text-center py-[11px] rounded-[7px] w-full lg:w-[49%] font-Montserrat-Medium mb-[10px]"
              >
                Add to cart
              </button>
              <button
                @click="productAddToCart"
                class="bg-[#121212] text-[16px] md:text-[16px] text-white border-[1px] border-[#000000] w-full lg:w-[49%] rounded-[7px] py-[11px] mb-[10px]"
              >
                Select Design Method
              </button>
              <button
                class="bg-[#ffffff] text-[12px] md:text-[14px] border-[1px] border-[#000000] w-full rounded-[7px] py-[11px] mb-[20px]"
                @click="downloadFileItem"
              >
                Download Artwork Specs
              </button>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[62%]">
          <div
            class="w-full h-[450px] rounded-[16px] overflow-hidden mb-[3rem] hidden lg:block"
          >
            <RentalGoogleMap
              :height="450"
              :markers="markers"
              @markerClick="getProductByMarker"
            />

            <!-- <img
              src="/Images/Rental/map.png"
              alt=""
              class="w-full h-full object-cover"
            /> -->
          </div>

          <p
            class="hidden lg:block bg-[#121212] text-[#FFFFFF] font-Montserrat-Medium font-[600] text-[15px] p-[5px_15px] rounded-[25px] w-fit"
          >
            310 Bayfield
          </p>
          <p
            class="hidden lg:block text-[#121212] text-[13px] font-Montserrat-Medium font-[600] leading-[19px] py-5"
          >
            310 Bayfield St in Barrie is a prime commercial property that boasts
            a vibrant mix of popular stores, making it a bustling hub for
            shoppers. Situated on Bayfield Street, one of Barrie's busiest
            thoroughfares, the location is surrounded by a variety of amenities,
            including retail shops, dining establishments, and service
            providers. The area attracts a high volume of foot and vehicle
            traffic, ensuring excellent visibility for advertisements. With its
            strategic location and diverse consumer base, placing billboards
            here offers advertisers a unique opportunity to reach a wide and
            engaged audience. 
          </p>
          <div>
            <Carousel
              :perPageCustom="perPageCustom"
              :autoplay="true"
              :autoplayTimeout="3000"
              loop
              :nav="false"
              :dots="false"
            >
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/6.png" alt="" class="w-full" />
                </div>
              </Slide>
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/7.png" alt="" class="w-full" />
                </div>
              </Slide>
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/8.png" alt="" class="w-full" />
                </div>
              </Slide>
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/6.png" alt="" class="w-full" />
                </div>
              </Slide>
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/7.png" alt="" class="w-full" />
                </div>
              </Slide>
              <Slide class="relative m-2">
                <div class="relative">
                  <img src="/Images/Product/8.png" alt="" class="w-full" />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div
            class="w-full h-[204px] md:h-[337px] lg:h-[341px] rounded-[16px] overflow-hidden my-[3rem]"
          >
            <!-- <img src="/Images/Product/6.png" alt="" class="w-full h-full object-cover"> -->
            <video
              src="/Images/Rental/slider.mp4"
              controls="false"
              loop
              autoplay
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
    <DesignMethod
      :isVisible="showDesignModal"
      @close="showDesignModal = false"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  middleware: "auth",

  data() {
    return {
      togglePermit: false,
      perPageCustom: [
        [320, 1.2],
        [768, 2.5],
        [1024, 4],
      ],
      addressDetails: {},
      selectedPermit: {},
      showDesignModal: false,
      showAddress: false,
      selectedAddress: null,
      markerId: null,
      startDate: this.$moment.formatStartDate(new Date()), // Default: today's date
      todayDate: this.$moment.formatStartDate(new Date()), // Default: today's date
      endDate: null,
      isAvailable: false,
    };
  },
  watch: {
    startDate: "isProductAvailable",
  },
  computed: {
    ...mapGetters({
      productData: "product/getSingleRentalProductData",
      cartItemCount: "product/getCartItemCount",
      cartDetail: "product/getCartItem",
      userProfile: "auth/getUserProfile",
      markerSchedule: "product/getMarkerSchedule",
    }),
    markers() {
      return this.productData.property && this.productData.property.markers
        ? this.productData.property.markers
        : [];
    },
    customerAddress() {
      return this.userProfile.customerAddress &&
        this.userProfile.customerAddress.length
        ? this.userProfile.customerAddress
        : [];
    },
    selectedPermitPrice() {
      return this.selectedPermit?.price && this.selectedPermit?.price > 0
        ? this.selectedPermit?.price
        : "Free";
    },
    sortedAddresses() {
      if (!this.userProfile.customerAddress) {
        return [];
      }
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
    totalPriceWithCharges() {
      let totalPrice = this.productData.product.price || 0;

      if (this.selectedPermit && this.selectedPermit.price) {
        totalPrice += this.selectedPermit.price;
      }

      if (
        this.productData.product.fees &&
        this.productData.product.fees.length
      ) {
        const totalFees = this.productData.product.fees.reduce(
          (sum, fee) => sum + (fee.price || 0),
          0
        );
        totalPrice += totalFees;
      }

      return totalPrice;
    },
  },
  methods: {
    ...mapActions({
      fetchSingleRentalProductDetail: "product/fetchSingleRentalProductDetail",
      updateCartItem: "product/updateCartItem",
      addToCart: "product/addToCart",
      fetchCartItems: "product/fetchCartItems",
      fetchMarkerSchedule: "product/fetchMarkerSchedule",
      toggleFavoriteProduct: "product/toggleFavoriteProduct",
    }),
    ...mapMutations({
      setCartItemCount: "product/setCartItemCount",
    }),
    async toggleFavorite() {
      try {
        await this.toggleFavoriteProduct({ id: this.productData?.product?.id });
      } catch (error) {
        if (error.status == 401) {
          this.$toast.open({
            message: this.$i18n.t("authFavoriteErrorMessage"),
            type: "warning",
          });
          this.$router.push(
            `/auth/login?redirect=/rental${this.productData?.product?.id}`
          );
        }
        console.log(error, "error");
      }
    },
    togglePermitType() {
      this.togglePermit = !this.togglePermit;
    },
    changeStartDate() {
      this.endDate = this.$moment.getEndDate(
        this.startDate,
        this.selectedPermit?.duration || 30
      );
    },
    async selectAddress(address) {
      this.showAddress = false;
      this.selectedAddress = address;
    },
    async getSingleProduct() {
      try {
        await this.fetchSingleRentalProductDetail({
          id: this.productId,
          addressId: this.selectedAddress?.id || 1,
        });
        console.log("getSingleProduct", this.selectedAddress);
      } catch (error) {
        console.log("error", error);
      }
    },
    async selectPermit(item) {
      this.selectedPermit = item;
      this.togglePermit = false;
      this.endDate = this.$moment.getEndDate(
        this.startDate,
        this.selectedPermit?.duration || 30
      );
      await this.isProductAvailable();
    },
    downloadFileItem() {
      try {
        if (
          this.productData?.product?.artworkSpecsURL &&
          this.productData?.product?.artworkSpecsURL != ""
        ) {
          const fileName = this.productData?.product?.artworkSpecsURL
            .split("/")
            .pop();
          this.$downloadFile({
            src: this.productData?.product?.artworkSpecsURL,
            name: fileName,
          });
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async productAddToCart() {
      try {
        if (!this.isAvailable) {
          this.$refs.duration.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          this.$toast.open({
            message: this.$i18n.t("productNotAvailableForRent", {
              startDate: this.startDate,
              endDate: this.endDate,
            }),
            type: "error",
          });

          return;
        }
        let cartData = null;
        if (this.cartDetail && this.cartDetail.cartItems) {
          cartData = this.cartDetail.cartItems.find(
            (x) => x.productId == this.productData?.product?.id
          );
        }
        if (cartData && cartData != null && cartData.id != "") {
          await this.updateCartItem({
            id: cartData.id,
            requestedDesigner: cartData.requestedDesigner,
            productId: this.productData?.product?.id,
            markerId: this.markerId,
            permitId: this.selectedPermit?.id || null,
            quantity: 1,
            rentalStartDate: this.startDate,
            rentalEndDate: this.endDate,
          });
          this.$toast.open({
            message: this.$i18n.t("productAddedToCartMessage"),
          });
        } else {
          await this.addToCart({
            productId: this.productData?.product?.id,
            markerId: this.markerId,
            permitId: this.selectedPermit?.id || null,
            quantity: 1,
            rentalStartDate: this.startDate,
            rentalEndDate: this.endDate,
          });
          this.$toast.open({
            message: this.$i18n.t("productAddedToCartMessage"),
          });
        }
        this.$cookies.set("productId", this.productData?.product?.id);
        this.showDesignModal = true;
        await this.fetchCartItems();
      } catch (error) {
        console.log(error, "error");
      }
    },
    async getProductByMarker(marker) {
      try {
        if (marker.productId != this.productData?.product?.id) {
          this.markerId = marker?.id;
          const newUrl = `/rental/${marker.productId}`;
          window.history.pushState({}, "", newUrl);
          this.selectedAddress =
            this.sortedAddresses && this.sortedAddresses.length
              ? this.sortedAddresses[0]
              : null;
          await this.fetchSingleRentalProductDetail({
            id: marker.productId,
            addressId: this.selectedAddress?.id || 1,
          });
          await this.loadData();
        }
      } catch (error) {
        console.log(error, "error");
      }
    },
    async getMarkerSchedule(markerId) {
      try {
        await this.fetchMarkerSchedule({ id: markerId });
        console.log(this.startDate, "asd");
        console.log("markerSchedule", this.markerSchedule);
        await this.isProductAvailable();
      } catch (error) {
        console.log("error", error);
      }
    },
    async isProductAvailable() {
      this.isAvailable = this.$moment.isDateRangeAvailable(
        this.startDate,
        this.endDate,
        this.markerSchedule
      );
      console.log("isAvailable", this.isAvailable);
      // if (!this.isAvailable) {
      //   this.$toast.open({
      //     message: this.$i18n.t("productNotAvailableForRent", {
      //       startDate: this.startDate,
      //       endDate: this.endDate,
      //     }),
      //     type: "error",
      //   });
      // } else {
      //   this.$toast.open({
      //     message: this.$i18n.t("productAvailableForRent", {
      //       startDate: this.startDate,
      //       endDate: this.endDate,
      //     }),
      //   });
      // }
    },

    async loadData() {
      this.selectedPermit =
        this.productData?.permits && this.productData?.permits.length
          ? this.productData.permits[0]
          : {};

      this.selectedAddress =
        this.sortedAddresses && this.sortedAddresses.length
          ? this.sortedAddresses[0]
          : null;
      if (this.markers && this.markers.length) {
        this.markerId = this.markers[0]?.id;
      }

      this.endDate = this.$moment.getEndDate(
        this.startDate,
        this.selectedPermit?.duration || 30
      );
    },
  },
  async mounted() {
    this.selectedAddress =
      this.sortedAddresses && this.sortedAddresses.length
        ? this.sortedAddresses[0]
        : null;
    await this.getSingleProduct();
    await this.loadData();
    if (this.markerId) {
      await this.getMarkerSchedule(22);
    }
  },
  async asyncData({ params }) {
    return {
      productId: params.pathMatch,
    };
  },
};
</script>
<style scoped>
@media screen and (max-width: 1023px) {
  .dateSelect {
    background-color: #121212;
    color: #ffffff;
    padding: 9px 15px;
    border-radius: 22px;
    margin-right: 13px;
    min-width: 83px;
    text-align: center;
  }
  .selectPermit {
    background-color: #121212;
    border-radius: 34px;
    padding: 11px 15px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
  }
}
.openDropdown {
  height: auto;
  padding-top: 60px;
  opacity: 1;
}
</style>
