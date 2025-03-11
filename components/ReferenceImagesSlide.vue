<template>
  <div>
    <Carousel
      :autoplay="false"
      :autoplayTimeout="3000"
      :loop="false"
      :nav="false"
      :dots="false"
      :perPageCustom="perPageCustom"
      class="rounded-none"
    >
      <Slide v-for="(item, index) in images" :key="index" class="relative p-2">
        <div class="item transition-all duration-300 w-[176px] h-[166px]">
          <img
            :src="item?.imageUrl || '/Images/Proof/s1.png'"
            alt=""
            class="w-[176px] h-[166px] object-cover rounded-[20px] grayscale hover:grayscale-0"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      perPageCustom: [[320, 2.5]],
    };
  },
  methods: {},
};
</script>
