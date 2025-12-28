# 是否登录

| 接口 ID  |      `v1.auth.tokens.0`      |
| :------: | :--------------------------: |
| 接口端点 | `/api/v1/auth/tokens/status` |
| 请求方式 |            `GET`             |

:::details 目录
[[toc]]
:::

## 请求

```http
GET HTTP/2 /api/v1/auth/tokens/status
```

## 返回

### 成功

```http
HTTP/2 200 OK

{
  "success": true,
  "code": "success",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  "message": "success",
  "data": {
    "login": boolen,
    "account: string
  }
}
```

### 未登录

```http
HTTP/2 200 OK

{
  "success": true,
  "code": "user.auth_failed.no_login",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  "message": "success",
  "data": {}
}
```
