import * as mongoose from "mongoose";

export const TagSchema = new mongoose.Schema({
    title: String,
    slug: String,
    status: String
})