<template lang="html">
  <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light d-flex">
    <div class="justify-content-between">
    <router-link to="/">Home</router-link>
    <span v-if="signedIn"><router-link to="/account">
      <div class="user-cont">
        <img v-bind:src="profileImage">
        <h5>{{userName}}</h5>
      </div>
    </router-link></span>
    <span v-else> | <router-link to="/login">Login</router-link> |
      <router-link to="/account">Account</router-link>
    </span>
    </div>
    <div>
    <router-link to="/NewPost" class="btn btn-light PostButton">Create New Post</router-link>
    </div>
    <form class="form-inline my-2 my-lg-0 ml-auto">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import database from '../firebase.js'

export default {
  data () {
    return {
      profileImage: '',
      userName: '',
      userEmail: '',
      signedIn: false,
      userInfo: ''
    }
  },
  created () {
    const signedIn = localStorage.getItem('signedIn')
    if (signedIn === 'true') {
      this.signedIn = true
      this.userEmail = localStorage.getItem('userEmail')
      const v = this
      database.collection('users').doc(this.userEmail).get().then(function (doc) {
        v.userName = doc.data().userName
        if ((doc.data().profileImage !== null) || (doc.data().profileImage !== undefined)) {
          v.profileImage = doc.data().profileImage
        }
      })
    } else {
      this.signedIn = false
    }
  }
}

</script>

<style scoped lang="scss">
  #nav {
    & > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    & .user-cont {
      margin-right: 5%;
      display: flex;
      align-items: center;
      & img {
        border-radius: 100%;
        max-width: 50px;
      }
      & h5 {
        margin: 0 5%;
        font-size: 18px;
        text-decoration: none;
      }
    }
    .PostButton{
    float: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  }
</style>
