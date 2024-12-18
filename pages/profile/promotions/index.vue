<template>
  <div class="p-4 lg:pb-[4rem]">
    <h1 class="text-2xl font-bold mb-6">My Promotions</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- First row -->
      <div class="bg-gray-100 rounded-lg h-[12rem]"></div>
      <div class="bg-gray-100 rounded-lg h-[12rem] md:col-span-1 lg:col-span-2"></div>
      
      <!-- Second row -->
      <div class="bg-gray-100 rounded-lg h-[12rem] md:col-span-2"></div>
      <div class="bg-gray-100 rounded-lg h-[12rem] order-1"></div>
      
      <!-- Third row -->
      <div class="bg-gray-100 rounded-lg h-[12rem] md:col-span-2 lg:col-span-3 lg:order-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "profileLayout",
}
</script>