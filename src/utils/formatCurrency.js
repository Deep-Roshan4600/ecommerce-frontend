const USD_TO_INR_RATE = 93

export const formatPriceINR = (usdPrice) => {
  const inrPrice = usdPrice * USD_TO_INR_RATE
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(inrPrice)
}