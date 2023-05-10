export default function currencyId(currency: any): string {
  if (currency?.isToken) return currency.address
  throw new Error('invalid currency')
}
