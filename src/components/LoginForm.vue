<template lang="html">
  <div class="col col-6">
  <div class="text-center d-flex justify-content-center">
    <h2>Login</h2>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
  <div class="d-flex justify-content-center">
    <form class="containerForm">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="userEmail">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="userPw">
      </div>
      <button type="button" class="btn btn-outline-dark" @click="loginUser">Login!</button>
    </form>
  </div>
  </div>
</template>

<script>
// import database from '../firebase.js'
import firebase from 'firebase'
require('firebase/auth')

export default {
  data () {
    return {
      userName: '',
      userEmail: '',
      userPw: '',
      userActive: false,
      errorMessage: ''
    }
  },
  methods: {
    loginUser: function () {
      const v = this
      firebase.auth().signInWithEmailAndPassword(v.userEmail, v.userPw).then(function () {
        v.userActive = true
        localStorage.setItem('signedIn', true)
        localStorage.setItem('userEmail', v.userEmail)
        location.reload()
      }).catch(function (error) {
        v.errorMessage = error.message
      })
    }
  }
}
</script>

<style scoped lang="scss">
.containerForm {
    width: 65%;
}
</style>
