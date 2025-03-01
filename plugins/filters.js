export default ({ app }, inject) => {
  inject("formatCurrency", (value) => {
    return `${(
      Math.round((Number(value) + Number.EPSILON) * 100) / 100
    ).toFixed(2)}`;
  });
};
