import { Inject, Injectable } from '@nestjs/common'
import { MovieRepository } from '../domain/movieRepository.interface'
import { toMovieDTO } from '../domain/mappers'
import { MovieDTO } from '../infrastructure/dtos'

@Injectable()
export class GetMoviesUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(): MovieDTO[] {
    return this.movieRepository.getMovies().map(toMovieDTO)
  }
}
