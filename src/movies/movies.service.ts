import {
  Injectable,
  // NotFoundException,
  // BadRequestException,
} from '@nestjs/common';
// import { createMovieDto } from './dto/createMovie.dto';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  // Return all films as json file
  findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  // Return specific film with id
  findOne(id: number): Promise<Movie | null> {
    // Find movie with id
    return this.moviesRepository.findOneBy({ id });
  }

  // // Add or Create new movie and push it into array of json called movies for now as no db available
  // private movies = [{}];
  // addOne(createMovieDto: createMovieDto) {
  //   // Get current year dynamically
  //   const currentYear = new Date().getFullYear();

  //   // Rejection of film whose realese year in the future
  //   if (createMovieDto.releaseYear > currentYear) {
  //     throw new BadRequestException(
  //       'Cannot add a film with a future release year',
  //     );
  //   }

  //   // Push to array
  //   this.movies.push(createMovieDto);
  //   return { message: 'Movie added successfully', movie: createMovieDto };
  // }
}
