import * as mongoose from "mongoose";
export const CategorySchema = new mongoose.Schema({
    title: String,
    slug: String,
    status: String
})