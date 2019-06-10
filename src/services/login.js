import { http } from './config.js'

export default {
  login:(user) => {
    return   http.post({
      auth: {
        username: user.user,
        password: user.senha
      }
    }).then(function(response) {
      console.log('Authenticated');
    }).catch(function(error) {
      console.log('Error on Authentication');
    });
  }
}
