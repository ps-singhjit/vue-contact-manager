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
  <!-- Spinner -->
  <div v-if="loading">
    <SpinnerComp />
  </div>

  <!-- Erro Message -->
  <div class="text-center" v-if="!loading && errorMessage">
    <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
  </div>
  <div class="container mt-3" v-if="!loading && contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact">
        <div class="card my-2 shadow list-group-item-success">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-img" />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">{{ contact.name }}</span>
                  </li>
                  <li class="list-group-item">
                    Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">{{ contact.email }}</span>
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
                  :to="`/contacts/view/${contact.id}`"
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
import { ContactService } from "@/services/ContactService";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: { SpinnerComp },
  name: "ContactManager",
  data: function () {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
      console.log(
        "Contact Manager::contact list: ",
        JSON.stringify(this.contacts, null, 2)
      );
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
      console.log(`Contact Manager:: created: error: ${this.errorMessage}`);
    }
  },
};
</script>

<style scoped>
</style>