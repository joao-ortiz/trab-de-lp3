<template>
  <div class="container">
    <div class="loginBox">
        <form class="" action="index.html" method="post">
          <h1>Preencha os campos abaixo</h1>
          <div id="inputContainer">
            <input
              id="input"
              v-model="user.name"
              type="text"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user.name === ''}">Nome</span>
          </div>
          <div id="inputContainer">
            <input
              id="input"
              v-model="user.username"
              type="String"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user.username === ''}">Usuario</span>
          </div>
          <div id="inputContainer">
            <input
              id="input"
              v-model="user.password"
              type="Password"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user.password === ''}">Senha</span>
          </div>
          <button class="loginButton" type="button" name="button" @click="send">Criar</button>
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
        name: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    send() {
      axios.post('http://localhost:8080/users', { name: this.user.name, password: this.user.password, username: this.user.username })
      .then(function(response){
        window.alert('Mensagem enviada')
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
