<template>
  <v-app style="background-color:black; height:100vh">
    <admin-navigator v-if="authenticated"/>
    <client-navigator v-else/>
    <router-view></router-view>
  </v-app>  
</template>

<script>
import EventBus from './eventbus'
import AdminNavigator from './components/admin/AdminNavigator.vue'
import ClientNavigator from './components/client/ClientNavigator.vue'

export default {
  components: { AdminNavigator, ClientNavigator },
  data() {
    return {
      authenticated: false
    }
  },
  methods: {
    checkAuth() {
      axios.get('api/user').then(response => {
        if(response.status >= 200 && response.status < 300){
          this.authenticated = true
        }
      }).catch(err => this.authenticated = false)
    },
    getCatecories() {

    }
  },
  mounted() {
    var self = this
    this.checkAuth()
    EventBus.$on('authCheck', function (payload) {
      self.checkAuth()
    })
  }
}
</script>

<style>

</style>