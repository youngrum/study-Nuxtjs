<template>
  <div class="child"></div> <!-- 親コンポーネントに渡すテンプレ -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // 親コンポーネントに渡す値
  data() {
    return {
      user: {
        name: 'Hanako',
        age: 100,
        comment: 'good day'
      }
    }
  },
  // 子→親に値を渡す記述 親コンポーネントに対してイベントとdataの値を引数として渡す
  mounted() {
    this.$emit('childe-data', this.user)　//chide-data=カスタムイベント、 this.user=渡す値
  }
})
</script>