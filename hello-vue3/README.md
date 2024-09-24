## 关于不同版本的 Vue：

- vue.js 和 vue.runtime.xxx.js 的区别
  1. vue.js 是完整版 vue 包括核心功能+模板解析器
  2. vue.runtime.xxx.js 是运行版的 vue 只有核心功能
  3. 可以通过查看 `package.json` 的 module 属性查看引入的 vue

## vue.config.js 配置文件

- 使用 `vue inspect > output.js` 查看脚手架的默认配置
- 使用 vue.config.js 可以进行配置, 比如进行入口文件的配置

## Ref 属性

1. 用来给元素或子组件注册引用信息
2. 应用在 html 标签上获取的是真实 DOM; 应用在组件标签上是组件对象
3. 使用方式 `<School ref="xxx" />` `this.$refs.xxx`

## Props 属性

1. 同 React 一样 父组件向子组件传递数据
2. 简单接收 `props: ['name']`
3. 限制类型 `props: { name: String }`
4. 限制类型必要性以及默认值 `props: { name: {type: String, required: false, default: '123'} }`
5. props 是只读的 如果确实需要修改, 将其复制一份在 data 中, 修改 data 中的数据

## Mixin 混入

- 功能；可以把多个组件共用的配置提取成一个混入对象
- 混合如果和组件的 data 或 methods 冲突 则以组件为主, 而生命周期钩子则都会触发
- 有点 AOP 的感觉

## Plugin 插件

- 功能：用于增强 vue
- 本质：包含 install 方法的一个对象 install 的第一个参数是 vue, 第二个参数是插件使用者传递的数据

## Scoped 样式

- 功能：让 style 样式在局部生效, 防止冲突
- 写法：`<style scoped>`

## 总结 TodoList 案例

1. 组件编码流程

- 拆分静态组件: 组件按功能点划分, 命名不要与 HTML 元素起冲突, 比如 header
- 实现动态组件: 考虑好数据的存放位置, 一些组件共同使用, 则放置在共同的父组件上(todoList)

2. props

- 父组件到子组件的通信
- 也可以父组件给子组件一个函数, 让子组件传递参数从而实现子组件到父组件的通信

3. v-model

- v-model 绑定的值不能是 props 传过来的值, 因为 props 尽量不要修改
- props 传递的是对象的值, 如果只修改了某个属性, vue 是不会报错的, 但最好不要这么做

## WebStorage

- 存储内容一般 5 mb
- 浏览器通过 `Window.sessionStorage` 和 `Window.localStorage` 属性来实现本地存储机制
- 相关 API
  1. xxStorage.setItem('key', 'val')
  2. xxStorage.getItem('key')
  3. xxStorage.removeItem('key')
  4. xxStorage.clear()
- sessionStorage 会随浏览器窗口关闭而消失; localStorage 需要手动清除
- getItem 若为空 则返回 null

## 组件的自定义事件

1. 一种组件间通信方式, 适用于 子组件==>父组件
2. B 想给 A 传数据, 那么就要 A 给 B 绑定自定义事件
3. 绑定自定义事件

- 第一种方式：在父组件中 `<Demo @tyz="test">`
- 第二种方式：`<Demo ref="demo"> mounted: { this.$refs.demo.$on('tyz', this.test) }`

4. 触发自定义事件 `this.$emit('tyz', 数据)`
5. 解绑自定义事件 `this.$off('tyz')`
6. 组件上也可以绑定原生 DOM 事件 需要使用 `native`
7. 通过第二种方式绑定时, 回调要么配置在 methods 中, 要么用箭头函数

## 全局事件总线

1. 组件间通信的方式, 适用于任意组件的通信(本质上就是声明一个所有 VueComponent 的父组件实现的)
2. 安装全局事件总线

```javascript
// vue2
new Vue({
  ...
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
// vue3 使用 mitt 库实现, 见代码(似乎只能传递一个参数, 可以以对象形式传递多个参数)
```

3. 使用全局事件总线

```javascript
methods() {
  demo(data) {...}
}
mounted() {
  this.$bus.$on('事件名', this.demo)
}
---
this.$bus.$emit('事件名, data')
```

4. 最好在 beforeDestory 钩子中用 $off 解绑事件

## nextTick

1. 语法 `this.$nextTick(回调)`
2. 功能：在下一次 DOM 更新结束后执行回调
3. 当改变数据后要基于数据的更新作出某些操作

## 插槽

- 作用: 让父组件向子组件指定位置插入结构, 也是一种组件间通信方式
- 分类: 默认插槽、具名插槽、作用域插槽

```html
<!-- 默认插槽 -->
<!-- 父组件 -->
<Category><div>结构</div></Category>
<!-- 子组件 -->
<template
  ><div><slot> 插槽默认内容</slot></div></template
>
<!-- 具名插槽 -->
<!-- 父组件 -->
<Category
  ><template slot="center"><div>结构</div></template
  ><template v-slot:footer><div>结构</div></template></Category
>
<!-- 子组件 -->
<template
  ><div>
    <slot name="center"> 插槽默认内容</slot
    ><slot name="footer"> 插槽默认内容</slot>
  </div></template
>
<!-- 作用域插槽 数据在子组件, 结构在父组件 
 子组件通过 <slot :xxx="data"> 绑定数据 父组件通过 scope 拿到子组件的数据并应用在结构上 -->
```

## vue-router

- [vue-router 入门](https://router.vuejs.org/zh/guide/)

```javascript
// router.ts
import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
```

```html
<!-- 通过 RouterLink 指定跳转路径 -->
<!-- RouterView 指定渲染位置 -->
<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
```

#### 几个注意点:

- 路由组件一般放在`pages`目录, 一般组件放在`components`目录
- 通过切换的路由组件, 默认是被销毁了, 需要的时候再挂载
- 每个组件都有自己的`$route`属性, 里面存储着自己的路由信息
- 整个应用只有一个`$router`, 可以通过`this.$router`获取到

#### 嵌套路由

```javascript
// 配置路由规则, 使用children配置项
routes: [
  {
    path: "/home",
    component: Home,
    children: [
      {
        // 此处开头不用补 /
        path: "news",
        component: News,
      },
    ],
  },
];
```

```html
<!-- 要写完整路径 -->
<RouterLink to="/home/news">News</RouterLink>
```

#### 路由的 query 参数

- 传递参数

```html
<!-- 跳转并携带 query 参数, to 的字符串写法 -->
<RouterLink :to="`/home/news?id=${n.id}`">...</RouterLink>
<!-- 跳转并携带 query 参数, to 的对象写法 -->
<RouterLink
  :to="{path: '/home/news', query: {
  id: n.id
}}"
  >...</RouterLink
>
```

- 接收参数

```javascript
$route.query.id;
```

#### 命名路由

- 给路由加一个`name`属性, 就可以使用`name`而不是`path`来路由
- 所有路由的命名必须是唯一的

```javascript
const routes = [
  {
    path: "/user/:username",
    name: "profile",
    component: User,
  },
];
```

```html
<!-- 指向 /user/erina -->
<router-link :to="{ name: 'profile', params: { username: 'erina' } }">
  User profile
</router-link>
```

使用 name 的优点

- 没有硬编码的 url
- params 的自动编码/解码

#### 路由的 params 参数

- 使用占位符 :xx 接收 params `children: [{name: ..., path: 'detail/:id'}]`
- 传递参数

```html
<!-- 字符串写法 -->
<RouteLink :to="/home/detail/55">跳转</RouteLink>
<!-- 对象写法 这种写法只能用 name -->
<RouteLink
  :to="{
  name: 'xxx',
  params: {
    id: 55
  }
}"
  >跳转</RouteLink
>
```

#### RouterLink 的 replace 属性

- 作用: 控制路由器跳转时操作浏览器历史的方式
- 记得在 router.ts 中开启: [历史记录模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
- 本身有两种: push 和 replace push 会添加 而 replace 是替换当前历史, 所以不能回退

#### 编程式路由导航

- 作用: 不借助 router-link 实现路由跳转

```javascript
// 最常用的两个
this.$router.push({
  name: "xxx",
  params: {
    id: xxx,
  },
});

this.$router.replace({
  name: "xxx",
  params: {
    id: xxx,
  },
});
```

#### 缓存路由组件

- 作用: 让不展示的路由保持挂载不被销毁

```html
<router-view v-slot="{ Component }">
  <!-- include 中写组件名 -->
  <keep-alive include="[HomeView]">
    <component :is="Component" />
  </keep-alive>
</router-view>
```

#### 两个新的声明周期钩子

- 作用: 路由组件所独有的两个钩子, 用于捕获路由组件的激活状态
- activated deactivated

#### 全局路由守卫

- route 中的 meta 字段可以用于附着信息

```javascript
// 全局前置路由, 初始化时执行, 每次路由切换前执行
router.beforeEach((to, from) => {
  console.log(to, from);
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") !== "atguigu") return false;
  }
});

// 同样还有全局后置守卫, 初始化时执行, 每次路由切换后执行
// 可以确定的是, 执行到这的时候一定已经确定了路由是必跳转的
```

#### 路由器的两种工作模式

- hash 模式
  - 地址中带 #
  - 兼容性较好
- history
  - 地址干净
  - 刷新页面 404, 需要后端解决(因为刷新后会变成网络请求)
