<template>
    <Parent1 />
</template>


<script lang="ts">
import Vue from 'vue'
import Parent1 from '~/components/Parent_1.vue';

export default Vue.extend({
    components: {
        Parent1
    }
    
})
</script>