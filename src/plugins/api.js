import axios from 'axios'
import store from '../store/login'


const token = store.state.token

var api = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 3000,
    headers: {
      'Authorization': `Bearer ${token}`
    }
})

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: api });
  }
}