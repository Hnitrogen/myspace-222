<template>
    <ContentField>
        <div class="container">
            <h1 style="text-align: center;">赛博肥猫</h1>
            <div class="text-center picture">
                <!-- <img src={{ posts.url }} class="rounded" alt="showup"> -->
                <!-- <img src={{ posts.url }} class="rounded" alt="showup"> -->
                <img v-bind:src="posts.url" class="rounded" alt="showup"> 
                <!-- 绑定标签的属性值要用v-bind  如果要绑定文本插值才是 {{ }} -->
            </div>  
            
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-warning" type="button">上传肥猫</button>
                <button @click="say()"
                class="btn btn-success" type="button"> 
                    随机肥猫
                </button>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '../../components/ContentField.vue' 
import { reactive } from 'vue';
import $ from 'jquery'

export default {
    components: {
            ContentField,
    },
    setup() {
        let posts = reactive({});
        $.ajax({
            url: "http://jiwaicat.top:8000/getpictures/2/",
            type: "GET",
            success(resp) {
                posts.url = resp.picture ; 
                console.log(posts.url) ;
                posts.url = "http://jiwaicat.top:8000/" + posts.url ;
                console.log(posts.url) ;
                console.log(typeof(posts.url)) ;
            }
        });
        return {
            posts ,
        }
    },
    methods: {
        say() {
            console.log("click!");
        }
    },
}
</script>

<style scoped>
@media(max-width: 900px) {
    .rounded {    
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%; 
    }
}

.rounded {
    width: 400px;
    height: 400px;
}
.rounded {
    margin-top: 20px;
}
.btn {
    margin-top: 20px;
}
</style>
