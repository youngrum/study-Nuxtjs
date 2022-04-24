<template>
  <div class="parent">
    <Childe2 @childe-data="childeData($event, user)" /> <!-- 子から渡されたイベントと値をカスタムイベントで付与する -->
    {{ user.name }}<br>
    {{ user.age }}<br>
    {{ user.comment }}<br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Childe2 from '~/components/Childe_2.vue';

export default Vue.extend({
  components: {
    Childe2
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {// $emitで渡された値userを取得した時の処置を宣言
    childeData(user: {}) {
      this.user = user
    }
  }
})
</script>