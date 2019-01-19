import Vue from "vue";

Vue.config.productionTip = false;

import("./pages" + location.pathname + ".vue")
  .catch(function() {
    return import("./pages/App.vue");
  })
  .then(function(module) {
    new Vue({
      render: h => h(module.default)
    }).$mount("#app");
  });
