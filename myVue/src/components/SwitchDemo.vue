<template>
  <div class="demo">
    <h2>示例1 默认switch</h2>
    <div class="demo-component">
      <component :is="SwitchDemo1"></component>
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre>{{ SwitchDemo1.__sourceCode }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
import Button from '../lib/Button.vue'
export default defineComponent({
  name: "",
  setup() {
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const codeVisible = ref(false);
    return { showCode,hideCode,codeVisible,SwitchDemo1 };
  },
  components: { Button }
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
