<template>
<div>
  Name: {{ fullName }}
  Message: {{ message }}
</div>
</template>


<script lang="ts">
import Vue, { PropOptions } from 'vue'


//型宣言 ~/types/User.d.ts に記述してimportも可能
interface User {
  firstName: string 
  lastName: string
}

export default Vue.extend({
  name: 'YourComponent',

  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User> //
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