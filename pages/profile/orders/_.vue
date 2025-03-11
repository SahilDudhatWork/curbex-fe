<template>
  <div class="md:p-6">
    <!-- Track Order Section -->
    <!-- <div class="mb-[4rem]">
      <h1 class="text-[18px] md:text-[20px] font-semibold md:mb-6">Track</h1>
      <div class="relative">
        <div class="statusbar absolute top-[48px] left-0 w-full h-1 bg-gray-200 mx-[50px]">
            <div class="w-1/2 h-full bg-[#8D54FF] fill-statusbar"></div>
        </div>
        
        <div class="track-section flex justify-between items-center relative">
            <div class="text-center step-section text-[12px] lg:text-[16px]">
                <p class="order-status text-[#8D54FF] font-medium pb-3">Confirmed</p>
                <div class="order-round w-[29px] h-[29px] bg-[#F3F3F3] rounded-full mx-auto mb-2 p-[5px]">
                    <div class="w-[19px] h-[19px] bg-[#8D54FF] rounded-full mx-auto mb-2"></div>
                </div>
                <p class="order-details text-[#C3C3C3]">Wed, 11th Jan</p>
            </div>
            <div class="text-center step-section text-[12px] lg:text-[16px]">
                <p class="order-status text-[#8D54FF] font-medium pb-3">Shipped</p>
                <div class="order-round w-[29px] h-[29px] bg-[#F3F3F3] rounded-full mx-auto mb-2 p-[5px]">
                    <div class="w-[19px] h-[19px] bg-[#8D54FF] rounded-full mx-auto mb-2"></div>
                </div>
                <p class="order-details text-[#C3C3C3]">Wed, 11th Jan</p>
            </div>
            <div class="text-center step-section text-[12px] lg:text-[16px]">
                <p class="order-status text-[#C3C3C3] pb-3">Out for delivery</p>
                <div class="order-round w-[29px] h-[29px] bg-[#F3F3F3] rounded-full mx-auto mb-2 p-[5px]">
                </div>
                <p class="order-details text-[#C3C3C3]">Wed, 11th Jan</p>
            </div>
            <div class="text-center step-section text-[12px] lg:text-[16px]">
                <p class="order-status text-[#C3C3C3] pb-3">Delivered</p>
                <div class="order-round w-[29px] h-[29px] bg-[#F3F3F3] rounded-full mx-auto mb-2 p-[5px]">
                </div>
                <p class="order-details text-[#C3C3C3]">Expected by, Mon 16th</p>
            </div>
        </div>
      </div>
    </div> -->

    <!-- My Orders Section -->
    <h1 class="text-[18px] md:text-[20px] font-semibold md:mb-6">My Orders</h1>
    <div class="mb-8">
      <div class="flex flex-wrap py-8">
        <div
          class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] mr-4 border border-[#F3F3F3] rounded-[15px]"
        >
          <img
            v-if="heroImage?.imageUrl"
            :src="heroImage?.imageUrl || '/Images/Profile/16.png'"
            :alt="orderDetails?.product?.name"
            class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] rounded-lg object-cover"
          />
          <img
            v-else
            :src="'/Images/Profile/16.png'"
            :alt="orderDetails?.product?.name"
            class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] rounded-lg object-cover"
          />
        </div>
        <div class="flex-1">
          <h3
            class="text-[14px] lg:text-[18px] text-[#121212] font-Montserrat-Medium pb-1"
          >
            {{ orderDetails?.product?.name }}
          </h3>
          <p class="text-[13px] lg:text-[16px] text-[#949494] pb-7 lg:pb-8">
            {{
              orderDetails?.rentalStartDate && orderDetails?.rentalEndDate
                ? `${$moment.formatMonthDay(
                    orderDetails?.rentalStartDate
                  )} - ${$moment.formatMonthDay(orderDetails?.rentalEndDate)}`
                : ""
            }}
          </p>
          <p class="text-[13px] lg:text-[16px] text-[#121212] pb-1">
            {{ orderDetails?.shippingStreet }}
          </p>
          <p class="text-[13px] lg:text-[16px] text-[#121212] pb-1">
            ${{ orderDetails?.total }}
          </p>
          <p class="text-[13px] lg:text-[16px] text-[#949494] pb-1">
            Order Id : {{ orderDetails?.id }}
          </p>
        </div>
        <div
          class="flex justify-end lg:justify-center items-end w-full lg:w-auto mt-5 lg:mt-0 pb-1"
        >
          <button
            @click="downloadInvoice(orderDetails)"
            class="text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] lg:w-auto lg:mb-0 md:mr-4"
          >
            Download Invoice
          </button>
          <!-- <button
            class="text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] lg:w-auto"
          >
            Details
          </button> -->
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h1 class="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-6">
        Uploaded Ad
      </h1>
      <div class="bg-[#F9F9F9] rounded-[10px] px-4 py-3 mb-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.24023C2 5.17937 2.42143 4.16195 3.17157 3.41181C3.92172 2.66166 4.93913 2.24023 6 2.24023H18C19.0609 2.24023 20.0783 2.66166 20.8284 3.41181C21.5786 4.16195 22 5.17937 22 6.24023V18.2402C22 19.3011 21.5786 20.3185 20.8284 21.0687C20.0783 21.8188 19.0609 22.2402 18 22.2402H6C4.93913 22.2402 3.92172 21.8188 3.17157 21.0687C2.42143 20.3185 2 19.3011 2 18.2402V6.24023Z"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.24023C2 5.17937 2.42143 4.16195 3.17157 3.41181C3.92172 2.66166 4.93913 2.24023 6 2.24023H18C19.0609 2.24023 20.0783 2.66166 20.8284 3.41181C21.5786 4.16195 22 5.17937 22 6.24023V18.2402C22 19.3011 21.5786 20.3185 20.8284 21.0687C20.0783 21.8188 19.0609 22.2402 18 22.2402H6C4.93913 22.2402 3.92172 21.8188 3.17157 21.0687C2.42143 20.3185 2 19.3011 2 18.2402V6.24023Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.24023C2 5.17937 2.42143 4.16195 3.17157 3.41181C3.92172 2.66166 4.93913 2.24023 6 2.24023H18C19.0609 2.24023 20.0783 2.66166 20.8284 3.41181C21.5786 4.16195 22 5.17937 22 6.24023V18.2402C22 19.3011 21.5786 20.3185 20.8284 21.0687C20.0783 21.8188 19.0609 22.2402 18 22.2402H6C4.93913 22.2402 3.92172 21.8188 3.17157 21.0687C2.42143 20.3185 2 19.3011 2 18.2402V6.24023Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.24023C2 5.17937 2.42143 4.16195 3.17157 3.41181C3.92172 2.66166 4.93913 2.24023 6 2.24023H18C19.0609 2.24023 20.0783 2.66166 20.8284 3.41181C21.5786 4.16195 22 5.17937 22 6.24023V18.2402C22 19.3011 21.5786 20.3185 20.8284 21.0687C20.0783 21.8188 19.0609 22.2402 18 22.2402H6C4.93913 22.2402 3.92172 21.8188 3.17157 21.0687C2.42143 20.3185 2 19.3011 2 18.2402V6.24023Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2402C9.88071 11.2402 11 10.1209 11 8.74023C11 7.35952 9.88071 6.24023 8.5 6.24023C7.11929 6.24023 6 7.35952 6 8.74023C6 10.1209 7.11929 11.2402 8.5 11.2402Z"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2402C9.88071 11.2402 11 10.1209 11 8.74023C11 7.35952 9.88071 6.24023 8.5 6.24023C7.11929 6.24023 6 7.35952 6 8.74023C6 10.1209 7.11929 11.2402 8.5 11.2402Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2402C9.88071 11.2402 11 10.1209 11 8.74023C11 7.35952 9.88071 6.24023 8.5 6.24023C7.11929 6.24023 6 7.35952 6 8.74023C6 10.1209 7.11929 11.2402 8.5 11.2402Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2402C9.88071 11.2402 11 10.1209 11 8.74023C11 7.35952 9.88071 6.24023 8.5 6.24023C7.11929 6.24023 6 7.35952 6 8.74023C6 10.1209 7.11929 11.2402 8.5 11.2402Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 11.2402C9.88071 11.2402 11 10.1209 11 8.74023C11 7.35952 9.88071 6.24023 8.5 6.24023C7.11929 6.24023 6 7.35952 6 8.74023C6 10.1209 7.11929 11.2402 8.5 11.2402Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.526 12.8615L6 22.2405H18.133C19.1586 22.2405 20.1422 21.8331 20.8674 21.1079C21.5926 20.3827 22 19.3991 22 18.3735V18.2405C22 17.7745 21.825 17.5955 21.51 17.2505L17.48 12.8555C17.2922 12.6506 17.0637 12.4872 16.8092 12.3755C16.5546 12.2638 16.2796 12.2065 16.0017 12.207C15.7237 12.2076 15.449 12.2661 15.1949 12.3788C14.9408 12.4915 14.713 12.6559 14.526 12.8615Z"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.526 12.8615L6 22.2405H18.133C19.1586 22.2405 20.1422 21.8331 20.8674 21.1079C21.5926 20.3827 22 19.3991 22 18.3735V18.2405C22 17.7745 21.825 17.5955 21.51 17.2505L17.48 12.8555C17.2922 12.6506 17.0637 12.4872 16.8092 12.3755C16.5546 12.2638 16.2796 12.2065 16.0017 12.207C15.7237 12.2076 15.449 12.2661 15.1949 12.3788C14.9408 12.4915 14.713 12.6559 14.526 12.8615Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.526 12.8615L6 22.2405H18.133C19.1586 22.2405 20.1422 21.8331 20.8674 21.1079C21.5926 20.3827 22 19.3991 22 18.3735V18.2405C22 17.7745 21.825 17.5955 21.51 17.2505L17.48 12.8555C17.2922 12.6506 17.0637 12.4872 16.8092 12.3755C16.5546 12.2638 16.2796 12.2065 16.0017 12.207C15.7237 12.2076 15.449 12.2661 15.1949 12.3788C14.9408 12.4915 14.713 12.6559 14.526 12.8615Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.526 12.8615L6 22.2405H18.133C19.1586 22.2405 20.1422 21.8331 20.8674 21.1079C21.5926 20.3827 22 19.3991 22 18.3735V18.2405C22 17.7745 21.825 17.5955 21.51 17.2505L17.48 12.8555C17.2922 12.6506 17.0637 12.4872 16.8092 12.3755C16.5546 12.2638 16.2796 12.2065 16.0017 12.207C15.7237 12.2076 15.449 12.2661 15.1949 12.3788C14.9408 12.4915 14.713 12.6559 14.526 12.8615Z"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-[12px] md:text-[16px] font-medium"
              >Image - 01.PNG</span
            >
          </div>
          <div class="flex gap-2">
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15.2402V19.2402C21 19.7707 20.7893 20.2794 20.4142 20.6544C20.0391 21.0295 19.5304 21.2402 19 21.2402H5C4.46957 21.2402 3.96086 21.0295 3.58579 20.6544C3.21071 20.2794 3 19.7707 3 19.2402V15.2402M17 8.24023L12 3.24023M12 3.24023L7 8.24023M12 3.24023V15.2402"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 15.2402V19.2402C21 19.7707 20.7893 20.2794 20.4142 20.6544C20.0391 21.0295 19.5304 21.2402 19 21.2402H5C4.46957 21.2402 3.96086 21.0295 3.58579 20.6544C3.21071 20.2794 3 19.7707 3 19.2402V15.2402M17 8.24023L12 3.24023M12 3.24023L7 8.24023M12 3.24023V15.2402"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 15.2402V19.2402C21 19.7707 20.7893 20.2794 20.4142 20.6544C20.0391 21.0295 19.5304 21.2402 19 21.2402H5C4.46957 21.2402 3.96086 21.0295 3.58579 20.6544C3.21071 20.2794 3 19.7707 3 19.2402V15.2402M17 8.24023L12 3.24023M12 3.24023L7 8.24023M12 3.24023V15.2402"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 15.2402V19.2402C21 19.7707 20.7893 20.2794 20.4142 20.6544C20.0391 21.0295 19.5304 21.2402 19 21.2402H5C4.46957 21.2402 3.96086 21.0295 3.58579 20.6544C3.21071 20.2794 3 19.7707 3 19.2402V15.2402M17 8.24023L12 3.24023M12 3.24023L7 8.24023M12 3.24023V15.2402"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 15.2402V19.2402C21 19.7707 20.7893 20.2794 20.4142 20.6544C20.0391 21.0295 19.5304 21.2402 19 21.2402H5C4.46957 21.2402 3.96086 21.0295 3.58579 20.6544C3.21071 20.2794 3 19.7707 3 19.2402V15.2402M17 8.24023L12 3.24023M12 3.24023L7 8.24023M12 3.24023V15.2402"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="orderDetails?.notes">
      <h1 class="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-6">
        Sign Message
      </h1>
      <div class="bg-[#F9F9F9] rounded-[10px] px-4 py-3 mb-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-[12px] md:text-[16px] font-medium">{{
              orderDetails?.notes
            }}</span>
          </div>
          <div class="flex gap-2">
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2093 3.78975L16.4509 6.03132M15.6504 1.815L9.58637 7.87901C9.27211 8.1912 9.05826 8.59014 8.97224 9.02468L8.41211 11.8285L11.2159 11.2673C11.6501 11.1805 12.0482 10.9677 12.3616 10.6542L18.4256 4.59024C18.6078 4.40801 18.7524 4.19168 18.851 3.95359C18.9496 3.7155 19.0004 3.46032 19.0004 3.20262C19.0004 2.94492 18.9496 2.68973 18.851 2.45165C18.7524 2.21356 18.6078 1.99723 18.4256 1.815C18.2434 1.63278 18.027 1.48823 17.789 1.38961C17.5509 1.29099 17.2957 1.24023 17.038 1.24023C16.7803 1.24023 16.5251 1.29099 16.287 1.38961C16.0489 1.48823 15.8326 1.63278 15.6504 1.815Z"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2093 3.78975L16.4509 6.03132M15.6504 1.815L9.58637 7.87901C9.27211 8.1912 9.05826 8.59014 8.97224 9.02468L8.41211 11.8285L11.2159 11.2673C11.6501 11.1805 12.0482 10.9677 12.3616 10.6542L18.4256 4.59024C18.6078 4.40801 18.7524 4.19168 18.851 3.95359C18.9496 3.7155 19.0004 3.46032 19.0004 3.20262C19.0004 2.94492 18.9496 2.68973 18.851 2.45165C18.7524 2.21356 18.6078 1.99723 18.4256 1.815C18.2434 1.63278 18.027 1.48823 17.789 1.38961C17.5509 1.29099 17.2957 1.24023 17.038 1.24023C16.7803 1.24023 16.5251 1.29099 16.287 1.38961C16.0489 1.48823 15.8326 1.63278 15.6504 1.815Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2093 3.78975L16.4509 6.03132M15.6504 1.815L9.58637 7.87901C9.27211 8.1912 9.05826 8.59014 8.97224 9.02468L8.41211 11.8285L11.2159 11.2673C11.6501 11.1805 12.0482 10.9677 12.3616 10.6542L18.4256 4.59024C18.6078 4.40801 18.7524 4.19168 18.851 3.95359C18.9496 3.7155 19.0004 3.46032 19.0004 3.20262C19.0004 2.94492 18.9496 2.68973 18.851 2.45165C18.7524 2.21356 18.6078 1.99723 18.4256 1.815C18.2434 1.63278 18.027 1.48823 17.789 1.38961C17.5509 1.29099 17.2957 1.24023 17.038 1.24023C16.7803 1.24023 16.5251 1.29099 16.287 1.38961C16.0489 1.48823 15.8326 1.63278 15.6504 1.815Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2093 3.78975L16.4509 6.03132M15.6504 1.815L9.58637 7.87901C9.27211 8.1912 9.05826 8.59014 8.97224 9.02468L8.41211 11.8285L11.2159 11.2673C11.6501 11.1805 12.0482 10.9677 12.3616 10.6542L18.4256 4.59024C18.6078 4.40801 18.7524 4.19168 18.851 3.95359C18.9496 3.7155 19.0004 3.46032 19.0004 3.20262C19.0004 2.94492 18.9496 2.68973 18.851 2.45165C18.7524 2.21356 18.6078 1.99723 18.4256 1.815C18.2434 1.63278 18.027 1.48823 17.789 1.38961C17.5509 1.29099 17.2957 1.24023 17.038 1.24023C16.7803 1.24023 16.5251 1.29099 16.287 1.38961C16.0489 1.48823 15.8326 1.63278 15.6504 1.815Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2093 3.78975L16.4509 6.03132M15.6504 1.815L9.58637 7.87901C9.27211 8.1912 9.05826 8.59014 8.97224 9.02468L8.41211 11.8285L11.2159 11.2673C11.6501 11.1805 12.0482 10.9677 12.3616 10.6542L18.4256 4.59024C18.6078 4.40801 18.7524 4.19168 18.851 3.95359C18.9496 3.7155 19.0004 3.46032 19.0004 3.20262C19.0004 2.94492 18.9496 2.68973 18.851 2.45165C18.7524 2.21356 18.6078 1.99723 18.4256 1.815C18.2434 1.63278 18.027 1.48823 17.789 1.38961C17.5509 1.29099 17.2957 1.24023 17.038 1.24023C16.7803 1.24023 16.5251 1.29099 16.287 1.38961C16.0489 1.48823 15.8326 1.63278 15.6504 1.815Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8827 13.9459V17.1224C16.8827 17.684 16.6596 18.2227 16.2624 18.6198C15.8653 19.017 15.3266 19.2401 14.765 19.2401H3.11769C2.55604 19.2401 2.0174 19.017 1.62026 18.6198C1.22311 18.2227 1 17.684 1 17.1224V5.47511C1 4.91346 1.22311 4.37482 1.62026 3.97768C2.0174 3.58053 2.55604 3.35742 3.11769 3.35742H6.29422"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8827 13.9459V17.1224C16.8827 17.684 16.6596 18.2227 16.2624 18.6198C15.8653 19.017 15.3266 19.2401 14.765 19.2401H3.11769C2.55604 19.2401 2.0174 19.017 1.62026 18.6198C1.22311 18.2227 1 17.684 1 17.1224V5.47511C1 4.91346 1.22311 4.37482 1.62026 3.97768C2.0174 3.58053 2.55604 3.35742 3.11769 3.35742H6.29422"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8827 13.9459V17.1224C16.8827 17.684 16.6596 18.2227 16.2624 18.6198C15.8653 19.017 15.3266 19.2401 14.765 19.2401H3.11769C2.55604 19.2401 2.0174 19.017 1.62026 18.6198C1.22311 18.2227 1 17.684 1 17.1224V5.47511C1 4.91346 1.22311 4.37482 1.62026 3.97768C2.0174 3.58053 2.55604 3.35742 3.11769 3.35742H6.29422"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8827 13.9459V17.1224C16.8827 17.684 16.6596 18.2227 16.2624 18.6198C15.8653 19.017 15.3266 19.2401 14.765 19.2401H3.11769C2.55604 19.2401 2.0174 19.017 1.62026 18.6198C1.22311 18.2227 1 17.684 1 17.1224V5.47511C1 4.91346 1.22311 4.37482 1.62026 3.97768C2.0174 3.58053 2.55604 3.35742 3.11769 3.35742H6.29422"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8827 13.9459V17.1224C16.8827 17.684 16.6596 18.2227 16.2624 18.6198C15.8653 19.017 15.3266 19.2401 14.765 19.2401H3.11769C2.55604 19.2401 2.0174 19.017 1.62026 18.6198C1.22311 18.2227 1 17.684 1 17.1224V5.47511C1 4.91346 1.22311 4.37482 1.62026 3.97768C2.0174 3.58053 2.55604 3.35742 3.11769 3.35742H6.29422"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11.2402V17.2402M10 11.2402V17.2402M6 7.24023V19.2402C6 19.7707 6.21071 20.2794 6.58579 20.6544C6.96086 21.0295 7.46957 21.2402 8 21.2402H16C16.5304 21.2402 17.0391 21.0295 17.4142 20.6544C17.7893 20.2794 18 19.7707 18 19.2402V7.24023M4 7.24023H20M7 7.24023L9 3.24023H15L17 7.24023"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Price Details Section -->
    <div class="mb-6">
      <h2
        class="text-[18px] md:text-[20px] font-semibold mb-3 pb-3 md:mb-6 border-b border-[#C3C3C3] md:border-b-0"
      >
        Price Details
      </h2>
      <div class="space-y-4">
        <!-- Regular price items -->
        <div class="border-b border-gray-200">
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Total MRP</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]"
              >${{ orderDetails?.total }}
            </span>
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Discount on MRP</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]">$0</span>
          </div>
          <div
            v-if="
              orderDetails?.product?.fees && orderDetails?.product?.fees.length
            "
            v-for="(feeItem, index) in orderDetails?.product?.fees"
            class="flex justify-between py-1 lg:py-3"
          >
            <span class="text-[#121212] text-[12px] md:text-[18px]">{{
              feeItem?.name
            }}</span>
            <span class="text-[#949494] text-[12px] md:text-[18px]">
              ${{ $formatCurrency(feeItem?.price) }}</span
            >
          </div>
          <div
            v-if="orderDetails?.permit"
            class="flex justify-between py-1 lg:py-3"
          >
            <span class="text-[#121212] text-[12px] md:text-[18px]">{{
              orderDetails?.permit?.name
            }}</span>
            <span class="text-[#949494] text-[12px] md:text-[18px]"
              >${{ $formatCurrency(orderDetails?.permit?.price) }}</span
            >
          </div>
          <div
            v-if="orderDetails?.taxType"
            class="flex justify-between py-1 lg:py-3"
          >
            <span class="text-[#121212] text-[12px] md:text-[18px]">{{
              orderDetails?.taxType
            }}</span>
            <span class="text-[#949494] text-[12px] md:text-[18px]"
              >${{ $formatCurrency(rateAmount) }}</span
            >
          </div>
        </div>

        <!-- Total amount -->
        <div class="flex justify-between md:pt-2">
          <span class="font-semibold text-[#121212] text-[12px] md:text-[18px]"
            >Total Amount</span
          >
          <span class="font-semibold text-[#121212] text-[12px] md:text-[18px]"
            >${{ orderDetails?.total }}</span
          >
        </div>
      </div>
    </div>
    <div class="mb-6">
      <h2
        class="text-[18px] md:text-[20px] font-semibold mb-3 pb-3 md:mb-6 border-b border-[#C3C3C3] md:border-b-0"
      >
        Order Details
      </h2>
      <div class="space-y-4">
        <!-- Regular price items -->
        <div class="border-b border-gray-200">
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Property Owner</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]"
              >{{ orderDetails?.customer?.firstName }}
              {{ orderDetails?.customer?.lastName }}</span
            >
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Order Status</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]">{{
              orderDetails?.status
            }}</span>
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Order Date</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]">{{
              $moment.formatDate(orderDetails?.createdAt)
            }}</span>
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Order Time</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]">{{
              $moment.formatTime(orderDetails?.createdAt)
            }}</span>
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Order Number</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]"
              >#{{ orderDetails.id }}</span
            >
          </div>
          <div class="flex justify-between py-1 lg:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Expected Delivery Date</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]">N/A</span>
          </div>
        </div>

        <!-- Total amount -->
        <div class="flex justify-between md:pt-2">
          <span class="font-semibold text-[#121212] text-[12px] md:text-[18px]"
            >Total Amount</span
          >
          <span class="font-semibold text-[#121212] text-[12px] md:text-[18px]"
            >${{ orderDetails?.total }}</span
          >
        </div>
      </div>
    </div>

    <div class="mb-6 pb-6">
      <h2
        class="text-[18px] md:text-[20px] font-semibold mb-3 pb-3 md:mb-6 border-b border-[#C3C3C3] md:border-b-0"
      >
        Payment
      </h2>
      <div class="space-y-4">
        <!-- Regular price items -->
        <div class="md:border-b border-gray-200">
          <div class="flex justify-between pb-[2rem] md:py-3">
            <span class="text-[#121212] text-[12px] md:text-[18px]"
              >Paid: Using Credit Card</span
            >
            <span class="text-[#949494] text-[12px] md:text-[18px]"></span>
          </div>
        </div>
        <div
          class="flex flex-wrap gap-4 md:col-span-2 mt-[30px] justify-end mb-[3rem]"
        >
          <!-- <button
            class="min-w-[133px] order-2 md:order-1 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium border border-gray-300 text-[#121212] rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition"
          >
            <span class="block">Change Ad</span>
          </button> -->
          <button
            @click="goToProduct"
            class="min-w-[133px] order-1 md:order-2 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium bg-violet-500 text-white rounded-lg hover:bg-[#121212] transition"
          >
            <span class="block">Order Again</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Feedback Section -->
    <!-- <div class="hidden md:block">
      <h2 class="text-xl font-bold mb-4 pb-4">
        We would love to hear your feedback
      </h2>
      <div class="mb-4 pb-4">
        <p class="text-[#121212] mb-2">Your overall rating</p>
        <div class="flex gap-1">
          <svg
            v-for="i in 5"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M18.7177 29.2354C18.1796 28.9093 17.5049 28.9094 16.9668 29.2355L8.71442 34.2373C7.43532 35.0126 5.85406 33.8656 6.19394 32.409L8.38179 23.033C8.52392 22.4239 8.31783 21.7861 7.84615 21.3753L0.582182 15.0495C-0.542998 14.0696 0.0618809 12.2189 1.54856 12.0926L11.1214 11.2797C11.7448 11.2268 12.2878 10.8336 12.5328 10.2579L16.2896 1.42821C16.8727 0.0577842 18.8151 0.0577861 19.3982 1.42821L23.1551 10.2579C23.4 10.8336 23.9431 11.2268 24.5665 11.2797L34.1393 12.0926C35.626 12.2189 36.2309 14.0696 35.1057 15.0495L27.8417 21.3753C27.37 21.7861 27.1639 22.4239 27.3061 23.033L29.4941 32.4096C29.8339 33.8661 28.2529 35.0132 26.9738 34.2381L18.7177 29.2354Z"
              fill="#FFC500"
            />
          </svg>
        </div>
      </div>

      <div class="mb-4">
        <p class="text-[#121212] mb-2">Add detailed review</p>
        <textarea
          class="w-full p-4 border border-[#121212] text-[#121212] rounded-lg focus:outline-none focus:border-violet-500"
          placeholder="Enter here"
          rows="4"
        ></textarea>
      </div>
      <div class="flex justify-end gap-4">
        <button
          class="min-w-[133px] order-2 md:order-1 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium border border-gray-300 text-[#121212] rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition"
        >
          Cancel
        </button>
        <button
          class="min-w-[133px] order-1 md:order-2 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium bg-violet-500 text-white rounded-lg hover:bg-[#121212] transition"
        >
          Sumbit
        </button>
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
      currentTab: "active",
      orderId: null,
      heroImage: null,
      activeOrders: [
        {
          id: 1,
          name: "Banner Stand",
          dateRange: "April 28th - April 30th",
          location: "310 Bayfield",
          price: "209.00",
          orderId: "121541368431",
          image: "/Images/Profile/16.png",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      orderDetails: "order/getOrderDetails",
    }),
    rateAmount() {
      let productPrice =
        (this.orderDetails?.price || 0) -
        (this.orderDetails?.permit?.price || 0);

      return (productPrice * (this.orderDetails?.tax || 0)) / 100;
    },
  },
  async asyncData({ params }) {
    return {
      orderId: params.pathMatch,
    };
  },

  async mounted() {
    await this.getOrderDetails();
    if (
      this.orderDetails?.product?.images &&
      this.orderDetails?.product?.images.length
    ) {
      this.heroImage =
        this.orderDetails?.product.images.find(
          (image) => image.imageType === "primary"
        ) || null;
    }
  },

  methods: {
    ...mapActions({
      fetchOrderDetails: "order/fetchOrderDetails",
      generateInvoice: "order/generateInvoice",
    }),
    async goToProduct() {
      if (this.orderDetails?.product?.type == "rental") {
        this.$router.push(`/rental/${this.orderDetails?.product.id}`);
      } else {
        this.$router.push(`/product-view/${this.orderDetails?.product.id}`);
      }
    },
    async getOrderDetails() {
      try {
        const response = await this.fetchOrderDetails({ id: this.orderId });
        console.log(response);
      } catch (error) {
        this.$toast.open({
          message: error?.response?.data?.message || "Something went wrong",
          type: "error",
        });
        console.log("error", error);
      }
    },
    async downloadInvoice(order) {
      try {
        let response = await this.generateInvoice({ id: order?.id });
        new Promise((resolve, reject) => {
          this.$fileDownload(response, `order-${order?.id}.pdf`);
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
};
</script>

<style scoped>
.statusbar {
  width: calc(100% - 126px);
}
@media screen and (max-width: 1024px) {
  .track-section {
    flex-wrap: wrap;
  }
  .step-section {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 15px 0px;
  }
  .order-status {
    order: 2;
    padding: 0 15px;
  }
  .order-round {
    order: 1;
    margin: 0;
  }
  .order-details {
    order: 3;
  }
  .statusbar {
    width: 5px;
    height: 200px;
    margin: 0px 13px;
    top: 19px;
  }
  .fill-statusbar {
    height: 70px;
  }
}
</style>
