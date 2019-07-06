<template>
    <login-layout>
        <div class="row green-text" id="user-form">
            <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="account" type="text" class="validate white-text">
                <label for="account">Nome</label>
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate white-text">
                <label for="icon_lock">Email</label>
                <span class="helper-text" data-error="Ops, email inválido :(" data-success=""></span>
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">lock</i>
                <input id="lock" type="password" class="validate white-text">
                <label for="lock">Senha</label>
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">lock</i>
                <input id="lock-check" type="password" class="validate white-text">
                <label for="lock-check">Confirmar Senha</label>
            </div>
            <div class="input-field col s12">
            <button class="btn waves-effect waves-light teal darken-3" type="submit" name="action">Cadastrar
                <i class="material-icons right">send</i>
                </button>              
            </div>
        </div>
    </login-layout>                               
</template>

<script>

import LoginLayout from '@/components/layouts/LoginLayout'

export default {
  name: 'CadastroUser',
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
    #user-form{
        position: relative;
        bottom: 65px;
    }
</style>
