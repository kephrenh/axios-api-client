Here's a **README.md** for your package:

---

````md
# axios-api-client

A simple, reusable Axios API client with built-in authentication handling.

## 🚀 Features

- ✅ Easily configurable `baseURL`
- ✅ Automatic `Authorization` header with token from `localStorage`
- ✅ Global request and response interceptors
- ✅ Supports custom headers and additional Axios configurations

---

## 📦 Installation

```sh
npm install @kephrenh/axios-api-client
```
````

or with Yarn:

```sh
yarn add @kephrenh/axios-api-client
```

---

## 🔧 Usage

### **Basic Example**

```typescript
import createApiClient from "@kephrenh/axios-api-client";

// Initialize API client with a custom base URL
const apiClient = createApiClient({ baseURL: "https://api.example.com" });

// Example API request
apiClient
  .get("/products")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

---

## ⚙️ Custom Configuration

You can pass any [Axios configuration options](https://axios-http.com/docs/req_config):

```typescript
const apiClient = createApiClient({
  baseURL: "https://api.example.com",
  headers: {
    "Custom-Header": "my-value",
  },
  timeout: 5000, // Set request timeout
});
```

---

## 🔐 Authentication Handling

This package automatically attaches the **Authorization** token from `localStorage` (if available):

```typescript
localStorage.setItem("token", "your-access-token");
```

If the token is missing or expired, requests may fail with a **401 Unauthorized** error.

---

## ❌ Handling Unauthorized Access

If a request receives a **401 Unauthorized** response:

- The package will log an error.
- The stored authentication token will be removed from `localStorage`.

You can handle this in your app by redirecting the user to the login page.

---

## 🛠 Development

### **Clone the Repository**

```sh
git clone https://github.com/kephrenh/axios-api-client.git
cd axios-api-client
```

### **Install Dependencies**

```sh
npm install
```

### **Build the Package**

```sh
npm run build
```

### **Test Locally**

```sh
npm link
```

### **Publish to NPM**

```sh
npm publish --access public
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Support

For issues, feature requests, or contributions, please open an issue on [GitHub](https://github.com/kephrenh/axios-api-client/issues).
