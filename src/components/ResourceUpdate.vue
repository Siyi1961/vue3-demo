<template>
   <!-- <form>
        <div class="mb-3">
        <label htmlFor="firstName">用户名</label>
        <input type="text" class="form-control" id="firstName" placeholder="用户名...." />
        </div>
        <div class="mb-3">
        <label htmlFor="email">邮箱<span class="text-muted">(可选)</span></label>
        <input type="email" class="form-control" id="email" placeholder="邮箱..." />
        </div>
        <div class="mb-3">
        <label for="description">描述</label>
        <textarea class="form-control" id="description" placeholder="描述"></textarea>
        </div>
        <div class="mb-3">
        <label htmlFor="username">用户信息</label>
        <div class="input-group">
            <input type="text" class="form-control" id="username" placeholder="用户信息...." />
        </div>
        </div>
        <hr class="mb-4" />
        <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
    </form> -->
    <form>
        <div v-if="alert?.success" class="alert alert-success">{{alert.success}}</div>
        <div v-if="alert?.error" class="alert alert-danger">{{alert.error}}</div>
        <div class="mb-3">
            <label htmlFor="title">标题</label>
            <input v-model="uResource.title" type="text" class="form-control" 
            id="title" placeholder="title...." />
        </div>
        <div class="mb-3">
            <label for="description">描述</label>
            <textarea v-model="uResource.description" type="text" class="form-control" id="description" placeholder="描述"></textarea>
        </div>
        <div class="mb-3">
            <label htmlFor="type">类型<span class="text-muted">(可选)</span></label>
           <!-- <input v-model="uResource.type" type="text" class="form-control" 
            id="type" placeholder="type..." /> -->
            <select class="form-control" id="type" v-model="uResource.type">
                <option v-for="(resourceType, index) in types" :key="index" :value="resourceType">{{ resourceType }}</option>
               <!-- <option value="blog">blog</option>
                <option value="video">video</option> -->
            </select>
        </div>
        
        <div class="mb-3">
            <label htmlFor="link">链接</label>
            <div class="input-group">
                <input v-model="uResource.link" type="text" class="form-control" 
                id="link" placeholder="链接...." />
            </div>
        </div>
        <hr class="mb-4" />
        <button @click="handleUpate" class="btn btn-primary btn-lg btn-block" type="button">提交</button>
    </form>
</template>

<script>
import { ref, watch, reactive, toRefs, onBeforeUnmount } from "vue";
import { updateResource } from "@/actions";
export default {
    props: {
        resource: {
            type: Object,

        }
    },
    setup(props, context) {
        // console.log(context);
        const uResource = ref(props.resource);
        const types = ["book","blog","video"];

        const data = reactive({
            alert: { success:null, error:null },
            timeoutId: null,
        });

        watch(
            () => props.resource,
            (resource,prevResource) => {
                if (resource && resource._id !== prevResource._id) {
                    clearAlertTimeout();
                    data.alert = initAlert();
                } 
                uResource.value= resource;
                
            }
        ); 

        const initAlert = () => {
            return data.alert = {success:null, error:null};
        };

        onBeforeUnmount(() => {
           clearAlertTimeout();
        });

        const clearAlertTimeout = () => {
            data.timeoutId && clearTimeout(data.timeoutId);
        };

        const setAlert = (type, message) => {
            data.alert = initAlert();
            data.alert[type] = message;

            data.timeoutId = setTimeout(() => {
                data.alert = initAlert();
            }, 3000);
        };

        const handleUpate = async() => {

            try { 
                
                // alert(JSON.stringify(uResource.value));
                const updatedResource = await updateResource(uResource.value._id, uResource.value);
                // console.log(updatedResource);
                context.emit("onUpdateResource", updatedResource);
                // data.alert.sucess = "Resource was updated";
                setAlert("success", "Resource was updated");
            }
            catch (errorMsg) { 
                console.log("====================="+errorMsg);
                // data.alert.error = e.message;
                setAlert("error", errorMsg);
            }
            
        };


        return { ...toRefs(data),uResource, types, handleUpate };
    }
}
</script>

<style>

</style>