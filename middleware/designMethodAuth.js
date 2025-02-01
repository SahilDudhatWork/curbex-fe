import Cookies from "js-cookie";

export default async function ({ store, redirect, from }) {
  let productId = Cookies.get("productId");
  const previousPage = from?.fullPath || "/";
  if (productId && productId != "") {
    try {
      try {
        await store.dispatch("product/fetchSingleProductDetail", {
          id: productId,
        });
      } catch (error) {
        return redirect("/");
      }
    } catch (error) {
      return redirect("/");
    }
  } else {
    return redirect("/");
  }
}
