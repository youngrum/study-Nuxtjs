<!-- scriptでObject宣言してるから .付けてたくさん表示できる -->

<template>
  <div class="child">
    {{ user.name }}
    {{ user.age }}
    {{ user.comment }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props:{ // 子コンポーネントでprops(プロパティ)を定義
    user: { //userプロパティ
      type: Object, //オブジェクト型
      required: true, //本プロパティが親コンポーネントから子コンポーネントに渡されることが必須(ないとコンソール上で警告)となる
      default: {} // 親コンポーネントから子コンポーネントに指定したデータが受け渡されていなくても、エラー回避できる
    } 
  }
})
</script>
