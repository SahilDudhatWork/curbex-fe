import $axios from "@/plugins/axios";

export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async createAddress(ctx, payload) {
    try {
      let { customerId } = payload;
      const response = await $axios.put(
        `/customers/${customerId}/address`,
        payload
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  async updateAddress(ctx, payload) {
    try {
      const response = await $axios.patch(
        `/customers/address/${payload.id}`,
        payload
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  async setDefaultAddress(ctx, payload) {
    try {
      let { id } = payload;
      const response = await $axios.get(`/customers/address/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async contactUs(ctx, payload) {
    try {
      const response = await $axios.post(`/contact`, payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
