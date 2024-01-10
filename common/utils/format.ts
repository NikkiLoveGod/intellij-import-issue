export const formatCurrency = (
  amount: number,
  currency: string,
  locale: string,
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}