export default ({ app }, inject) => {
  inject("formatCurrency", (value) => {
    return Number(value || 0).toFixed(2);
  });
};
