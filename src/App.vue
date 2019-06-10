<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  padding: 0 !important;
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
  transition: all 0.3s;
  color:#000000;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding-bottom: 5px;
  border-bottom: solid 1px #9E9E9E;
  width: 100%;
  font-size: 16px;
  padding-top: 0;
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
  top: -12px !important;
  left: 0 !important;
  font-size: 12px !important;
  opacity: 1;
}
#input:not(:focus):valid ~ #floatingLabel
{
  top: -12px;
  left: 0;
  font-size: 12px;
  opacity: 1;
}
#input:focus{
  outline: none;
  border-bottom:solid 1px #51ff74;
  padding-bottom: 5px;
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
</style>
