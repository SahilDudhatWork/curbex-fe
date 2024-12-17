<template>
    <div class="flex-1">
        <div class="max-w-3xl md:p-8">
            <!-- Business Address Section -->
            <div class="mb-8">
                <h1 class="text-[16px] md:text-[20px] font-semibold mb-3 md:mb-6">Business Address</h1>
                <div class="grid grid-cols-1 gap-2 md:gap-4">
                    <!-- Business Name -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Business Name</label>
                            <input type="text" placeholder="Business Name" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        </div>
                    </div>

                    <!-- Business Address Lines -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Business Address Line 1</label>
                            <input type="text" placeholder="Address" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        </div>
                        <div class="flex flex-col gap-1 w-full md:w-auto relative">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Business Address Line 2</label>
                            <input type="text" placeholder="Address" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                            <button class="hidden md:block absolute right-[-50px] top-9">
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4999 13.6673C16.7245 13.6673 13.6666 16.7252 13.6666 20.5007C13.6666 24.2761 16.7245 27.334 20.4999 27.334C24.2753 27.334 27.3333 24.2761 27.3333 20.5007C27.3333 16.7252 24.2753 13.6673 20.4999 13.6673ZM35.7724 18.7923C35.3855 15.328 33.832 12.0983 31.3671 9.63342C28.9023 7.16856 25.6725 5.61511 22.2083 5.22815V3.41732C22.2083 2.47773 21.4395 1.70898 20.4999 1.70898C19.5603 1.70898 18.7916 2.47773 18.7916 3.41732V5.22815C15.3273 5.61511 12.0975 7.16856 9.63269 9.63342C7.16783 12.0983 5.61438 15.328 5.22742 18.7923H3.41659C2.477 18.7923 1.70825 19.5611 1.70825 20.5007C1.70825 21.4402 2.477 22.209 3.41659 22.209H5.22742C5.61438 25.6733 7.16783 28.903 9.63269 31.3679C12.0975 33.8327 15.3273 35.3862 18.7916 35.7732V37.584C18.7916 38.5236 19.5603 39.2923 20.4999 39.2923C21.4395 39.2923 22.2083 38.5236 22.2083 37.584V35.7732C25.6725 35.3862 28.9023 33.8327 31.3671 31.3679C33.832 28.903 35.3855 25.6733 35.7724 22.209H37.5833C38.5228 22.209 39.2916 21.4402 39.2916 20.5007C39.2916 19.5611 38.5228 18.7923 37.5833 18.7923H35.7724ZM20.4999 32.459C13.8887 32.459 8.54158 27.1119 8.54158 20.5007C8.54158 13.8894 13.8887 8.54232 20.4999 8.54232C27.1112 8.54232 32.4583 13.8894 32.4583 20.5007C32.4583 27.1119 27.1112 32.459 20.4999 32.459Z" fill="#8D54FF"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Province and City -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-[69%] lg:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Province</label>
                            <select class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                                <option value="">Select Province</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-1 w-full md:w-[69%] lg:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">City</label>
                            <select class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                                <option value="">Select City</option>
                            </select>
                        </div>
                    </div>

                    <!-- Postal Code -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Postal Code</label>
                            <input type="text" placeholder="Enter ZIP" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        </div>
                    </div>
                    <button class="block md:hidden bg-[#121212] text-[#FCFCFC] text-[12px] p-[0.60rem] rounded-[6px]">Mark On Map</button>
                </div>
            </div>

            <!-- Shipping Address Section -->
            <div class="mt-8 pt-8">
                <h1 class="text-[16px] md:text-[20px] font-semibold mb-3 md:mb-6">Shipping Address</h1>
                <div class="flex justify-between items-center mb-6">
                    <input class="styled-checkbox" id="sameAddress" type="checkbox" value="value1">
                    <label for="sameAddress">Same as Business Address</label>
                </div>
                <div class="grid grid-cols-1 gap-2 md:gap-4">
                    <!-- Business Name -->                   

                    <!-- Business Address Lines -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto ">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Address Line 1</label>
                            <input type="text" placeholder="Address" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        </div>
                        <div class="flex flex-col gap-1 w-full md:w-auto  relative">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Business Address Line 2</label>
                            <input type="text" placeholder="Address" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                            <button class="hidden md:block absolute right-[-50px] top-9">
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4999 13.6673C16.7245 13.6673 13.6666 16.7252 13.6666 20.5007C13.6666 24.2761 16.7245 27.334 20.4999 27.334C24.2753 27.334 27.3333 24.2761 27.3333 20.5007C27.3333 16.7252 24.2753 13.6673 20.4999 13.6673ZM35.7724 18.7923C35.3855 15.328 33.832 12.0983 31.3671 9.63342C28.9023 7.16856 25.6725 5.61511 22.2083 5.22815V3.41732C22.2083 2.47773 21.4395 1.70898 20.4999 1.70898C19.5603 1.70898 18.7916 2.47773 18.7916 3.41732V5.22815C15.3273 5.61511 12.0975 7.16856 9.63269 9.63342C7.16783 12.0983 5.61438 15.328 5.22742 18.7923H3.41659C2.477 18.7923 1.70825 19.5611 1.70825 20.5007C1.70825 21.4402 2.477 22.209 3.41659 22.209H5.22742C5.61438 25.6733 7.16783 28.903 9.63269 31.3679C12.0975 33.8327 15.3273 35.3862 18.7916 35.7732V37.584C18.7916 38.5236 19.5603 39.2923 20.4999 39.2923C21.4395 39.2923 22.2083 38.5236 22.2083 37.584V35.7732C25.6725 35.3862 28.9023 33.8327 31.3671 31.3679C33.832 28.903 35.3855 25.6733 35.7724 22.209H37.5833C38.5228 22.209 39.2916 21.4402 39.2916 20.5007C39.2916 19.5611 38.5228 18.7923 37.5833 18.7923H35.7724ZM20.4999 32.459C13.8887 32.459 8.54158 27.1119 8.54158 20.5007C8.54158 13.8894 13.8887 8.54232 20.4999 8.54232C27.1112 8.54232 32.4583 13.8894 32.4583 20.5007C32.4583 27.1119 27.1112 32.459 20.4999 32.459Z" fill="#8D54FF"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Province and City -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-[69%] lg:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Province</label>
                            <select class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                                <option value="">Select Province</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-1 w-full md:w-[69%] lg:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">City</label>
                            <select class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                                <option value="">Select City</option>
                            </select>
                        </div>
                    </div>

                    <!-- Postal Code -->
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Postal Code</label>
                            <input type="text" placeholder="Enter ZIP" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        </div>
                    </div>
                    <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                        <div class="flex flex-col gap-1 w-full md:w-auto">
                            <label class="hidden md:block font-medium text-[#121212] text-[18px]">Phone Number</label>
                            <input type="text" placeholder="Enter ZIP" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-3 border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                            <p class="text-xs text-gray-500">E.g. (123) 456-7890</p>
                        </div>
                    </div>
                    <button class="block md:hidden bg-[#121212] text-[#FCFCFC] text-[12px] p-[0.60rem] rounded-[6px]">Mark On Map</button>
                </div>
               
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col md:flex-row gap-4 md:col-span-2 mt-[10px] justify-end lg:pt-[5rem] w-full md:w-[89%] lg:w-full pt-[2rem]">
                <button class="group order-2 md:order-1 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium border border-gray-300 text-gray-700 rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition">
                    Cancel
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z" fill="#121212" class="group-hover:fill-[#7B61FF]" />
                        <path d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z" fill="black"  class="group-hover:fill-[#7B61FF]" fill-opacity="0.2"/>
                        <path d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z" fill="black"  class="group-hover:fill-[#7B61FF]" fill-opacity="0.2"/>
                        <path d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z" fill="black"  class="group-hover:fill-[#7B61FF]" fill-opacity="0.2"/>
                        <path d="M14.2504 13.2963C14.4397 13.4856 14.5461 13.7424 14.5461 14.0101C14.5461 14.2779 14.4397 14.5347 14.2504 14.724C14.0611 14.9133 13.8043 15.0197 13.5365 15.0197C13.2688 15.0197 13.012 14.9133 12.8227 14.724L7.4905 9.39015L2.15666 14.7223C1.96733 14.9116 1.71054 15.018 1.44279 15.018C1.17504 15.018 0.918251 14.9116 0.728921 14.7223C0.539592 14.533 0.433228 14.2762 0.433228 14.0084C0.433228 13.7407 0.539592 13.4839 0.728921 13.2946L6.06277 7.96241L0.730601 2.62856C0.541271 2.43923 0.434907 2.18245 0.434907 1.9147C0.434907 1.64695 0.541271 1.39016 0.730601 1.20083C0.91993 1.0115 1.17672 0.905137 1.44447 0.905137C1.71222 0.905137 1.96901 1.0115 2.15834 1.20083L7.4905 6.53468L12.8243 1.19999C13.0137 1.01066 13.2705 0.904297 13.5382 0.904297C13.806 0.904297 14.0628 1.01066 14.2521 1.19999C14.4414 1.38932 14.5478 1.64611 14.5478 1.91386C14.5478 2.18161 14.4414 2.4384 14.2521 2.62773L8.91824 7.96241L14.2504 13.2963Z" fill="black"  class="group-hover:fill-[#7B61FF]" fill-opacity="0.2"/>
                    </svg>                                        
                </button>
                <button class="order-1 md:order-2 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium bg-violet-500 text-white rounded-lg hover:bg-[#121212] transition">
                    Save
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4301 2.29987L6.68009 13.0499C6.58646 13.1438 6.47521 13.2184 6.35271 13.2692C6.23021 13.3201 6.09887 13.3463 5.96623 13.3463C5.83358 13.3463 5.70225 13.3201 5.57974 13.2692C5.45724 13.2184 5.34599 13.1438 5.25236 13.0499L0.549233 8.34675C0.455487 8.253 0.381123 8.14171 0.330388 8.01922C0.279653 7.89674 0.25354 7.76546 0.25354 7.63288C0.25354 7.5003 0.279653 7.36903 0.330388 7.24654C0.381123 7.12405 0.455487 7.01276 0.549233 6.91901C0.64298 6.82527 0.754273 6.7509 0.876758 6.70017C0.999244 6.64943 1.13052 6.62332 1.2631 6.62332C1.39568 6.62332 1.52696 6.64943 1.64944 6.70017C1.77193 6.7509 1.88322 6.82527 1.97697 6.91901L5.96707 10.9091L16.004 0.873818C16.1934 0.684489 16.4502 0.578125 16.7179 0.578125C16.9857 0.578125 17.2424 0.684489 17.4318 0.873818C17.6211 1.06315 17.7275 1.31993 17.7275 1.58769C17.7275 1.85544 17.6211 2.11222 17.4318 2.30155L17.4301 2.29987Z" fill="#FCFCFC"/>
                    </svg>
                </button>
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