import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});


const app = createApp(App) ;
app.use(VueMarkdownEditor) ;
// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';

// // highlightjs
// import hljs from 'highlight.js';

// VMdPreview.use(githubTheme, {
//   Hljs: hljs,
// });

// const app = createApp(App);

// app.use(VMdPreview);

app.use(store).use(router).use(router).mount('#app') ; 
