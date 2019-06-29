<template>
  <div id="larave">
      <div class="row">       
        <div class="col s3">
          <menu-lateral></menu-lateral>
        </div>
        <div class="col s9">
          <div class="container">
            <div class="card grey darken-3">
              <div class="card-content grey-text center">
                <h5>Coming Soon...</h5>
                <p>Conteúdo Laravel!!! </p>
              </div>
            </div>
          </div>          
        </div>
      </div>
  </div>
</template>S

<script>

import MenuLateral from '@/components/MenuLateral'
export default {
  methods: {
  },
  name: 'Laravel',
  data () {
    return {
    }
  },
  components:{
    MenuLateral
  }
}
</script>
<style>
</style>
