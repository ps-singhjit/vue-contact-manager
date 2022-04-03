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

  <!-- Spinner -->
  <div v-if="loading">
    <SpinnerComp />
  </div>

  <!-- Erro Message -->
  <div class="text-center" v-if="errorMessage">
    <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
  </div>
  <div class="container mt-3">
    <div
      class="row align-items-center"
      v-if="!loading && !errorMessage && isDone"
    >
      <div class="col-md-4">
        <img :src="contact.photo" class="contact-img-big" />
      </div>

      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name:
            <span class="fw-bold"> {{ contact.name }}</span>
          </li>
          <li class="list-group-item">
            Mobile:
            <span class="fw-bold"> {{ contact.mobile }}</span>
          </li>
          <li class="list-group-item">
            Email:
            <span class="fw-bold"> {{ contact.email }}</span>
          </li>
          <li class="list-group-item">
            Company:
            <span class="fw-bold"> {{ contact.company }}</span>
          </li>
          <li class="list-group-item">
            Title:
            <span class="fw-bold">{{ contact.title }}</span>
          </li>
          <li class="list-group-item">
            Group:
            <span class="fw-bold">{{ group.name }}</span>
          </li>
        </ul>
      </div>
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
</template>

<script>
import { ContactService } from "@/services/ContactService";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: { SpinnerComp },
  name: "ViewContact",
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      group: {},
      loading: false,
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let contactResp = await ContactService.getContact(this.contactId);
      this.contact = contactResp.data;
      let groupResp = await ContactService.getGroup(this.contact);
      this.group = groupResp.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
      console.log(`View Contact:: created: error: ${this.errorMessage}`);
    }
  },
  methods: {
    isDone: function () {
      return (
        Object.keys(this.contact).length > 0 &&
        Object.keys(this.group).length > 0
      );
    },
  },
};
</script>

<style scoped>
</style>