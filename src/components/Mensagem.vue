<template lang="html">
  <div class="">
    <div class="mensagemCard" @click="active = !active">
      <div class="author">
        De: aaaaaa
      </div>
      <div class="assunto">
        Assunto: {{ mensagem.subject }}
      </div>
    </div>
    <transition name="modal">
      <div v-if="active" class="bg" @click="close">
      </div>
    </transition>
    <transition name="modal">
      <div v-if="active" class="modalBox">
        <div class="cabeca">
          <div class="autor">
            <h2>De: aaaaaa</h2>
          </div>
          <div class="recipiente">
            <h2>Para: recipiente</h2>
          </div>
        </div>
          <div class="insideAssunto">
            Assunto: {{mensagem.subject}}
          </div>
          <div class="conteudo">
            {{mensagem.content}}
          </div>
          <button class="sendButton" type="button" name="button" @click="close">Fechar</button>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    mensagem: {
      type: Object,
      default: { a: 'a'}
    }
  },
  data() {
    return {
        author:{},
        active: false
    }
  },
  mounted(){
    axios.get('http://localhost:8080/users/' + this.mensagem.authorId).then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
    })
  },
  methods:{
    close() {
      this.active = false
    }
  }
}
</script>

<style lang="css">
.autor{
  text-align: left;
}
.recipiente {
  text-align: left;
}
.insideAssunto{
  text-align: left;
  margin-bottom: 15px;
}
.mensagemCard {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  padding: 10px;
  min-height: 30px;
  height: auto;
  width: 500px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 10px auto;
}
.author{
  text-align: left;
}
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
  width: 650px;
}
.cabeca {
  display: grid;
  grid-template-columns: 50% 50%;
}
.sendButton{
  background-color: #51ff74;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
}
.conteudo{
  text-align: left;
  margin-bottom: 20px;
}
</style>
