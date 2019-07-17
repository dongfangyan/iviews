<template>
   <div>
      <a-input @input="handleInput"/>
       <p>{{ inputValue }} --> lastLetter is {{ inputValueLastLetter }}</p>
      <!-- <a-show :content="inputValue" /> -->
      <!-- <p>{{ appName }}</p> -->
      <!-- <p> appName :{{ appName }} , appNameWithVersion : {{ appNameWithVersion }}</p> -->
      <p> userName : {{ userName }}, firstLetter is : {{ firstLetter }}</p>
      <button @click="handleChangeAppName">修改</button>
   </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/Ashow.vue'
import { createNamespacedHelpers } from 'vuex'
const {  mapState , mapGetters } = createNamespacedHelpers('user')
// import { mapState , mapGetters } from 'vuex'
export default {
   name: 'store',
   data () {
     return {
       inputValue:''
     }
   },
   components: {
     AInput,
      AShow
   },
   computed: {
    //  ...mapState({
    //    appName: state => state.appName,
    //    userName: state => state.user.userName
    //  })
    ...mapState({
      appName: state => state.appName,
      userName: state => state.userName
    }),
    ...mapGetters([
       'firstLetter'
    ]),
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },
    //  appName () {
    //   return this.$store.state.appName
    //  },
    //  userName () {
    //    return this.$store.state.appName
    //  }
    // appNameWithVersion (){
    //   return this.$store.getters.appNameWithVersion
    // },
      inputValueLastLetter () {
        return  this.inputValue.substr(-1, 1)
      }
   },
   methods: {
     handleInput(val) {
       this.inputValue=val
     }
   },
   handleChangeAppName() {

   }
}
</script>

