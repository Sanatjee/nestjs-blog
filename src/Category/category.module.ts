import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Importing Controllers
import { CategoryController } from './Controllers/category.controller';

// Importing Services
import { CategoryService } from './Services/category.service';

// Importing Schema
import { CategorySchema } from './Schemas/category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Category',
                schema: CategorySchema
            }
        ])
    ],
    controllers: [CategoryController],
    providers: [CategoryService],
})

export class CategoryModule { }