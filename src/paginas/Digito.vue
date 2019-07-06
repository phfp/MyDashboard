<template>
  <pagina-layout>
    <div class="container">
      <div class="card grey lighten-5" id="card-id">
        <div class="card-content">
          <span class="card-title">Cálculo do Dígito Verificador - EAN13</span>
            <p class="grey-text">Informe os 12 primeiros dígitos do código a ser verificado</p>
        </div>
              
        <div class="card-action">
          <div class="row">
            <div class="input-field col s6">
              <the-mask v-model="cod12" id="cod12" :mask="['############']" />
              <label class="active" for="cod12"> Código</label>
            </div>               
          </div>

          <div class="row">
            <div class="col s12">
              <button v-if="cod12.length=='12'" v-on:click="calcularDigito" class="btn waves-effect waves-light" type="submit" name="action">Calcular</button>
            </div>
          </div>

          <div class="row">
            <div class="col s12">
              <div class="card-content grey lighten-4 col s6" v-if="digito && cod12.length=='12' && cod12 == cod12_aux">
                <div class="container">
                  <h6 class="grey-text text-darken-3">Dígito: {{digito}}</h6>
                </div>
                <div class="container">
                  <h5 class="green-text text-darken-3">{{cod13}}</h5>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>           
  </pagina-layout>
</template>

<script>

import PaginaLayout from '@/components/layouts/PaginaLayout'
import {Money} from 'v-money'

export default {
  name: 'Digito',
  data () {
    return {
      cod12:'',
      cod12_aux:'',
      cod13:'',
      digito:0,
      s1:0,
      s2:0,
    }
  },
  methods:{
    calcularDigito: function(){

      this.cod12_aux = this.cod12;

      for(var i = 0; i < 12; i++){
          if(i % 2 === 0){
              this.s1 += this.cod12[i]*1;
          }
          else{
              this.s1 += this.cod12[i]*3;
          }                            
      }

      this.s2 = (Math.trunc(this.s1/10)+1)*10;
      this.digito = this.s2 - this.s1;

      if(this.digito % 10 === 0){
          this.digito = 0;
      }
      this.cod13 = this.cod12+this.digito;
      this.s1 = this.s2 = 0;
    }
  },
  components:{
    PaginaLayout
  }
}
</script>
<style>
    #card-id{
    top: 100px;
  }
</style>
