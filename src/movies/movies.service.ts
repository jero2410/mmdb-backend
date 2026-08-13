import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { createMovieDto } from './dto/createMovie.dto';
import { title } from 'process';
import { release } from 'os';

const movies = [
  { id: 1, title: 'Arrival', release_year: 2016 },
  { id: 2, title: 'Whiplash', release_year: 2014 },
  { id: 3, title: 'Parasite', release_year: 2019 },
  { id: 4, title: 'Mad Max: Fury Road', release_year: 2015 },
  { id: 5, title: 'Get Out', release_year: 2017 },
  { id: 6, title: 'Blade Runner 2049', release_year: 2017 },
  { id: 7, title: 'The Grand Budapest Hotel', release_year: 2014 },
  { id: 8, title: 'Spirited Away', release_year: 2001 },
  { id: 9, title: 'Portrait of a Lady on Fire', release_year: 2019 },
  { id: 10, title: 'Everything Everywhere All at Once', release_year: 2022 },
  { id: 11, title: 'Spider Man - Brand New Day', release_year: 2026 },
];

@Injectable()
export class MoviesService {
  // Return all films as json file
  findAll() {
    return movies;
  }

  // Return specific film with id
  findOne(id: number) {
    // Find movie with id
    const movie = movies.find((movie) => movie.id === id);

    // If id not found
    if (!movie) {
      throw new NotFoundException(`Movie not found`);
    }
    return movie;
  }

  // Add or Create new movie and push it into array of json called movies for now as no db available
  private movies = [{}];
  addOne(createMovieDto: createMovieDto) {
    // Get current year dynamically
    const currentYear = new Date().getFullYear();

    // Rejection of film whose realese year in the future
    if (createMovieDto.releaseYear > currentYear) {
      throw new BadRequestException('Cannot add a film with a future release year');
    }

    // Push to array
    this.movies.push(createMovieDto);
    return { message: 'Movie added successfully', movie: createMovieDto };
  }
}
