<template>
  <div id="MenuLteral">       
    <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><div class="user-view">
        <div class="background">
        <img src="/static/imagens/img-capa.jpg">
        </div>
        <a href="#"><img class="circle" src="static/imagens/img-perfil.jpg"></a>
        <a href="#"><span class="white-text name">Paulo Henrique</span></a>
        <a href="#"><span class="white-text email">phfp@mail.com</span></a>
    </div></li>

    <li><a class="subheader">Ferramentas</a></li>
    <li><router-link to="/codbarras">Gerar de Barras</router-link></li>
    <li><router-link to="/visual">Visual Studio Code</router-link></li>
    <li><router-link to="/postman">Postman</router-link></li>
    <li><router-link to="/gitkraken">Gitkraken</router-link></li>
    <li><router-link to="/composer">Composer</router-link></li>
    <li><router-link to="/artisan">Artisan</router-link></li>
    
    <li><div class="divider"></div></li>
    
    <li><a class="subheader">Tutoriais</a></li>
    <li><router-link to="/laravel">Laravel Franework</router-link></li>
    <li><router-link to="/cpp">C++</router-link></li>
    <li><router-link to="/javascript">Javascript</router-link></li>  
    </ul>    
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>
export default {
  methods: {
  },
  name: 'MenuLateral',
  data () {
    return {
    }
  },
  mounted(){
    M.AutoInit();
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
