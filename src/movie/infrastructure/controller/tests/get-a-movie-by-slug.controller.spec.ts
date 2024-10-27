import { Test, TestingModule } from '@nestjs/testing';
import { MovieRepository } from "../../../domain/movieRepository.interface";
import { moviesForTest } from "../../../tests/data/movies";
import { InMemoryMovieRepository } from "../../movie.repository";
import { MovieController } from "../movie.controller";
import {getTestingModule} from "./utils";

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - getAMovieBySlug', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController);
  });

  describe('getAMovieBySlug', () => {
    it('should find the corresponding movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToFind = moviesForTest.twoRandomMovies[1]

      const foundMovie = appController.getAMovieBySlug(movieToFind.slug)

      expect(foundMovie).toBe(movieToFind);
    });


    it('should not find the corresponding movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToFind = moviesForTest.unexistingMovie

      const foundMovie = appController.getAMovieBySlug(movieToFind.slug)

      expect(foundMovie).toBe(undefined);
    });
  });
});
