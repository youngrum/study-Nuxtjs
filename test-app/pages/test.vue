<!-- テンプレート -->
<template>
	<main>
		<div>
			{{objct.message}}
		</div>
		<NuxtLink to="/">{{objct.link}}</NuxtLink>
	</main>
</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue'

export default 
Vue.extend({
	name: 'IndexPage',
	data() {
		return {
			objct:{
				message: 'Hello TestPaeg!',
				link: 'トップページ'
			}
    	}
	}
})


</script>

<!-- スタイル -->
<style>
</style>