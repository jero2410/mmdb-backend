import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'uuid',
    unique: true,
  })
  uuid: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'int', nullable: false })
  release_year: number;

  @Column({ type: 'int', nullable: true })
  runtime_minutes: number;

  @Column({ type: 'text', nullable: true })
  overview: string;

  @Column({ type: 'text' })
  poster_url: string;

  @Column({ type: 'text', nullable: true })
  trailer_url: string;

  @Column({ type: 'text' })
  language: string;
}
