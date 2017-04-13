<template>
  <div id="app">
    <div v-if="isShow" @click="goList">
      <img src="./assets/logo.png"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShow: true
    }
  },
  created () {
     document.getElementsByTagName('title')[0].innerHTML = "医生列表";

  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath === '/') {
        this.isShow = true
      }
    }
  },
  methods: {
    goList () {
      this.isShow = false
      this.$router.push('/doctor')
    }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
