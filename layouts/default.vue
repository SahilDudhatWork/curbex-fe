<template>
  <div>
    <div class="sticky top-0 z-50">
      <Header />
    </div>
    <div class="h-auto">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      productData: "product/getProductData",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts",
    }),
    async getProducts() {
      let payload = {
        where: {
          // "isBestSeller":1
          // "name": {
          //     "operator": "Like",
          //     "value": "%mini%"
          // }
        },
        skip: 0,
        take: 10,
        order: { id: "ASC" },
      };
      await this.fetchProducts(payload);
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style></style>
