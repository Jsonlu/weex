<template>
  <navpage
          dataRole="none"
          :title="title"
          backgroundColor="#EA2228">
    <scroller>
      <refresh class="refresh-view" :display="refresh_display" @refresh="onrefresh" @pullingdown="pullingdown">
        <loading-indicator style="height: 60px; width: 60px;"></loading-indicator>
      </refresh>
      <div class="wrapper" @click="update">
        <image :src="logoUrl" class="logo"></image>
        <text class="title">Hello {{target}}</text>
        <text class="desc">Now, let's use vue to build your weex app.</text>
      </div>
    </scroller>
  </navpage>
</template>

<style>
  .refresh-view {
    height: 120px;
    width: 750px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .wrapper {
    align-items: center;
    margin-top: 120px;
  }

  .title {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 48px;
  }

  .logo {
    width: 360px;
    height: 156px;
  }

  .desc {
    padding-top: 20px;
    color: #888;
    font-size: 24px;
  }
</style>

<script>
  module.exports = {
    data: function () {
      return {
        img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        title: 'Index',
        refresh_display: 'hide',
        loading_display: 'hide',
      }
    },
    components: {
      navpage: require('./include/navpage.vue'),
      panel: require('./include/panel.vue'),
      tip: require('./include/tip.vue')
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      onrefresh: function (e) {
        var self = this;
        self.refresh_display = 'show';
        setTimeout(function () {
          self.refresh_display = 'hide';
        }, 3000)
      },
      pullingdown: function (e) {

      }
    }
  }
</script>
