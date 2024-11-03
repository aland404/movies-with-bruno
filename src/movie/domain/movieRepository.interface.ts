import { CreateMovieDto, UpdateMovieDto } from '../infrastructure/dtos'
import { Movie } from './movie'

export interface MovieRepository {
  createAMovie: (movieToCreate: CreateMovieDto) => Movie
  getMovies: () => Movie[]
  deleteAMovieBySlug: (movieSlug: string) => string
  getAMovieBySlug: (slug: string) => Movie | undefined
  updateAMovie: (movieSlug: string, movieToUpdate: UpdateMovieDto) => Movie
}

// eslint-disable-next-line ts/no-redeclare
export const MovieRepository = Symbol('MovieRepository')
