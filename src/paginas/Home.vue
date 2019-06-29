<template>
  <div id="home">
      <div class="row">       
        <div class="col s3">
          <menu-lateral></menu-lateral>
        </div>
        <div class="col s9">
          <div class="container">
            <div class="card grey darken-3">
              <div class="card-content grey-text center">
                <h5>Coming Soon...</h5>
                <p>HOME</p>
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
  name: 'Home',
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
