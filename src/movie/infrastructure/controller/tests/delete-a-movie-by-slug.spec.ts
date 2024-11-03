import { TestingModule } from '@nestjs/testing';
import { moviesForTest } from "../../../tests/data/movies";
import { MovieController } from "../movie.controller";
import {getTestingModule} from "./utils";

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - deleteAMovieBySlug', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController);
  });

  describe('deleteAMovieBySlug', () => {
    it('should delete the first movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToDelete = moviesForTest.twoRandomMovies[0]

      const deletedInfo = appController.deleteMovieBySlug(movieToDelete.slug)

      expect(deletedInfo).toBe(`Movie with slug ${movieToDelete.slug} has been deleted`);
    });

    it('should delete the second movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToDelete = moviesForTest.twoRandomMovies[1]

      const deletedInfo = appController.deleteMovieBySlug(movieToDelete.slug)

      expect(deletedInfo).toBe(`Movie with slug ${movieToDelete.slug} has been deleted`);
    });
  });
});
