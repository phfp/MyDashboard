<template>  
  <login-layout>
    <div class="row green-text" id="user-form">
      <div class="input-field col s6">
        <i class="material-icons prefix">email</i>
        <input id="icon_email" type="email" class="validate white-text">
        <label for="icon_email">Email</label>
        <span class="helper-text" data-error="Ops, email inválido :(" data-success=""></span>
      </div>
      <div class="input-field col s6">
        <i class="material-icons prefix">lock</i>
        <input id="icon_lock" type="password" class="validate white-text">
        <label for="icon_lock">Senha</label>
      </div>
      <div class="input-field col s12">
        <button class="btn waves-effect waves-light teal darken-3" type="submit" name="action">Entrar
          <i class="material-icons right">send</i>
        </button>              
      </div>
    </div>
  </login-layout>                             
</template>

<script>

import LoginLayout from '@/components/layouts/LoginLayout'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods:{
  },
  components:{
    LoginLayout
  }
}
</script>
<style>
</style>
