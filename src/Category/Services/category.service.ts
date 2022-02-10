import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

// Importing model from mongoose
import { Model } from 'mongoose';

// Importing interfaces
import { Category } from '../Interfaces/category.interface';

// Importing DTOs
import { CategoryDTO } from "../Dto/category.dto";


@Injectable()
export class CategoryService {

    // Hooking up inteface
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }

    // get all categories
    public async getAllCategories(): Promise<Category[]> {

        return await this.categoryModel.find({})

    }

    // storing the category
    public async storeCategory(category: CategoryDTO): Promise<Category> {

        const newCategory = new this.categoryModel(category);
        return newCategory.save();

    }

    // get single category
    public async getSingleCategory(id: string): Promise<Category> {
        try {

            const data = await this.categoryModel.findById(id);
            return data;

        } catch (err) {
            throw new Error(err);
        }

    }

    // update single category
    public async updateSingleCategory(id: string, CategoryDTO: CategoryDTO): Promise<Category> {
        try {

            const data = await this.categoryModel.findByIdAndUpdate(id, CategoryDTO, {
                new: true
            });
            return data;

        } catch (err) {
            throw new Error(err);
        }
    }

    // delete single category
    public async deleteSingleCategory(id: string): Promise<Category> {
        try {

            const data = await this.categoryModel.findByIdAndDelete(id);
            return data;

        } catch (err) {
            throw new Error(err);
        }
    }
}