import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'uuid',
    unique: true,
    generated: 'uuid',
  })
  uuid: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Index('movies_year_idx')
  @Column({ name: 'release_year', type: 'int' })
  release_year: number;

  @Column({ type: 'int', nullable: true })
  runtime_minutes: number;

  @Column({ type: 'text', nullable: true })
  overview: string;

  @Column({ type: 'text', nullable: true })
  poster_url: string;

  @Column({ type: 'text', nullable: true })
  trailer_url: string;

  @Column({ type: 'text', nullable: true })
  language: string;
}
