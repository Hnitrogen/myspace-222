<!-- <template>
    <PasteBinCard>
        <v-md-preview :text="text"></v-md-preview>
    </PasteBinCard>
</template>

<script>
import PasteBinCard from '../../components/PasteBinCard.vue' 
export default {
    components: {
        PasteBinCard,
    },
    data() {
    return {
      text: '### dalida',
    };
  },
}
</script>

<style scoped>
</style> -->



<template>
    <PasteBinCard>
        <v-md-editor v-model="text" height="400px"></v-md-editor>
    </PasteBinCard>
</template>

<script>
import PasteBinCard from '../../components/PasteBinCard.vue' 
export default {
    components: {
        PasteBinCard,
    },
    data() {
    return {
      text: '',
    };
  },
}
</script>

<style scoped>
</style>