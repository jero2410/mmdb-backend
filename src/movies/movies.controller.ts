import { Controller, Get, Param, Post, HttpCode, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMovieDto } from './dto/createMovie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAllMovies() {
    const movies = this.moviesService.findAll();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    return movies.map((m) => ({
      ...m,
      isRecent: m.release_year >= twoYearsAgo.getFullYear(),
    }));
  }

  @Get(':id')
  getMovieById(@Param('id') id: number) {
    return this.moviesService.findOne(Number(id));
  }

  @Post()
  @HttpCode(201)
  addMovie(@Body() createMovieDto: createMovieDto) {
    return this.moviesService.addOne(createMovieDto);
  }
}
