<template>
  <div style="flex-direction: column;">
    <tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
  </div>
</template>
<script>
  var getBaseURL = require('./base-url').getBaseURL
  var tabdata = require('./config/config').tabItems
  module.exports = {
    data: function () {
      return {
        dir: 'dist',
        tabItems: tabdata,
        baseURL: ''
      }
    },
    components: {
      tabbar: require('./include/tabbar.vue')
    },
    created: function () {
      this.baseURL = getBaseURL(this)
      console.log(this.baseURL)
      for (var i = 0; i < this.tabItems.length; i++) {
        var tabItem = this.tabItems[i];
        tabItem.src = this.baseURL + tabItem.src;
      }
    },
    methods: {
      tabBarOnClick: function (e) {
        var url = this.tabItems[e.index].src
        console.log(url)
      }
    }
  }
</script>
