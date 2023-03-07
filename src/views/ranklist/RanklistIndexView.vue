<template>
    <ContentField>
        <div class="container">
            <h1 style="text-align: center;">赛博肥猫</h1>
            <div class="text-center picture">
                <img src="../../assets/images/tou.jpeg" class="rounded" alt="showup">
            </div>  
            
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-warning" type="button">上传肥猫</button>
                <button class="btn btn-success" type="button">随机肥猫</button>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '../../components/ContentField.vue' 
export default {
    components: {
            ContentField,
    }
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
