<template>
 <div>
  Doc 默认页面
  <MarkDown></MarkDown>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MarkDown from '../components/MarkDown.vue'
export default defineComponent({
  name: '',
  setup(){
    
    return{ }
  },
  components: {MarkDown}
})
</script>

<style lang="scss" scoped>

</style>