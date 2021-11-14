import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import index from './index'
import vuetify from './vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash, faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import coreState from './coreState'

library.add(faPen, faTrash, faCamera, faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify,
    store: coreState
});
