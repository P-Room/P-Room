import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pr-oom.site',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default api
