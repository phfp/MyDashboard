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

    <li><a href="#" v-on:click="sair" class="teal-text text-accent-3" to="/"><i class="material-icons">exit_to_app</i>Sair</a></li>  

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

    </ul>    
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>
export default {
  methods: {
    sair(){
      sessionStorage.clear();
      this.$router.push('/login');
    }
  },
  name: 'MenuLateral',
  data () {
    return {
      usuario: null
    }
  },
  mounted(){
    M.AutoInit();
  },
  created(){
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux)
    }
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
</style>
