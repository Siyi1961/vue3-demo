<template>
  <!-- <div class="col-md-8 order-md-1"> -->
        <!-- <h4 class="mb-3">更新的数据内容</h4> -->
    <div class="card" v-if="!resource?._id">
        <div class="card-body">
            No Resource is selected :(
        </div>
    </div>
    
    <div v-else class="card">
        <!-- <div class="card-header">数据名称</div> -->
        <div class="card-header">{{ resource.title }}</div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <!-- <p>描述...</p> -->
                <p>{{ resource.description }}</p>
            <!-- <footer class="text-muted mb-2">类型</footer> -->
                <footer class="text-muted mb-2">{{ resource.type }}</footer> 
            </blockquote>
            <a href="#" class="btn btn-primary">编辑</a>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    props: {
        resource: {
            // type: Object,
            validator: prop => typeof prop === "object" || prop === null,
            required: true,
        }
    }
}
</script>

<style>

</style>