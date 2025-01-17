import $axios from "@/plugins/axios";

export const state = () => ({
  products: {},
});

export const getters = {
  getProductData(state) {
    return state.products;
  },
};

export const mutations = {
  setProductData(state, payload) {
    state.products = payload;
  },
};

export const actions = {
  async fetchProducts(ctx, payload) {
    try {
      const response = await $axios.post("/products", payload);
      ctx.commit("setProductData", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
