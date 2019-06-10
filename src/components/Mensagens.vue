<template lang="html">
  <div class="message" style="width: calc(100vw - 320px);">
    <div class="header">
      <div class="tab" v-bind:class="{highlight : show === 'recebidas'}" @click="showRecebidas">
        Mensagens recebidas
      </div>
      <div class="tab" v-bind:class="{highlight : show === 'enviadas'}" @click="showEviadas">
        Mensagens enviadas
      </div>
      <div class="tab" v-bind:class="{highlight : show === 'pesquisar'}" @click="showSearch">
        Pesquisar
      </div>
    </div>
    <div class="messageList" v-if="show !== 'pesquisar'">
      <Mensagem v-for="mensagem in lista" :mensagem="mensagem"/>
    </div>
    <div class="messageList" v-else>
      <div class="searchBar">
        <div id="inputContainer">
          <input
            id="input"
            v-model="searchThis"
            type="String"
            name="input"
          >
          <span id="floatingLabel" :class="{notfloating: searchThis === ''}">Digite o assunto da mensagem</span>
        </div>
        <div @click="filter" class="searchButton">
          Pesquisar
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Mensagem from './Mensagem'
export default {
  components: {
    Mensagem
  },
  data() {
    return {
      searchThis: '',
      show: 'recebidas',
      lista: [{
        authorId: '777',
        recipientId: '86868',
        content: 'medamemdadmaikneu asehouiashe askejhaio asio ioeaise asiej oaisjeo ii ajseiojasoie a jaeoi jaoi oaj ioea',
        subject: 'ashnei u aouisheiou a jeh'
      },{
        authorId: '777',
        recipientId: '86868',
        content: 'medamemdadmaikneu asehouiashe askejhaio asio ioeaise asiej oaisjeo ii ajseiojasoie a jaeoi jaoi oaj ioea',
        subject: 'ashnei u aouisheiou a jeh'
      },{
        authorId: '777',
        recipientId: '86868',
        content: 'medamemdadmaikneu asehouiashe askejhaio asio ioeaise asiej oaisjeo ii ajseiojasoie a jaeoi jaoi oaj ioea',
        subject: 'ashnei u aouisheiou a jeh'
      },]
    }
  },
  mounted() {
    axios.get('http://localhost:8080/mensagens/' + {recipientId: this.authorId})
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  },
  methods: {
    showEviadas() {
      if (this.show !== 'eviadas') {
        axios.get('http://localhost:8080/messages/', {authorId: this.authorId})
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
        });
      }

      this.show = 'enviadas'
    },
    showRecebidas() {
      if (this.show !== 'recebidas') {
        axios.get('http://localhost:8080/messages/', {authorId: this.authorId})
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
        });
      }

      this.show = 'recebidas'
    },
    showSearch() {
      this.show = 'pesquisar'
    },
    search() {
      axios.get('http://localhost/messages', {subject: searchThis}).then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      });
    }
  }
}
</script>

<style lang="css" scoped>
.searchButton{
  margin-left: auto;
}
#inputContainer {
  width: 90% !important;
  margin-bottom: 0;
}
.searchBar{
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 0 10px 0 10px ;
}
.header{
  display: grid;
grid-template-columns:  repeat(3, 1fr);
}
.header>.tab{
  background-color: #e0e0e0;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}
.highlight{
  background-color: #f2f2f2 !important;
}
</style>
