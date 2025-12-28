# 获取 Operation Token 验证图像

| 接口 ID  |         `v1.auth.tokens.operation.id.0`         |
| :------: | :---------------------------------------------: |
| 接口端点 | `/api/v1/auth/tokens/operation/{token}/captcha` |
| 请求方式 |                      `GET`                      |

:::details 目录
[[toc]]
:::

## 请求

```http
GET HTTP/2 /api/v1/auth/tokens/operation/{token}/captcha
```

:::details 数据详细说明
|键名|键值的型|键说明|
|:--:|:--:|:--:|
|`token`|string|获取验证图像所使用的 Operation Token|
:::

## 返回

```http
HTTP/2 200 OK

{
  "success": true,
  "code": "success",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  "message": "success",
  "data": {
    "verify_image": string
  }
}
```

:::details 数据详细说明
|键名|键值型|键说明|
|:--:|:--:|:--:|
|`verify_image`|string|Token 对应的验证图像, 编码`Base64`|
:::
