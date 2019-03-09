import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Element from 'element-ui';
import Component from 'vue-class-component';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
// element-ui locale
import locale from 'element-ui/lib/locale/lang/en';
// font-awesome-icon
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);


// Install plugins & modules
Vue.use(VueAxios, axios);
Vue.use(Element, {locale});

// Allow vue-router-hooks to be accessed in a component
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

// Layout-init
Vue.component('default-layout', DefaultLayout);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
