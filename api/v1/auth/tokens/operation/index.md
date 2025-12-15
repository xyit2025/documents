# 获取新的 Opreation Token

| 接口 ID  |  `v1.auth.tokens.operation.0`  |
| :------: | :----------------------------: |
| 接口端点 | `/api/v1/auth/tokes/operation` |

:::details 本页资源
- [成功响应体(jsonc)](https://docs.xyit.net/raw/api/v1/auth/tokens/operation/0.200.jsonc)
- [速率限制响应体(json)](https://docs.xyit.net/raw/api/v1/auth/tokens/operation/0.429.jsonc)
- [验证码错误响应体(json)](https://docs.xyit.net/raw/api/v1/auth/tokens/operation/0.422.jsonc)
- [验证码过期响应体(json)](https://docs.xyit.net/raw/api/v1/auth/tokens/operation/0.401.jsonc)
:::

## 请求

```http
POST HTTP/2 /api/v1/auth/tokens/operation

--No Body--
```

## 返回

### 成功

已获取到新的 Operation Token

```http
HTTP/2 200 OK

{
    "success": true,
    "code": "success",
    "data": {
        "token": string,
        "verify_image": string,
        "expired_in": int
    }
}
```

:::details 数据详细说明
|键名|键值的型|键说明|
|:--:|:--:|:--:|
|`token`|string|获取到的 Token|
|`verify_image`|string|Token 对应的验证图像, 编码`Base64`|
|`expire_in`|int|有效期, 单位**分钟**|
:::

### 失败

#### 验证码错误

您所输入的验证码错误。

```http
HTTP/2 422 Unprocessable Entity

{
    "success": false,
    "code": "user.input_invaild.captra"
}
```

#### 请求次数超过速率限制

您的请求速率超过了速率限制，需要您等待一段时间后重新操作。

```http
HTTP/2 429 Too Many Requests

{
    "success": false,
    "code": "user.too_many.requests"
}
```

#### Token 过期

您所使用的 Token 已过期。

```http
HTTP/2 401 Unauthorized

{
    "success": false,
    "code": "user.expired.token"
}
```
