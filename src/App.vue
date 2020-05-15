<template>
  <div id="app">
    <Navbar />

    <div id="Content">
      <router-view/>
    </div>

    <LoginPage />
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import LoginPage from './views/LoginPage.vue'
const frb = require('./firebaseConfig.js')

export default {
  components: {
    Navbar: Navbar,
    LoginPage: LoginPage
  },
  mounted () {
    var self = this
    frb.firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        self.$store.commit('userLoggedIn', user)
      } else {
        // User is signed out.
        console.log('signed out')
      }
    }, function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0

#app

  #Content
    background: #FFF
    display: inline-block
    height: 100vh
    vertical-align: top
    width: calc(100vw - 256px)
</style>
