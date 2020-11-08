import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const getAllBeers = () => axios.get(`${API_URL}/beers`)
export const getBeer = (beerId) => axios.get(`${API_URL}/beers/${beerId}`)
export const getRandomBeer = () => axios.get(`${API_URL}/beers/random`)
