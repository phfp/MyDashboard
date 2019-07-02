<template>
  <div id="codbarras">

      <div class="row">       
        <div class="col s3">
          <menu-lateral></menu-lateral>
        </div>

        <div class="col s9">

          <div class="row">
            <br><br><br><br><br>
          </div>

          <div class="container">

            <div class="card grey lighten-5">
              <div class="card-content">
                <span class="card-title">Código de Balança - EAN13</span>
                <p class="grey-text">Informe a barra e o preço do produto</p>
              </div>
              
              <div class="card-action">
                <div class="row">
                  <div class="input-field col s6">
                    <the-mask v-model="barra" id="barra" :mask="['####']" />
                    <label class="active" for="barra"> Barra </label>
                  </div>

                  <div class="input-field col s6">
                    <money suffix=" R$" v-model="preco_entrada" maxlength="9"></money>
                  </div>                  
                </div>

                <div class="row">
                  <div class="col s12">
                    <button v-if="barra" v-on:click="gerarCodBarras" class="btn waves-effect waves-light" type="submit" name="action">Gerar Código</button>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <div v-if="barra && cod_barra && barra==barra_aux && preco==preco_entrada" class="input-field inline">
                      <input v-model="cod_barra" ref="copiarbarra">                  
                      <span class="helper-text"><a v-on:click="copiar" class="btn waves-effect green"><i class="material-icons">content_copy</i> Copiar Código de Barra </a></span>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>           
        </div>          
      </div>
    </div>
</template>

<script>

import MenuLateral from '@/components/MenuLateral'
import {Money} from 'v-money'

export default {
  methods: {
  },
  name: 'Codbarras',
  data () {
    return {
      ean12:'',
      s1:0,
      s2:0,
      digito:0,
      cod_barra:'',
      barra:'',
      preco:'',
      preco_entrada:'',
    }
  },
  methods:{
    gerarCodBarras: function(){

      this.preco = Math.round(this.preco_entrada*100);

      if(this.preco<10){
        this.preco = "0000" + this.preco;
      }
      else if(this.preco<100){
         this.preco = "000" + this.preco;
      }
      else if(this.preco<1000){
         this.preco = "00" + this.preco;
      }
  
      this.barra_aux = this.barra; 
      this.barra_aux = parseInt(this.barra_aux,10);

      if(this.barra_aux<10){
        this.barra_aux = "000" + this.barra_aux + "00" ;
      }
      else if(this.barra_aux<100){
        this.barra_aux = "00" + this.barra_aux + "00" ;
      }
      else if(this.barra_aux<1000){
        this.barra_aux = "0" + this.barra_aux + "00";
      }
      else if(this.barra_aux<10000){        
        this.barra_aux = this.barra_aux + "00";
      }
      this.ean12 = '2' + this.barra_aux + this.preco;

      this.preco = parseInt(this.preco,10)/100;
      this.barra_aux = parseInt(this.barra_aux,10)/100;

      for(var i = 0; i < 12; i++){
          if(i % 2 === 0){
              this.s1 += this.ean12[i]*1;
          }
          else{
              this.s1 += this.ean12[i]*3;
          }                            
      }

      this.s2 = (Math.trunc(this.s1/10)+1)*10;
      this.digito = this.s2 - this.s1;

      if(this.digito % 10 === 0){
          this.digito = 0;
      }
      this.cod_barra = this.ean12 + this.digito;
      this.s1 = this.s2 = 0;
    },
    copiar: function() {
      var copyTextarea = this.$refs.copiarbarra
      copyTextarea.select();
      try {
          var successful = document.execCommand('copy');
          M.toast({html: 'Código copiado com sucessso!', classes: 'green rounded'});
      } catch (err) {
          alert('Poxa, Não foi dessa vez... Tente usar Crtl+C :)');
      }
    }
  },
  components:{
    MenuLateral
  }
}
</script>
<style>
</style>
