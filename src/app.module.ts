import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Importing Modules
import { AuthorModule } from './Author/author.module';
import { DatabaseModule } from './Database/database.module';
// import { BlogModule } from './Blog/blog.module';
// import { CategoryModule } from './Category/category.module';
// import { TagModule } from './Tag/tag.module';

@Module({
  imports: [AuthorModule, DatabaseModule
    // , BlogModule, CategoryModule, TagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
