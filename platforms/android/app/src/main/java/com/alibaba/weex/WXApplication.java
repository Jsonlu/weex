package com.alibaba.weex;

import android.app.Application;

import com.alibaba.weex.commons.adapter.HttpAdapter;
import com.alibaba.weex.commons.adapter.ImageAdapter;
import com.alibaba.weex.commons.util.AppConfig;
import com.alibaba.weex.extend.module.WXEventModule;
import com.alibaba.weex.pluginmanager.PluginManager;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        WXSDKEngine.addCustomOptions("appName", "WXSample");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder()
                        .setImgAdapter(new ImageAdapter())
                        .setHttpAdapter(new HttpAdapter())
                        .build()
        );

        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        Fresco.initialize(this);
        AppConfig.init(this);
        PluginManager.init(this);
    }

}
