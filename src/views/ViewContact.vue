<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">View Contact</p>
        <p class="fst-italic">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure odio
          ipsum perferendis assumenda, neque aut aspernatur quibusdam sint
          repellat! Exercitationem ad culpa rerum eius qui neque dignissimos
          dicta, autem cupiditate!
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img
          src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
          class="contact-img-big"
        />
      </div>

      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name:
            <span class="fw-bold"> Some Name</span>
          </li>
          <li class="list-group-item">
            Mobile:
            <span class="fw-bold"> 254987</span>
          </li>
          <li class="list-group-item">
            Email:
            <span class="fw-bold"> Email@email.com</span>
          </li>
          <li class="list-group-item">
            Company:
            <span class="fw-bold"> Some company</span>
          </li>
          <li class="list-group-item">
            Title:
            <span class="fw-bold"> Some title</span>
          </li>
          <li class="list-group-item">
            Group:
            <span class="fw-bold"> Some group</span>
          </li>
        </ul>
      </div>
      <div class="row mt-3">
        <div class="col">
          <router-link to="/" class="btn btn-success">
            <i class="fa fa-arrow-alt-circle-left"></i>
            Back</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewContact",
};
</script>

<style scoped>
</style>