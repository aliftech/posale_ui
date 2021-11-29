<template>
    
  <div class="flex-container">
    <div class="flex">
      <v-card
        elevation="10"
        outlined
      >

        <v-container
          class="center mt-7 mb-7"
        >

          <div class="center-item">
            <img src="../assets/logo.png" class="img-logo" alt="">
          </div>

        </v-container>

        <v-container class="center">
          <div class="center-item">
            <p>Don't have an account ? <a @click="register">Sign Up</a></p>
          </div>
        </v-container>

        <v-container class="center">
          <div class="center-item">
            <p><a @click="forget">Forget Password</a></p>
          </div>
        </v-container>

        <v-container class="center mb-5">

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
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  :type="showPass ? 'text' : 'password'"
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
        showPass: false,
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
            
        },
        register () {
          this.$router.push('/register')
        },
        forget () {
          this.$router.push('/forget')
        }
    }
}
</script>

<style scoped>
  .img-logo {
    width: 80px;
    height: 80px;
    margin: auto auto;
  }

  @media screen and (max-width: 750px) {
    .img-logo {
      width: 50px;
      height: 50px;
    }
  }

  .flex-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .flex-container div.flex {
    flex: 0 1 500px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  .center div.center-item {
    flex: auto 50%;
  }

  .form-width {
    width: 75%;
  }
</style>