<template>
    <div>
    <button @click="increment(1)">increment</button>
    <button @click="increment(-1)">decrement</button>
    </div>
</template>

<script>
export default {
    emits: ["onIncrement"],
    setup(props, context) {
        const increment = (num) => {
            // counter.value += num;
            //事件注册
            context.emit("onIncrement", num)
        };
        return { increment };
    },
}
</script>

<style>

</style>
