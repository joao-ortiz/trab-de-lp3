<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer v-if="this.$route.path.slice(1,7) != 'painel' && this.$route.name != 'banner' && this.$route.name != 'loginPainel'"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header: Header,
    Footer: Footer
  },
  watch: {
    '$route'(){
      scroll(0,0);
    }
  }
}
</script>

<style lang="scss">
    @font-face {
        font-family: 'Pluto Regular';
        src: url('./assets/fonts/PlutoRegular.otf');
    }
    @font-face {
        font-family: 'Pluto Bold';
        src: url('./assets/fonts/PlutoBold.otf');
    }
    @font-face {
        font-family: 'Pluto Medium';
        src: url('./assets/fonts/PlutoMedium.otf');
    }
    @font-face {
        font-family: 'Pluto Light';
        src: url('./assets/fonts/PlutoLight.otf');
    }
    *{
        font-family: 'Pluto Regular';
    }
.body{
  background: #f47435;
}
a{
  color: initial;
  text-decoration: initial;
}
#app {
  z-index: -100;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &:nth-child().router-link-exact-active {
      color: #42b983;
    }
  }
}
body{
  padding: 0;
  margin: 0;
}
html{
  padding: 0;
}
</style>
