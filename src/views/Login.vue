<template>
    <div class="centered-container hero" app>

        <v-card
            elevation="24"
            outlined
            shaped
            class="card-width"
        >

          <v-img
              :aspect-ratio="16/9"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        
          <v-container fluid>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="form-width"
            >
                <v-text-field
                  v-model="login.username"
                  :rules="usernameRules"
                  label="Username"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="login.password"
                  :rules="passwordRules"
                  label="Password"
                  :type="type"
                  required
                ></v-text-field>

                <div class=" d-flex justify-center">

                  <v-btn
                    class="ma-2"
                    :loading="loading"
                    :disabled="loading"
                    color="primary"
                    @click="actionLogin"
                  >Login</v-btn>


                </div>
                
            </v-form>

          </v-container>
        
        </v-card>

    </div>
</template>

<script>

import store from '../store/login'

export default {
    name: 'Login',
    store,
    data () {
      return {
        loader: null,
        loading: false,
        login: {
          username: '',
          password: '',
        },
        type: 'password',
        usernameRules: [
          v => !!v || 'Username is required',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
        ],
        valid: true,
        token: '',
        msg: ''
      }
    },

    methods: {
        actionLogin() {
            this.$axios.post('login', this.login)
                .then((res) => {
                    const token = res.data.data
                    this.$store.dispatch('login', token)
                })
                .then(
                    this.$router.push('/dashboard')
                )
            
        }
    }
}
</script>

<style scoped>
    .hero {
        background-image: url('../assets/pos-banner.jpg');
        background-size: cover;
    }

    .centered-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100vh;
    }
    .form-width{
        width: 80%;
        justify-content: center;
        margin: auto auto;
    }
    .card-width {
        width: 45%;
    }
</style>