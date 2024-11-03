import { Inject, Injectable } from '@nestjs/common'
import { Movie } from '../domain/movie'
import { MovieRepository } from '../domain/movieRepository.interface'

@Injectable()
export class GetMoviesUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(): Movie[] {
    return this.movieRepository.getMovies()
  }
}
