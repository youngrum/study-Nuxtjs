<template>
    <div class="parent">
      <Child :user="user" />
    </div>
</template>
  
<script lang="ts">
  import Vue from 'vue'
  import Child from '~/components/ChildComponentReference.vue'

  export default Vue.extend({
    components: {
      Child
      
    },
    data() {
      return {
        user: { // 子コンポーネントに渡す値を記述
            firstName: 'Taro',
            lastName: 'Okamoto',
        }
      }
    }
  })
</script>

  
  