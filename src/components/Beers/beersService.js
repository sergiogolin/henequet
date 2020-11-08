import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export const getRandomBeer = () => axios.get(`${API_URL}/beers/random`)
