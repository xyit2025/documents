# 统一响应体

## 响应数据

```json
{
    "success": true,
    "code": "success",
    "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
    "message": "success",
    "data": {}
}
```

## 字段说明

| 字段名 | 类型 | 必返 | 默认值 | 说明    | 示例 |
|--------|------|------|--------|---------|------|
| **success** | boolean | 是 | true | 请求是否成功处理 | `true` |
| **code** | string | 是 | "success" | 业务状态码 | `"success"`, `"user.too_many.request"` |
| **timestamp** | string | 是 | - | 响应时间戳，ISO 8601 格式 | `"2024-01-15T14:30:15.123+08:00"` |
| **message** | string | 是 | "success" | 人类可读的提示信息，可用于前端直接展示 | `"操作成功"`, `"用户不存在"` |
| **data** | object | 否 | {} 或 null | 业务数据，成功时返回具体数据，失败时通常为null或空对象 | `{"id": 1, "name": "张三"}` |

## 成功响应示例

```json
{
    "success": true,
    "code": "success",
    "timestamp": "2024-01-15T14:30:15.123+08:00",
    "message": "用户信息获取成功",
    "data": {
        "id": 123,
        "username": "zhangsan",
        "email": "zhangsan@example.com",
        "createdAt": "2023-12-01T10:00:00.000+08:00"
    }
}
```

## 错误响应示例

```json
{
    "success": false,
    "code": "user.too_many.request",
    "timestamp": "2024-01-15T14:31:22.456+08:00",
    "message": "您的操作太快了，请稍后重试",
    "data": null
}
```