import axios from "axios"

const accessTokenKey = "accessToken"

const request = axios.create({
  baseURL: "https://react-http-1-f0a3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  //withCredentials: false,
  timeout: 10000,
  
  // headers: { "auth-token": accessTokenKey },
})

request.interceptors.request.use((config) => {
  const token = localStorage.getItem(accessTokenKey)
  if (token) {

    config.headers.common["auth-token"] = `${token}`
  }
  return config
})

export default request