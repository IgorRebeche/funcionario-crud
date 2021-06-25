<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All Users
        </button>
      </small>
    </h4>

    <div class="col-md-12 form-wrapper">
      <h2>Edit User</h2>
      <form id="create-post-form" @submit.prevent="editUser">
        <div class="form-group col-md-12">
          <label for="title"> Name </label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            name="title"
            class="form-control"
            placeholder="Enter name"
          />
        </div>

        <div class="form-group col-md-12">
          <label for="title"> Age </label>
          <input
            type="text"
            id="age"
            v-model="user.age"
            name="title"
            class="form-control"
            placeholder="Enter age"
          />
        </div>

        <div class="form-group col-md-12">
          <label for="title"> cpf </label>
          <input
            type="text"
            id="cpf"
            v-model="user.cpf"
            name="title"
            class="form-control"
            placeholder="Enter cpf"
          />
        </div>

        <div class="form-group col-md-12">
          <label for="title"> Email </label>
          <input
            type="text"
            id="email"
            v-model="user.email"
            name="title"
            class="form-control"
            placeholder="Enter email"
          />
        </div>

        <div class="form-group col-md-12">
          <label for="title"> Address </label>
          <input
            type="text"
            id="address"
            v-model="user.address.street"
            name="title"
            class="form-control"
            placeholder="Enter address"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { server } from '../../helper';
import axios from 'axios';
import router from '../../router';
export default {
  data() {
    return {
      id: 0,
      user: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser();
  },
  methods: {
    editUser() {
      let data = {
        name: this.user.name,
        age: this.user.age,
        // cpf: this.user.cpf,
        email: this.user.email,
        address: {
          street: this.user.address.street
        },
      };
      axios.put(`${server.baseURL}/user/${this.id}`, data).then((/*data*/) => {
        router.push({ name: 'home' });
      });
    },
    getUser() {
      axios
        .get(`${server.baseURL}/user/${this.id}`)
        .then((data) => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>

