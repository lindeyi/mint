<template>
  <div id="app">
    <!-- <img src="./assets/logo.jpg"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
body {
  background-color: #fbf9fe;
  min-width: 320px;
  max-width: 840px;
  margin: 0px auto;
  font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
}
* {
    box-sizing: border-box;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
}
ol, ul {
    list-style: none outside none;
}
dd, dl, li, ol, ul {
    margin: 0;
    padding: 0;
}
.center {
  text-align: center;
}
</style>
