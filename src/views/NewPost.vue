<template lang="html">
  <div class="account-cont marginTop container">
    <div class="col col-6" v-if="signedIn">
      <h2>Create New Post</h2>
      <p v-if="successIsActive">Successfully Posted!</p>
      <p v-if="errorIsActive">{{errorIsActive}}</p>
    <div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="content-title">Title</label>
          <input type="text" class="form-control" id="contentTitle" placeholder="Enter Content Title" v-model="postTitle">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="content-tags">Tags</label>
          <input type="text" class="form-control" id="contentTags" placeholder="#Tags" v-model="postTags">
        </div>
        <div class="form-group col-md-6">
          <label for="content-title">Category</label>
          <select type="text" class="form-control" id="contentTitle" v-model="postCategory">
            <option value="business">Business</option>
            <option value="natureLandscapes">Nature / Landscapes</option>
            <option value="seaLife">Sea Life</option>
            <option value="housePets">House Pets</option>
            <option value="architecture">Architecture</option>
            <option value="minimalism">Minimalism</option>
            <option value="photosFromFilmRolls">Photos from Film Rolls</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="content-description">Description</label>
        <textarea class="form-control" id="contentDescription" rows="3" v-model="postContent"></textarea>
      </div>
      <!-- W3 Schools custom file uploader -->
      <label for="content-file">Upload Image</label>
      <div class="custom-file mb-3">
      <!-- <input type="file" class="custom-file-input" id="customFile" name="filename"> -->
      <input name="customFile" class="custom-file-input" id="inp" @change="previewFiles" type='file'>
      <label class="custom-file-label" for="inp">Choose file</label>
    </div>
  <button type="submit" class="btn btn-primary" @click="uploadPost">Post</button>
</div>
  </div>
  <div v-else>
    <h3>You must <router-link to="/Login">log in</router-link> or <router-link to="/Login">sign up</router-link> to view this page.</h3>
  </div>
</div>
</template>

<script>
import database from '../firebase.js'
import moment from 'moment'

export default {
  data () {
    return {
      postUser: '',
      postUserEmail: '',
      postTags: '',
      postCategory: '',
      postContent: '',
      postTitle: '',
      postImage: '',
      signedIn: false,
      errorIsActive: '',
      successIsActive: false
    }
  },
  created () {
    const signedIn = localStorage.getItem('signedIn')
    if (signedIn === 'true') {
      this.signedIn = true
      this.postUserEmail = localStorage.getItem('userEmail')
      const v = this
      database.collection('users').doc(this.postUserEmail).get().then(function (doc) {
        v.postUser = doc.data().userName
      })
    } else {
      this.signedIn = false
    }
  },
  methods: {
    previewFiles (event) {
      var v = this
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })

      async function Main () {
        v.postImage = await toBase64(event.target.files[0])
        console.log('done')
      }

      Main()
    },
    uploadPost: function () {
      const date = moment().format('MMMM Do YYYY, h:mm:ss a')
      const v = this
      database.collection('posts').doc().set({
        postUser: v.postUser,
        postImage: v.postImage,
        postTitle: v.postTitle,
        postContent: v.postContent,
        postCategory: v.postCategory,
        postTags: v.postTags,
        postDate: date
      }).then(function () {
        console.log('Document successfully written!')
        v.successIsActive = true
      }).catch(function (error) {
        console.error('Error writing document: ', error)
        v.errorIsActive = error.message
      })
    }
  }
}
</script>

<style scoped lang="scss">
.marginTop {
    margin-top: 20px;
}
.margin {
    margin: 15px;
}
.container{
  text-align: left;
}
h2{
  margin-bottom: 20px;
}
</style>
