import mongoose from "mongoose";

const bookStoreSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Author: { type: String, required: true },
  Price: { type: Number, required: true },
  InStock: { type: Boolean, required: true },
  PublishedDate: { type: Date },
});

const bookStore = mongoose.model("bookStore", bookStoreSchema);
export default bookStore;
