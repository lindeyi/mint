import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { // 首页
      path: '/',
      name: 'index',
      redirect: '/hello'
   }, { // hello
     path: '/hello',
     component: (resolve) => require(['@/views/hello.vue'], resolve)
    }
  ]
});
