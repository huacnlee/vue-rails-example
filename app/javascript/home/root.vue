<template>
  <div id="app">
    <div class="navbar">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">首页</router-link>
      <router-link to="/topics">Topics</router-link>
      <a href="/about">关于</a>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 10px;
  font-size: 14px;

  router-link {
    cursor: pointer;
    color: #1B439F;
    text-decoration: none;

    &:hover {
      color: #28289F;
    }
  }
}
</style>