<template> 
<!-- <div class="container"> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
    <div class="container">
      <router-link class="nav-link" :to="{name: 'pk_index'}">Heox</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'" 
            :to="{name: 'pk_index'}">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" 
            :to="{name: 'record_index'}">博客</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" 
            :to="{name: 'ranklist_index'}">赛博皮猫</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'goto' ? 'nav-link active' : 'nav-link'" 
            :to="{name: 'goto'}">友情链接</router-link>
          </li>
          <li class="nav-item">
            <router-link :class="route_name == 'pastebin' ? 'nav-link active' : 'nav-link'" 
            :to="{name: 'pastebin'}">Pastebin</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hnitro
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="{name: 'mybot_index'}">我的Bot</router-link>
              </li>
              <li><a class="dropdown-item" href="#">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!-- </div> -->

</template>


<script> 
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    let route_name = computed(()=> route.name)
    return {
      route_name,
    }
  }
}
</script>

<style scoped>
.nav-link {
  margin-left:20px ; 
}
</style>