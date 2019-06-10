<template lang="html">
  <div class="sidebarContainer">
    <div class="header">
      <User :user="user"/>
    </div>
    <div class="search">
      <div id="inputContainer">
        <input
          id="input"
          v-model="search"
          type="String"
          name="input"
        >
        <span id="floatingLabel" :class="{notfloating: search === ''}">Digite um nome de usuario</span>
      </div>
      <div @click="filter" class="searchButton">
        Pesquisar
      </div>
    </div>
    <div class="userList">
      <div v-for="thatUser in users" class="user">
        <div class="userName">
          {{ thatUser.username }}
        </div>
        <div class="sendMessage">
              <NewMessage :author="user.id" :recipient="thatUser.username" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from './NewMessage.vue'
import User from './User.vue'
import axios from 'axios'
export default {
  components: {
    User,
    NewMessage
  },
  data() {
    return {
      search: '',
      user: {
        name: 'Paulo Nogueira',
        id: '777',
        username: 'nogueiraImoveis',
        password:'7777'
      },
      users: [
        {
          username: 'Luquinhas'
        },
        {
          username: 'Laurinha'
        },{
          username: 'Luquinhas'
        },
        {
          username: 'Laurinha'
        },{
          username: 'Luquinhas'
        },
        {
          username: 'Laurinha'
        },{
          username: 'Luquinhas'
        },
        {
          username: 'Laurinha'
        },{
          username: 'Luquinhas'
        },
        {
          username: 'Laurinha'
        },
      ]
    }
  },
  mounted() {
    axios.get('http://localhost:8080/users')
      .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  },
  methods: {
    filter() {
      axios.get('http://localhost:8080/users/' + this.search)
        .then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      });
    }
  }
}
</script>

<style lang="css" scoped>
.user {
  border-radius: 10px;
  display: flex;
  height: 30px;
  align-items: center;
  background-color: #e0e0e0;
  margin-bottom: 10px;
  padding: 10px;
}
.userName {
word-break: break-all;
margin-right: 10px;
text-align: left;
}
.sendMessage {
  margin-left: auto;

}
.sidebarContainer{
  width: 320px;
  height: 100vh;
  -webkit-box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.75);
box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.75);
}
.header {
  background-color: #f2f2f2;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.search{
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 0 10px 0 10px ;
}
.searchButton {
  margin-left: auto;
}
#inputContainer{
  margin-bottom: 0;
}
.userList{
  background-color: #f2f2f2;
  height: calc(100vh - 105px);
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
