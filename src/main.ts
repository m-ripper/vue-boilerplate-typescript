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
/*
 element-ui locale
 -> this might have to be changed later on to work with the localization-module.
*/
import locale from 'element-ui/lib/locale/lang/en';

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
