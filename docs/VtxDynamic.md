### VtxDynamic 文档

#### 1.VtxDynamic

> 说明:
> 为了减少相同的接口代码，把接口方法放在一个地方统一维护  
> 每一个系统新建一个 js 的 json 文件,
> json 的格式如下

| **参数**      | **说明**                           | **类型**                                                                                  | **默认值** | **是否必填** |
| ------------- | ---------------------------------- | ----------------------------------------------------------------------------------------- | ---------- | ------------ |
| [url]         | 接口地址                           | String                                                                                    |            | 必填         |
| [packDataFun] | 数据包裹格式                       | String <br/>'getParameters' <br/> 'getParam' <br/> 'getParameter' <br/> 'getParamAndName' | 'getParam' | 非必填       |
| [method]      | 请求方法                           | String <br/>'GET' <br/> 'POST'                                                            | 'GET'      | 非必填       |
| [entityType]  | 请求数据格式                       | String <br/> 'raw'                                                                        |            | 非必填       |
| [cancelAjax]  | 多次发出相同请求，是否取消上一次的 | Boolean <br/> true <br/> false                                                            | true       | 非必填       |
| [fun]         | 方法                               | String <br/>'downFile' <br/> 'request'                                                    | 'request'  | 非必填       |
