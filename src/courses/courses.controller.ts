import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(+id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.coursesService.update(+id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(+id);
  }
}
