<template>
  <div class="hello">
    <input type="date" :value="dataOne" @change="switchSelect" ref="first">
    <button @click="minuse">-</button>
    <input :value="num"/>
    <!-- <input :value="number"/> -->
    <button @click="pluse">+</button>
    <input type="date" :value="dataSecond">
  </div>
</template>

<script lang="ts">
import {  ref, onMounted, defineComponent } from 'vue'
import moment from 'moment'


export default defineComponent({
  name: 'DurationStay',
  props: {
    msg: String
  },
  data() {
    return {
      num: 7,
      first: ref(),
    }
  },
  methods: {
    pluse(){
      this.num = this.num + 1;
    },
    minuse(){
      this.num = this.num - 1;
    },
    switchSelect(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
  },
  computed: {
    dataOne(){
      return moment().format("YYYY-MM-DD")
    },
    dataSecond(){
      return moment().add(this.num , 'days').format("YYYY-MM-DD")
    },
    number(){
      return 7
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
