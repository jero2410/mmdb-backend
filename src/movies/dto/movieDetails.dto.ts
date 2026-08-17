import { Expose } from 'class-transformer';

export class movieDetailsDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  overview: string;

  @Expose()
  poster_url: string;

  @Expose()
  release_year: number;

  @Expose()
  runtime_minutes: number;
}
