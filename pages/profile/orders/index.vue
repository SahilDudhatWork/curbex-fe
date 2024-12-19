<template>
    <div class="flex-1">
        <div class="mx-auto md:p-6">
            <!-- <h1 class="text-[18px] md:text-[24px] text-[#232321] font-bold mb-4 pb-[1rem]">My Orders</h1> -->
            <h1 class="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-6 pb-[1rem] md:pt-[1rem]">My Orders</h1>
            
            <!-- Tab Navigation -->
            <div class="flex space-x-4 mb-3 md:mb-6 border-b border-[#F3F3F3] pb-[16px]">
                <button 
                    @click="currentTab = 'active'"
                    :class="['py-1 px-4 text-[14px] lg:text-[16px]', currentTab === 'active' ? 'border border-[#8D54FF] bg-[#8D54FF] text-[#FFFFFF] lg:text-[#121212] lg:bg-[#FFFFFF] rounded-[50px] lg:rounded-[0px] lg:border-0 lg:border-b-0 lg:border-black' : 'border border-[#949494] rounded-[50px] bg-[#FCFCFC] lg:bg-[#00000000] lg:border-0 text-[#C3C3C3]']"
                >Active</button>
                <button 
                    @click="currentTab = 'upcoming'"
                    :class="['py-1 px-4 text-[14px] lg:text-[16px]', currentTab === 'upcoming' ? 'border border-[#8D54FF] bg-[#8D54FF] text-[#FFFFFF] lg:text-[#121212] lg:bg-[#FFFFFF] rounded-[50px] lg:rounded-[0px] lg:border-0 lg:border-b-0 lg:border-black' : 'border border-[#949494] rounded-[50px] bg-[#FCFCFC] lg:bg-[#00000000] lg:border-0 text-[#C3C3C3]']"
                >Upcoming</button>
                <button 
                    @click="currentTab = 'past'"
                    :class="['py-1 px-4 text-[14px] lg:text-[16px]', currentTab === 'past' ? 'border border-[#8D54FF] bg-[#8D54FF] text-[#FFFFFF] lg:text-[#121212] lg:bg-[#FFFFFF] rounded-[50px] lg:rounded-[0px] lg:border-0 lg:border-b-0 lg:border-black' : 'border border-[#949494] rounded-[50px] bg-[#FCFCFC] lg:bg-[#00000000] lg:border-0 text-[#C3C3C3]']"
                >Past</button>
            </div>

            <!-- Search Bar -->
            <div class="mb-3 md:mb-6 lg:mb-0 relative">
                <input type="text" placeholder="Search your order" class="w-full mt-1 p-[7px_15px] lg:px-4 lg:py-3 border border-[#121212] bg-[transparent] rounded-[25px]  lg:rounded-[8px] focus:outline-none focus:border-[#000000]">
                <span class="absolute right-[14px] top-[17px]">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.11133 1.33789C7.62797 1.33789 6.17792 1.77776 4.94455 2.60187C3.71119 3.42598 2.74989 4.59732 2.18223 5.96776C1.61458 7.33821 1.46605 8.84621 1.75544 10.3011C2.04483 11.7559 2.75914 13.0923 3.80803 14.1412C4.85692 15.1901 6.1933 15.9044 7.64815 16.1938C9.10301 16.4832 10.611 16.3346 11.9815 15.767C13.3519 15.1993 14.5232 14.238 15.3474 13.0047C16.1715 11.7713 16.6113 10.3212 16.6113 8.83789C16.6112 6.8488 15.821 4.94122 14.4145 3.53473C13.008 2.12823 11.1004 1.33802 9.11133 1.33789Z" stroke="#949494" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M15 14.6631L20 20.6631" stroke="#949494" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>

            <!-- Active Orders -->
            <div v-if="currentTab === 'active'" class="space-y-6">
                <div class="flex flex-wrap py-8 border-b border-gray-200" v-for="order in activeOrders" :key="order.id">
                    <div class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] mr-4 border border-[#F3F3F3] rounded-[15px]">
                        <img :src="order.image" :alt="order.name" class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] rounded-lg object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-[14px] lg:text-[18px] text-[#121212] font-Montserrat-Medium pb-1">{{ order.name }}</h3>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-7 lg:pb-10">{{ order.dateRange }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">{{ order.location }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">${{ order.price }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-2">Order Id : {{ order.orderId }}</p>
                    </div>
                    <div class="flex flex-row md:flex-col lg:flex-row justify-between md:justify-end lg:justify-center items-end w-full lg:w-auto mt-[13px] md:mt-2">
                        <button class="md:order-2 lg:order-1 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto lg:mb-0 lg:mr-4">Download Invoice</button>
                        <button class="md:order-1 lg:order-2 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto md:mb-3 lg:mb-0">Details</button>
                    </div>
                </div>
            </div>

            <!-- Upcoming Orders -->
            <div v-if="currentTab === 'upcoming'" class="space-y-6">
                <div class="flex flex-wrap py-8 border-b border-gray-200" v-for="order in upcomingOrders" :key="order.id">
                    <div class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] mr-4 border border-[#F3F3F3] rounded-[15px]">
                        <img :src="order.image" :alt="order.name" class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] rounded-lg object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-[14px] lg:text-[18px] text-[#121212] font-Montserrat-Medium pb-1">{{ order.name }}</h3>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-7 lg:pb-10">{{ order.dateRange }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">{{ order.location }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">${{ order.price }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-2">Order Id : {{ order.orderId }}</p>
                    </div>
                    <div class="flex flex-row md:flex-col lg:flex-row justify-between md:justify-end lg:justify-center items-end w-full lg:w-auto">
                        <button class="md:order-2 lg:order-1 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto md:mb-3 lg:mb-0 lg:mr-4">Download Invoice</button>
                        <button class="md:order-1 lg:order-2 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto md:mb-3 lg:mb-0 lg:mr-4">Details</button>
                        <NuxtLink to="/profile/trackOrder" class="md:order-3 text-[11px] lg:text-[14px] py-2 px-4 border border-[#8D54FF] text-[#FFFFFF] rounded-lg bg-[#8D54FF] hover:bg-[#121212] hover:border-[#121212] w-fit md:w-[150px] lg:w-auto text-center lg:mb-0 lg:mr-4">Track it</NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Past Orders -->
            <div v-if="currentTab === 'past'" class="space-y-6">
                <div class="flex flex-wrap py-8 border-b border-gray-200" v-for="order in pastOrders" :key="order.id">
                    <div class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] mr-4 border border-[#F3F3F3] rounded-[15px]">
                        <img :src="order.image" :alt="order.name" class="w-[157px] h-[147px] lg:w-[164px] lg:h-[164px] rounded-lg object-cover grayscale">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-[14px] lg:text-[18px] text-[#121212] font-Montserrat-Medium pb-1">{{ order.name }}</h3>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-7 lg:pb-10">{{ order.dateRange }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">{{ order.location }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#121212] pb-2">${{ order.price }}</p>
                        <p class="text-[13px] lg:text-[16px] text-[#949494] pb-2">Order Id : {{ order.orderId }}</p>
                    </div>
                    <div class="flex flex-row md:flex-col lg:flex-row justify-between md:justify-end lg:justify-center items-end w-full lg:w-auto">
                        <button class="md:order-2 lg:order-1 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto lg:mb-0 lg:mr-4">Download Invoice</button>
                        <button class="md:order-1 lg:order-2 text-[11px] lg:text-[14px] py-2 px-4 border border-[#121212] hover:border-[#885DF5] hover:text-[#885DF5] rounded-lg w-[48%] md:w-[150px] lg:w-auto md:mb-3 lg:mb-0">Details</button>
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
            currentTab: 'active',
            activeOrders: [
                {
                    id: 1,
                    name: 'Banner Stand',
                    dateRange: 'April 28th - April 30th',
                    location: '310 Bayfield',
                    price: '209.00',
                    orderId: '121541368431',
                    image: '/Images/Profile/16.png'
                },
                {
                    id: 1,
                    name: 'Banner Stand',
                    dateRange: 'April 28th - April 30th',
                    location: '310 Bayfield',
                    price: '209.00',
                    orderId: '121541368431',
                    image: '/Images/Profile/16.png'
                },
                {
                    id: 1,
                    name: 'Banner Stand',
                    dateRange: 'April 28th - April 30th',
                    location: '310 Bayfield',
                    price: '209.00',
                    orderId: '121541368431',
                    image: '/Images/Profile/16.png'
                },
                // Add more orders as needed
            ],
            upcomingOrders: [
                {
                    id: 4,
                    name: 'Future Banner',
                    dateRange: 'May 15th - May 17th',
                    location: '310 Bayfield',
                    price: '259.00',
                    orderId: '121541368432',
                    image: '/Images/Profile/16.png'
                },
                // Add more upcoming orders
            ],
            pastOrders: [
                {
                    id: 5,
                    name: 'Past Banner',
                    dateRange: 'March 1st - March 3rd',
                    location: '310 Bayfield',
                    price: '199.00',
                    orderId: '121541368430',
                    image: '/Images/Profile/16.png'
                },
                // Add more past orders
            ]
        }
    }
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>