import Cookies from "js-cookie";

export default async function ({ store, redirect, route }) {
  let token = Cookies.get("token");

  if (token) {
    try {
      try {
        await store.dispatch("auth/profile");
      } catch (error) {
        return redirect(`/auth/login?redirect=${route.fullPath}`);
      }
    } catch (error) {
      Cookies.remove("token");
      return redirect(`/auth/login?redirect=${route.fullPath}`);
    }
  } else {
    return redirect(`/auth/login?redirect=${route.fullPath}`);
  }
}
