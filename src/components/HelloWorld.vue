<template>
  <div>
    <div class="loginBox">
        <form class="" action="index.html" method="post">
          <div id="inputContainer">
            <input
              id="input"
              v-model="user"
              type="String"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: user === ''}">Usuario</span>
          </div>
          <div id="inputContainer">
            <input
              id="input"
              v-model="senha"
              type="Password"
              name="input"
            >
            <span id="floatingLabel" :class="{notfloating: senha === ''}">Senha</span>
          </div>
          <button class="loginButton" type="button" name="button">Login</button>
        </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      senha: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.erro{
  outline: none;
  border-bottom: solid 2px red !important;
  padding-bottom: 7px !important;
}
#hint{
  position: absolute;
  bottom: -20px;
}
#inputContainer{
  position: relative;
  margin-bottom: 25px;
}
#input{
  box-sizing: content-box;
  transition: 0.3s;
  color:#000000;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding-bottom: 5px;
  border-bottom: solid 1px #9E9E9E;
  width: 100%;
  font-size: 16px;
}
#input::placeholder{
  color: #9E9E9E;
  font-size: 16px;
}
.notfloating {
  top: 0 !important;
  font-size: 16px !important;
}
#input:focus ~ #floatingLabel{
  top: -20px !important;
  left: 0 !important;
  font-size: 12px !important;
  opacity: 1;
}
#input:not(:focus):valid ~ #floatingLabel
{
  top: -20px;
  left: 0;
  font-size: 12px;
  opacity: 1;
}
#input:focus{
  outline: none;
  border-bottom:solid 2px #51ff74;
  padding-bottom: 4px;
}
#floatingLabel{
  color: #9E9E9E;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  transition: 0.2s ease all;
  line-height: 15px;
}
.loginButton {
  background-color: #51ff74;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 22px;
  color: white;
}
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%,-50%);
}
</style>
