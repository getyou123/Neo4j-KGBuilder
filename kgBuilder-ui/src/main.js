import Vue from "vue"; // 导入核心库
import App from "./App.vue"; // 导入根组件
import router from "./router"; // 导入路由库
import store from "./store";
import ElementUI from "element-ui"; // 导入 Element UI 库并将其应用到 Vue 实例中： Vue.use(ElementUI); 这将为应用程序添加 Element UI 组件和样式。
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios"; // 将 axios 库添加到 Vue 实例的原型中： Vue.prototype.$http = axios; 这允许应用程序中所有组件访问 axios 以进行 HTTP 请求。
import components from './components/index'

Vue.prototype.$http = axios; //正确的使用
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); // 创建并挂载 Vue 实例，使用指定的路由和存储，并将其挂载到具有 ID 为“app”的 HTML 元素上。
