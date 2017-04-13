<template>
  <div id="doctorList">
   <ul >
    <li v-for="todo in todos">
     {{todo.text}}
    </li>
   </ul>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name: 'doctor',
  data () {
      return {
        msg: 'aaaa',
        todos: [
         { text: '学习 JavaScript' },
         { text: '学习 Vue' },
         { text: '整个牛项目' }
        ]
      }
  },
 created () {
      this.saveForm()
 },
 methods:{
  saveForm(){
   axios.post('https://testmanage.aiganyisheng.com/product/app/getExchangeRecord.htm',{
     sign: '7c832fc87a19732688a14f1a2c0e19f3',
     userId: '658',
     page: 1,
     rows: 2
   }).then(function(res){
    console.log(res)
   })
  }
 }
}
</script>

<style>
 #doctorList {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
