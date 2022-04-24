<template>
    <Parent />
</template>


<script lang="ts">
import Vue from 'vue'
import Parent from '~/components/ParentComponentReference.vue';

export default Vue.extend({
    components: {
        Parent
    }
    
})
</script>