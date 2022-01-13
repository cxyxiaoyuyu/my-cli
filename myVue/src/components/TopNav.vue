<template>
  <div class="topNav">
    <div class="logo">
      <svg class="icon menu" @click="toggleAside" v-if="$route.path.includes('/doc')">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <span>XinYi UI</span>
    </div>

    <div class="navlist">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/doc">文档</router-link></li>
        <li><a href="">GitHub</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
import {useRoute} from 'vue-router'
export default defineComponent({
  name: "",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible") as Ref<boolean>;
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
});
</script>

<style lang="scss" scoped>
.topNav {
  height: 60px;
  border-bottom: 1px solid #eaecef;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #fff;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    > .menu {
      display: none;
    }
    @media screen and (max-width: 500px) {
      > .menu {
        width: 20px;
        height: 20px;
        display: block;
      }
    }
    > span {
      padding-left: 8px; 
    }
  }

  .navlist {
    ul {
      display: flex;
      align-items: center;
      li {
        padding: 10px;
        .active {
          color: #3eaf7c;
        }
      }
    }
  }
}
</style>
