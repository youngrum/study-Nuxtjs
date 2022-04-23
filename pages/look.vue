<!-- テンプレート -->
<template>
<main>
<ExamCmp />
<ul v-for="numbers in sets" :key="numbers">
  <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
</ul>

<div id="range" class="demo">
  <span v-for="n in 10" :key="n">{{ n }} </span>
</div>

<ul v-for="item in items" :key="item.msg">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
</ul>

</main>
</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue';
import ExamCmp from '/components/exam-cmp.vue';


export default 
Vue.extend({
	name: 'IndexPage',
	data() {
		return {
			sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10],[ 1215, 5552, 3333, 4445, 6668 ]],
		}
	},
	methods: {
		even(numbers: any) {
			return numbers.filter(number => number % 2 === 0)
		}
	},
	components: { ExamCmp }
})

</script>

<!-- スタイル -->
<style>
</style>