<template>
  <div class="container">
    <h1>{{ code }}</h1>
    <p>{{ message }}</p>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ErrorPage',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    data: function (){
      return {
        error: {}
      }
    },
    created() {
      let statusCode: number = 0;

    },
    methods: {
      exceptionMatch(code: number) {
        let map = {code: 0, message: ""};

        switch (code) {
          case 404:
            map = this.page404(); break;
          case 500:
            map = this.page500(); break;
          default:
            map = {code: 200, message: "システムアウト"};
        }

        return map;
      },
      page404() {
        return {code: 404, message: "not found"}
      },
      page500() {
        return  {code: 500, message: "system out..."}
      }
    }
  })
</script>


<style scoped>

</style>
