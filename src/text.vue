<template>
  <navpage
          dataRole="none"
          title="Title"
          backgroundColor="#EA2228">
    <scroller style="padding: 20px;">
      <tip type="warning" value="Weex screen width is 750" style="margin: 20px;"></tip>
      <button type="success" size="large" value="push" @click.native="push"></button>
    </scroller>
  </navpage>
</template>

<style scoped>
  .txt {
    margin-bottom: 12px;
    font-size: 40px;
  }
</style>

<script>
  var navigator = weex.requireModule('navigator')
  var getBaseURL = require('./base-url').getBaseURL
  module.exports = {
    data: function () {
      return {
        dir: 'dist',
        baseURL: '',
      }
    },
    components: {
      tip: require('./include/tip.vue'),
      navpage: require('./include/navpage.vue'),
      button: require('./include/button.vue'),
    },
    created: function () {
      this.baseURL = getBaseURL(this)
    },
    methods: {
      push: function () {
        var params = {
          'url': this.baseURL + 'test.js',
          'animated': 'true',
        }
        navigator.push(params, function () {

        });
      },
    }
  }
</script>
