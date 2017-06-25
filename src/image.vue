<template>
  <navpage
          dataRole="none"
          :title="title"
          titleColor="white"
          backgroundColor="#EA2228">
    <scroller>
      <tip type="warning" value="Weex screen width is 750" style="margin-bottom: 20px;"></tip>
      <div style="flex-direction:row">
        <image class="img" style="width: 300px; height: 300px;" :src="img"></image>
        <image class="img" style="width: 200px; height: 200px;" :src="img"></image>
        <image class="img" style="width: 50px; height: 50px;" :src="img"></image>
      </div>
    </scroller>
  </navpage>
</template>

<style scoped>
  .img {
    margin-bottom: 20px;
  }
</style>

<script>
  module.exports = {
    data: function () {
      return {
        title: 'Image',
        img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
      }
    },
    components: {
      navpage: require('./include/navpage.vue'),
      panel: require('./include/panel.vue'),
      tip: require('./include/tip.vue')
    },
    created: function () {
      //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
      //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
      console.log("建立");
    },
    beforeDestroy: function () {  //触发方式,在console里面打myVue.$destroy();
      //在开始销毁实例时调用。此时实例仍然有功能。
      console.log("销毁前");
    },
    destroyed: function () {   //触发方式,在console里面打myVue.$destroy();其中myVue.$destroy(true)是删除DOM节点,会触发detached函数,但是实例仍然存在
      //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
      console.log("已销毁");
    }
  }
</script>
