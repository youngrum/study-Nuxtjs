<template>
  <div class="parent">
    <Childe1 v-bind:user="user" /> <!--左辺user=子コンポーネントのprops user 右辺user=親コンポーネントから渡すuser情報 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Childe1 from '~/components/Childe_1.vue';

export default Vue.extend({
  components: {
    Childe1
  },
  data() {
    return {
      user: { // 子コンポーネントに渡す値を記述
        name: 'Taro',
        age: 20,
        comment: 'Hello'
      }
    }
  }
})
</script>

