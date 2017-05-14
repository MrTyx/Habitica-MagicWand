import Vue from "vue";
import KeenUI from "keen-ui";
import axios from "axios";
import VueAxios from "vue-axios";

import main from "./templates/main.vue";
import login from "./templates/login.vue";

Vue.use(VueAxios, axios);
Vue.use(KeenUI);

chrome.storage.sync.get(["userID", "apiToken"], function(items) {
  if (items.userID !== undefined && items.apiToken !== undefined) {
    new Vue({
      el: "#app",
      render: h => h(main)
    });
  } else {
    new Vue({
      el: "#app",
      render: h => h(login)
    });
  }
});