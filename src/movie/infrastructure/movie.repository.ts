import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Movie } from '../domain/movie'
import { MovieRepository } from '../domain/movieRepository.interface'
import { CreateMovieDto, UpdateMovieDto } from './dtos'
import { createMovieDtoToMovie } from './mappers'
import { movies } from './casino-movies'

@Injectable()
export class InMemoryMovieRepository implements MovieRepository {
  getMovies(): Movie[] {
    return movies
  }

  deleteAMovieBySlug(movieSlug: string): string {
    const movieIndex = movies.findIndex((movie) => {
      return movie.slug === movieSlug
    })
    if (movieIndex < 0)
      return 'No corresponding movie found'

    movies.splice(movieIndex, 1)
    return `Movie with slug ${movieSlug} has been deleted`
  }

  getAMovieBySlug(slug: string): Movie | undefined {
    return movies.find(movie => movie.slug === slug)
  }

  updateAMovie(movieToUpdate: UpdateMovieDto): Movie {
    const movieToUpdateIndex = movies.findIndex(movie => movie.slug === movieToUpdate.slug)
    if (movieToUpdateIndex < 0)
      throw new HttpException('No corresponding movie found', HttpStatus.NOT_FOUND)

    movies[movieToUpdateIndex] = { ...movies[movieToUpdateIndex], ...movieToUpdate }

    return movies[movieToUpdateIndex]
  }

  createAMovie(movieToCreate: CreateMovieDto): Movie {
    const movieToUpdateIndex = movies.findIndex(movie => movie.slug === movieToCreate.slug)
    if (movieToUpdateIndex >= 0)
      throw new HttpException('Slug already existing', HttpStatus.CONFLICT)

    const movieToAdd: Movie = createMovieDtoToMovie(movieToCreate)
    movies.push(movieToAdd)

    return movieToAdd
  }
}
