<template>
  <div>
    <div class="bg-[#121212] h-[49px] w-full"></div>
    <header
      class="bg-[#FFFFFF80] backdrop-blur-md sticky top-0 left-0 right-0 z-50"
    >
      <div class="p-[22px]">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <!-- Logo Section -->
            <div>
              <NuxtLink to="/">
                <img src="/svg/Group.svg" alt="Logo" class="h-6 md:h-8" />
              </NuxtLink>
            </div>

            <!-- Navigation Links for Desktop -->
            <div class="hidden md:flex">
              <ul class="flex items-center gap-8 md:gap-6 lg:gap-8">
                <NuxtLink
                  to="/product"
                  class="text-gray-800 font-Montserrat-Medium text-[15px] cursor-pointer hover:scale-110"
                  >Products</NuxtLink
                >
                <NuxtLink
                  to="/about-us"
                  class="text-gray-800 font-Montserrat-Medium text-[15px] cursor-pointer hover:scale-110"
                  >About us</NuxtLink
                >
                <!-- <NuxtLink
                  to="/news"
                  class="text-gray-800 font-Montserrat-Medium text-[15px] cursor-pointer hover:scale-110"
                  >News</NuxtLink
                > -->
                <NuxtLink
                  to="/contact-us"
                  class="text-gray-800 font-Montserrat-Medium text-[15px] cursor-pointer hover:scale-110"
                  >Contact</NuxtLink
                >
                <NuxtLink
                  to="/faqs"
                  class="text-gray-800 font-Montserrat-Medium text-[15px] cursor-pointer hover:scale-110"
                  >FAQs</NuxtLink
                >
              </ul>
            </div>

            <!-- Icons Section for Desktop -->
            <div class="hidden md:flex items-center gap-4">
              <!-- <NuxtLink to="/notifications">
                <img
                  src="/svg/bell.svg"
                  alt="Notifications"
                  class="block w-[20px] h-[20px] cursor-pointer"
                />
              </NuxtLink> -->
              <NuxtLink to="/profile">
                <img
                  src="/svg/user.svg"
                  alt="User"
                  class="block w-[20px] h-[20px] cursor-pointer"
                />
              </NuxtLink>
              <NuxtLink to="/cart" class="relative">
                <img
                  src="/svg/bag.svg"
                  alt="Cart"
                  class="block w-[20px] h-[20px] cursor-pointer"
                />
                <span
                  class="w-[18px] h-[18px] bg-[red] block absolute right-[-8px] top-[-6px] rounded-[15px] text-[10px] text-[#FFFFFF] flex items-center justify-center"
                  >{{ cartItemCount }}</span
                >
              </NuxtLink>
              <!-- <img
                src="/svg/bag.svg"
                alt="Cart"
                class="block w-[20px] h-[20px] cursor-pointer"
              /> -->
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button
                id="menu-toggle"
                class="text-gray-800 focus:outline-none"
                @click="toggleSidebar"
              >
                <svg
                  id="menu-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Sidebar -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-[51] transition-all duration-1000 ease-in-out"
    >
      <div class="bg-[#121212] w-full h-full p-[22px]">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold">
            <NuxtLink to="/">
              <img src="/svg/LogoWhite.svg" alt="Logo" class="h-6 md:h-8" />
            </NuxtLink>
          </h2>
          <button
            class="w-[25px] h-[25px] focus:outline-none"
            @click="closeSidebar"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.25098L12 12.251"
                stroke="#FCFCFC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 12.251L12 1.25098"
                stroke="#FCFCFC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="p-[2.7rem] menu-scroll">
          <!-- <div
            class="flex items-center justify-between max-w-[220px] bg-[#FFFFFF] text-[#949494] text-[16px] p-[9px_20px] mb-[10px] rounded-[28px]"
          >
            <span>
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.86785 18.7781C8.96509 17.7923 9.98057 16.7208 10.9045 15.5739C12.8507 13.1528 14.0347 10.7657 14.1148 8.64314C14.1465 7.7805 14.0023 6.92038 13.6908 6.11415C13.3793 5.30793 12.9068 4.57215 12.3017 3.95077C11.6965 3.32938 10.9711 2.83514 10.1687 2.49756C9.36638 2.15998 8.50352 1.98599 7.63173 1.98599C6.75993 1.98599 5.89707 2.15998 5.09471 2.49756C4.29234 2.83514 3.56692 3.32938 2.96178 3.95077C2.35664 4.57215 1.8842 5.30793 1.57267 6.11415C1.26115 6.92038 1.11694 7.7805 1.14865 8.64314C1.22974 10.7657 2.41464 13.1528 4.3599 15.5739C5.28383 16.7208 6.29932 17.7923 7.39656 18.7781C7.50214 18.8726 7.58069 18.9412 7.6322 18.984L7.86785 18.7781ZM6.92813 19.8786C6.92813 19.8786 0 14.1012 0 8.41643C0 6.41217 0.804105 4.49001 2.23542 3.07279C3.66674 1.65556 5.60802 0.859375 7.6322 0.859375C9.65639 0.859375 11.5977 1.65556 13.029 3.07279C14.4603 4.49001 15.2644 6.41217 15.2644 8.41643C15.2644 14.1012 8.33627 19.8786 8.33627 19.8786C7.95085 20.23 7.31642 20.2262 6.92813 19.8786ZM7.6322 11.0614C8.34067 11.0614 9.02012 10.7827 9.52108 10.2867C10.022 9.79068 10.3035 9.11792 10.3035 8.41643C10.3035 7.71494 10.022 7.04218 9.52108 6.54615C9.02012 6.05013 8.34067 5.77146 7.6322 5.77146C6.92374 5.77146 6.24429 6.05013 5.74333 6.54615C5.24237 7.04218 4.96093 7.71494 4.96093 8.41643C4.96093 9.11792 5.24237 9.79068 5.74333 10.2867C6.24429 10.7827 6.92374 11.0614 7.6322 11.0614ZM7.6322 12.195C6.62011 12.195 5.64947 11.7969 4.93381 11.0883C4.21815 10.3796 3.8161 9.41856 3.8161 8.41643C3.8161 7.4143 4.21815 6.45322 4.93381 5.74461C5.64947 5.036 6.62011 4.6379 7.6322 4.6379C8.6443 4.6379 9.61494 5.036 10.3306 5.74461C11.0463 6.45322 11.4483 7.4143 11.4483 8.41643C11.4483 9.41856 11.0463 10.3796 10.3306 11.0883C9.61494 11.7969 8.6443 12.195 7.6322 12.195Z"
                  fill="#949494"
                />
              </svg>
            </span>
            <p>87 Gerrard st. E</p>
            <span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6983 0.355224L4.75883 3.36794L7.81937 0.355225L9.04358 0.957767L4.75883 5.17556L0.474087 0.957767L1.6983 0.355224Z"
                  fill="#949494"
                />
              </svg>
            </span>
          </div>
          <div class="flex items-center">
            <span class="relative left-[15px]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9475 17.7305L12.1271 12.9102M13.7339 8.89326C13.7339 11.9992 11.2161 14.517 8.11018 14.517C5.00428 14.517 2.48645 11.9992 2.48645 8.89326C2.48645 5.78736 5.00428 3.26953 8.11018 3.26953C11.2161 3.26953 13.7339 5.78736 13.7339 8.89326Z"
                  stroke="#949494"
                  stroke-width="1.20508"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              name="Search"
              id="Search"
              placeholder="Search Products"
              class="rounded-[28px] text-[16px] px-[50px] py-[10px] w-full ml-[-21px]"
            />
          </div> -->
          <ul class="mt-4 text-white">
            <li
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
              @click="dashboardEvent"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M10.2667 16.2647V13.698"
                    stroke="#FCFCFC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.61526 3.27763L2.68626 8.02596C2.01892 8.55641 1.59115 9.67718 1.73659 10.5156L2.87448 17.3259C3.07981 18.5407 4.24337 19.5246 5.47537 19.5246H15.0576C16.281 19.5246 17.4531 18.5322 17.6585 17.3259L18.7964 10.5156C18.9333 9.67718 18.5055 8.55641 17.8467 8.02596L11.9177 3.28618C11.0023 2.55041 9.52215 2.55041 8.61526 3.27763Z"
                    stroke="#FCFCFC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Dashboard
            </li>
            <div v-if="isMenuOpen">
              <NuxtLink
                to="/profile"
                class="py-[12px] flex items-center border-b border-[#8D54FF]"
              >
                <span class="block mr-2 w-[25px] h-[25px]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block w-full"
                  >
                    <path
                      d="M10.2667 15.5358V12.9691"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 7.40234C11.6569 7.40234 13 6.0592 13 4.40234C13 2.74549 11.6569 1.40234 10 1.40234C8.34315 1.40234 7 2.74549 7 4.40234C7 6.0592 8.34315 7.40234 10 7.40234Z"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3 18.4023V16.1023C3 14.5906 3.7375 13.1408 5.05025 12.0718C6.36301 11.0029 8.14348 10.4023 10 10.4023C11.8565 10.4023 13.637 11.0029 14.9497 12.0718C16.2625 13.1408 17 14.5906 17 16.1023V18.4023M3 18.4023H17Z"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Profile
              </NuxtLink>
              <NuxtLink
                to="/profile/address"
                class="py-[12px] flex items-center border-b border-[#8D54FF]"
              >
                <span class="block mr-2 w-[25px] h-[25px]">
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block w-full"
                  >
                    <path
                      d="M18.5401 12.903L18.1979 17.1808C18.0695 18.4898 17.9669 19.4908 15.6483 19.4908H4.88543C2.56687 19.4908 2.46421 18.4898 2.33587 17.1808L1.99365 12.903C1.92521 12.1929 2.14765 11.5342 2.54976 11.0294C2.55832 11.0208 2.55832 11.0208 2.56687 11.0123C3.03743 10.439 3.74754 10.0797 4.54321 10.0797H15.9905C16.7862 10.0797 17.4878 10.439 17.9498 10.9952C17.9583 11.0037 17.9669 11.0123 17.9669 11.0208C18.3861 11.5256 18.6171 12.1844 18.5401 12.903Z"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M2.99402 10.4484V6.04224C2.99402 3.13335 3.72124 2.40613 6.63013 2.40613H7.71669C8.80324 2.40613 9.05135 2.73124 9.46202 3.27879L10.5486 4.73324C10.8224 5.09257 10.9849 5.31502 11.7121 5.31502H13.8938C16.8027 5.31502 17.5299 6.04224 17.5299 8.95113V10.4826"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.06848 15.2131H12.466"
                      stroke="#FCFCFC"
                      stroke-width="1.925"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Address
              </NuxtLink>
              <NuxtLink
                to="/profile/orders"
                class="py-[12px] flex items-center border-b border-[#8D54FF]"
              >
                <span class="block mr-2 w-[25px] h-[25px]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block w-full"
                  >
                    <path
                      d="M10.5837 7.67273H15.0754"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.45795 7.67262L6.09961 8.31428L8.02461 6.38928"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5837 13.662H15.0754"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.45795 13.662L6.09961 14.3037L8.02461 12.3787"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.69958 18.8972H12.8329C17.1107 18.8972 18.8218 17.1861 18.8218 12.9084V7.77502C18.8218 3.49724 17.1107 1.78613 12.8329 1.78613H7.69958C3.4218 1.78613 1.71069 3.49724 1.71069 7.77502V12.9084C1.71069 17.1861 3.4218 18.8972 7.69958 18.8972Z"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Orders
              </NuxtLink>
              <!-- <NuxtLink
                to="/profile/promotions"
                class="py-[12px] flex items-center border-b border-[#8D54FF]"
              >
                <span class="block mr-2 w-[25px] h-[25px]">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block w-full"
                  >
                    <path
                      d="M14.6495 8.83136L8.34955 15.1313M14.6495 15.1313H14.639M8.36005 8.83136H8.34955M6.97615 19.9781C7.59565 19.9781 7.90645 19.9781 8.1889 20.0831C8.2288 20.0978 8.26765 20.1139 8.30545 20.1314C8.57949 20.2574 8.79894 20.4758 9.23784 20.9147C10.2479 21.9248 10.753 22.4298 11.3735 22.4771C11.4575 22.4834 11.5415 22.4834 11.6255 22.4771C12.2461 22.4298 12.7511 21.9248 13.7612 20.9147C14.2001 20.4758 14.4196 20.2574 14.6936 20.1314C14.7314 20.1139 14.7699 20.0978 14.8091 20.0831C15.0926 19.9781 15.4024 19.9781 16.0229 19.9781H16.1384C17.7207 19.9781 18.5124 19.9781 19.0049 19.4867C19.4973 18.9953 19.4963 18.2026 19.4963 16.6202V16.5047C19.4963 15.8852 19.4963 15.5744 19.6013 15.292C19.616 15.2521 19.6321 15.2132 19.6496 15.1754C19.7756 14.9014 19.994 14.6819 20.4329 14.243C21.443 13.2329 21.948 12.7279 21.9953 12.1073C22.0016 12.0233 22.0016 11.9393 21.9953 11.8553C21.948 11.2348 21.443 10.7297 20.4329 9.71965C19.994 9.28075 19.7756 9.06131 19.6496 8.78726L19.6013 8.67176C19.4963 8.38826 19.4963 8.07851 19.4963 7.45796V7.34246C19.4963 5.76012 19.4963 4.96843 19.0049 4.47598C18.5135 3.98353 17.7207 3.98458 16.1384 3.98458H16.0229C15.4034 3.98458 15.0926 3.98458 14.8102 3.87958L14.6936 3.83128C14.4196 3.70528 14.2001 3.48688 13.7612 3.04799C12.7511 2.03789 12.2461 1.53284 11.6255 1.48559C11.5416 1.48055 11.4575 1.48055 11.3735 1.48559C10.753 1.53284 10.2479 2.03789 9.23784 3.04799C8.79894 3.48688 8.57949 3.70633 8.30545 3.83128L8.18995 3.87958C7.90645 3.98458 7.5967 3.98458 6.97615 3.98458H6.86065C5.27831 3.98458 4.48662 3.98458 3.99417 4.47598C3.50172 4.96738 3.50277 5.76012 3.50277 7.34246V7.45796C3.50277 8.07746 3.50277 8.38826 3.39777 8.67071C3.38237 8.71061 3.36627 8.74946 3.34947 8.78726C3.22347 9.06131 3.00507 9.28075 2.56618 9.71965C1.55608 10.7297 1.05103 11.2348 1.00378 11.8553C0.998739 11.9393 0.998739 12.0234 1.00378 12.1073C1.05103 12.7279 1.55608 13.2329 2.56618 14.243C3.00507 14.6819 3.22452 14.9014 3.34947 15.1754C3.36697 15.2132 3.38307 15.2517 3.39777 15.2909C3.50277 15.5744 3.50277 15.8842 3.50277 16.5047V16.6202C3.50277 18.2026 3.50277 18.9943 3.99417 19.4867C4.48557 19.9792 5.27831 19.9781 6.86065 19.9781H6.97615Z"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Promotions
              </NuxtLink> -->
              <NuxtLink
                to="/profile/payments"
                class="py-[12px] flex items-center border-b border-[#8D54FF]"
              >
                <span class="block mr-2 w-[25px] h-[25px]">
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block w-full"
                  >
                    <rect
                      x="1"
                      y="1.64899"
                      width="19"
                      height="13.4118"
                      rx="2"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                    />
                    <path
                      d="M20 6.11957H1"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.6471 11.7078H13.2941"
                      stroke="#FCFCFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                Payments
              </NuxtLink>
            </div>

            <NuxtLink
              to="/cart"
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M3.00024 5.89404H14.3392C14.6276 5.89401 14.9126 5.95633 15.1746 6.07674C15.4366 6.19715 15.6695 6.3728 15.8573 6.59165C16.0451 6.81049 16.1833 7.06736 16.2625 7.34463C16.3417 7.6219 16.3601 7.91303 16.3162 8.19804L15.0612 16.35C14.9523 17.0585 14.5933 17.7045 14.0492 18.1712C13.5052 18.6378 12.812 18.8942 12.0952 18.894H5.24324C4.52664 18.894 3.83372 18.6375 3.28987 18.1708C2.74602 17.7042 2.38716 17.0583 2.27824 16.35L1.02324 8.19804C0.979407 7.91303 0.997728 7.6219 1.07694 7.34463C1.15616 7.06736 1.2944 6.81049 1.48218 6.59165C1.66997 6.3728 1.90286 6.19715 2.16488 6.07674C2.42691 5.95633 2.71187 5.89401 3.00024 5.89404Z"
                    stroke="#FCFCFC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.66924 8.89404V3.89404C5.66924 3.09839 5.98531 2.33533 6.54791 1.77272C7.11052 1.21011 7.87359 0.894043 8.66924 0.894043C9.46488 0.894043 10.2279 1.21011 10.7906 1.77272C11.3532 2.33533 11.6692 3.09839 11.6692 3.89404V8.89404"
                    stroke="#FCFCFC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Shopping Cart
              <span
                class="w-[20px] h-[20px] bg-[red] block rounded-[20px] text-[9px] text-[#FFFFFF] flex items-center justify-center ml-auto"
                >10</span
              >
            </NuxtLink>
            <NuxtLink
              to="/notifications"
              class="py-[12px] flex items-center border-[#FCFCFC] mb-[2rem]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M2.89991 17.1798V8.62981C2.89991 7.11808 3.50044 5.66826 4.5694 4.5993C5.63836 3.53034 7.08817 2.92981 8.59991 2.92981C10.1116 2.92981 11.5615 3.53034 12.6304 4.5993C13.6994 5.66826 14.2999 7.11808 14.2999 8.62981V17.1798M2.89991 17.1798H14.2999M2.89991 17.1798H0.999908M14.2999 17.1798H16.1999M7.64991 20.0298H9.54991"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    fill="#121212"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M8.5999 2.92979C9.12457 2.92979 9.5499 2.50446 9.5499 1.97979C9.5499 1.45511 9.12457 1.02979 8.5999 1.02979C8.07523 1.02979 7.6499 1.45511 7.6499 1.97979C7.6499 2.50446 8.07523 2.92979 8.5999 2.92979Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
              Notifications
            </NuxtLink>
            <NuxtLink
              to="/product"
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M9.16697 0.281128L18.3339 4.93986V16.5867L9.16697 21.2342L0 16.5867V4.93986L9.16697 0.281128ZM16.0532 5.38781L9.16697 1.89376L6.51163 3.23763L13.3538 6.75407L16.0532 5.38781ZM9.16697 8.88186L11.7893 7.56039L4.93606 4.04395L2.28072 5.38781L9.16697 8.88186ZM1.4103 6.55249V15.6908L8.46182 19.2744V10.1361L1.4103 6.55249ZM9.87212 19.2744L16.9236 15.6908V6.55249L9.87212 10.1361V19.2744Z"
                    fill="#949494"
                  />
                </svg>
              </span>
              Products
            </NuxtLink>
            <NuxtLink
              to="/"
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M19.0706 19.314H5.81121C4.99587 19.314 4.21142 19.0021 3.61877 18.4421C3.02612 17.8822 2.67021 17.1167 2.62405 16.3026L2.61914 16.1219V5.80908C2.61907 5.24911 2.83158 4.71 3.21372 4.3007C3.59586 3.89139 4.11913 3.64242 4.67778 3.60409L4.82904 3.59918H17.1062C17.6662 3.59911 18.2053 3.81162 18.6146 4.19376C19.0239 4.5759 19.2729 5.09917 19.3112 5.65782L19.3161 5.80908V6.54571H20.0528C20.6127 6.54564 21.1518 6.75815 21.5611 7.14029C21.9704 7.52243 22.2194 8.0457 22.2577 8.60435L22.2626 8.7556V16.1219C22.2627 16.9373 21.9508 17.7217 21.3908 18.3144C20.8308 18.907 20.0653 19.2629 19.2513 19.3091L19.0706 19.314ZM5.81121 17.8407H19.0706C19.5021 17.8407 19.9178 17.6783 20.2352 17.3859C20.5525 17.0935 20.7482 16.6924 20.7835 16.2624L20.7894 16.1219V8.7556C20.7894 8.5776 20.7249 8.40561 20.6079 8.27146C20.4909 8.1373 20.3293 8.05006 20.1529 8.02585L20.0528 8.01897H19.3161V15.6308C19.3161 15.8088 19.2516 15.9808 19.1346 16.115C19.0176 16.2491 18.856 16.3364 18.6797 16.3606L18.5795 16.3675C18.4015 16.3675 18.2295 16.303 18.0953 16.186C17.9612 16.069 17.8739 15.9074 17.8497 15.731L17.8429 15.6308V5.80908C17.8429 5.63107 17.7784 5.45909 17.6614 5.32493C17.5444 5.19078 17.3828 5.10353 17.2064 5.07932L17.1062 5.07245H4.82904C4.65103 5.07245 4.47905 5.13692 4.34489 5.25392C4.21074 5.37092 4.12349 5.53254 4.09928 5.70889L4.0924 5.80908V16.1219C4.09242 16.5533 4.25463 16.9689 4.54684 17.2862C4.83904 17.6035 5.23988 17.7993 5.66978 17.8348L5.81121 17.8407ZM12.6825 13.912H15.6349C15.8216 13.9121 16.0012 13.983 16.1376 14.1104C16.274 14.2378 16.3569 14.4122 16.3696 14.5984C16.3823 14.7846 16.3239 14.9687 16.2061 15.1135C16.0884 15.2583 15.92 15.353 15.7351 15.3784L15.6349 15.3853H12.6825C12.4959 15.3852 12.3162 15.3143 12.1798 15.1869C12.0435 15.0595 11.9605 14.8851 11.9478 14.6989C11.9351 14.5127 11.9935 14.3286 12.1113 14.1838C12.2291 14.039 12.3974 13.9443 12.5823 13.9189L12.6825 13.912ZM9.73304 10.4793C9.9284 10.4793 10.1158 10.5569 10.2539 10.6951C10.3921 10.8332 10.4697 11.0206 10.4697 11.216V14.6487C10.4697 14.844 10.3921 15.0314 10.2539 15.1695C10.1158 15.3077 9.9284 15.3853 9.73304 15.3853H6.30033C6.10497 15.3853 5.9176 15.3077 5.77946 15.1695C5.64131 15.0314 5.5637 14.844 5.5637 14.6487V11.216C5.5637 11.0206 5.64131 10.8332 5.77946 10.6951C5.9176 10.5569 6.10497 10.4793 6.30033 10.4793H9.73304ZM8.99641 11.9526H7.03697V13.912H8.99641V11.9526ZM12.6825 10.4793H15.6349C15.8216 10.4794 16.0012 10.5503 16.1376 10.6777C16.274 10.8051 16.3569 10.9795 16.3696 11.1657C16.3823 11.3519 16.3239 11.536 16.2061 11.6808C16.0884 11.8256 15.92 11.9203 15.7351 11.9457L15.6349 11.9526H12.6825C12.4945 11.9545 12.313 11.8845 12.1749 11.7569C12.0369 11.6293 11.9529 11.4537 11.9401 11.2662C11.9273 11.0786 11.9867 10.8933 12.1061 10.7481C12.2255 10.6029 12.3958 10.5089 12.5823 10.4852L12.6825 10.4793ZM6.30033 7.03876H15.6349C15.8229 7.03685 16.0045 7.10687 16.1425 7.23448C16.2805 7.36209 16.3645 7.53764 16.3773 7.72518C16.3901 7.91272 16.3308 8.09805 16.2114 8.24324C16.092 8.38843 15.9216 8.48248 15.7351 8.50613L15.6349 8.51202H6.30033C6.1137 8.51197 5.93404 8.44107 5.79767 8.31365C5.66129 8.18624 5.57836 8.0118 5.56564 7.8256C5.55292 7.6394 5.61135 7.45531 5.72913 7.31053C5.84691 7.16575 6.01526 7.07108 6.20015 7.04564L6.30033 7.03876Z"
                    fill="#949494"
                  />
                </svg>
              </span>
              Blog
            </NuxtLink>
            <NuxtLink
              to="/contact-us"
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.42199 2.61169C6.57303 1.46727 8.46841 1.67062 9.43218 2.9588L10.6258 4.55152C11.4108 5.59947 11.3408 7.06356 10.4092 7.9895L10.1841 8.2146C10.1586 8.30909 10.156 8.40831 10.1765 8.50401C10.2361 8.8899 10.5586 9.70707 11.9092 11.0501C13.2598 12.3931 14.0827 12.7147 14.4742 12.7752C14.5729 12.7951 14.6748 12.7922 14.7722 12.7667L15.158 12.3827C15.9866 11.5599 17.2577 11.4057 18.283 11.9628L20.0894 12.9464C21.6377 13.7863 22.0283 15.8898 20.761 17.1505L19.417 18.486C18.9933 18.9069 18.4239 19.2577 17.7297 19.323C16.0178 19.4828 12.0293 19.2786 7.83661 15.1104C3.92385 11.2194 3.17288 7.82588 3.07736 6.1537C3.03007 5.30816 3.42919 4.59314 3.93803 4.08808L5.42199 2.61169ZM8.29722 3.80907C7.8177 3.16876 6.92486 3.11769 6.4217 3.61802L4.9368 5.09346C4.62468 5.40369 4.47525 5.74606 4.49416 6.07331C4.56983 7.40216 5.17514 10.4637 8.83727 14.105C12.6791 17.9242 16.2268 18.0386 17.5982 17.91C17.8782 17.8844 18.1562 17.7388 18.4163 17.4806L19.7593 16.1442C20.306 15.6013 20.1859 14.612 19.4122 14.192L17.6058 13.2094C17.1064 12.9389 16.5219 13.0278 16.1587 13.3891L15.7284 13.8175L15.2271 13.3143C15.7284 13.8175 15.7274 13.8185 15.7265 13.8185L15.7255 13.8203L15.7227 13.8232L15.7161 13.8289L15.7019 13.8421C15.662 13.8792 15.6189 13.9127 15.5732 13.9424C15.4976 13.9925 15.3973 14.0483 15.2715 14.0946C15.0162 14.1902 14.6776 14.2412 14.2595 14.1769C13.4395 14.0511 12.3528 13.4922 10.9086 12.0564C9.46528 10.6207 8.90158 9.54061 8.77485 8.72155C8.70959 8.3035 8.76161 7.96491 8.85808 7.70954C8.91117 7.56585 8.98719 7.4317 9.08318 7.31231L9.11344 7.2792L9.12668 7.26502L9.13236 7.25934L9.1352 7.2565L9.13709 7.25461L9.40948 6.98411C9.81428 6.58026 9.87103 5.91158 9.48987 5.40179L8.29722 3.80907Z"
                    fill="#949494"
                  />
                </svg>
              </span>
              Contact
            </NuxtLink>
            <NuxtLink
              to="/faqs"
              class="py-[12px] flex items-center border-b border-[#FCFCFC]"
            >
              <span class="block mr-2 w-[25px] h-[25px]">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block w-full"
                >
                  <path
                    d="M11.6854 16.4032C11.6854 16.6422 11.6145 16.876 11.4816 17.0747C11.3488 17.2735 11.16 17.4285 10.9391 17.52C10.7183 17.6115 10.4752 17.6354 10.2407 17.5888C10.0062 17.5421 9.79082 17.427 9.62177 17.2579C9.45271 17.0889 9.33758 16.8735 9.29094 16.639C9.24429 16.4045 9.26823 16.1614 9.35973 15.9406C9.45122 15.7197 9.60616 15.5309 9.80495 15.3981C10.0037 15.2652 10.2375 15.1943 10.4765 15.1943C10.7971 15.1943 11.1046 15.3217 11.3313 15.5484C11.558 15.7751 11.6854 16.0826 11.6854 16.4032ZM10.4765 5.52368C8.25431 5.52368 6.4471 7.15056 6.4471 9.15017V9.55311C6.4471 9.76685 6.53201 9.97183 6.68314 10.123C6.83428 10.2741 7.03926 10.359 7.25299 10.359C7.46673 10.359 7.67171 10.2741 7.82284 10.123C7.97397 9.97183 8.05888 9.76685 8.05888 9.55311V9.15017C8.05888 8.04208 9.1438 7.13545 10.4765 7.13545C11.8093 7.13545 12.8942 8.04208 12.8942 9.15017C12.8942 10.2583 11.8093 11.1649 10.4765 11.1649C10.2628 11.1649 10.0578 11.2498 9.90669 11.4009C9.75556 11.5521 9.67065 11.757 9.67065 11.9708V12.7767C9.67065 12.9904 9.75556 13.1954 9.90669 13.3465C10.0578 13.4976 10.2628 13.5826 10.4765 13.5826C10.6903 13.5826 10.8953 13.4976 11.0464 13.3465C11.1975 13.1954 11.2824 12.9904 11.2824 12.7767V12.7041C13.1199 12.3667 14.506 10.901 14.506 9.15017C14.506 7.15056 12.6988 5.52368 10.4765 5.52368ZM20.9531 11.1649C20.9531 13.237 20.3386 15.2625 19.1875 16.9853C18.0363 18.7082 16.4001 20.051 14.4857 20.8439C12.5714 21.6369 10.4649 21.8444 8.43267 21.4401C6.40042 21.0359 4.53368 20.0381 3.06851 18.5729C1.60334 17.1077 0.605548 15.241 0.201308 13.2088C-0.202931 11.1765 0.00453932 9.07003 0.797484 7.15569C1.59043 5.24136 2.93323 3.60515 4.65609 2.45397C6.37895 1.30279 8.40448 0.688354 10.4765 0.688354C13.2542 0.691288 15.9172 1.796 17.8813 3.7601C19.8454 5.7242 20.9501 8.38724 20.9531 11.1649ZM19.3413 11.1649C19.3413 9.41161 18.8214 7.69769 17.8473 6.23989C16.8732 4.78209 15.4888 3.64587 13.8689 2.97492C12.2491 2.30397 10.4667 2.12841 8.74711 2.47046C7.02752 2.81251 5.44797 3.6568 4.20821 4.89656C2.96845 6.13632 2.12416 7.71587 1.78211 9.43546C1.44006 11.1551 1.61562 12.9375 2.28657 14.5573C2.95752 16.1771 4.09374 17.5616 5.55154 18.5357C7.00935 19.5097 8.72326 20.0297 10.4765 20.0297C12.8268 20.027 15.08 19.0922 16.7419 17.4303C18.4038 15.7684 19.3386 13.5152 19.3413 11.1649Z"
                    fill="#949494"
                  />
                </svg>
              </span>
              FAQs
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      showScrollButton: false,
      isSidebarOpen: false,
      isMenuOpen: false,
      sideBarItems: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "All Games",
          href: "/all-games",
        },
        {
          name: "Action",
          href: "",
        },
        {
          name: "Arcade",
          href: "",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      cartItemCount: "product/getCartItemCount",
      favoriteProductIdsArray: "product/getFavoriteProductIds",
    }),
    hasToken() {
      return this.$cookies.get("token") ? true : false;
    },
  },
  methods: {
    ...mapMutations({
      setFavoriteProductIds: "product/setFavoriteProductIds",
    }),
    ...mapActions({
      fetchCartItems: "product/fetchCartItems",
      fetchFavoriteProductsIds: "product/fetchFavoriteProducts",
    }),
    isActive(route) {
      return this.$route.path === route;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 50;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    dashboardEvent() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    const favoriteProductIds = this.$cookies.get("favoriteProductIds");
    if (favoriteProductIds) {
      let favoriteArray = favoriteProductIds
        ? JSON.parse(favoriteProductIds)
        : [];
      this.setFavoriteProductIds(favoriteArray);
    }
    if (this.hasToken) {
      try {
        if (!this.favoriteProductIdsArray.length) {
          await this.fetchFavoriteProductsIds();
        }
      } catch (error) {
        console.log("Favorite products error:", error);
      }

      try {
        await this.fetchCartItems();
      } catch (error) {
        console.log("Cart items error:", error);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
