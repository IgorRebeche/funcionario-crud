<template>
  <div id="app">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar mx-auto">
        <router-link class="nav-item px-5 btn btn-outline-success" to="/"
          >Home</router-link
        >
        <router-link class="nav-item px-5 btn btn-outline-success" to="/create"
          >Create</router-link
        >
      </div>
      <!-- <div class="navbar ms-auto">
          <input
            class="form-control"
            type="text"
            name="value"
          />
        <router-link class="d-flex" :to="{ name: 'Search', params: { id: value } }">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </router-link>
      </div> -->
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
