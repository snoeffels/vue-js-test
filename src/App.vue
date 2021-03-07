<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-main>
      <LoginForm v-show="!isUserLoggedIn"/>
      <h1 v-show="$store.getters.isUserAdmin">ADMIN</h1>
      <v-btn text @click="logout" v-show="isUserLoggedIn">Logout</v-btn>

    </v-main>
  </v-app>
</template>

<script>
import LoginForm from './components/LoginForm';

export default {
  name: 'App',
  components: {
    LoginForm,
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.commit("unsetUser");
    }
  }
};
</script>
