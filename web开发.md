# web前端开发

## 开发模式

- 混合开发

![image-20240424120632101](https://cdn.jsdelivr.net/gh/1onetw/BlogImage@main/pic/202404241206974.png)

- 前后端分离开发

![image-20240424120521667](https://cdn.jsdelivr.net/gh/1onetw/BlogImage@main/pic/202404241205091.png)

## 前端三件套

前端三件套 ——  HTML CSS JS

**HTML**：
    1. span标签为行内标签（不独占一行），p标签为块级标签（独占一行）

**CSS**:
    1. 选择器：id选择器 > 类选择器 > 标签选择器

**JS**：
        

        1. 输出语句、变量声明（var全局、let局部、const常量）、数据类型（普通类型：number、boolean、null、undefined；引用类型：array、string、object）

        2.函数：普通定义（多次使用，提高代码复用性）、匿名函数、箭头函数（一次使用） ——> 面向过程

        3.对象：自定义对象、符合JSON规范的对象（json对象）、BOM 对象（Window、Location）、
                DOM 对象（
                    element对象获取（document.querySelector()、document.querySelectorAll()）、
                    操作(.innerHTML、.属性名、.style.样式属性名、.value)、
                    事件绑定（定义函数绑定至标签的特定属性上：onclick、onblur、onfucs、onload、onsubmit）
                ） ——> 面向对象
        4.js框架：
            1>: Vue.js
                1. 免除原生JS的DOM操作、免除原生JS操作
                    - v-model（数据绑定） | v-bind（属性绑定 : ） | v-on（事件绑定 @ ）
                    - v-for（列表渲染） | v-if（条件渲染） | v-else | v-else-if
                2. 基于MVVM思想实现数据双向绑定 ——> v-model
                3. 插值表达式：可以进行算术运算、三元运算
                    - {{}} ：标签外使用，标签内不需要
            2>: Ajax.js  ——简化封装——> Axios.js
                在不重新加载页面的情况下，向服务器发送请求获取数据，并更新部分网页信息的技术
                - get：axios.get("url").then(result=>{...})
                - post:axios.post("url",{...}).then(result=>{...})```

## 前端工程化框架：Vue
具有前端工程化功能的框架为前端框架，而vue.js只是Vue框架里对js进行模块化的核心技术

前端工程化:
    a.模块化(js、css)
    b.组件化(UI结构、样式、行为)
    c.规范化(目录结构、编码、接口)
    d.自动化(构建、部署、测试)

vue-cli是vue官方提供的一个脚手架，用于快速生成一个Vue的项目模板
Vue-cli提供如下功能:
    统一的目录结构
    本地调试
    热部署
    单元测试
    集成打包上线    

依赖环境:Node.js

环境准备:

    a.安装Node.js环境(vue-cli依赖此环境),使用node -v查看版本
    b.切换npm的淘宝镜像, npm config set registry https://registry.npm.taobao.org/ 
    c.安装vue-cli, npm install -g @vue/cli   -g: 安装到Node.js的全局目录，而不是局部目录(此时所在目录)
    d.查看vue-cli版本, vue -V

## Vue 进行前端工程化开发
### Vue基本开发
- 项目创建
    ```text
        1.命令行创建项目
        2.图形化界面创建项目(vue ui)
            a.在项目根目录打开cmd
            b.输入vue ui
            c.在浏览器中创建项目并完成项目基本配置
            d.将项目目录拖进VS Code即可
    ```

- 目录结构
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

- 端口配置
    在vue.config.js文件中 增加 

    devServer: {

    port: 7000

    }

    配置即可

1. public下的index.html文件默认引入main.js文件
2. main.js: 
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
    ```
        <template>
            <div>
            <h1>{{ message }}</h1>
        </div>
        </template>
    ```

    - js代码 
    ```
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
    ```

    - css样式
    ```

        <style>

        </style>
    ```

### Vue路由

Vue Router 是 Vue 的官方路由

组成：

- VueRouter：路由器类，根据路由请求在路由视图中动态渲染选中的组件
- ```<router-link to="/emp">：请求链接组件，浏览器会解析成<a>```
- ```<router-view>：动态视图组件，用来渲染展示与路由路径对应的组件```

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

### 打包部署

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

## 前端框架汇总

### 前端工程化框架
具有前端工程化能力（模块化、组件化、统一目录结构、构建及热部署、脚手架等）的框架
1. Vue：适合中小型项目，易上手
2. React：对于大型项目更适合，其生态React Native 可以开发移动端应用，避免学习Flutter UI 框架需要的Dart语言

### 组件化框架
组件化：封装UI结构、样式、行为
1. 小程序、移动端UI组件库：
    - Vant2：轻量、可靠的小程序 UI 组件库
    - Vant4：轻量、可定制的移动端 Vue 
2. Web UI组件库
    - element-ui：基于Vue的Web UI组件库
    - Bootstrap：css模块化的Web UI组件库
    - Vuetfy：Vue的Web UI框架，Vuetify 组件的默认配置是响应式的，允许您的应用程序适应不同的屏幕尺寸。

### 模块化框架
1. jQuery：js模块化
2. Axios：js模块化，用于发送异步请求
3. Apache Echarts：js模块化，用于绘制图表
4. Tailwind：css模块化，添加类名生成响应式样式

### 跨平台框架
1.Uni-app：基于Vue的跨平台开发框架

### 素材源码
1. 17素材网
2. github找开源项目

## 前后端技术选型
1. 技术栈综合建议
    - 短期方案：
        ```
        前端：Uni-app（Vue3 + Vant4/Uni-ui + Tailwind CSS） + 后端：Django（Python）

        优势：以最低成本实现多端覆盖，同时后端可快速迭代功能 
        ```

    - 长期扩展：
        ```
        前端：逐步引入 Flutter（Dart + Material Design）优化移动端体验 。

        后端：若需微服务化，可在 Django 基础上集成 Node.js 处理特定模块（如实时通信） 
        ```


2. Material Design 实现：

        ```
        Uni-app 可通过 CSS 自定义或第三方插件模拟 Material Design 风格。
        
        未来切换到 Flutter 时，可直接使用其内置的 Material 组件（如 MaterialApp、ElevatedButton）实现原生级设计 。
        ```
    
3. 工具链补充：

        ```
        UI 设计：使用 Figma 或 Adobe XD 绘制高保真原型，导出为 Uni-app/Flutter 可用资源

        部署：利用 Docker 容器化 Django 服务，结合云平台（如阿里云）实现多端发布 。
        ```

**综上**：推荐以 Uni-app + Django 为核心技术栈，兼顾效率与多端覆盖，后期再按需扩展 Flutter 提升设计表现力。

## 以React为基础的技术栈
1. React跨平台方案的核心工具
    - 多端开发框架：Taro
        - 类似Uni-app，支持用React开发微信/支付宝小程序、H5、React Native App。
        - 但多端适配成本更高：不同平台需要针对性处理样式和API，社区插件丰富度弱于Uni-app。
    - 移动端开发：React Native
        - 性能接近原生，但无法直接编译为小程序，需与Taro配合使用。
    - Web UI框架：Ant Design/Material-UI
        - 直接兼容React，适合Web端开发，但无法直接用于小程序。

2. React方案的适用场景
    - 适合团队协作：React的强类型（TypeScript）和严格代码规范更适合大型项目。
    - 需要深度原生能力：React Native在复杂动画、硬件调用（如摄像头）上表现更好。
    - 已有React技术积累：若你已熟悉React，可减少学习成本。

**总结**: 

- Vue+Uni-app仍是你的最优解：在独立开发、快速迭代、多端覆盖的诉求下，它能以最低成本实现目标。

- React方案更适合深度定制：若你愿意投入时间学习React生态，并接受更高的初期复杂度，长期会更灵活。

- Flutter是未来加分项：无论选择哪种前端框架，后期用Flutter增强移动端体验是可行路径。

## Web开发完整技术选型
### 技术选型
- **前端**：Uni-app（Vue3） + Vant Weapp（小程序组件） + Tailwind CSS  
- **后端**：Django REST Framework + MySQL+ Celery（异步任务） 
- **后台管理系统**: Django 自带的 Admin
- **部署**:
    - **前端部署**：
        - 海外：Vercel/Cloudflare Pages（静态资源）
        - 国内：阿里云OSS + CDN
        - 利用全球CDN加速，国内需备案后使用阿里云。
    - **Django后端部署**：
        - 海外：Railway/Fly.io（容器化）
        - 国内：阿里云ECS（Docker部署）（ECS服务器费用）
        - Railway免费额度500小时/月，适合中小项目；阿里云ECS稳定性高，但需手动运维。
    - **MySQL数据库部署**：
        - 海外：PlanetScale（Serverless MySQL）
        - 国内：阿里云RDS（按量付费）
        - PlanetScale自动分支管理，阿里云RDS支持按量付费，避免自建数据库运维压力。
    - **Celery消息队列**：
        - Redis云服务：Upstash（海外）/ 阿里云Redis
        - Upstash免费5,000次/日请求，阿里云Redis国内延迟低。


### 国内与海外部署方案对比
- 国内部署
    - 阿里云ECS（2核4G） + 阿里云RDS（基础版） + 阿里云OSS
        - ≈ ￥300（ECS） + ￥200（RDS）
    - Vercel（前端） + Railway（Django） + PlanetScale（DB） + Upstash（Redis）
        - ≈ $0（免费额度内） → 超出后$20~$50

**总结**：此方案将同时支持 多端开发（小程序/网站/移动端软件 [后续转为Flutter] ） 、 高并发后端（Django + Celery） ，并实现低成本全球化部署。


## 学习路线
1. Vue
2. Uni-app
3. Django RestFramework API
4. Flutter
