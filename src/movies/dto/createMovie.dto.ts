import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class createMovieDto {
  //TODO
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  releaseYear: number;
}
