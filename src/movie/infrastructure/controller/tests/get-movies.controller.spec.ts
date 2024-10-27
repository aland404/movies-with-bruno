import { Test, TestingModule } from '@nestjs/testing';
import { MovieRepository } from "../../../domain/movieRepository.interface";
import { moviesForTest } from "../../../tests/data/movies";
import { InMemoryMovieRepository } from "../../movie.repository";
import { MovieController } from "../movie.controller";
import {GetMoviesUseCase} from "../../../use-cases/get-movies/get-movies.use-case";
import {AuthModule} from "../../../../auth/auth.module";
import {UsersModule} from "../../../../users/users.module";
import {getTestingModule} from "./utils";

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - getMovies', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController)
  });

  describe('getMovies', () => {
    it('should return 2 movies', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]

      const foundMovies = appController.getMovies()

      expect(foundMovies.length).toBe(2);
    });
  });
});
