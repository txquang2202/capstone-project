// format number to currency
export const formatCurrency = (
  number = 0,
  currency = 'VND',
  locale?: string
) => {
  return new Intl.NumberFormat(locale || 'vi-VN', {
    style: 'currency',
    currency,
  }).format(number);
};
