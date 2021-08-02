<template>
  <div class="my-app">
    <CounterView :counter="counter" />
    <!-- <ms-counter-view /> -->
    <CounterController @onIncrement="increment($event)" />
  </div>
</template>

<script>
/**
 * Options API Vue2 Class
 * Composition API Vue3 Class
 */
import { ref } from "vue";
import CounterView from "@/components/CounterView.vue";
import CounterController from '@/components/CounterController.vue';
export default {

 //组件部分: html 结构部分  script  逻辑部分  style 样式部分
  components: {
    CounterView,
    CounterController,
   // "ms-counter-view": CounterView
  },
 setup(){//小写
   const counter = ref(1000); // ref 字符串、number boolean
   console.log(counter.value);
   const increment = (num) => {
     counter.value += num;
   };
   return { counter, increment }
 },
}
</script>

<style>
.my-app {
  color: blue;
  padding: 100px;
}
h1 {
  font-size: 80px;
}
</style>
