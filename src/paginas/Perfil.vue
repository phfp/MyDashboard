<template>
    <pagina-layout>
      <div class="container">
        <div class="row green-text" id="cadastro-form">
          <h4 class="orange-text text-darken-3">Meu Perfil</h4><br>
          <div class="divider grey"></div><br>
          <div class="row">
          <div class="col s6">
            <div class="card">
              <div class="card-image small">
                <img v-bind:src="usuario.imagem">
              </div>
            </div>
            <div class="file-field input-field">
                  <div class="btn waves-effect waves-light green">
                    <span><i class="material-icons">add</i></span>
                    <input type="file" v-on:change="salvaImagem">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" placeholder="Upload de uma imagem" type="text">
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
        password_confirmation:'',
        imagem: ''
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
    salvaImagem: function(e){
      let arquivo = e.target.files || e.dataTransfer.files;
      if(!arquivo.length){
        return;
      }

      let reader = new FileReader();

      reader.onloadend = (e) => {
        this.imagem = e.target.result;
      };

      reader.readAsDataURL(arquivo[0]);
    },
    perfil: function(){
      axios.put('http://127.0.0.1:8000/api/perfil',{
        name: this.name,
        email: this.email,
        imagem: this.imagem,
        password: this.password,
        password_confirmation: this.password_confirmation
      },{"headers":{"authorization":"Bearer "+this.usuario.token}})
      .then(response => {
        if(response.data.token){
          console.log(response.data);
          this.usuario = response.data;
          this.$session.set('usuario', response.data);
          M.toast({html: 'Atualização realizada com sucesso!', classes: 'green rounded'});
        }else{
          console.log('Erros de validação!');
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
