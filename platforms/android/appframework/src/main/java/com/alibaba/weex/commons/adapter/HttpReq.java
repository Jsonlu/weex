package com.alibaba.weex.commons.adapter;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Author:JsonLu
 * DateTime:17/6/25 15:58
 * Email:jsonlu@qq.com
 * Desc:
 **/
public class HttpReq {

    private final OkHttpClient client = new OkHttpClient
            .Builder()
            .addInterceptor(new HttpInterceptor())
            .build();

    public Response getReq(String url) throws IOException {
        Request request = new Request.Builder()
                .url(url)
                .get()
                .build();
        Response response = client.newCall(request).execute();
        return response;
    }
}
