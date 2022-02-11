import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

// Imoporting model from mongoose
import { Model } from "mongoose";

// Importing DTO
import { TagDTO } from "../Dto/tag.dto";

// Importing interfaces
import { Tag } from "../Interfaces/tag.interface";

@Injectable()
export class TagService {
    // Hooking up the interface
    constructor(@InjectModel('Tag') private readonly tagModel: Model<Tag>) { }

    // getting all the tags
    public async getAllTags(): Promise<Tag[]> {
        return await this.tagModel.find({});
    }

    // storing tags
    public async storeTag(tag: TagDTO): Promise<Tag> {
        const data = new this.tagModel(tag);
        return data.save();
    }

    // getting a single tag
    public async getSingleTag(id: string): Promise<Tag> {
        try {
            const data = await this.tagModel.findById(id);
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }

    // updating a single tag
    public async updateSingleTag(id: string, tag: TagDTO): Promise<Tag> {
        try {
            const data = await this.tagModel.findByIdAndUpdate(id, tag, {
                new: true
            });
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }

    // deleting a single tag
    public async deleteSingleTag(id: string): Promise<Tag> {
        try {
            const data = await this.tagModel.findByIdAndDelete(id);
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }
}