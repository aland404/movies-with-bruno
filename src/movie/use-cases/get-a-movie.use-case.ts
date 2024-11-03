import { Inject, Injectable } from '@nestjs/common'
import { Movie } from '../domain/movie'
import { MovieRepository } from '../domain/movieRepository.interface'

@Injectable()
export class GetAMovieUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(movieSlug: string): Movie | undefined {
    return this.movieRepository.getAMovieBySlug(movieSlug)
  }
}
