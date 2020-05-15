<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    user: {{user}}
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
const frb = require('../firebaseConfig.js')

export default {
  data () {
    return {
      user: frb.currentUser
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
