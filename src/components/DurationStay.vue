<template>
  <div class="flex">
    <input type="date" :value="dataFirstFn" @change="calcDataFirst">
    <div class="flex-column">
      <p>ночей</p>
      <div>
        <button @click="minuse">-</button>
        {{num}}
        <button @click="pluse">+</button>
      </div>
    </div>
    <input type="date" :value="dataSecondFn" @change="calcDataSecond">
  </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import moment from 'moment'


export default defineComponent({
  name: 'DurationStay',
  props:{
    msg:String
  },
  data() {
    
    return {
      num: 3,
      offsetFerstDay:0
    }
  },
  methods: {
    pluse(){
      this.num = this.num + 1;
    },
    minuse(){
      this.num <= 0 ? 0 : this.num = this.num - 1
    },
    checkFirst(vol: number){
      return vol <= 0 ? this.offsetFerstDay = vol : this.offsetFerstDay = vol
    },
    checkSecond(vol: number){
      return vol <= 0 ? this.num = 0 : this.num = vol
    },
    calcDataFirst(event: Event) {
      const dayFirst:number = (+(moment((event.target as HTMLInputElement).value).format("x"))- this.newData())/86400000
      this.checkFirst(dayFirst)
    },
    calcDataSecond(event: Event) {
      const daySecond = (+(moment((event.target as HTMLInputElement).value).format("x")) - this.newData())/86400000
      this.checkSecond(daySecond)
    },
    newData(){
      const nData = moment().format("YYYY-MM-DD")
      const num:any = moment(nData).format("x")
      return +num
    },
  },
  computed: {
    dataFirstFn(){
      const resOffsetFirst:string = moment().add(this.offsetFerstDay, 'days').format("YYYY-MM-DD")
      const resNumFirst:string = moment().format("YYYY-MM-DD")
      return this.offsetFerstDay ? resOffsetFirst : resNumFirst
    },
    dataSecondFn(){
      const resOffset:string = moment().add(this.offsetFerstDay + this.num, 'days').format("YYYY-MM-DD")
      const resNumSecond:string = moment().add(this.num, 'days').format("YYYY-MM-DD")
      return this.offsetFerstDay ? resOffset : resNumSecond
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.flex-column{
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
p{
  margin: 0;
}
</style>
