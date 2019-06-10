<template lang="html">
  <div class="container">
    <Sidebar />
    <Mensagens />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Mensagens from '../components/Mensagens.vue'
export default {
  components: {
    Mensagens,
    Sidebar
  }
}
</script>

<style lang="css">
.container {
  background-color: #51ff74;
  height: 100vh;
  width: 100vw;
  display: flex;
}
</style>
