import type { AxiosHeaders, AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'
import axios from 'axios'

const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api-3.xverse.app/v1",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const AUTHORIZATION = 'authorization'

function addHeader(config: AxiosRequestConfig, token: string): AxiosRequestConfig {
  const headers: RawAxiosRequestHeaders = {
    ...(config.headers as AxiosHeaders),
  }

  return { ...config, headers }
}

export async function ApiClient(
  config: AxiosRequestConfig,
  token: string | null = null,
  axiosInstance: AxiosInstance = defaultAxiosInstance,
) {
  try {

    const configWithHeaders = addHeader(config, token || '')
    console.log(configWithHeaders)
    return await axiosInstance.request(configWithHeaders)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
