<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">Add Contact</p>
        <p class="fst-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, autem
          ipsam fugiat laboriosam eos ratione incidunt, natus impedit obcaecati
          tempora accusantium perspiciatis assumenda eveniet. Quidem, architecto
          maiores. Ipsam, sint unde!
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input
              v-model="contact.name"
              type="text"
              class="form-control"
              placeholder="*Name"
              required
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.photo"
              type="text"
              class="form-control"
              placeholder="Photo URL"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.email"
              type="email"
              class="form-control"
              placeholder="*Email"
              required
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.mobile"
              type="phone"
              class="form-control"
              placeholder="*Mobile"
              required
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.company"
              type="text"
              class="form-control"
              placeholder="Company"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="contact.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="contact.groupId"
              class="form-control"
              v-if="groups.length > 0"
            >
              <option value="">Select Group</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">
                {{ group.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
            <input
              type="button"
              class="btn btn-outline-success m-2"
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
import { ContactService } from "@/services/ContactService";
export default {
  name: "AddContact",
  data: function () {
    return {
      contact: {
        name: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        photo: "",
        groupId: "",
      },
      groups: [],
    };
  },
  created: async function () {
    try {
      let response = await ContactService.getAllGroups();
      this.groups = response.data;
    } catch (error) {
      console.log(`Add Contact:: created: error: ${error}`);
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = await ContactService.createContact(this.contact);
        console.log(`Add Contact:: submitCreate: response: ${response}`);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/contacts/add");
        }
      } catch (error) {
        console.log(`Add Contact:: submitCreate: error: ${error}`);
      }
    },
    cancel: function () {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>