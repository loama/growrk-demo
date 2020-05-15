<template>
  <div id="LoginPage"
       v-bind:style="{
         display: $store.state.loginPage.styles.display,
         opacity: $store.state.loginPage.styles.opacity
       }">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
const frb = require('../firebaseConfig.js')

export default {
  data () {
    return {
    }
  },
  mounted () {
    var uiConfig = {
      signInSuccessUrl: false,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        frb.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        frb.firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign('https://growrk.com/privacy-policy')
      }
    }

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(frb.firebase.auth())
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style lang="sass">
#LoginPage
  background: #FFF
  height: 100vh
  left: 0
  position: fixed
  top: 0
  transition: all 0.3s
  width: 100vw
  z-index: 10

  .firebaseui-card-content
    background: #FFF
    border: 1px solid gray
    border-bottom: none
    margin: 0 auto
    width: 304px

    ul
      list-style: none

      .firebaseui-idp-google
        height: 40px
        padding: 8px

        .firebaseui-idp-text
          display: inline-block
          margin-top: 4px
          vertical-align: top

        img
          height: 28px

      .firebaseui-idp-text-short
        display: none !important

  .firebaseui-card-footer
    background: #FFF
    border: 1px solid gray
    border-top: none
    margin: -16px auto
    padding: 8px
    width: 288px
</style>
