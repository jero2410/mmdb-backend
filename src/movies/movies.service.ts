import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { time } from 'console';
import { title } from 'process';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  // Return all films as json file
  async findAll(): Promise<Movie[]> {
    return await this.moviesRepository.find();
  }

  // Return specific film with id
  async findOne(id: number): Promise<Movie | null> {
    const movie = await this.moviesRepository.findOne({
      where: { id },
    });
    if (!movie) {
      throw new NotFoundException(`Movie with ID "${id}" not found`);
    }
    return movie;
  }
}
