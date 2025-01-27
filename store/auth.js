import $axios from "@/plugins/axios";

export const state = () => ({
  userData: {},
});

export const getters = {
  getUserProfile(state) {
    return state.userData;
  },
};

export const mutations = {
  setUserProfile(state, payload) {
    state.userData = payload;
  },
};

export const actions = {
  async userLogin(ctx, payload) {
    try {
      const response = await $axios.post("auth/login/customer", payload);
      this.$cookies.set("token", response.access_token);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async userRegister(ctx, payload) {
    try {
      const response = await $axios.post("auth/register/customer", payload);

      return response;
    } catch (error) {
      throw error;
    }
  },
  async profile(ctx, payload) {
    try {
      const response = await $axios.get("customers/profile");
      ctx.commit("setUserProfile", response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async updateUserProfile(ctx, payload) {
    try {
      const response = await $axios.patch("customers/profile", payload);
      console.log("response", response);
      ctx.commit("setUserProfile", response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async fetchAddressFromCoordinates({ commit }, { latitude, longitude }) {
    try {
      const googlemapKey = process.env.GOOGLEMAP_KEY;
      const response = await $axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googlemapKey}`
      );
      if (response.data.status === "OK") {
        const address = response.data.results[0].formatted_address;
        return address;
      }
    } catch (error) {
      throw error;
    }
  },

  async fetchAutocomplete({ commit }, { query }) {
    try {
      const googlemapKey = process.env.GOOGLEMAP_KEY;
      const response = await $axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${googlemapKey}&types=address`
      );
      console.log("response", response);
      // if (response.data.status === "OK") {
      //   const address = response.data.results[0].formatted_address;
      //   commit("setAddress", address);
      //   return address;
      // }
    } catch (error) {
      throw error;
    }
  },
};
