<template lang="html">
  <div class="account-cont marginTop container">
    <div v-if="signedIn">
      <div class="img-cont">
        <div class="margin profile-img" v-bind:style="{background: 'url(' + profileImage + ') no-repeat center center'}"></div>
        <form>
          <div class="custom-file">
            <input name="customFile" class="custom-file-input" id="inp" @change="previewFiles" type='file'>
             <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
        </form>
      </div>
      <h2><span class="badge badge-primary margin">{{userName}}</span></h2>
      <h3><span class="badge badge-secondary">Additional Information</span></h3>
      <div class="row">
          <div class="col col-4">
                <div class="card margin cardWidth">
                    <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
          </div>
          <div class="col col-4">
              <div class="card margin cardWidth">
                  <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                  <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
          </div>
          <div class="col col-4">
              <div class="card margin cardWidth">
                  <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                  <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col col-4">
                <div class="card margin cardWidth">
                    <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
          </div>
          <div class="col col-4">
              <div class="card margin cardWidth">
                  <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                  <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
          </div>
          <div class="col col-4">
              <div class="card margin cardWidth">
                  <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap">
                  <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="">
        <button type="button" class="btn" @click="logout">Logout</button>
      </div>
    </div>
    <div v-else>
      <h3>You must <router-link to="/Login">log in</router-link> or <router-link to="/Login">sign up</router-link> to view this page.</h3>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import database from '../firebase.js'

export default {
  data () {
    return {
      profileImage: '',
      signedIn: false,
      userName: '',
      userEmail: '',
      imageUpload: ''
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
  },
  methods: {
    logout: function () {
      localStorage.clear()
      location.reload()
    },
    changeProfilePhoto: function () {
      const storageRef = firebase.storage().ref()
      const file = document.getElementById('profileUpload').files[0]
      storageRef.put(file).then(function (snapshot) {
        console.log('Uploaded a blob or file!')
      })
    },
    previewFiles (event) {
      var v = this
      console.log(event.target.files[0])
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })

      async function Main () {
        console.log(await toBase64(event.target.files[0]))
        v.imageUpload = await toBase64(event.target.files[0])
        console.log(v.imageUpload)
        v.sendImageToStorage()
      }

      Main()
    },
    sendImageToStorage: function () {
      const v = this
      database.collection('users').doc(this.userEmail).update({
        profileImage: v.imageUpload
      }).then(function () {
        location.reload()
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

.cardWidth {
    width: 22rem;
}

.img-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
    border-radius: 100%;
    width: 200px;
    height: 200px;
    border: 1px solid #f2f2f2;
    background-size: cover;
}

</style>
