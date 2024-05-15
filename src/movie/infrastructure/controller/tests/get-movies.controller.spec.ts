import { Test, TestingModule } from '@nestjs/testing';
import { MovieRepository } from "../../../domain/movieRepository.interface";
import { moviesForTest } from "../../../tests/data/movies";
import { InMemoryMovieRepository } from "../../movie.repository";
import { MovieController } from "../movie.controller";

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - getMovies', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [{provide: MovieRepository, useClass: InMemoryMovieRepository}],
    }).compile();

    appController = app.get<MovieController>(MovieController);
  });

  describe('getMovies', () => {
    it('should return 2 movies', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]

      const foundMovies = appController.getMovies()

      expect(foundMovies.length).toBe(2);
    });
  });
});
