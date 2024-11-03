import { Inject, Injectable } from '@nestjs/common'
import { MovieRepository } from '../domain/movieRepository.interface'
import { UpdateMovieDto } from '../infrastructure/dtos'
import { Movie } from '../domain/movie'

@Injectable()
export class UpdateAMovieUseCase {
  constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
  }

  execute(movieToUpdate: UpdateMovieDto): Movie {
    return this.movieRepository.updateAMovie(movieToUpdate)
  }
}
