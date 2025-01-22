import $axios from "@/plugins/axios";

export const state = () => ({
  rentalProducts: {},
  retailProducts: {},
  singleProductData: {},
  productData: {},
});

export const getters = {
  getRentalProductData(state) {
    return state.rentalProducts;
  },
  getRetailProductData(state) {
    return state.retailProducts;
  },
  getSingleProductData(state) {
    return state.singleProductData;
  },
  getProductData(state) {
    return state.productData;
  },
};

export const mutations = {
  setRentalProductData(state, payload) {
    state.rentalProducts = payload;
  },
  setRetailProductData(state, payload) {
    state.retailProducts = payload;
  },
  setSingleProductData(state, payload) {
    state.singleProductData = payload;
  },
  setProductData(state, payload) {
    state.productData = payload;
  },

  setFavoriteRentalProduct(state, payload) {
    let { id } = payload;
    const productIndex = state.rentalProducts.records.findIndex(
      (product) => product.id === id
    );
    state.rentalProducts.records[productIndex].isFavorite =
      !state.rentalProducts.records[productIndex].isFavorite;
  },
  setFavoriteRetailProduct(state, payload) {
    let { id } = payload;
    const productIndex = state.retailProducts.records.findIndex(
      (product) => product.id === id
    );
    state.retailProducts.records[productIndex].isFavorite =
      !state.retailProducts.records[productIndex].isFavorite;
  },
  setFavoriteProduct(state, payload) {
    let { id } = payload;
    const productIndex = state.productData.records.findIndex(
      (product) => product.id === id
    );
    state.productData.records[productIndex].isFavorite =
      !state.productData.records[productIndex].isFavorite;
  },
  updateSingleProduct(state, payload) {
    if (state.singleProductData) {
      state.singleProductData.isFavorite = !state.singleProductData.isFavorite;
    }
  },
};

export const actions = {
  async fetchRentalProducts(ctx, payload) {
    try {
      const response = await $axios.post("/products", payload);
      ctx.commit("setRentalProductData", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchRetailProducts(ctx, payload) {
    try {
      const response = await $axios.post("/products", payload);
      ctx.commit("setRetailProductData", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchSingleProductDetail(ctx, payload) {
    try {
      const response = await $axios.get(`/products/${payload?.id}`);
      ctx.commit("setSingleProductData", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchFavoriteProducts(ctx, payload) {
    try {
      const response = await $axios.get(`/products/favourites`);
      ctx.commit("setProductData", { records: response });
      return response;
    } catch (error) {
      throw error;
    }
  },
  async toggleFavoriteProduct(ctx, payload) {
    try {
      let { id, type = "" } = payload;
      const response = await $axios.post(`/products/${id}/favourite`);
      ctx.commit("updateSingleProduct");

      // if (type == "rental") {
      //   ctx.commit("setFavoriteRentalProduct", { id: id });
      // }
      // if (type == "retail") {
      //   ctx.commit("setFavoriteRetailProduct", { id: id });
      // }
      return response;
    } catch (error) {
      throw error;
    }
  },
};
