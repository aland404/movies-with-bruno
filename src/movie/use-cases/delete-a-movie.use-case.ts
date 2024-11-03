import { Inject, Injectable } from '@nestjs/common'
import { MovieRepository } from '../domain/movieRepository.interface'

@Injectable()
export class DeleteAMovieUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(movieSlug: string): string {
    return this.movieRepository.deleteAMovieBySlug(movieSlug)
  }
}
