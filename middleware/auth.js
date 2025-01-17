import Cookies from "js-cookie";

export default async function ({ store, redirect }) {
  let token = Cookies.get("token");

  if (token) {
    try {
      try {
        await store.dispatch("auth/profile");
      } catch (error) {
        return redirect("/auth/login");
      }
    } catch (error) {
      Cookies.remove("token");
      return redirect("/auth/login");
    }
  } else {
    return redirect("/auth/login");
  }
}
