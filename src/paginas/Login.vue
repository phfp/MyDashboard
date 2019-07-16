<template>  
  <login-layout>
    <div class="row green-text" id="login-form">
      <div class="input-field col s6">
        <i class="material-icons prefix">email</i>
        <input id="email" type="email" class="validate white-text" autocomplete="on" v-model="email">
        <label for="email">Email</label>
        <span class="helper-text" data-error="Ops, email inválido :(" data-success=""></span>
      </div>
      <div class="input-field col s6">
        <i class="material-icons prefix">lock</i>
        <input id="password" type="password" class="validate white-text" v-model="password">
        <label for="password">Senha</label>
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
      password:'',
    }
  },
  beforeCreate(){
    if(this.$session.exists()){
      this.$router.push('/');
    }
  },
  methods:{
    login: function(){
      axios.post('http://127.0.0.1:8000/api/login',{
        email: this.email,
        password: this.password                
      })
      .then(response => {
        if(response.status === 200 && 'token' in response.data){
          this.$session.start();
          this.$session.set('usuario', response.data);
          //axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
          this.$router.push('/');
        }else if(response.data.status == false){
          alert('Login inválido!');
        }else{
          //erro de validacao
          let erros = '';
          for(let erro of Object.values(response.data)){
            erros += erro +" ";
          }
          alert(erros);
        }
      })    
      .catch(e => {
        alert("Tente novamente mais tarde!");
      })  
    },
  },
  components:{
    LoginLayout
  }
}
</script>
<style>
#login-form{
  position: relative;
  bottom: 35px;
}
</style>