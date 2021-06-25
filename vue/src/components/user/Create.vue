<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create User</h2>
      <form id="create-post-form" @submit.prevent="createUser">
        <div class="form-group col-md-12">
          <label for="title"> Name </label>
          <input
            type="text"
            id="name"
            v-model="name"
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
            v-model="age"
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
            v-model="cpf"
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
            v-model="email"
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
            v-model="address"
            name="title"
            class="form-control"
            placeholder="Enter address"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { server } from '../../helper';
import router from '../../router';
export default {
  data() {
    return {
      name: '',
      age: '',
      cpf: '',
      email: '',
      address: '',
    };
  },
  methods: {
    createUser() {
      let userData = {
        name: this.name,
        age: this.age,
        cpf: this.cpf,
        email: this.email,
        address: 
        {
          street: this.address
        }
      };
      this.__submitToServer(userData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/user`, data).then((/*data*/) => {
        router.push({ name: 'home' });
      });
    },
  },
};
</script>

