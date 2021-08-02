<template>
    <h1>{{counter}}</h1>
</template>

<script>
export default {
    // props:['counter']
    props: {
        counter: {
            type: Number ,// 定义接收字符的类型
            required: true,
            default: 500,
        },
    },
    // setup(props, ctx) {
    //     console.log(ctx);
    //     console.log(props.counter)
    // }
}
</script>

<style>

</style>
