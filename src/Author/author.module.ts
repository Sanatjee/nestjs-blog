import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Importing Controllers
import { AuthorController } from './Controllers/author.contorller';

// Importing Services
import { AuthorService } from './Services/author.service';

// Importing Schema
import { AuthorSchema } from './Schemas/author.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Author',
                schema: AuthorSchema
            }
        ])
    ],
    controllers: [AuthorController],
    providers: [AuthorService]
})

export class AuthorModule { }