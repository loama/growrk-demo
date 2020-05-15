import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      displayName: 'abc'
    },
    loginPage: {
      styles: {
        display: 'block',
        opacity: 1
      }
    }
  },
  mutations: {
    userLoggedIn (state, user) {
      /* var userData = {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid,
        phoneNumber: user.phoneNumber,
        providerData: user.providerData
      } */
      state.user.displayName = user.displayName
      state.loginPage.styles.opacity = 0
      setTimeout(() => {
        state.loginPage.styles.display = 'none'
      }, 400)
    }
  },
  actions: {
  },
  modules: {
  }
})
