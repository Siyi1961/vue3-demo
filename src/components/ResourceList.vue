<template>
    <ul class="list-group resource-list mb-3">
        <li v-for="resource in resources" :key="resource._id" class="list-group-item d-flex justify-content-between lh-condensed resource-list-item" @click="onItemClick(resource)">
            <div>
                <h6 class="my-0">{{ resource.title }}</h6>
                <small class="text-muted">{{ resource.description }}</small>
            </div>
            <span class="text-muted">{{ resource.type }}</span>
        </li>
        <!--
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 class="my-0">imissu 1</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        <li
            class="list-group-item d-flex justify-content-between lh-condensed"
        >
            <div>
            <h6 class="my-0">imissu 2</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        <li
            class="list-group-item d-flex justify-content-between lh-condensed"
        >
            <div>
            <h6 class="my-0">imissu 3</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <div>
            <h6 class="my-0">imissu 4</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <div>
            <h6 class="my-0">imissu 5</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
            <h6 class="my-0">imissu 6</h6>
            <small class="text-muted">mixiu1573</small>
            </div>
            <span class="text-muted">类型</span>
        </li>
        -->
    </ul>
</template>

<script>
export default {
    props: {
        resources: {
            type: Array,
            default: () => [],
        },
    },
    setup(props,context) {

        //methods
        const onItemClick = (resource) => {
            //注册事件
            context.emit("handleItemClick", resource);
        }
        return { onItemClick }
    }
}
</script>

<style scope lang="scss">

.resource-list {
    max-height:350px;
    overflow-y:auto;

    &-item {
        cursor: pointer;
    }

    &:hover {
        background-color: #f3f3f3;
    }

}

// .resource-list {
//     max-height:350px;
//     overflow-y:auto;

// }

// .resource-list-item {
//     cursor: pointer;
// }

// .resource-list:hover {
//     background-color: #f3f3f3;
// }
</style>