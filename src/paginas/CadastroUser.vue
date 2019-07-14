<template>
    <pagina-layout>
      <div class="container">
        <div class="row green-text" id="cadastro-form">
          <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="nome" type="text" class="validate grey-text" v-model="name">
              <label for="nome">Nome</label>
          </div>
          <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate grey-text" v-model="email">
              <label for="email">Email</label>
              <span class="helper-text" data-error="Ops, email inválido :(" data-success=""></span>
          </div>
          <div class="input-field col s6">
              <i class="material-icons prefix">lock</i>
              <input id="password" type="password" class="validate grey-text" v-model="password">
              <label for="password">Senha</label>
          </div>
          <div class="input-field col s6">
              <i class="material-icons prefix">lock</i>
              <input id="password-check" type="password" class="validate grey-text" v-model="password_confirmation">
              <label for="password-check">Confirmar Senha</label>
          </div>
          <div class="input-field col s12">
              <button v-on:click="cadastro()" class="btn waves-effect waves-light green darken-3" type="submit" name="action">Cadastrar
                  <i class="material-icons right">add_circle</i>
              </button>
          </div>
        </div>
      </div>
    </pagina-layout>                               
</template>

<script>

import LoginLayout from '@/components/layouts/LoginLayout'
import PaginaLayout from '@/components/layouts/PaginaLayout'
import axios from 'axios'

export default {
  name: 'CadastroUser',
  data () {
    return {
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    }
  },
  methods:{
    cadastro: function(){
      axios.post('http://127.0.0.1:8000/api/cadastro',{
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then(response => {
        if(response.data.token){
          M.toast({html: 'Cadastro realizado com sucesso!', classes: 'green rounded'});
          document.location.reload();
        }else if(response.data.status == false){
          //login nao existe
          alert('Erro no cadastro!');
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
        console.log(e);
        alert("Tente novamente mais tarde!");
      })  
    }
  },
  components:{
    LoginLayout,
    PaginaLayout
  }
}
</script>
<style>
  #cadastro-form{
      position: relative;
      top: 130px
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: grey;
}
</style>
