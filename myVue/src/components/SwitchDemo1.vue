<demo>常规用法</demo>

<template>
   <Switch v-model:value="value" />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const value = ref(true)
    return {value};
  },
  components: { Switch },
});
</script>

<style lang="scss" scoped></style>
