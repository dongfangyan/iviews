<template>
  <div class="tel">7777
    <p>  {{ message  }} </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  data (){
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>
<style scoped>
  .tel{
    border:  1px solid red;
  }
</style>


