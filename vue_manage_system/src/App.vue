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

<!-- CSS样式部分 -->
<style>
</style>
