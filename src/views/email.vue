<template>
  <div class="email">
     <button @click="handleClick">按钮</button>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
   handleClick () {
     this.$bus.$emit('on-click', 'hello' )
   }
  },
 mounted (){
   console.log(this.$bus)
 }
}
</script>
<style  scoped>
.email{
   border: 1px solid green
}
</style>
