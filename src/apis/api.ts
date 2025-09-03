import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const getRefreshToken = async () => {
  try {
    const response = await api.post(`/auth/refresh-token`)
    if (response.data.code === 200) {
      const newAccessToken = response.data.result.accessToken
      const newRefreshToken = response.data.result.refreshToken
      localStorage.setItem('accessToken', newAccessToken)
      localStorage.setItem('refreshToken', newRefreshToken)
      return { newAccessToken, newRefreshToken }
    }
    throw new Error('리프레시 토큰 재발급 실패')
  } catch (error) {
    console.error('리프레시 토큰 오류', error)
    throw error
  }
}

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    const newHeaders = new AxiosHeaders(config.headers || {})

    if (accessToken) {
      newHeaders.set('Authorization', `Bearer ${accessToken}`)
    }
    if (refreshToken) {
      newHeaders.set('Authorization_refresh', `Bearer ${refreshToken}`)
    }

    const modifiedConfig = { ...config, headers: newHeaders }

    return modifiedConfig
  },
  (error) => Promise.reject(error),
)

// Response 인터셉터: 401 Unauthorized 에러 처리
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const { newAccessToken, newRefreshToken } = await getRefreshToken()

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        originalRequest.headers.Authorization_refresh = `Bearer ${newRefreshToken}`
        return api(originalRequest)
      } catch (err) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/'
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  },
)

export default api
