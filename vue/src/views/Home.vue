<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>funcionario crud</h1>
      <!-- <p> Built with Nest.js, Vue.js and MongoDB</p> -->

      <div v-if="users.length === 0">
        <h2>No user found at the moment</h2>
      </div>
    </div>

    <!-- <div class="row"> -->
    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.cpf }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address ? user.address.street : '' }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link
                    :to="{ name: 'Edit', params: { id: user._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    >Edit User
                  </router-link>
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteUser(user._id)"
                  >
                    Delete User
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { server } from '../helper';
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/user`)
        .then((data) => {
          console.log(data)
          (this.users = data.data)
        });
    },
    deleteUser(id) {
      axios.delete(`${server.baseURL}/user/${id}`).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
  },
};
</script>

