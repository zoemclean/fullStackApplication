<template lang="html">
  <div class="col col-6">
  <div class="text-center d-flex justify-content-center">
    <h2>Sign Up</h2>
    <p>{{error}}</p>
  </div>
  <div class="d-flex justify-content-center">
    <form class="containerForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="username" class="form-control" placeholder="Username" v-model="userName">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" placeholder="e.g. john.smith@gmail.com" v-model="userEmail">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="userPw">
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" class="form-control" placeholder="Confirm Password" v-model="userPwConf">
      </div>

      <button type="button" class="btn btn-outline-dark" @click="signUp">Sign Up!</button>
    </form>
  </div>
  </div>
</template>

<script>
import database from '../firebase.js'
import firebase from 'firebase'
require('firebase/auth')

export default {
  data () {
    return {
      userName: '',
      userEmail: '',
      userPw: '',
      userPwConf: '',
      userActive: false,
      error: ''
    }
  },
  methods: {
    signUp: function () {
      const v = this
      firebase.auth().createUserWithEmailAndPassword(v.userEmail, v.userPw).then(function () {
        console.log('success!')
        database.collection('users').doc(v.userEmail).set({
          userName: v.userName,
          userEmail: v.userEmail
        }).then(function () {
          console.log('Document successfully written!')
        }).catch(function (error) {
          console.error('Error writing document: ', error)
        })
      }).catch(function (error) {
        v.error = error.message
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
