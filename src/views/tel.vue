<template>
  <div class="tel">
    <p>  {{ MESSAGE  }} </p>
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
    this.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

