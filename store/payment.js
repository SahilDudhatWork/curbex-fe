import $axios from "@/plugins/axios";

export const state = () => ({
  cards: {},
});

export const getters = {
  getCards(state) {
    return state.cards;
  },
};

export const mutations = {
  setCards(state, payload) {
    state.cards = payload;
  },
};

export const actions = {
  async fetchCards(ctx, payload) {
    try {
      const response = await $axios.get("/customers/cards");
      ctx.commit("setCards", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async createCard(ctx, payload) {
    try {
      const response = await $axios.put("/customers/card", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
