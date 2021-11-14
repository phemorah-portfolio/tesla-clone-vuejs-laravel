<template>
    <span>
      <v-toolbar color="black" dark>
          <v-toolbar-title>
            <router-link to="/home">
                <v-img src="assets/tesla-white.png" height="110px" width="200px"></v-img> 
            </router-link>              
          </v-toolbar-title>  
          <v-spacer></v-spacer>
          <v-btn class="hidden-sm-and-down white font-weight-bold black--text">Specifications</v-btn>
          <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-3" @click="() => $router.push({name:'Cart'})">Cart</v-btn>
          <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-2" @click="() => $router.push('Shop')">Shop</v-btn>
          <router-link to="/login">
            <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-3">Login</v-btn>            
          </router-link>
      </v-toolbar>
  </span>
</template>

<script>
export default {

}
</script>

<style>

</style>