<template>
    <div class="container">
      <!-- header starts -->
      <Header />
      <!-- header starts -->
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">数据</span>
            <span class="badge badge-secondary badge-pill">{{ getResourcesLength }}</span>
          </h4>
          <!-- {/* 搜索框 start */} -->
          <ResourceSearch />
          <!-- {/* 搜索框 Ends */} -->
          <!-- {/* 数据列表 Starts */} -->
          <ResourceList @handleItemClick="selectResource" :resources="resources" :activeId="activeResource?._id "  />
          <!-- {/* 数据列表 Ends */} -->
          <!-- 添加按钮 -->
          <button @click="addResource" class="btn btn-sm btn-primary">添加数据</button>
        </div>
        <!-- {/* 更新数据 Starts */} -->
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">数据
              {{ activeResource?._id }}
              <button @click="isDetailView = !isDetailView" :class="`btn btn-sm ${toggleBtnClass}`">{{ !isDetailView ? "更新" : "详情" }}</button>
              
            </h4>
            <ResourceUpdate @onUpdateResource="handleUpdateResource($event)" :resource="activeResource" v-if="isDetailView" />
            <!-- {/* 数据详情 Starts */} -->
            <ResourceDetail :resource="activeResource" v-else/>
            <!-- {/* 数据详情 Ends */} -->
        </div> 
        <!--  {/* 更新数据 Ends */} -->
      </div>
    </div>
</template>

<script>
import { toRefs, reactive, computed, ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import ResourceSearch from "@/components/ResourceSearch.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceUpdate from '@/components/ResourceUpdate.vue';
import ResourceDetail from '@/components/ResourceDetail.vue';
// import { fetchResources } from "@/actions/";
export default {
    components:{
      Header,
      ResourceSearch,
      ResourceList,
      ResourceUpdate,
      ResourceDetail,
    },
    setup() {
      const data = reactive({
        resources: [
          {
            _id: 1,
            title: "米修在线1",
            description: "何以解忧？唯有杜康 1",
            type: "video",
            link: ""
          },
           {
            _id: 2,
            title: "米修在线2",
            description: "何以解忧？唯有杜康 2",
            type: "video",
            link: ""
          },
           {
            _id: 3,
            title: "米修在线3",
            description: "何以解忧？唯有杜康 3",
            type: "book",
            link: ""
          },
           {
            _id: 4,
            title: "米修在线4",
            description: "何以解忧？唯有杜康 4",
            type: "video",
            link: ""
          },
           {
            _id: 5,
            title: "米修在线5",
            description: "何以解忧？唯有杜康 5",
            type: "book",
            link: ""
          },
           {
            _id: 6,
            title: "米修在线6",
            description: "何以解忧？唯有杜康 6",
            type: "blog",
            link: ""
          }
        ]
      });
      //定义获取的resource
      const selectedResource = ref(null);

      const isDetailView = ref(false);
      // const getResourcesLength = () => {
      //   console.log("===============method=============")
      //   return data.resources.length
      // }

      //生命周期钩子函数
      onMounted(async() => {
        // const resources = await fetchResources();
        // console.log(resources);
        // fetchResources().then((res) => {
        //   console.log(res.data);
        // })
      })

      //计算属性
      const getResourcesLength = computed(() => {
        // console.log("===============compmethod===========")
        return data.resources.length
      });

      //设置toggle样式
      const toggleBtnClass = computed(() => {
        return isDetailView.value ? "btn-primary" : "btn-warning";
      });

      const activeResource = computed(() => {
        return (
          selectedResource.value ||
          (getResourcesLength.value > 0 && data.resources[0]) ||
          null
        );
      });

      const addResource = () => {
        const _id = "_" + Math.random().toString(36).slice(2);
        const type = ["book","blog","video"][Math.floor(Math.random() * 3)];
        const newResource = {
          _id,
          title: `${_id} title`,
          description: `${_id} description`,
          link: "",
          type
        };
        data.resources.unshift(newResource);
      };

      const selectResource = (resource) => {
        // console.log(resource)
        selectedResource.value = resource;
        // console.log(selectedResource.value);
      };

      const handleUpdateResource = (newResource) => {
        const index = data.resources.findIndex((resource) => resource._id === newResource._id); 
        data.resources[index] = newResource;

        selectResource(newResource);
      }

      return {
        ...toRefs(data),
        getResourcesLength,
        isDetailView,
        addResource,
        toggleBtnClass,
        selectResource,
        selectedResource,
        activeResource,
        handleUpdateResource,
      }
    }
}
</script>

<style>

</style>