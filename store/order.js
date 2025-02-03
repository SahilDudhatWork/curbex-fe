import $axios from "@/plugins/axios";

export const state = () => ({
  orders: {},
  orderDetails: {},
});

export const getters = {
  getOrders(state) {
    return state.orders;
  },
  getOrderDetails(state) {
    return state.orderDetails;
  },
};

export const mutations = {
  setOrders(state, payload) {
    state.orders = payload;
  },
  setOrderDetails(state, payload) {
    state.orderDetails = payload;
  },
};

export const actions = {
  async fetchOrders(ctx, payload) {
    try {
      const response = await $axios.get("/orders/customer");
      ctx.commit("setOrders", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async createOrder(ctx, payload) {
    try {
      const response = await $axios.post("/orders/place-order", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchOrderDetails(ctx, payload) {
    try {
      const response = await $axios.get(`/orders/${payload.id}`);
      ctx.commit("setOrderDetails", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
