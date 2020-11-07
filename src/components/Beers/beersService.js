import axios from 'axios'

const API_URL = 'https://api.punkapi.com/v2'
const axiosConfig = {
  baseUrl: API_URL
}
const apiClient = axios.create(axiosConfig)

export const getAllBeers = () => apiClient.get(`${API_URL}/beers`)
export const getBeer = (beerId) => apiClient.get(`${API_URL}/beers/${beerId}`)
export const getRandomBeer = () => apiClient.get(`${API_URL}/beers/random`)
