// format number to currency
export const formatCurrency = (number = 0, currency = 'VND') => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
  }).format(number);
};
