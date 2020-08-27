<template>
<div>
    <div class="row marginTop">
      <div v-if="signedIn">
        <h3>You are already signed in. Please visit your <router-link to="/account">account</router-link> to sign out.</h3>
      </div>
      <div class="col row" v-else>
        <LoginForm/>
        <SignupForm/>
      </div>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'

// import db from '../firebase.js'
// // import firebase from 'firebase'
// require('firebase/auth')

export default {
  components: {
    LoginForm,
    SignupForm
  },
  data () {
    return {
      userName: '',
      userEmail: '',
      userPw: '',
      userPwConf: '',
      signedIn: false,
      error: '',
      errorMessage: ''
    }
  }
  // methods: {
  //   loginUser: function () {
  //     const v = this
  //     firebase.auth().signInWithEmailAndPassword(v.userEmail, v.userPw).then(function () {
  //       v.userActive = true
  //       localStorage.setItem('signedIn', 'true')
  //     }).catch(function (error) {
  //       v.errorMessage = error.message
  //     })
  //   },
  //   signUp: function () {
  //     const v = this
  //     firebase.auth().createUserWithEmailAndPassword(v.userEmail, v.userPw).then(function () {
  //       console.log('success!')
  //       db.collection('users').doc(v.userEmail).set({
  //         userName: v.userName,
  //         userEmail: v.userEmail
  //       }).then(function () {
  //         console.log('Document successfully written!')
  //       }).catch(function (error) {
  //         console.error('Error writing document: ', error)
  //       })
  //     }).catch(function (error) {
  //       v.error = error.message
  //     })
  //   }
  // }
}
</script>

<style scoped lang="scss">
.containerForm {
    width: 65%;
}
.marginTop {
    margin-top: 50px;
}
</style>
