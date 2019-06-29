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
                    <input id="barra" type="text" v-model="barra" class="validate" maxlength="6">
                    <label class="active" for="barra"> Barra </label>
                  </div>

                  <div class="input-field col s6">
                    <input id="preco" type="text" v-model="preco" class="validate" maxlength="5">
                    <label class="active" for="preco"> Preço </label>
                  </div>                  
                </div>

                <div class="row">
                  <div class="col s12">
                    <button v-if="barra.length === 6 && preco.length === 5" v-on:click="gerarCodBarras" class="btn waves-effect waves-light" type="submit" name="action">Gerar Código</button>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <div class="input-field inline"  v-if="cod_barra && (barra.length === 6 && preco.length === 5)">
                      <input v-model="cod_barra" ref="copiarbarra">                      
                      <span class="helper-text"><a v-on:click="copiar" class="btn green"><i class="material-icons">content_copy</i> Copiar Código de Barra </a></span>
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
      cod_barra:null,
      barra:'',
      preco:''
    }
  },
  methods:{
    gerarCodBarras: function(){
      this.ean12 = '2' + this.barra + this.preco;

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
          M.toast({html: 'Código copiado com sucessso!', classes: 'rounded'});
          this.cod_barra = null;
      } catch (err) {
          alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
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
