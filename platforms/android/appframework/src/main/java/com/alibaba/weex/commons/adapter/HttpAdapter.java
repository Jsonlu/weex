package com.alibaba.weex.commons.adapter;

import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.common.WXRequest;
import com.taobao.weex.common.WXResponse;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import okhttp3.Response;


public class HttpAdapter implements IWXHttpAdapter {
    private ExecutorService mExecutorService;

    private void execute(Runnable runnable) {
        if (mExecutorService == null) {
            mExecutorService = Executors.newFixedThreadPool(3);
        }
        mExecutorService.execute(runnable);
    }

    @Override
    public void sendRequest(final WXRequest request, final OnHttpListener listener) {
        if (listener != null) {
            listener.onHttpStart();
        }
        execute(new Runnable() {
            @Override
            public void run() {
                WXResponse response = new WXResponse();
                try {
                    HttpReq httpReq = new HttpReq();
                    Response resData = httpReq.getReq(request.url);
                    Map<String, List<String>> headers = resData.headers().toMultimap();
                    int responseCode = resData.code();
                    if (listener != null) {
                        listener.onHeadersReceived(responseCode, headers);
                    }

                    response.statusCode = String.valueOf(responseCode);
                    if (responseCode >= 200 && responseCode <= 299) {
                        response.originalData = resData.body().bytes();
                    } else {
                        response.errorMsg = resData.body().string();
                    }
                    if (listener != null) {
                        listener.onHttpFinish(response);
                    }
                } catch (IOException | IllegalArgumentException e) {
                    e.printStackTrace();
                    response.statusCode = "-1";
                    response.errorCode = "-1";
                    response.errorMsg = e.getMessage();
                    if (listener != null) {
                        listener.onHttpFinish(response);
                    }
                    if (e instanceof IOException) {
                    }
                }
            }
        });
    }

}
