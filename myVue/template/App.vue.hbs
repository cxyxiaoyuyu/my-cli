<template>
  <div>
    <top-nav></top-nav>
    <router-view></router-view>
    <h2>我是模板文件</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import TopNav from "./components/TopNav.vue";
import router from './router/index'
export default defineComponent({
  name: "",
  setup() {
    const deviceWidth = document.documentElement.clientWidth;
    const asideVisible = ref(deviceWidth > 500 ? true : false); // 屏幕宽度小于500px 隐藏侧边栏
    provide("asideVisible", asideVisible);

    // 每次路由切换关闭aside
    router.afterEach(() => {
      if(deviceWidth < 500) {
        asideVisible.value = false
      }
    });
    return {};
  },
  components: { TopNav },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100vh;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  min-width: 300px;
}
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
  &.active {
     color: #3eaf7c;  // 路由匹配时的字体颜色 
  }
}
.icon {
 width: 1em; 
 height: 1em;
 vertical-align: -0.15em;
 fill: currentColor;
 overflow: hidden;
 }

</style>
