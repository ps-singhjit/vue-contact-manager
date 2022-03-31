<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm">
            <i class="fa fa-plus-square m-1"></i>
            New
          </router-link>
        </p>
        <p class="fst-italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsum
          voluptates facere doloribus rem magni molestias impedit unde eos illo
          aut reiciendis alias pariatur earum fuga sit, illum, quis deserunt.
        </p>
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name"
                  />
                </div>
                <div class="col">
                  <input
                    type="submit"
                    class="btn btn-outline-success"
                    value="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 shadow list-group-item-success">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
                  alt=""
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">Dummy Name</span>
                  </li>
                  <li class="list-group-item">
                    Mobile: <span class="fw-bold">12358712</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">Dummy@Name.com</span>
                  </li>
                </ul>
              </div>
              <div
                class="
                  col-sm-1
                  d-flex
                  flex-column
                  align-items-center
                  jsutify-content-center
                "
              >
                <router-link
                  to="/contacts/view/:contactId"
                  class="btn btn-warning btn-sm my-1"
                  ><i class="fa fa-eye" aria-hidden="true"></i
                ></router-link>
                <router-link
                  to="/contacts/edit/:contactId"
                  class="btn btn-primary btn-sm my-1"
                >
                  <i class="fas fa-edit"></i
                ></router-link>
                <button class="btn btn-danger btn-sm my-1">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactManager",
};
</script>

<style scoped>
</style>