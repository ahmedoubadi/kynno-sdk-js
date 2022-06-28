export function generateEndpointAccount(address: string) {
  return `/cosmos/auth/v1beta1/accounts/${address}`
}
export function generateEndpointBroadcast() {
  return `/cosmos/tx/v1beta1/txs`
}


/* eslint-disable camelcase */
