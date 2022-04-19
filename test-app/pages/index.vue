<!-- テンプレート -->
<template>
	<main>
		<!-- <div>
			{{objct.message}}
		</div>
		<NuxtLink to="/test">{{objct.link}}</NuxtLink> -->

		<div>
			<div>{{$store.state.message}}</div>
		</div>
	</main>
</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue'

export default 
Vue.extend({

})

// export default 
// Vue.extend({
// 	name: 'IndexPage',
// 	data() {
// 		return {
// 			objct:{
// 				message: 'Hello TestPaeg!',
// 				link: 'ネクストページ'
// 			}
//     	}
// 	}
// })


</script>

<!-- スタイル -->
<style>
</style>