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
	  {{#demo}}
    }, {
      path: '/demo',
      component: (resolve) => require(['@/App.vue'], resolve),
      children: [
       {
         path: '',
         name: 'index',
         component: (resolve) => require(['@/views/demo/index.vue'], resolve)
       }, {
         path: 'detail',
         component: (resolve) => require(['@/views/demo/detail.vue'], resolve)
       }, {
         path: '*',
         redirect: 'index'
       }
     ]
		{{/demo}}
   }, { // hello
     path: '/hello',
     component: (resolve) => require(['@/views/hello.vue'], resolve)
    }
  ]
});
