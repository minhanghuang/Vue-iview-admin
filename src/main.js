// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ViewUI from 'view-design'; // 使用CDN后注释掉
// import 'view-design/dist/styles/iview.css'; // 使用CDN后注释掉
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './../store/index'
import axios from "./api/";
import '../my-theme/index.less'; // 自定义主题

// 按需加载element组件
// import 'element-ui/lib/theme-chalk/index.css'
// import element from './other_ui/element/index'
//
// Vue.use(element);

import ELEMENT from 'element-ui'
Vue.use(ELEMENT);


Vue.prototype.$api = axios;
// Vue.use(ViewUI);
Vue.use(mavonEditor);
Vue.config.productionTip = false;

// iView Notice 全局配置
Vue.prototype.$Notice.config({
    top: 65, // 消息距离顶部距离 px
    duration: 30, // 消息显示时间 s
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
