import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import Book from "./models/bookStoreSchema.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("Mongoose connection error", error));

app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: "Internal error ", err });
  }
});

app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.get("/books:id ", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found " });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: "Invaild ID" });
  }
});

app.put("/book/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found " });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/book/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    if (!deleteBook) {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(400).json({ error: "Invaild Id" });
  }
});


app.listen(PORT ,() => console.log(`Server running on ${PORT}`))