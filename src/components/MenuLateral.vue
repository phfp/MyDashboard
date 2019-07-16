<template>
  <div id="MenuLteral">       
    <ul id="slide-out" class="sidenav sidenav-fixed teal darken-4">
    <li><div class="user-view">
        <div class="background">
        </div>
        <router-link to="/"><img class="circle" src="/static/imagens/img-perfil.png"></router-link>
        <a href="#" v-if="usuario"><span class="white-text name">{{usuario.name}}</span></a>
        <a href="#" v-if="usuario"><span class="white-text email">{{usuario.email}}</span></a>
    </div></li>

    <li><div class="divider teal darken-2"></div></li>

    <li><router-link class="teal-text text-accent-3" to="/"><i class="material-icons">home</i>Home</router-link></li>

    <li><div class="divider teal darken-2"></div></li>
    <li><a class="subheader teal-text text-lighten">Ferramentas</a></li>
    <li><router-link class="teal-text text-accent-3" to="/codbarras">Gerar de Barras</router-link></li>
    <li><router-link class="teal-text text-accent-3" to="/digito">Cálculo do Dígito Verificador</router-link></li>

    <li><div class="divider teal darken-2"></div></li>

    <li><a class="subheader teal-text text-lighten">Documentos</a></li>
    <li><router-link class="teal-text text-accent-3" to="#">Normas e Procedimantos</router-link></li>
    <li><router-link class="teal-text text-accent-3" to="#">Tutoriais Úteis</router-link></li>
    <li><router-link class="teal-text text-accent-3" to="#">Documentos Diversos</router-link></li>
    <li><router-link class="teal-text text-accent-3" to="#">Imagens</router-link></li>

    <li><div class="divider teal darken-2"></div></li>
    <li><a class="subheader teal-text text-lighten">Gerenciamento de Usuários</a></li>
    <li><router-link class="teal-text text-accent-3" to="/cadastrouser">Cadastrar Usuário</router-link></li>


    <li><div class="divider teal darken-2"></div></li>
    <li><a href="#" v-on:click="sair" class="teal-text text-accent-3" to="/"><i class="material-icons orange-text">exit_to_app</i>Sair</a></li>  

    </ul>    
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>

import axios from 'axios'
export default{
  name: 'MenuLateral',
  data () {
    return {
      usuario: '',
    }
  },
  methods:{
    sair(){
      this.$session.destroy()
      this.$router.push('/login')
    }
  },
  mounted(){
    M.AutoInit();
  },
  beforeCreate(){
    if(!this.$session.exists()){
      this.$router.push('/login')
    }
  },
  created() {
    this.usuario = this.$session.get('usuario');
  }
}
</script>

<style>
.sidenav{
  overflow: hidden;
}
.sidenav:hover{
  overflow: auto;
}

::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #00897b; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00796b; 
}
</style>
