import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

// Importing Model from mongoose

import { Model } from 'mongoose';
import { AuthorDTO } from '../Dto/author.dto';

// Importing the interfaces
import { Author } from '../Interfaces/author.interface';

@Injectable()

export class AuthorService {
    constructor(@InjectModel('Author') private readonly authorModel: Model<Author>) { }

    // get all the authors
    public async getAllAuthors(): Promise<Author[]> {
        return await this.authorModel.find({});
    }

    // store the authors
    public async storeAuthors(author: AuthorDTO): Promise<Author> {
        const newAuthor = await new this.authorModel(author);
        return newAuthor.save();
    }

    // get single authors
    public async getSingleAuthor(id: string): Promise<Author> {
        try {
            const author = await this.authorModel.findById(id);
            return author;
        } catch (error) {
            throw new NotFoundException("author not found");
        }
    }
    // update single authors
    public async updateAuthor(id, AuthorDTO: AuthorDTO): Promise<Author> {
        try {
            const updatedAuthor = await this.authorModel.
                findByIdAndUpdate(id, AuthorDTO, { new: true });
            return updatedAuthor;
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    // delete single authors
    public async deleteSingleAuthor(id: string): Promise<Author[]> {
        try {
            return await this.authorModel.findByIdAndDelete(id);
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    // check if authors exists
    protected checkUser(id: string): boolean {
        return false;
    }
}