// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#i18n}}
import i18n from './i18n';
{{/i18n}}
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#i18n}}
  i18n,
  {{/i18n}}
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: { App }
});
