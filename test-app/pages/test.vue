<!-- テンプレート -->
<template>
<main>
<div id="basic-event">
	<button @click="counter += 1">Add 1</button>
	<p>The button above has been clicked {{ counter }} times.</p>
</div>

		
<div id="event-with-method">
  <!-- `greet` は、あらかじめ定義したメソッドの名前 -->
  <button @click="greet">Greet</button>
</div>

<div id="inline-handler">
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
</div>

<form>
	<button @click="warn('Form cannot be submitted yet.', $event)">
	Submit
	</button>
</form>
</main>

<!-- ボタンをクリックすると、one（）とtwo（）の両方が実行されます -->
<!-- <button @click="one($event), two($event)">
  Submit
</button> -->


</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue'

export default 
Vue.extend({
	name: 'TestPage',
	data() {
    	return {
    		counter: 0,
			name: 'Vue.js'
    	}
	},
	methods: {
		greet(event: any) {
			// メソッド内の `this` は、 Vue インスタンスを参照します
			alert('Hello ' + this.name + '!')
			// `event` は、ネイティブ DOM イベントです
			if (event) {
				alert(event.target.tagName)
			}
		},
		say(message: string) {
      		alert(message)
    	},
		warn(message, event) {
			// ネイティブイベントを参照しています
			if (event) {
			event.preventDefault() //送信キャンセルメソッド
			}
			alert(message)
		},

	}
})


</script>

<!-- スタイル -->
<style>
</style>