// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 1
  }
);

Vue.config.productionTip = false;
// 标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title;
  }
});
// 加载
Vue.prototype.$loading = Mint.Indicator;
Vue.prototype.$message = Mint.MessageBox;
// 移动端点击延迟问题处理
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
