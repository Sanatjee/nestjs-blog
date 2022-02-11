import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Importing Controllers
import { TagsController } from './Controllers/tag.controller';

// Importing Services
import { TagService } from './Services/tag.service';

// Importing Schema
import { TagSchema } from './Schemas/tag.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Tag',
                schema: TagSchema
            }
        ])
    ],
    controllers: [TagsController],
    providers: [TagService],
})

export class TagModule { }