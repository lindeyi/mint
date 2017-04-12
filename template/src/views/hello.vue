<template>
  <div  v-title data-title="hello">
    <h1>hello</h1>
    <p>\{{msg}}</p>
    {{#demo}}
    <router-link to="/demo">去往demo页 </router-link>
    {{/demo}}
  </div>
</template>
<script>
export default {
  name: 'hello',
  components: {
    //
  },
  created () {
    // 创建页面触发
  },
  activated () {
    // 激活页面除法
  },
  data () { // 数据
    return {
      msg: '欢迎使用！vue'
    };
  },
  computed: {
     // 计算数据
   },
  watch: {
     // 数据变化过程
  },
  methods: {
    //
  }
};
</script>
<style>
</style>
