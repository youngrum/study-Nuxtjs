<template>
    <Parent2 /> <!-- 親コンポーネントを読み込む ＋ 親側で宣言して、子からもらった値を表示する -->
</template>


<script lang="ts">
import Vue from 'vue'
import Parent2 from '~/components/Parent_2.vue';

export default Vue.extend({
    components: {
        Parent2
    }
    
})
</script>