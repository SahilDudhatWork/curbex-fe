<template>
  <div class="md:container lg:max-w-[1300px] mx-auto py-[2rem] md:py-[8rem] px-6">
    <h1 class="text-[24px] font-Montserrat-Bold pb-[3rem] hidden lg:block">Frequently Asked Questions</h1>
    <h1 class="text-[24px] font-Montserrat-Bold pb-3 lg:pb-[3rem] lg:hidden">FAQ</h1>
    
    <div class="flex gap-8 lg:pl-[8rem] flex-wrap">
      <!-- Sidebar Navigation -->
      <div class="lg:w-[200px] flex-shrink-0 flex flex-wrap w-[360px]">
        <div v-for="(category, index) in categories" 
          :key="index" 
          :class="[
              'flex items-center p-5 cursor-pointer transition-all duration-300 border',
              { 'text-[#FFA900]': selectedCategory === category.id },
              { 'border-[#FFA900]': selectedCategory === category.id, 'border-[#C3C3C3]': selectedCategory !== category.id },
              'rounded-[20px] mr-2 mb-2 lg:m-0 p-[8px] lg:border-0 lg:text-inherit lg:rounded-none lg:p-4 lg:w-auto w-[95px]'
          ]" 
          @click="selectedCategory = category.id">
          <p class="hidden lg:block w-[63px] h-[2px] rounded-[8px] mr-[10px]"
            :class="[selectedCategory === category.id ? 'bg-[#FFA900]' : 'bg-[#FFA90000]']"></p>
          <p class="text-[14px] lg:text-[16px] font-Montserrat-Medium m-auto">{{ category.name }}</p>
      </div>
      </div>

      <!-- FAQ Content -->
      <div class="flex-grow w-full lg:w-auto">
        <div class="relative mb-8">
          <input type="text" 
                 class="w-full p-2 md:p-3 border border-gray-300 rounded-lg pr-10 text-[16px] text-[#949494] bg-[#FCFCFC]" 
                 placeholder="Type Your Question" 
                 v-model="searchQuery">
          <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.11133 1.33789C7.62797 1.33789 6.17792 1.77776 4.94455 2.60187C3.71119 3.42598 2.74989 4.59732 2.18223 5.96776C1.61458 7.33821 1.46605 8.84621 1.75544 10.3011C2.04483 11.7559 2.75914 13.0923 3.80803 14.1412C4.85692 15.1901 6.1933 15.9044 7.64815 16.1938C9.10301 16.4832 10.611 16.3346 11.9815 15.767C13.3519 15.1993 14.5232 14.238 15.3474 13.0047C16.1715 11.7713 16.6113 10.3212 16.6113 8.83789C16.6112 6.8488 15.821 4.94122 14.4145 3.53473C13.008 2.12823 11.1004 1.33802 9.11133 1.33789Z" stroke="#949494" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M15 14.6631L20 20.6631" stroke="#949494" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
          </span>
        </div>

        <div class="divide-y divide-gray-300">
          <div v-for="(faq, index) in filteredFaqs" 
               :key="index" 
               class="border-b border-t lg:border-t-0 border-gray-300">
            <div class="p-2 lg:p-4 cursor-pointer flex justify-between items-center font-bold text-[15px] md:text-[16px]"
                 @click="toggleFaq(index)">
              {{ faq.question }}
              <span :class="['text-2xl transition-transform duration-300 ', 
                           { 'rotate-45': faq.isOpen }]">+</span>
            </div>
            <div v-show="faq.isOpen" 
                 class="p-4">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const selectedCategory = ref('general')
    const searchQuery = ref('')

    const categories = [
    { id: 'general', name: 'General' },
    { id: 'payments', name: 'Payments' },
    { id: 'services', name: 'Services' },
    { id: 'refund', name: 'Refund' },
    { id: 'contact', name: 'Contact' },
    ]

    const faqs = ref([
    {
        category: 'general',
        question: 'How does Curbex work?',
        answer: 'This is the answer to how Curbex works...',
        isOpen: false
    },
    {
        category: 'services',
        question: 'How does Curbex work?',
        answer: 'This is the answer to how Curbex works...',
        isOpen: false
    },
    // Add more FAQ items here
    ])

    const filteredFaqs = computed(() => {
    return faqs.value
        .filter(faq => faq.category === selectedCategory.value)
        .filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })

    const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
    }
</script>
