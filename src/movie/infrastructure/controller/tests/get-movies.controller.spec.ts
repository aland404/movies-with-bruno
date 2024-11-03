import { TestingModule } from '@nestjs/testing'
import { moviesForTest } from '../../../tests/data/movies'
import { MovieController } from '../movie.controller'
import { getTestingModule } from './utils'

const MockedMovies = jest.requireMock('../../movies')

jest.mock('../../movies', () => ({
  movies: [],
}))

describe('uNIT - AppController - getMovies', () => {
  let appController: MovieController

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController)
  })

  describe('getMovies', () => {
    it('should return 2 movies', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]

      const foundMovies = appController.getMovies()

      expect(foundMovies.length).toBe(2)
    })
  })
})
