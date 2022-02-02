<template>
  <div id="app">
    <div>
      <el-header>
        <navigation-bar></navigation-bar>
      </el-header>
    </div>

    <div>
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>

  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
@import "styles/global.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
