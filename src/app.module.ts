import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Importing Modules
import { AuthorModule } from './Author/author.module';
import { CategoryModule } from './Category/category.module';
import { DatabaseModule } from './Database/database.module';
// import { BlogModule } from './Blog/blog.module';

import { TagModule } from './Tag/tag.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthorModule, CategoryModule, DatabaseModule, TagModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    })
    // , BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
