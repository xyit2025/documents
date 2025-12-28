# API 文档

## 欢迎

欢迎访问 **向源互联API** 帮助文档。 

> [!CAUTION] 注意!
> 本 API 专为向源互联内部应用开发设计。若您正在开发第三方应用，请使用 **OpenAPI**，以免请求被拦截。

## 阅读须知

- 本 API 采用 [RESTful](https://www.runoob.com/restfulapi/restful-api-tutorial.html) 设计风格，建议提前了解 RESTful 以便更好地理解接口设计。
- 所有接口均遵循统一的 [响应体](/api/v1/entities/GlobalApiResponse.md)，文档中通常仅展示关键字段。建议在使用前先阅读统一响应体说明。
- 在本文档中，使用 `{}` 包裹的部分表示 **URL 路径中的动态参数**。

## 文档目录

- [API 文档首页](/api/index.md)
- [全局说明](/api/global.md)
- `{version}`
  - 账户接口
    - Token 管理
      - [申请新 Token](/api/v1/auth/tokens/operation/index.md)

:::details 可用`version`
- `v1`
:::