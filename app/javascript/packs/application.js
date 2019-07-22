// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()

const jQuery = require('jquery');
window.$ = jQuery;

import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const componentRequireContext = require.context('../components', true);
componentRequireContext.keys().forEach(filename => {
  const name = filename.replace("./", "").replace(/\//, "-");
  Vue.component(name, componentRequireContext(filename).default)
});

document.addEventListener('DOMContentLoaded', () => {
  new Vue().$mount('#application')
});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
