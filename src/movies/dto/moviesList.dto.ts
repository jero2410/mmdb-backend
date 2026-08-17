import { Expose } from 'class-transformer';

export class movieListDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  poster_url: string;

  @Expose()
  release_year: number;
}
