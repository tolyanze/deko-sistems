<template>
  <h1>Тестовое задание для Деко Системс</h1>
  <duration-stay msg="ват">
    
  </duration-stay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DurationStay from './components/DurationStay.vue'

export default defineComponent({
  name: 'App',
  components: {
    DurationStay
  },
  data() {
    return {
      num:0,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
