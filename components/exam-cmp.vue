<template>

<h1 v-if="component">This is component!</h1>
<h1 v-else>Oh no 😢</h1>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'example-component',
    data() {
        return {
            component: true,
        }
    }
})
</script>