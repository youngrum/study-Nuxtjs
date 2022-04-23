<!-- テンプレート -->
<template>
<main>
  <ExamCmp />
<ul id="array-rendering">
  <li v-for="item in items" :key="item.id">
    {{ item.message }}
  </li>
</ul>

<ul id="array-with-index">
  <li v-for="(item, index) in items" :key="index.id">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>

<ul id="v-for-object" class="demo">
  <li v-for="value in myObject" :key="value.id">
    {{ value }}
  </li>
</ul>

<li v-for="(value, name) in myObject" :key="value.id">
  {{ name }}: {{ value }}
</li>

<li v-for="(value, name, index) in myObject" :key="index.id">
  {{ index }}. {{ name }}: {{ value }}
</li>

<div v-for="item in items" :key="item.id">
  {{ item }}
</div>

<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>

<li v-for="n in evenNumbers" :key="n">{{ n }}</li>

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
			items: [{ message: 'Foo' }, { message: 'Bar' }],
			parentMessage: 'Parent',
			myObject: {
				title: 'How to do lists in Vue',
				author: 'Jane Doe',
				publishedAt: '2016-04-10'
			},
			numbers: [ 1, 2, 3, 4, 5 ],
		}
	},
	computed: {
  		evenNumbers(): any {
    		return this.numbers.filter(number => number % 2 === 0)
  		}
	},
	components: { ExamCmp }
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
example1.items = example1.items.filter(item => item.message.match(/Foo/))
</script>

<!-- スタイル -->
<style>
</style>