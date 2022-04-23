<!-- テンプレート -->
<template>
<main>
<Tutorial />
<ExamCmp />

<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>

<div
  class="static" :class="{ active: isActive, 'text-danger': hasError }"
>
クラス判定
</div>

<div :class="classObject">クラス判定2</div>

<!-- 配列構文 -->
<div :class="[{ active: isActive }, errorClass]">クラス判定3</div>

<!-- インラインスタイルのバインディング -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">インラインスタイルのバインディング</div>

<div :style="styleObject">インラインスタイルのバインディング2</div>

<div :style="[baseStyles, overridingStyles]">インラインスタイルのバインディング3</div>

<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">複数接頭辞付きスタイル</div>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

<h1 v-show="ok">Hello!</h1>

</main>
</template>

<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue';
import Tutorial from '/components/Tutorial.vue';
import ExamCmp from '/components/exam-cmp.vue';

export default 
Vue.extend({
    name: "IndexPage",
    data() {
        return {
            author: {
                name: "John Doe",
                books: [
                    "Vue 2 - Advanced Guide",
                    "Vue 3 - Basic Guide",
                    "Vue 4 - The Mystery"
                ]
            },
            isActive: true,
            error: null,
            activeClass: "active",
            errorClass: "text-danger",
            activeColor: "red",
            fontSize: 30,
            styleObject: {
                color: "blue",
                fontSize: "40px"
            },
            baseStyles: {
                color: "green"
            },
            overridingStyles: {
                fontSize: "25px"
            },
            awesome: false,
            type: "",
            ok: false,
        };
    },
    computed: {
        classObject(): any {
            return {
                active: this.isActive && !this.error,
                "text-danger": this.error && this.error.type === "fatal"
            };
        }
    },
    components: { Tutorial, ExamCmp }
})


</script>

<!-- スタイル -->
<style>
</style>