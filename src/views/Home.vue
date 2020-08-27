<template>
  <div class="home">
    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Business</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Nature / Landscapes</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Sea Life</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">House Pets</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Architecture</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Minimalism</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Photos from film rolls</a>
      </div>
    </div>
    <!-- sidebar END -->

    <!-- Page Content -->
    <div id="page-content-wrapper" v-if="items">
      <div class="container-fluid" v-for="item in items" :key="item.title">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper" v-bind:style="{background: 'url(' + item.postImage + ') no-repeat center center'}" style="background-size: cover;">
                        <!-- <img src="http://via.placeholder.com/600x300" alt="Card image cap"> -->
                    </div>
                    <div class="card-body content">
                        <div class="category">
                          <p>{{item.postCategory}}</p>
                          <h5 class="card-title">{{item.postUser}}</h5>
                        </div>
                        <h3 class="card-title">{{item.postTitle}}</h3>
                        <p class="card-text">{{item.postContent}}</p>
                        <h4 class="date">{{item.postDate}}</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import firebase from '../firebase.js'

export default {
  name: 'Home',
  data () {
    return {
      items: false
    }
  },
  created () {
    var data = []
    const v = this
    firebase.collection('posts').onSnapshot(function (items) {
      items.forEach(function (doc) {
        var eachDoc = doc.data()
        data.push(eachDoc)
      })
      v.items = data
    })
  }
}
</script>

<style scoped lang="scss">
#page-content-wrapper {
  border-top: 1px solid #dee2e6 !important;
  width: 100%;
}

.content{
  text-align: left;
}

.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}

.margin {
    margin: 15px;
    margin-top: 20px;
}

.cardWidth {
    width: 22rem;
}
div.img-square-wrapper {
  padding: 10% 20%;
  background-size: cover;
}
.category {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h5 {
    margin-left: 10px;
  }
  & p {
    text-transform: capitalize;
    background-color: black;
    color: white;
    padding: 2px 5px;
  }
}
</style>
