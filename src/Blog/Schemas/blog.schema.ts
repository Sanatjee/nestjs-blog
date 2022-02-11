import * as mongoose from "mongoose";
export const blogSchema = new mongoose.Schema({
    title: String,
    slug: String,
    categories: Object,
    tags: Object,
    author: Object,
    status: String,
    created_at: Date,
});