import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';

// Importing DTOs
import { TagDTO } from '../Dto/tag.dto';

// Importing Services
import { TagService } from '../Services/tag.service';

@Controller('tags')

export class TagsController {

    // Hooking up service
    constructor(private readonly tagService: TagService) { }

    // getting all the tags
    @Get()
    async index(@Res() res) {
        const data = await this.tagService.getAllTags();
        return res.status(HttpStatus.OK).json(data);
    }

    // store a tag
    @Post()
    @UsePipes(new ValidationPipe())
    async store(@Res() res, @Body() tag: TagDTO) {
        const data = await this.tagService.storeTag(tag);
        return res.status(HttpStatus.OK).json(data);
    }

    // get a single tag
    @Get(':id/detail')
    async show(@Res() res, @Param('id') id: string) {
        const data = await this.tagService.getSingleTag(id);
        return res.status(HttpStatus.OK).json(data);
    }
    // update single tag
    @Put(':id/update')
    async update(@Res() res, @Param('id') id: string, @Body() incomingTagData: TagDTO) {
        const data = await this.tagService.updateSingleTag(id, incomingTagData);
        return res.status(HttpStatus.OK).json(data);
    }

    // delete a tag
    @Delete(':id/destroy')
    async destroy(@Res() res, @Param('id') id: string) {
        const data = await this.tagService.deleteSingleTag(id);
        return res.status(HttpStatus.OK).json(data);
    }
}