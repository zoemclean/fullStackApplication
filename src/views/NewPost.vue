<template lang="html">
  <div class="account-cont marginTop container">
    <div class="col col-6">
      <h2>Create New Post</h2>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="content-title">Title</label>
          <input type="text" class="form-control" id="contentTitle" placeholder="Enter Content Title">
        </div>
        <div class="form-group col-md-6">
          <label for="content-tags">Tags</label>
          <input type="text" class="form-control" id="contentTags" placeholder="#Tags">
        </div>
      </div>
      <div class="form-group">
        <label for="content-description">Description</label>
        <textarea class="form-control" id="contentDescription" rows="3"></textarea>
      </div>
      <!-- W3 Schools custom file uploader -->
      <label for="content-file">Upload Image</label>
      <div class="custom-file mb-3">
      <input type="file" class="custom-file-input" id="customFile" name="filename">
      <label class="custom-file-label" for="customFile">Choose file</label>
    </div>
  <button type="submit" class="btn btn-primary">Post</button>
</form>
  </div>
</div>
</template>

<script>
export default {
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
