<template>
    <div class="flex-1">
        <div class="max-w-3xl md:p-8">
            <!-- Profile Header -->
            <div class="mb-8 hidden md:block">
                <h1 class="text-[16px] md:text-[20px] font-semibold mb-3 md:mb-6">Profile Picture</h1>
                <div class="">
                    <div class="relative mb-6">
                        <img src="/Images/Profile/Avatar.png" alt="Profile Picture" class="w-[91px] h-[91px] rounded-full object-cover">
                    </div>
                    <div class="flex gap-4">
                        <button class="px-6 py-3 text-[14px] font-Montserrat-Bold  bg-black text-white rounded-[25px] hover:bg-gray-800 transition">Edit</button>
                        <button class="px-6 py-3 text-[14px] font-Montserrat-Bold bg-red-500 text-white rounded-[25px] hover:bg-red-600 transition">Delete</button>
                    </div>
                </div>
            </div>

            <!-- Account Info Form -->
            <div class="md:mt-12">
                <h2 class="text-[16px] md:text-[20px] font-semibold mb-3 md:mb-6">Account Info</h2>
                <div class="flex flex-wrap lg:grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
                    <!-- First Name -->
                    <div class="flex flex-col gap-1 w-full md:w-[72%] lg:w-auto">
                        <label class="hidden md:block font-medium text-[#121212] text-[18px]">First Name</label>
                        <input type="text" v-model="firstName" placeholder="First Name" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                    </div>

                    <!-- Last Name -->
                    <div class="flex flex-col gap-1 w-full md:w-[72%] lg:w-auto">
                        <label class="hidden md:block font-medium text-[#121212] text-[18px]">Last Name</label>
                        <input type="text" v-model="lastName" placeholder="Last Name" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                    </div>

                    <!-- <h2 class="text-[16px] md:text-[20px] font-semibold mt-3 md:hidden">Account Data</h2> -->
                    <!-- Username -->
                    <!-- <div class="flex flex-col gap-1 w-full md:w-[72%] lg:w-auto">
                        <label class="hidden md:block font-medium text-[#121212] text-[18px]">Username</label>
                        <input type="text" v-model="username" placeholder="Username" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                    </div> -->

                    <!-- Phone Number -->
                    <div class="flex flex-col gap-1 w-full md:w-[72%] lg:w-auto">
                        <label class="hidden md:block font-medium text-[#121212] text-[18px]">Phone Number</label>
                        <input type="tel" v-model="phoneNumber" placeholder="E.g. (123) 456-7890" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                        <span class="text-[12px] text-gray-500">E.g. (123) 456-7890</span>
                    </div>

                    <!-- Email Address - Full Width -->
                    <h2 class="text-[16px] md:text-[20px] font-semibold mt-3 md:hidden">Email</h2>
                    <div class="flex flex-col gap-1 w-full md:w-[72%] lg:w-auto">
                        <label class="hidden md:block font-medium text-[#121212] text-[18px]">Email Address</label>
                        <input type="email" v-model="email" placeholder="Email" class="text-[12px] md:text-[16px] w-full mt-1 px-4 py-[0.60rem] md:py-[0.70rem] border border-[#121212] bg-[transparent] rounded-[8px] focus:outline-none focus:border-[#000000]">
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 md:col-span-2 mt-[10px] justify-end lg:pt-[5rem] w-full md:w-[92%] lg:w-auto">
                        <button class="group order-2 md:order-1 w-full md:w-auto flex justify-center items-center gap-2 px-6 py-[0.60rem] md:py-3 text-[12px] md:text-[14px] font-medium border border-gray-300 text-[#121212] rounded-lg hover:border-[#7B61FF] hover:text-[#7B61FF] transition">
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
                <div class="md:hidden pb-6">
                    <h2 class="text-[16px] md:text-[20px] font-semibold mt-6 pt-6 pb-3 md:hidden">Change Profile Picture</h2>
                    <div class="flex items-center">
                        <img src="/Images/Profile/Avatar-2.png" alt="" class="w-[76px] h-[76px] rounded-[10px] mr-3">
                        <img src="/Images/Profile/Avatar-2.png" alt="" class="w-[76px] h-[76px] rounded-[10px] mr-3">
                        <div class="w-[76px] h-[76px] rounded-[10px] mr-3 border border-[#F3F3F3] flex items-center justify-center">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="20" height="20" rx="10" fill="#8D54FF"/>
                                <path d="M9.99997 7.5V13.5" stroke="#FCFCFC" stroke-width="0.824726" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.9999 10.5L6.99994 10.5" stroke="#FCFCFC" stroke-width="0.824726" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: "profileLayout",
        data() {
            return {
                phoneNumber: "",
                email: "",
                firstName: "",
                lastName: "",
                username: "",
            }
        }
    }
</script>
  