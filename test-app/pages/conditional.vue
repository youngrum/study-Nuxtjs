<!-- テンプレート -->
<template>
	<main>
		<!-- <div>
			{{objct.message}}
		</div> -->
		<NuxtLink to="/">{{link}}</NuxtLink>
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>

		<ul id="array-with-index">
			<li v-for="(value, name, index) in myObject" :key="value.index">
				{{ index }}. {{ name }}: {{ value }}
			</li>
		</ul>


		<div id="range" class="demo">
		<span v-for="n in 10" :key="n">{{ n }} </span>
		</div>

		<ul v-for="item in items" :key="item.message">
		<template>
			<li>{{ item.message }}</li>
			<li class="divider" role="presentation"></li>
		</template>
		</ul>

	<ul v-for="todo in todos" :key="todo.name">
		<li v-if="!todo.isComplete">
			{{ todo.name }}
		</li>
	</ul>

	</main>
	
</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue'

export default 
Vue.extend({
	name: 'TestPage',
	data() {
		return {
			message: "test",
			awesome: true,
			link: 'トップページ',
			parentMessage: 'Parent',
			items: [{ message: 'Foo' }, { message: 'Bar' }],
			myObject: {
				title: 'How to do lists in Vue',
				author: 'Jane Doe',
				publishedAt: '2020-03-22'
			},
			todos: [
				{
					name: "todo1",
					isComplete: true
				},
				{
					name: "todo2",
					isComplete: true
				}
			]

    	}
	}
})


</script>

<!-- スタイル -->
<style>
</style>