<template>
    <div class="w-fit">
        <div v-for="(item, index) in faqs" :key="index" class="w-fit mb-5">
            <button
                ref="buttons"
                class="relative z-1 accordion-color flex items-center justify-between p-3 font-medium rounded-[20px] text-[#121212] gap-3 outline-none transition-all bg-[#F3F3F3]"
                :class="{ 'accordion-open': openIndex === index }"
                @click="toggle(index, $event)"
            >
                <span class="text-left font-bold font-Montserrat-Medium">{{ item.question }}</span>
                <span :class="openIndex === index ? 'rotate-180' : ''">
                    <svg data-accordion-icon class="shrink-0 transition-transform duration-300 transform" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M15.4 9.90039L11.7071 13.5933C11.3166 13.9838 10.6834 13.9838 10.2929 13.5933L6.60001 9.90039" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </button>
            <div 
                v-if="openIndex === index" 
                class="p-5 pt-[2.5rem] mt-[-30px] border border-[#C3C3C3] rounded-[20px] transition-all duration-300"
                :style="{ width: contentWidth + 'px' }"
            >
                {{ item.answer }}
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
        return {
            openIndex:null,
            contentWidth:0
        }
    },
    props: {
        faqs: {
        type: Array,
        required: true,
        },
    },    
    methods:{
        toggle(index, event) {
            if (this.openIndex === index) {
                this.openIndex = null;
                this.contentWidth = 0;
            } else {
                this.openIndex = index;
                this.contentWidth = event.target.offsetWidth + 60;
            }
        }
    }
   
}
</script>
  
<style scoped>
/* Optional additional styling */
</style>
