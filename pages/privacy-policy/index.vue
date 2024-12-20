<template>
  <div class="container mx-auto px-12 py-8 md:py-[7rem] lg:max-w-[1300px]">
    <h1 class="text-[24px] font-Montserrat-Bold mb-8">Privacy Policy</h1>
    
    <section v-for="(section, index) in sections" :key="index" class="mb-8">
      <h2 class="text-[18px] font-bold mb-4">{{ section.title }}</h2>
      <p class="text-gray-700 leading-relaxed text-[16px]">{{ section.content }}</p>
    </section>
  </div>
</template>

<script setup>
const sections = [
  {
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
  },
  {
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
  },
  {
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
  }
]
</script>
