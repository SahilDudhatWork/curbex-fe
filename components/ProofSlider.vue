<template>
    <Carousel :autoplay="false" :autoplayTimeout="3000" :loop="false" :nav="false" :dots="false" :perPageCustom="perPageCustom" class="rounded-none">
        <Slide class="relative p-2">
            <div class="item transition-all duration-300 w-[176px] h-[166px]">
                <img src="/Images/Proof/s1.png" alt="" class="w-[176px] h-[166px] object-cover rounded-[20px]"/>
            </div>
        </Slide>
        <Slide class="relative p-2">
            <div class="item transition-all duration-300 w-[176px] h-[166px]">
                <img src="/Images/Proof/s2.jpg" alt="" class="w-[176px] h-[166px] object-cover rounded-[20px]"/>
            </div>
        </Slide>
        <Slide class="relative p-2">
            <div class="item transition-all duration-300 w-[176px] h-[166px]">
                <img src="/Images/Proof/s3.png" alt="" class="w-[176px] h-[166px] object-cover rounded-[20px]"/>
            </div>
        </Slide>
    </Carousel>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => [],
            },
            type: {
                type: String,
                default: () => "",
            },
        },
        data() {
            return {
                perPageCustom: [
                    [320, 2.5], 
                ],
            };
        },
        methods: {},
    };
</script>