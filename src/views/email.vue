<template>
  <div>
     <button @click="handleClick">按钮</button>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
   handleClick () {
     this.$emit('on-click', 'hello' )
   }
  },
 mounted (){
   console.log(this.$bus)
 }
}
</script>
