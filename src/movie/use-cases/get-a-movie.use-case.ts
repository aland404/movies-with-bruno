import { Inject, Injectable } from '@nestjs/common'
import { MovieRepository } from '../domain/movieRepository.interface'
import { MovieDTO } from '../infrastructure/dtos'
import { toMovieDTO } from '../domain/mappers'

@Injectable()
export class GetAMovieUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(movieSlug: string): MovieDTO | undefined {
    const movie = this.movieRepository.getAMovieBySlug(movieSlug)
    if (!movie)
      return undefined

    return toMovieDTO(movie)
  }
}
