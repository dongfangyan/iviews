<template>
   <div>
      <a-input @input="handleInput"/>
       <p>{{ inputValue }} --> lastLetter is {{ inputValueLastLetter }}</p>
      <!-- <a-show :content="inputValue" /> -->
      <!-- <p>{{ appName }}</p> -->
      <p> appName :{{ appName }} , appNameWithVersion : {{ appNameWithVersion }}</p>
      <p> userName : {{ userName }}, firstLetter is : {{ firstLetter }}</p>
      <button @click="handleChangeAppName">修改</button>
      <p>{{ appVersion }}</p>
      <button @click="changeUserName">修改用户名</button>
   </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/Ashow.vue'
// import { createNamespacedHelpers } from 'vuex'
// const {  mapState , mapGetters } = createNamespacedHelpers('user')
import {mapState , mapGetters, mapMutations, mapActions } from 'vuex'
import { stat } from 'fs';
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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    ...mapGetters([
       'appNameWithVersion',
       'firstLetter'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },
     appName () {
      return this.$store.state.appName
     },
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
     ...mapMutations([
       'SET_USER_NAME',
       'SET_APP_NAME'
     ]),
     handleInput(val) {
       this.inputValue=val
     },
      handleChangeAppName() {
    //  this.$store.commit({
    //    type: 'SET_APP_NAME',
    //    appName: 'newAppName'
    //    })
      //  this.SET_APP_NAME({
      //     appName: 'newAppName'
      //  })
      //  this.$store.commit('SET_APP_VERSION')
      this.updateAppName()
   },
    changeUserName () {
      this.SET_USER_NAME('vue-cource')
    }
   },

}
</script>

