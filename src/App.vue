<template>
  <div id="app">
    <router-view/>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './views/LoginPage.vue'
const frb = require('./firebaseConfig.js')

export default {
  components: {
    LoginPage: LoginPage
  },
  mounted () {
    frb.firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        /*
        var displayName = user.displayName
        var email = user.email
        var emailVerified = user.emailVerified
        var photoURL = user.photoURL
        var uid = user.uid
        var phoneNumber = user.phoneNumber
        var providerData = user.providerData
        */

        console.log(user.email)
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
#app
</style>
