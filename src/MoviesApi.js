import axios from "axios";

const API_KEY = '0e14fa646d000144dea5966e5397d0ac';

axios.defaults.baseURL = 'https://www.themoviedb.org/'
axios.defaults.params = { api_key: API_KEY };

