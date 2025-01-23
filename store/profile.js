import $axios from "@/plugins/axios";

export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async createAddress(ctx, payload) {
    try {
      const response = await $axios.put("/customers/1/address", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async fetchAddress(ctx, payload) {
    try {
      const response = await $axios.get("/customers/address/4", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
