<template>
  <div>
    <footer class="bg-black text-gray-400 py-12 px-6">
      <div class="container mx-auto">
        <div class="flex justify-between flex-wrap">
          <!-- Logo and Social Icons -->
          <div
            class="flex sm:block justify-between items-center order-2 w-full sm:order-1 sm:w-auto"
          >
            <h1 class="text-xl font-bold text-white md:pb-3 w-[105px]">
              <img src="/svg/LogoWhite.svg" alt="Logo" />
            </h1>
            <div class="flex sm:mt-4 space-x-4">
              <a
                href="https://www.facebook.com/Curbex"
                class="text-gray-400 hover:text-gray-300"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4358_544)">
                    <path
                      d="M23.5 12.0694C23.5 5.71811 18.3513 0.569391 12 0.569391C5.64872 0.569391 0.5 5.71811 0.5 12.0694C0.5 17.8094 4.70538 22.567 10.2031 23.4297V15.3936H7.2832V12.0694H10.2031V9.5358C10.2031 6.65361 11.92 5.06158 14.5468 5.06158C15.805 5.06158 17.1211 5.28619 17.1211 5.28619V8.11627H15.671C14.2424 8.11627 13.7969 9.00273 13.7969 9.91218V12.0694H16.9863L16.4765 15.3936H13.7969V23.4297C19.2946 22.567 23.5 17.8094 23.5 12.0694Z"
                      fill="#FCFCFC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4358_544">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/curbexmedia/"
                class="text-gray-400 hover:text-gray-300"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50078 11.7445C8.50078 9.95069 9.95546 8.4961 11.7504 8.4961C13.5453 8.4961 15.0008 9.95069 15.0008 11.7445C15.0008 13.5384 13.5453 14.993 11.7504 14.993C9.95546 14.993 8.50078 13.5384 8.50078 11.7445ZM6.74368 11.7445C6.74368 14.5081 8.98518 16.7482 11.7504 16.7482C14.5156 16.7482 16.7571 14.5081 16.7571 11.7445C16.7571 8.98099 14.5156 6.74084 11.7504 6.74084C8.98518 6.74084 6.74368 8.98099 6.74368 11.7445ZM15.7853 6.54244C15.7852 6.77371 15.8537 6.99982 15.9822 7.19217C16.1107 7.38452 16.2934 7.53447 16.5071 7.62306C16.7209 7.71165 16.9561 7.7349 17.1831 7.68987C17.4101 7.64485 17.6186 7.53356 17.7823 7.37009C17.946 7.20662 18.0575 6.99831 18.1028 6.77149C18.148 6.54468 18.1249 6.30955 18.0365 6.09585C17.948 5.88214 17.7981 5.69946 17.6057 5.57089C17.4134 5.44232 17.1872 5.37365 16.9558 5.37356H16.9553C16.6451 5.37371 16.3477 5.49689 16.1283 5.71605C15.9089 5.93521 15.7855 6.23243 15.7853 6.54244ZM7.81123 19.6764C6.86061 19.6331 6.34392 19.4748 6.00055 19.3412C5.54532 19.164 5.22051 18.9531 4.87902 18.6123C4.53752 18.2714 4.32613 17.9471 4.14969 17.4922C4.01583 17.1492 3.85749 16.6326 3.81427 15.6826C3.767 14.6554 3.75757 14.3469 3.75757 11.7446C3.75757 9.14236 3.76778 8.83467 3.81427 7.80666C3.85757 6.8566 4.01708 6.34108 4.14969 5.99706C4.32691 5.5421 4.53799 5.21749 4.87902 4.8762C5.22005 4.53491 5.54454 4.32364 6.00055 4.14731C6.34376 4.01353 6.86061 3.85528 7.81123 3.8121C8.839 3.76485 9.14774 3.75542 11.7504 3.75542C14.353 3.75542 14.6621 3.76563 15.6907 3.8121C16.6413 3.85536 17.1572 4.01478 17.5014 4.14731C17.9566 4.32364 18.2814 4.53537 18.6229 4.8762C18.9644 5.21702 19.175 5.5421 19.3523 5.99706C19.4861 6.34006 19.6445 6.8566 19.6877 7.80666C19.7349 8.83467 19.7444 9.14236 19.7444 11.7446C19.7444 14.3469 19.7349 14.6546 19.6877 15.6826C19.6444 16.6326 19.4853 17.149 19.3523 17.4922C19.175 17.9471 18.964 18.2717 18.6229 18.6123C18.2819 18.9528 17.9566 19.164 17.5014 19.3412C17.1582 19.4749 16.6413 19.6332 15.6907 19.6764C14.6629 19.7236 14.3542 19.733 11.7504 19.733C9.14657 19.733 8.83869 19.7236 7.81123 19.6764ZM7.7305 2.05901C6.69251 2.10625 5.98323 2.27074 5.36381 2.51163C4.72231 2.76039 4.17925 3.09412 3.63658 3.6356C3.09392 4.17709 2.76084 4.72068 2.51193 5.36179C2.2709 5.98123 2.10632 6.6897 2.05905 7.72706C2.011 8.76607 2 9.09824 2 11.7445C2 14.3908 2.011 14.723 2.05905 15.762C2.10632 16.7995 2.2709 17.5079 2.51193 18.1273C2.76084 18.768 3.09399 19.3122 3.63658 19.8535C4.17917 20.3947 4.72231 20.728 5.36381 20.9775C5.9844 21.2183 6.69251 21.3828 7.7305 21.4301C8.77067 21.4773 9.1025 21.4891 11.7504 21.4891C14.3983 21.4891 14.7307 21.4781 15.7703 21.4301C16.8083 21.3828 17.5172 21.2183 18.137 20.9775C18.7781 20.728 19.3215 20.395 19.8642 19.8535C20.4069 19.312 20.7392 18.768 20.9888 18.1273C21.2299 17.5079 21.3952 16.7994 21.4417 15.762C21.489 14.7222 21.5 14.3908 21.5 11.7445C21.5 9.09824 21.489 8.76607 21.4417 7.72706C21.3945 6.68962 21.2299 5.98084 20.9888 5.36179C20.7392 4.72107 20.406 4.17794 19.8642 3.6356C19.3224 3.09326 18.7781 2.76039 18.1378 2.51163C17.5172 2.27074 16.8083 2.10547 15.7711 2.05901C14.7314 2.01177 14.3991 2 11.7512 2C9.10328 2 8.77067 2.01099 7.7305 2.05901Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/curbex/posts/?feedView=all"
                class="text-gray-400 hover:text-gray-300"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.44114 2C2.64545 2 1.99997 2.62583 1.99997 3.39684V20.1036C1.99997 20.8747 2.64553 21.5 3.44114 21.5H20.0588C20.8548 21.5 21.5 20.8746 21.5 20.1034V3.39684C21.5 2.62583 20.8548 2 20.0588 2H3.44114ZM7.92567 9.54002V18.319H5.00768V9.54002H7.92567ZM8.11801 6.82502C8.11801 7.66748 7.48464 8.34161 6.46729 8.34161L6.44817 8.34153C5.46883 8.34153 4.83569 7.66741 4.83569 6.82495C4.83569 5.96337 5.48795 5.30806 6.48664 5.30806C7.48464 5.30806 8.09897 5.96337 8.11801 6.82502ZM12.4586 18.319H9.54082C9.54082 18.319 9.57906 10.3639 9.54098 9.54032H12.4588V10.7829C12.8467 10.1849 13.5409 9.3342 15.0886 9.3342C17.0084 9.3342 18.4478 10.589 18.4478 13.2854V18.319H15.5301V13.623C15.5301 12.4427 15.1075 11.6377 14.052 11.6377C13.2457 11.6377 12.7656 12.1806 12.5547 12.705C12.4776 12.8922 12.4586 13.1549 12.4586 13.4169V18.319Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </a>
            </div>
          </div>
          <!-- Newsletter -->
          <!-- <div class="order-1 md:w-[50%] lg:w-[27%] sm:order-2 sm:w-auto pb-[30px]">
                    <div class="mb-3">
                        <h3 class="text-[18px] text-white">Join Our Newsletter</h3>
                        <p class="text-[12px] md:text-[16px] text-[#FCFCFC] mt-2 max-w-[370px]">Be the first to know about our latest updates, exclusive offers, and more.</p>
                    </div>
                    <form class="flex mt-4 md:mt-0">
                        <input type="email" placeholder="Enter your email" class="text-[12px] md:text-[14px] p-[9px_15px] w-full md:w-[60%] rounded-md bg-black text-white border border-[#FFFFFF] focus:outline-none mr-3">
                        <button type="submit" class="px-3 md:px-6 py-2 bg-[#FFA900] text-white text-[14px] rounded-md hover:bg-[#8D54FF]">Subscribe</button>
                    </form>
                </div> -->
        </div>
        <div
          class="border-t border-[#FCFCFC] pt-5 lg:pt-[2rem] mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <!-- Locations -->
          <div class="order-1">
            <h2 class="font-Montserrat-Medium font-bold text-white text-[14px]">
              Locations
            </h2>
            <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-[12px]">
              <li class="mt-0">New Brunswick</li>
              <li class="mt-0">British Columbia</li>
              <li class="mt-0">Alberta</li>
              <li class="mt-0">Saskatchewan</li>
              <li class="mt-0">Manitoba</li>
              <li class="mt-0">Ontario</li>
              <li class="mt-0">Quebec</li>
              <li class="mt-0">Newfoundland</li>
              <li class="mt-0">Nova Scotia</li>
            </ul>
          </div>

          <!-- Terms and Conditions -->
          <div
            class="order-3 sm:order:2 md:order-2 lg:order-2 col-span-2 md:col-span-1 pt-[2rem] md:pt-0"
          >
            <h2 class="font-Montserrat-Medium font-bold text-white text-[14px]">
              Terms and Conditions
            </h2>
            <ul class="mt-4 space-y-2 text-[12px]">
              <li>
                <a
                  href="/doc/multi-year-accessibility-plan-aoda-ontario.pdf"
                  download
                  class="hover:underline"
                  >AODA – Multi-Year Accessibility Plan</a
                >
              </li>
              <li>
                <a
                  href="/doc/statement-of-commitment-to-accessibility-memo-aoda-ontario.pdf"
                  download
                  class="hover:underline"
                  >AODA – Commitment to Accessibility</a
                >
              </li>
            </ul>
          </div>

          <!-- About -->
          <div class="order-2 sm:order:3 md:order-3 lg:order-3">
            <h2 class="font-Montserrat-Medium font-bold text-white text-[14px]">
              About
            </h2>
            <p class="mt-4 text-[12px]">1-888-4-CURBEX</p>
            <p class="py-[10px] text-[12px]">1-888-428-7239</p>
            <p class="text-[12px]">
              <a href="mailto:orderdesk@curbex.com" class="hover:underline"
                >orderdesk@curbex.com</a
              >
            </p>
          </div>
        </div>
        <!-- Footer Bottom -->
        <div
          class="mt-8 text-sm text-center md:text-left sm:flex justify-between items-center border-t sm:border-t-0 border-[#FCFCFC] pt-[2rem] mt-[3rem] sm:mt-0"
        >
          <ul class="flex justify-center md:justify-start mt-2 space-x-4">
            <li><a href="#" class="hover:underline text-[12px]">English</a></li>
            <li class="list-disc list-inside">
              <a href="/privacy-policy" class="hover:underline text-[12px]"
                >Privacy</a
              >
            </li>
            <li class="list-disc list-inside">
              <a href="/terms" class="hover:underline text-[12px]"
                >Terms & Conditions</a
              >
            </li>
            <li class="list-disc list-inside">
              <a href="#" class="hover:underline text-[12px]">Legal</a>
            </li>
          </ul>
          <p class="pt-[20px] text-[12px]">
            &copy; 2024 Curbex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script></script>
