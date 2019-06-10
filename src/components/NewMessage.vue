<template lang="html">
  <div class="">
    <p @click="active = !active">+</p>
    <transition name="modal">
      <div v-if="active" class="bg" @click="close">
      </div>
    </transition>
    <transition name="modal">
      <div v-if="active" class="modalBox">
        <form class="formulario" action="index.html" method="post">
          <h2>Nova mensagem</h2>
          <div id="inputContainer">
            <input
              id="input"
              v-model="subject"
              type="String"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: subject === ''}">Digite o assunto</span>
          </div>
          <div id="inputContainer">
            <textarea
              id="input"
              style="min-height: 70px"
              v-model="content"
              type="String"
              name="input"
            >
          </textarea>
            <span id="floatingLabel" :class="{notfloating: content === ''}">Escreva a mensagem</span>
          </div>
          <button class="sendButton" type="button" name="button" @click="send">Enviar</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import Message from '../services/message.js'
import axios from 'axios'
export default {
  data() {
    return {
      active: false,
      content: '',
      subject: '',
    }
  },
  props: {
    author:{
      type: String,
      required: true
    },
    recipient: {
      type: String,
      required: true
    }
  },
  methods: {
    send(){
      axios.post('http://localhost:8080/users', { authorId: this.author, recipientId: this.recipient, content: this.content, subject: this.subject })
      .then(function(response){
        window.alert('Mensagem enviada')
      });
      this.content = ""
      this.subject = ""
      this.active = false
    },
    close() {
      this.active = false;
    }
  }
}
</script>

<style lang="css">
.bg{
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0 ;
  left: 0;
}
.modalBox{
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
  margin-left: auto;
}
</style>
