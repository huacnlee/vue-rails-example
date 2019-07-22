
import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router';
import Home from '../home';
import Root from '../home/root';
import Topics from '../topics';
import TopicShow from '../topics/show';

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/topics", component: Topics },
    { path: "/topics/:id", component: TopicShow },
  ],
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(Root),
    router,
  }).$mount()
  document.body.appendChild(app.$el)
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
