<template>
  <h2>Button 示例</h2>
  <h4>示例1 主题按钮</h4>
  
  <div>
    <Button theme="button">button按钮</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
    <Button>默认button</Button>
  </div>

  <h4>示例2 按钮大小</h4>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
  <div class="highlight">
    <pre><code class="language-html" v-html="themeHtml"></code></pre>
  </div>

  <h4>示例3 按钮等级</h4>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>

  <h4>示例4 禁用按钮</h4>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h4>示例5 加载中状态</h4>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { ref,onMounted } from "vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    const themeHtml = ref('')

    onMounted(() => {
      //@ts-ignore
      // themeHtml.value = hljs.highlight('<span>Hello World!</span>', {language: 'xml'}).value

    });
    console.log(Button,'buttonllll')
    return { onClick,themeHtml };
  },
};
</script>
