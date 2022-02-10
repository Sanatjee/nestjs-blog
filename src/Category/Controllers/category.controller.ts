import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';

// Importing DTOs
import { CategoryDTO } from '../Dto/category.dto';

// Importing Services
import { CategoryService } from '../Services/category.service';

@Controller('categories')

export class CategoryController {

    // hooking up the services
    constructor(private readonly categoryService: CategoryService) { }

    // get all categories
    @Get()
    async index(@Res() res) {
        const data = await this.categoryService.getAllCategories();
        res.status(HttpStatus.OK).json(data);
    }

    // store a category
    @Post()
    @UsePipes(new ValidationPipe())
    async store(@Res() res, @Body() category: CategoryDTO) {
        const data = await this.categoryService.storeCategory(category);
        res.status(HttpStatus.OK).json(data);
    }

    // get single category
    @Get('/:id/detail')
    async show(@Res() res, @Param('id') id: string) {
        const data = await this.categoryService.getSingleCategory(id);
        res.status(HttpStatus.OK).json(data);
    }

    // update single category
    @Put('/:id/update')
    async update(@Res() res, @Param('id') id: string, @Body() incomingCategoryData: CategoryDTO) {
        const data = await this.categoryService.updateSingleCategory(id, incomingCategoryData);
        res.status(HttpStatus.OK).json(data);
    }

    // delete single category
    @Delete('/:id/destroy')
    async delete(@Res() res, @Param('id') id: string) {
        const data = await this.categoryService.deleteSingleCategory(id);
        res.status(HttpStatus.OK).json(data);
    }
}