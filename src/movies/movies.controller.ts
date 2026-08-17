import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { movieListDto } from './dto/moviesList.dto';
import { movieDetailsDto } from './dto/movieDetails.dto';
import { plainToInstance } from 'class-transformer';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  async getAllMovies() {
    const movies = await this.moviesService.findAll();
    return plainToInstance(movieListDto, movies, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async getMovieById(@Param('id', ParseIntPipe) id: number) {
    const movie = await this.moviesService.findOne(id);
    return plainToInstance(movieDetailsDto, movie, {
      excludeExtraneousValues: true,
    });
  }
}
