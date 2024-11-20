import { Movie } from '../movie'
import { MovieDTO } from '../../infrastructure/dtos'

export function toMovieDTO(movie: Movie): MovieDTO {
  return {
    title: movie.title,
    released: movie.released,
    runtime: movie.runtime,
    director: movie.director,
    plot: movie.plot,
  }
}
