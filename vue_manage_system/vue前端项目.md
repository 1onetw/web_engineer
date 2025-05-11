# vue前端项目开发
## 目录结构

- node_modules：整个项目的依赖包
- public：项目的静态文件
- src：项目的源代码
    - assets：静态资源
    - components：可重用的组件
    - router：路由配置
    - views：视图组件(页面)
    - App.vue：入口页面(根组件)
    - main.js：入口js文件
- package.json：模块基本信息，项目开发所需要模块，版本信息
- vue.config.js：保存vue配置的文件，如：代理、端口的配置等

### 端口配置

在vue.config.js文件中 增加 

devServer: {

  port: 7000

 }

配置即可

## vue前端项目开发流程

1. public下的index.html文件默认引入main.js文件

2.main.js: 
```javascript
    import Vue from 'vue'
    // 将App组件导入并别名为App
    import App from './App.vue'
    import router from './router'
    
    Vue.config.productionTip = false
    
    // 创建Vue实例化对象
    new Vue({
      // 路由配置 router:router 简写为router
      router,
      // 将App组件渲染成虚拟的DOM元素
      render: h => h(App)
      // 将vue对象挂载到id为app的元素上
    }).$mount('#app')
    
    ```

3. Vue的组件文件以.vue结尾，每个组件由三个部分组成：

    - 模板部分
        <template>
            <div>
            <h1>{{ message }}</h1>
          </div>
        </template>

    - js代码 
        <script>
            export default {
          data () {
            return {
              message: "刘浩存"
            }
          },
          methods: {}
        }
        </script>

    - css样式

        <style>

        </style>

## Element快速入门

### Element组件使用

### Axios异步加载数据

1. 安装Axios：npm install Axios
2. 导入Axios
3. 发起请求

```javascript
<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          username: "lcz",
          gender: 1,
          pwd: "123456",
          availfunds: 99999,
        },
      ],
      searchForm: {
        username: "请输入用户名",
        availfunds: 0,
      },
    };
  },
  methods: {
    onSubmit: function () {
      alert(JSON.stringify(this.searchForm));
    },
    handleSizeChange: function (val) {
      alert("每页条数变化为:" + val);
    },
    handleCurrentChange: function (val) {
      alert("当前页数变化为:" + val);
    },
  },
  mounted() {
    //发送异步请求，获取数据
    // axios.post("请求地址").then((result) => {
    //   this.tableData = result.data.data;
    // });
  },
};
</script>
```



## Vue路由

Vue Router 是 Vue 的官方路由

组成：

- VueRouter：路由器类，根据路由请求在路由视图中动态渲染选中的组件
- <router-link to="/emp">：请求链接组件，浏览器会解析成<a>
- <router-view>：动态视图组件，用来渲染展示与路由路径对应的组件

路由配置

```javascript
const routes = [
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/stock/UserView.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/stock/OrderView.vue')
  },
  {
    path: '/',
    //重定向
    redirect: '/user'
  }
]
```

<router-view>

```html
<!-- 模板部分:生成HTML代码 -->
<template>
  <div id="app">
    <!-- <h1>{{ message }}</h1> -->
    <!-- <element-view></element-view> -->
    <!-- <user-view></user-view> -->
    <router-view></router-view>
  </div>
</template>
<!-- JS部分:控制模板的数据来源和行为 -->
<script>
// import UserView from "./views/user/UserView.vue";

// import ElementView from "./views/element/ElementView.vue";
export default {
  // components: { UserView },
  // components: { ElementView },
  data() {
    return {
      //定义Vue的数据模型
      message: "Hello,Vue",
    };
  },
  methods: {
    //定义Vue的方法
  },
};

// 解决ERROR ResizeObserver loop completed with undelivered notifications.
//问题的

// 重写ResizeObserver的构造函数，并在其中定义并调用防抖函数
window.ResizeObserver = class ResizeObserver extends window.ResizeObserver {
  constructor(callback) {
    let timer = null;
    const debouncedCallback = function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, 16);
    };
    super(debouncedCallback);
  }
};
</script>
```

<router-link to="/emp">

```html
<el-menu-item index="1-1">
	<router-link to="/user">用户管理</router-link>
</el-menu-item>
<el-menu-item index="1-2">
	<router-link to="/order">订单管理</router-link>
</el-menu-item>
```

## 打包部署

1. 打包：build命令 -> 打包后资源在dist目录
2. 安装Nginx（Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件(IMAP/POP3)代理服务器。特点是占用内存少，并发能力强，性能高）
    - 目录结构
        - conf：配置文件目录
        - html：静态文件目录
        - logs：日志文件目录
        - temp：临时文件目录
3. 将打包资源放入html文件中
4. 运行Nginx服务，默认开设80端口（被系统进程所占用），需要在nginx.conf文件中更改端口号
5. 访问本机对应端口即可