import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {moviesForTest} from "./tests/data/movies";

const MockedMovies = jest.requireMock('./movies');

jest.mock('./movies', () => ({
  movies: []
}))

describe('UNIT - AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getMovies', () => {
    it('should return 2 movies', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]

      expect(appController.getMovies().length).toBe(2);
    });
  });

  describe('deleteMovieBySlug', () => {
    it('should delete the first movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToDelete = moviesForTest.twoRandomMovies[0]

      expect(appController.deleteMovieBySlug(movieToDelete.slug)).toBe(`Movie with slug ${movieToDelete.slug} has been deleted`);

      expect(appController.getMovies().length).toBe(1);
    });

    it('should delete the second movie', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToDelete = moviesForTest.twoRandomMovies[1]

      expect(appController.deleteMovieBySlug(movieToDelete.slug)).toBe(`Movie with slug ${movieToDelete.slug} has been deleted`);

      expect(appController.getMovies().length).toBe(1);
    });
  });
});
