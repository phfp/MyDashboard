<template>
  <div class="pagina">
    <div class="row">
      <div class="col s1 m2 l3">
        <menu-lateral></menu-lateral>
      </div>
      <div class="col s12 m10 l9">
        <slot>
        </slot>
      </div>
    </div>
  </div>  
</template>

<script>

import MenuLateral from '@/components/MenuLateral'

export default {
  name: 'PaginaLayout',
  data () {
    return {
      
    }
  },
  methods:{
  },
  components:{
      MenuLateral
  }
}
</script>
<style>
  *{
	  margin:0;
	  padding:0;
  }
  .pagina{
    width: 100vw;
    height: 100vh;
    position: relative;
    background: rgb(255, 254, 250);
  }
</style>
