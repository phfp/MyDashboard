<template>
  <div class="login-page">
   <div class="login-card">
     <div class="card small transparent z-depth-2">
       <div class="card-content">
        <div class="container">        
          <div class="row" id="form-id">
            <slot>
            </slot>                                                      
          </div>                 
        </div>       
      </div>
     </div>     
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginLayout',
  data () {
    return {
    }
  },
  methods:{
  },
  components:{
  }
}
</script>
<style>
  *{
	  margin:0;
	  padding:0;
  }
  .login-page{
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #004d40;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }
  .login-card{
    width: 700px;
    height: 300px;
  }
  #form-id{
    position: relative;
    top: 65px;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #004d40 inset !important;
    -webkit-text-fill-color: white;
}

</style>
