<template>
<div>
  Name: {{ fullName }}<br>
  Message: {{ message }}
</div>
</template>


<script lang="ts">
import Vue, { PropOptions } from 'vue' //PropOptions:独自の型定義をするためのオブジェクト


//独自定義の型宣言 ~/types/User.d.ts に記述してimportも可能
interface User {
  firstName: string 
  lastName: string
}

export default Vue.extend({
  name: 'UserComponent',

  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User> //宣言した独自定義のpropsの型を指定  
  },

  data () {
    return {
      message: 'This is a message'
    }
  },
  computed: {
    fullName (): string {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
})

</script>