<template>
  <div class="container">
    <div class="loginBox">
        <form class="" action="index.html" method="post">
          <div id="inputContainer">
            <input
              id="input"
              v-model="user.user"
              type="String"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user.user === ''}">Usuario</span>
          </div>
          <div id="inputContainer">
            <input
              id="input"
              v-model="user.senha"
              type="Password"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user.senha === ''}">Senha</span>
          </div>
          <router-link :to="{ name: 'register' }"><a style="color:#51ff74;display: block; margin-bottom: 10px">Cadastre-se</a></router-link>
          <button class="loginButton" type="button" name="button" @click="login">Login</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        user: '',
        senha: ''
      }
    }
  },
  methods: {
    login() {
      axios.post('http://localhost:8081/', {}, {
        auth: {
          username: this.user.user,
          password: this.user.senha
        }
      }).then(function(response) {
        console.log('Authenticated');
      }).catch(function(error) {
        console.log('Error on Authentication');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  margin: 0;
}
.loginButton {
  background-color: #51ff74;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
}
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%,-50%);
  background-color: white;
  padding: 40px;
  border-radius: 10px;
}
.container {
  background-color: #51ff74;
  height: 100vh;
}
</style>
