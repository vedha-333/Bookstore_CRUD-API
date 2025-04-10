# 📚 Bookstore CRUD API

A basic CRUD (Create, Read, Update, Delete) API for managing books in a bookstore, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- Add new books
- View all books
- View a single book by ID
- Update a book by ID
- Delete a book by ID

---

## 🧑‍💻 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/bookstore-api.git
   cd bookstore-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start MongoDB**  
   Make sure MongoDB is running locally on your machine.

4. **Run the server**

   ```bash
   node server.js
   ```

5. Server will be running at:
   ```
   http://localhost:3000
   ```

---

## 📦 API Endpoints

### ➕ Create a new book

```
POST /books
```

**Request Body:**

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 399,
  "inStock": true,
  "publishedDate": "1988-04-15"
}
```

---

### 📚 Get all books

```
GET /books
```

---

### 🔍 Get a book by ID

```
GET /books/:id
```

---

### ✏️ Update a book by ID

```
PUT /books/:id
```

**Request Body:**

```json
{
  "price": 450,
  "inStock": false
}
```

---

### ❌ Delete a book by ID

```
DELETE /books/:id
```

---

## ✅ Example MongoDB Connection URI

Make sure MongoDB is running at:

```
mongodb://127.0.0.1:27017/bookstore
```

If using a cloud DB like MongoDB Atlas, replace with your URI.

---

## 🧪 Testing Tools

You can test the API using:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/)
- cURL or any REST client

---

## 📄 License

MIT License — Feel free to use, modify, and share!

---

## 🙌 Author

Made with ❤️ by  Vedant Yadav Pandilwad 


