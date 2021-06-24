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
      <h2>Search User</h2>
      <form id="create-post-form" @submit.prevent="searchUser">
        <div class="form-group col-md-12">
          <input
            type="text"
            id="cpf"
            v-model="user.cpf"
            name="title"
            class="form-control"
            placeholder="Enter id"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Search</button>
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
  methods: {
    searchUser() {
      let id = this.cpf;
      getUser(id);
    },
    getUser(id) {
      axios
        .get(`${server.baseURL}/user/${id}`)
        .then((data) => (this.user = data.data));
        window.location.reload();
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>

