// src/index.ts

import Vue from "vue"

const _ = new Vue({
  el: "#app",
  template: `
    <div>
      <div>Hello {{name}}!</div>
      Name: <input v-model="name" type="text">
      <li></li>
    </div>`,
  data: {
    name: "World2",
  },
})
