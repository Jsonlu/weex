<template>
  <navpage
          dataRole="none"
          :height="navBarHeight"
          :title="title"
          backgroundColor="#3F51B5"
          titleColor="white"
          leftItemTitle="More"
          leftItemColor="white"
          rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
          @naviBarLeftItemClick="naviBarLeftItemClick"
          @naviBarRightItemClick="naviBarRightItemClick">
    <scroller>
      <div style="display: none;">
        <panel title="Hyperlink" type="primary">
          <a href="http://alibaba.github.io/weex/index.html">
            <tip type="info" style="margin-bottom: 20px;"
                 value="Click me to see how 'A' element opens a new world."></tip>
          </a>
        </panel>
        <panel title="Hyperlink" type="primary">
          <a href="http://alibaba.github.io/weex/index.html">
            <tip type="info" style="margin-bottom: 20px;"
                 value="Click me to see how 'A' element opens a new world."></tip>
          </a>
        </panel>
      </div>
    </scroller>
  </navpage>
</template>

<script>
  var modal = weex.requireModule('modal')
  module.exports = {
    data: function () {
      return {
        navBarHeight: 88,
        title: 'Navigator',
        dir: 'dist',
        baseURL: '',
      }
    },
    components: {
      navpage: require('./include/navpage.vue'),
      panel: require('./include/panel.vue'),
      tip: require('./include/tip.vue')
    },
    methods: {
      naviBarLeftItemClick: function (e) {
        modal.toast({message: 'naviBarLeftItemClick', duration: 2})
      },
      naviBarRightItemClick: function (e) {
        modal.toast({message: 'naviBarRightItemClick', duration: 2})
      }
    }
  }
</script>
