<template>


  <div id="containerL">
    <p id="paddingL"> </p>
    <h2> Welcome back Friend!</h2>
    <p id="padding"> </p>

    <!-- Pills navs -->
    <ul class="nav nav-pills nav-justified mb-4" id="nav1" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link " id="login-tab" data-mdb-toggle="pill" :href="loginLink" role="tab"
           aria-controls="pills-login" aria-selected="true">Login</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="register-tab"  data-mdb-toggle="pill" :href="registerLink" role="tab"
           aria-controls="pills-register" aria-selected="false" >Register</a>
      </li>
    </ul>
    <!-- Pills navs -->
    <div>
      <p id="padding"> </p>
    </div>
    <!-- Pills content -->
    <div class="tab-content mb2">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form @submit.prevent="onSubmit">


          <!-- Email input -->
          <div class="form-outline mb-2">
            <input type="email" id="loginName" class="form-control" v-model="user.email" placeholder="maxmuster@mail.com"/>
            <label class="form-label" for="loginName"></label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-2">
            <input type="password" id="loginPassword" class="form-control" v-model="user.password" placeholder="Password"/>
            <label class="form-label" for="loginPassword"></label>
          </div>

          <!-- Submit button -->
          <input type="submit" class="btn btn-primary btn-block mb-4" id="log-btn" value="Login"/>
        </form>
      </div>
      <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>


          <!-- Name input -->
          <div class="form-outline mb-4">
            <input type="text" id="registerName" class="form-control" />
            <label class="form-label" for="registerName">Name</label>
          </div>

          <!-- Username input -->
          <div class="form-outline mb-4">
            <input type="text" id="registerUsername" class="form-control" />
            <label class="form-label" for="registerUsername">Username</label>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="registerPassword" class="form-control" />
            <label class="form-label" for="registerPassword">Password</label>
          </div>

          <!-- Repeat Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
          </div>

          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                   aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
        </form>
      </div>
    </div>
  </div>
  <!-- Pills content -->
</template>



<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      loginLink: '/signin',
      registerLink: '/register-user'
    };
  },
  methods: {
    onSubmit() {
      firebase.auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((response) => {
            response.user.updateProfile({
              displayName: this.user.name
            })
                .then(() => {
                  alert('User successfully registered! Please use credentials to login')
                  this.user = {
                    name: '',
                    email: '',
                    password: ''
                  }
                  this.$router.push('/signin')
                });
          })
          .catch((err) => {
            alert(err);
          });
    }
  }
};
</script>

<style lang="less">
@whitegrey: #f1f1f1;
@darkred: #641403;
@darkgrey:#333;

#log-btn {
  background-color: @darkred;
  color: @whitegrey;
  font-weight: bold;
}

.nav1 {
  width: 80%;
  margin-left: 70%;
}

.form-outline{
  padding: 0 30%;
}


#paddingL {
  padding: 0.5% 0;
}

#containerL {
  border: 3px solid @darkred;
  padding: 0 20%;
  border-radius: 5px;
}

#login-tab {
  background-color: @darkred;
  border: 1px solid @darkred;
  border-radius: 5px;
  color: @whitegrey;
  font-weight: bold;
}

#register-tab {
  color: black;
  border: 1px solid @darkred;
  font-weight: bold;
  background-color: white;
}


</style>