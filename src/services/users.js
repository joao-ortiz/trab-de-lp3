import { http } from './config.js'

export default {
  list:() {
    return http.get('/users')
  },
  create:(newUser) {
    return http.post('/users',newUser)
  },
  update:(user) {
    return http.post()
  },
  deleta:(userId) {
    return http.delete('/users'+userId)
  }
}
