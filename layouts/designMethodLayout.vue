<template>
    <div>
        <div class="sticky top-0 z-50">
            <Header />
        </div>
        <div class="container px-6 lg:px-6 mx-auto py-8 h-auto">
            <div class="bg-[#FCFCFC] border border-[#F5F5F5] rounded-[35px] max-w-[995px] mx-auto flex items-center justify-between p-[10px]
            flex-wrap md:flex-nowrap">
                <NuxtLink to="/design-method" class="mb-3 md:mb-0 bg-[#FFFFFF] w-[100%] md:w-[49%] text-center text-[16px] text-[#121212] rounded-[92px] p-[8px] cursor-pointer border border-[#C3C3C3]">Upload Artwork</NuxtLink>
                <NuxtLink to="/design-method/hire-designer" class="bg-[#FFFFFF] w-[100%] md:w-[49%] text-center text-[16px] text-[#121212] rounded-[92px] p-[8px] cursor-pointer border border-[#C3C3C3]">Hire a Designer</NuxtLink>
            </div>
            <div class="pt-[1.5rem]">
                <Nuxt />
            </div>
        </div>
        <Footer />
    </div>
  </template>
  
<script>
    
</script>
  
<style scoped>
.tab-active{
    background-color: #8D54FF;
    border-color: #8D54FF;
    color: #FFFFFF;
}
::v-deep .nuxt-link-exact-active{
    background-color: #8D54FF;
    border-color: #8D54FF;
    color: #FFFFFF;

}
</style>