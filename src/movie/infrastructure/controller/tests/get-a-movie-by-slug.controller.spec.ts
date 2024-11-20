import { TestingModule } from '@nestjs/testing'
import { moviesForTest } from '../../../tests/data/movies'
import { MovieController } from '../movie.controller'
import { toMovieDTO } from '../../../domain/mappers'
import { getTestingModule } from './utils'

const MockedMovies = jest.requireMock('../../movies')

jest.mock('../../movies', () => ({
  movies: [],
}))

describe('uNIT - AppController - getAMovieBySlug', () => {
  let appController: MovieController

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController)
  })

  describe('getAMovieBySlug', () => {
    it('should find the corresponding movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToFind = moviesForTest.twoRandomMovies[1]
      const movieToFindDTO = toMovieDTO(moviesForTest.twoRandomMovies[1])

      const foundMovie = appController.getAMovieBySlug(movieToFind.slug)

      expect(foundMovie).toStrictEqual(movieToFindDTO)
    })

    it('should not find the corresponding movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToFind = moviesForTest.unexistingMovie

      const foundMovie = appController.getAMovieBySlug(movieToFind.slug)

      expect(foundMovie).toBe(undefined)
    })
  })
})
