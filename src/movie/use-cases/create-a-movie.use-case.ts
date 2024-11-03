import { Inject, Injectable } from '@nestjs/common'
import { MovieRepository } from '../domain/movieRepository.interface'
import { CreateMovieDto } from '../infrastructure/dtos'
import { Movie } from '../domain/movie'

@Injectable()
export class CreateAMovieUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(movieToCreate: CreateMovieDto): Movie {
    return this.movieRepository.createAMovie(movieToCreate)
  }
}
