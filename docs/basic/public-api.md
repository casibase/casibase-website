---
title: Casibase Public API
description: Casibase Public API
keywords: [Casibase Public API]
authors: [IsAurora6]
---

Casibase frontend web UI is a [SPA (Single-Page Application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) developed in React. The React frontend consumes the Casibase RESTful API exposed by the Go backend code. This RESTful API is referred to as the `Casibase Public API`. In other words, with HTTP calls, you can do everything just like how the Casibase web UI itself does. There's no other limitation. The API can be utilized by the following:

- Casibase's frontend
- Casibase client SDKs (e.g., casibase-java-sdk)
- Any other customized code from the application side

The full reference for the `Casibase Public API` can be found on Swagger: [**https://ai-admin.casibase.com/swagger**](https://ai-admin.casibase.com/swagger/index.html). These Swagger docs are automatically generated using Beego's Bee tool. If you want to generate the Swagger docs by yourself, see: [How to generate the swagger file](/docs/developer-guide/swagger/#how-to-generate-the-swagger-file)

## How to authenticate with `Casibase Public API`

Casibase Public API supports two application-level authentication methods: `Bearer Token` and `Basic Auth`. The `Bearer Token` method is recommended as it is more secure.

### SDK Authentication Example (Java)

To illustrate how authentication is handled in practice, here is an example from the Casibase Java SDK. The following code shows how the SDK constructs the credential for API requests. This process authenticates the SDK with application-level permissions, effectively acting as an admin.

```java
// ...

    protected void Service(Config config, AuthTypeEnum authType) throws Exception {
        this.config = config;
        switch (authType){
            case BASIC:
                this.credential = Credentials.basic(config.clientId, config.clientSecret);
                break;
            case BEARER:
                String token = config.clientId + ":" + config.clientSecret;
                this.credential = "Bearer " + DigestUtils.md5Hex(token);
                break;
            default:
                throw new Exception("Invalid auth type");
        }
    }
```

The example above demonstrates how to prepare the credential for both authentication types:

- **BASIC**: It uses a helper (`okhttp3.Credentials`) to perform the standard Base64 encoding for Basic Authentication.
- **BEARER**: It constructs the token by taking the MD5 hash of `clientId:clientSecret` (using `org.apache.commons.codec.digest.DigestUtils`) and prepending the result with "Bearer ".

### 1. By `Bearer Token` (Recommended)

This method is more secure because it uses a static access token, which is a hashed value of your `clientId` and `clientSecret`.

#### How to get the access token?

The access token is calculated using the following formula: `md5(clientId + ":" + clientSecret)`

#### How to authenticate?

The access token must be provided in the `Authorization` header as a Bearer Token.

```shell
Authorization: Bearer <The access token>
```

### 2. By `Basic Auth`

This method uses the `clientId` and `clientSecret` directly for authentication. It is considered less secure because the `clientSecret` might be exposed. It is supported for convenience and compatibility purposes.

#### How to authenticate?

**[HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)**: This is the standard way.

```shell
Authorization: Basic <The Base64 encoding of "clientId:clientSecret">
```

If you are not familiar with Base64 encoding, you can use a library for this, as `HTTP Basic Authentication` is a widely supported standard.

### Where to find the Client ID and Secret?

Both authentication methods require a `clientId` and `clientSecret`. You can find these values for your application in the Casibase configuration file: `conf/app.conf`.
