<template>
  <v-form v-model="valid">
    <v-card
        class="mx-auto"
        max-width="500"
    >
      <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  required
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
              />
            </v-col>
          </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="login"> Login </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="loginFailedSnackbar.show">
      {{ loginFailedSnackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="loginFailedSnackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      valid: false,
      username: '',
      password: '',
      usernameRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      loginFailedSnackbar: {
        show: false,
        text: `Incorrect username or password`,
      },
      users: [
        {
          username: "user",
          password: "password",
          admin: false
        },
        {
          username: "admin",
          password: "admin",
          admin: true
        },
      ]
    }),
    methods: {
      login() {
        let user = this.users.filter( e => this.username === e.username && this.password === e.password);
        if (user.length === 1 ){
          this.$store.commit('setUser', user[0]);
        } else {
          this.loginFailedSnackbar.show = true;
        }

      }
    }
  }
</script>
