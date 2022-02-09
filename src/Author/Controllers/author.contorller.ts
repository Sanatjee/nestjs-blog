import {
    Body, Controller, Delete, Get, HttpStatus,
    Param,
    Post, Put, Query, Req, Res, UsePipes, ValidationPipe
} from '@nestjs/common';
import { AuthorDTO } from '../Dto/author.dto';

import { AuthorService } from '../Services/author.service';

@Controller('authors')
export class AuthorController {

    constructor(private readonly authorService: AuthorService) { }

    // get all authors
    @Get()
    async index(@Res() res) {

        const data = await this.authorService.getAllAuthors();
        res.status(HttpStatus.OK).json(data);

    }

    // store an author
    @Post()
    @UsePipes(new ValidationPipe())
    async store(@Res() res, @Body() authorParams: AuthorDTO) {

        const data = await this.authorService.storeAuthors(authorParams);
        res.status(HttpStatus.OK).json(data);

    }

    // get a single author
    @Get("/:id/detail")
    async show(@Res() res, @Param('id') id: string) {
        const data = await this.authorService.getSingleAuthor(id);
        res.status(HttpStatus.OK).json(data);

    }

    // update an author
    @Put("/:id/update")
    async update(@Res() res, @Param('id') id: string, @Body() incomingAuthorData: AuthorDTO) {
        const data = await this.authorService.updateAuthor(id, incomingAuthorData);
        res.status(HttpStatus.OK).json(data);
    }

    // destroy author
    @Delete("/:id/destroy")
    async destroy(@Res() res, @Param('id') id: string) {
        const data = await this.authorService.deleteSingleAuthor(id);
        res.status(HttpStatus.OK).json(data);
    }

}