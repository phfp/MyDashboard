<template>  
  <login-layout>
    <div class="row green-text" id="user-form">
      <div class="input-field col s6">
        <i class="material-icons prefix">email</i>
        <input id="icon_email" type="email" class="validate white-text" v-model="email">
        <label for="icon_email">Email</label>
        <span class="helper-text" data-error="Ops, email inválido :(" data-success=""></span>
      </div>
      <div class="input-field col s6">
        <i class="material-icons prefix">lock</i>
        <input id="icon_lock" type="password" class="validate white-text" v-model="password">
        <label for="icon_lock">Senha</label>
      </div>
      <div class="input-field col s12">
        <button v-on:click="login()" class="btn waves-effect waves-light teal darken-3" type="submit" name="action">Entrar
          <i class="material-icons right">send</i>
        </button>              
      </div>
    </div>
  </login-layout>                             
</template>

<script>

import LoginLayout from '@/components/layouts/LoginLayout'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods:{
    login: function(){
      axios.post('http://127.0.0.1:8000/api/login',{
        email: this.email,
        password: this.password                
      })
      .then(response => {
        console.log(response)
      })    
      .catch(e => {
        console.log(e);
      })  
    }
  },
  components:{
    LoginLayout
  }
}
</script>
<style>
</style>
