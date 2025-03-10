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
  methods: {
    ...mapActions({
      fetchRentalProducts: "product/fetchRentalProducts",
      fetchRetailProducts: "product/fetchRetailProducts",
    }),
    async getRentalProducts() {
      let payload = {
        where: {
          type: "rental",
          // "isBestSeller":1
          // "name": {
          //     "operator": "Like",
          //     "value": "%mini%"
          // }
        },
        skip: 0,
        take: 10,
        order: { id: "ASC" },
        relations: ["images"],
      };
      await this.fetchRentalProducts(payload);
    },
    async getRetailProducts() {
      let payload = {
        where: {
          type: "retail",
          // "isBestSeller":1
          // "name": {
          //     "operator": "Like",
          //     "value": "%mini%"
          // }
        },
        skip: 0,
        take: 10,
        order: { id: "ASC" },
        relations: ["images"],
      };
      await this.fetchRetailProducts(payload);
    },
  },
  async mounted() {
    await this.getRentalProducts();
    await this.getRetailProducts();
  },
};
</script>

<style></style>
