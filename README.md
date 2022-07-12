<p align="center">
  <h1 align="center">
    RepositoryName
  </h1>
</p>

## 💻 Technologies and Tools

- REST APIs
- Node.js
- TypeScript
- PostgreSQL

***

## 🏁 Usage

```bash
$ git clone https://github.com/[UserName]/[RepositoryName].git

$ cd [RepositoryName]

$ npm install

$ npm run dev
```

***

## 🚀 API:

```yml
POST /signup
    - Route to sign up a new user
    - headers: {}
    - body: {
        "name": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```

```yml 
POST /signin
    - Route to sign in
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```

```yml 
GET /users (authenticated)
    - Route to list all users
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

