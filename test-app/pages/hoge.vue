<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hoge',
  computed: {
    title(): string {
      return this.$accessor.hoge.title
    },
  },
})
</script>