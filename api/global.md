# API 通用规范说明

:::details 获取当前页资源
- [响应体](https://docs.xyit.net/raw/api/global.jsonc)
:::

## 路径

默认路径前缀: `/api/<version>`

:::tip 提示
`<version>`字段请与服务器 API 版本对应。
:::

:::details 当前可用版本
- `v1`
:::

## 请求

### 请求头

```http
Content-Type: application/json
```

## 响应

### 主响应体格式

```jsonc
{
    "success": boolean, //* 请求业务是否成功
    "code": string, //* 业务码
    "timestamp": string, //* 时间戳，(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", timezone = "GMT+8"(Asia/Shanghai))
    "message": string, // 响应段消息
    "data": {} // 业务数据
}
```

:::info 提示
带有`*`的是一定会含有的键。
:::