<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">Edit Contact</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fuga ut magni minus tempore dolor blanditiis iure ullam sapiente
          alias.
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

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitUpdate()">
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="contact.name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Photo URL"
              v-model="contact.photo"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="contact.email"
            />
          </div>
          <div class="mb-2">
            <input
              type="phone"
              class="form-control"
              placeholder="Mobile"
              v-model="contact.mobile"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Company"
              v-model="contact.company"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              v-model="contact.title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="contact.groupId"
              type="text"
              class="form-control"
              v-if="groups.length > 0"
            >
              <option value="">{{ group.name }}</option>
              <option :value="grp.id" v-for="grp of groups" :key="grp.id">
                {{ grp.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success m-2" value="Update" />
            <input
              type="button"
              class="btn btn-success"
              value="Cancel"
              @click="cancel()"
            />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" class="contact-img" />
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import { ContactService } from "@/services/ContactService";
export default {
  components: { SpinnerComp },
  name: "EditContact",
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      errorMessage: null,
      contact: {},
      group: {},
      groups: [],
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let contactResp = await ContactService.getContact(this.contactId);
      this.contact = contactResp.data;
      //fetch only selected group data
      let groupResp = await ContactService.getGroup(this.contact);
      this.group = groupResp.data;
      //fetch all groups
      let groupsResp = await ContactService.getAllGroups();
      this.groups = groupsResp.data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
      console.log(`Edit Contact:: created: error: ${error}`);
    }
  },
  methods: {
    cancel: function () {
      return this.$router.push("/");
    },

    submitUpdate: async function () {
      try {
        this.loading = true;
        let response = await ContactService.updateContact(
          this.contact,
          this.contactId
        );
        if (response) {
          this.loading = false;
          return this.$router.push("/");
        } else {
          this.loading = false;
          return this.$router.push(`/contacts/edit/${this.contactId}`);
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
        console.log(`View Contact:: created: error: ${this.errorMessage}`);
      }
    },
  },
};
</script>

<style scoped>
</style>