<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas"></canvas>
    </div>
</template> 

<script>
import {GameMap} from '../assets/scripts/GameMap' ;
import {ref , onMounted} from 'vue' ; 

export default {
    setup() {
        let parent = ref(null) ; 
        let canvas = ref(null) ; 

        onMounted(()=>{
            new GameMap(canvas.value.getContext('2d'),parent.value) ; 
        })
        
        return {
            parent , 
            canvas , 
        }
    }
}

</script>

<style scoped>
.gamemap {
    width: 90%; 
    height: 90%;
}
</style>