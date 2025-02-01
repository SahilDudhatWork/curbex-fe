import $axios from "@/plugins/axios";

export const state = () => ({
  rentalProducts: {},
  allProductsData: [],
  retailProducts: {},
  singleProductData: {},
  productData: {},
  cartItemCount: 0,
  cartItem: {},
  taxes: {},
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
  getAllProductData(state) {
    return state.allProductsData;
  },
  getCartItemCount(state) {
    return state.cartItemCount;
  },
  getCartItem(state) {
    return state.cartItem;
  },
  getTaxes(state) {
    return state.taxes;
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
  setAllProductData(state, payload) {
    state.allProductsData = payload;
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
    let { id } = payload;
    if (state.singleProductData.id == id) {
      state.singleProductData.isFavorite = !state.singleProductData.isFavorite;
    }
  },
  setCartItemCount(state, payload) {
    state.cartItemCount = payload;
  },
  setCartItem(state, payload) {
    state.cartItem = payload;
  },
  setTaxes(state, payload) {
    state.taxes = payload;
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
  async fetchProducts(ctx, payload) {
    try {
      const response = await $axios.post("/products", payload);
      ctx.commit("setAllProductData", response);
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
      ctx.commit("updateSingleProduct", { id: id });

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
  async addToCart(ctx, payload) {
    try {
      const response = await $axios.post(`/cart`, payload);
      console.log(response, "response");
      return response;
    } catch (error) {
      throw error;
    }
  },
  async updateCartItem(ctx, payload) {
    try {
      console.log(payload, "payload");
      let id;
      if (payload instanceof FormData) {
        id = payload.get("id");
      } else {
        id = payload.id;
      }
      const response = await $axios.post(`/cart/item/${id}`, payload);

      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchCartItems(ctx, payload) {
    try {
      const response = await $axios.get(`/cart`);
      let totalQuantity = response.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      ctx.commit("setCartItem", response);
      ctx.commit("setCartItemCount", totalQuantity);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async removeCartItem(ctx, payload) {
    try {
      let { id } = payload;
      const response = await $axios.delete(`/cart/item/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async fetchTaxes(ctx, payload) {
    try {
      let { province } = payload;
      const response = await $axios.get(`/taxes/${province}`);
      ctx.commit("setTaxes", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
