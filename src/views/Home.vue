<template>
  <div class="home">
    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Business</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Nature / landscapes</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Sea Life</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">House Pets</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Architecture</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Technology</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Minimalism</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Photos from film rolls</a>
      </div>
    </div>
    <!-- sidebar END -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/600x300" alt="Card image cap">
                    </div>
                    <div class="card-body content">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/600x300" alt="Card image cap">
                    </div>
                    <div class="card-body content">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/600x300" alt="Card image cap">
                    </div>
                    <div class="card-body content">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default {
  name: 'Home',
  components: {
    // HelloWorld
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
</style>
