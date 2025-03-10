import $axios from "@/plugins/axios";

export const state = () => ({
  orders: {},
  filterOrders: {},
  orderDetails: {},
  orderProof: {},
});

export const getters = {
  getOrders(state) {
    return state.orders;
  },
  getFilterOrders(state) {
    return state.filterOrders;
  },
  getOrderDetails(state) {
    return state.orderDetails;
  },
  getOrderProof(state) {
    return state.orderProof;
  },
};

export const mutations = {
  setOrders(state, payload) {
    state.orders = payload;
  },
  setFilterOrders(state, payload) {
    state.filterOrders = payload;
  },
  setOrderDetails(state, payload) {
    state.orderDetails = payload;
  },
  setOrderProof(state, payload) {
    state.orderProof = payload;
  },
};

export const actions = {
  async fetchOrders(ctx, payload) {
    try {
      const response = await $axios.get("/orders/customer");
      ctx.commit("setOrders", response);
      ctx.commit("setFilterOrders", response);
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
  async generateInvoice(ctx, payload) {
    try {
      const response = await $axios.get(`/orders/${payload.id}/invoice`, {
        responseType: "blob",
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async fetchProofByOrder(ctx, payload) {
    try {
      const response = await $axios.get(`/proofs/${payload.id}`);
      ctx.commit("setOrderProof", response);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
