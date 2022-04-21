<template>
<div>

</div>
</ul>


</template>


<!-- スクリプト -->
<script lang="ts">
import Vue from 'vue'

export default 
Vue.extend({
	name: 'listPage',
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
})