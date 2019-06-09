import Axios from 'axios'
import { Toast } from 'vant'

const http = Axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://m.maizuo.com/' : 'https://m.maizuo.com/'
http.timeout =10000

http.interceptors.response.use(response => {
  let res = response.data
  if(res.status === 0) {
    return res
  } else {
    Toast(res.msg)
  }
}, error => {
  Toast(error.message)
})

export default http