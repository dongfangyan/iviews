<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>{{food}}
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">去到下一页</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
     food: {
       type: String,
       default: 'apple'
     }
  },

  // beforeRouteEnter (to, from, next) {
  //   console.log(to.name)
  // },
  beforeRouteLeave (to, from, next) {
    // ...
    // const leave = confirm('您确定要离开？')
    // if (leave) next()
    // else next( false)

  },
  methods: {
    handleClick(type){
      if(type==='back')
      this.$router.go(-1);
       else if(type==='push')
         this.$router.push({
           name:'argu',
           params:{
             name:'kk'
           }
           });
      else if(type==='replace')
      this.$router.replace({
        name:'parent'
      })
    }
  },
}
</script>
