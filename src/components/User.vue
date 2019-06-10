<template lang="html">
  <div class="">
    <div class="" @click="active = !active">
      <p>{{ user.username }}</p>
    </div>
    <transition name="modal">
      <div v-if="active" class="bg" @click="close">
      </div>
    </transition>
    <transition name="modal">
      <div v-if="active" class="modalBox">
        <form class="" action="index.html" method="post">
          <h1>Editar usuário</h1>
          <button class="deleteButton" type="button" name="button" @click="deletar">Apagar usuario</button>
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
          <button class="loginButton" type="button" name="button" @click="atualizar">Editar</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    close() {
      this.active = false
    },
    atualizar(){
      axios.post('http://localhost:8080/users/'+ this.user.id, { name: this.user.name, password: this.user.password, username: this.user.username })
      .then(function(response){
        window.alert('Atualziado')
      });
    },
    deletar(){
      axios.delete('http://localhost:8080/users/'+ this.user.id)
      .then(function(response){
        window.alert('Atualziado')
      });
    }
  }
}
</script>

<style lang="css">
.loginButton {
  background-color: #51ff74;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
}
.deleteButton {
  background-color: crimson;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}
.bg{
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0 ;
  left: 0;
  z-index: 1;
}
.modalBox{
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  padding: 15px;
  width: 350px;
}
.sendButton{
  background-color: #51ff74;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
}
p{
  font-size: 30px;
  margin: 0;
}
</style>
