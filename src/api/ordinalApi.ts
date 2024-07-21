export const ordinalListApi = (walletAddress: string, offset: number, limit: number) => {
  return {
    url: `/address/${walletAddress}/ordinal-utxo?offset=${offset}&limit=${limit}`,
    method: 'GET',
  }
}

export const ordinalDetailApi = (inscriptionId: string, walletAddress: string) => {
  return {
    url: `/address/${walletAddress}/ordinals/inscriptions/${inscriptionId}`,
    method: 'GET',
  }
}
