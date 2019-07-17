<template>
    <pagina-layout>
      <div class="container">
        <div class="row green-text" id="cadastro-form">
          <h4>Meu Perfil</h4><br>
          <div class="row">
          <div class="col s6">
            <div class="card">
              <div class="card-image small">
                <img src="/static/imagens/img-perfil.jpg">
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>Fazer upload da imagem</p>
              </div>
            </div>
          </div>
        </div>
          <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="nome" type="text" class="validate grey-text" v-model="name">
              <label class="active" for="nome">Nome</label>
          </div>
          <div class="input-field col s6">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" class="validate grey-text" v-model="email">
              <label class="active" for="email">Email</label>
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
          <div class="input-field col s6">
              <button v-on:click="perfil()" class="btn waves-effect waves-light green darken-3" type="submit" name="action">Atualizar
                  <i class="material-icons right">face</i>
              </button>
          </div>
        </div>
      </div>
    </pagina-layout>                               
</template>

<script>

import PaginaLayout from '@/components/layouts/PaginaLayout'
import axios from 'axios'

export default {
  name: 'CadastroUser',
  data () {
    return {
        usuario:'',
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    }
  },
  created() {
    if(this.$session.exists()){
      this.usuario = this.$session.get('usuario');
      this.name = this.usuario.name;
      this.email = this.usuario.email;
    }else{
      this.$router.push('/login')
    }
  },
  methods:{
    perfil: function(){
      axios.put('http://127.0.0.1:8000/api/perfil',{
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      },{"headers":{"authorization":"Bearer "+this.usuario.token}})
      .then(response => {
        if(response.data){
          M.toast({html: 'Atualização realizada com sucesso!', classes: 'green rounded'});
          console.log(response.data);
        }
      })    
    }
  },
  components:{
    PaginaLayout
  }
}
</script>
<style>
  #cadastro-form{
      position: relative;
      top: 10px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: grey;
}
body {
    overflow-x: hidden;    
}
</style>
