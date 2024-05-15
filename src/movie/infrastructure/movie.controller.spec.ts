import {Test, TestingModule} from '@nestjs/testing';
import {moviesForTest} from "../tests/data/movies";
import {MovieController} from "./movie.controller";
import {UpdateMovieDto} from "./dtos";
import {InMemoryMovieRepository} from "./movie.repository";
import {MovieRepository} from "../domain/movieRepository.interface";

const MockedMovies = jest.requireMock('./movies');

jest.mock('./movies', () => ({
  movies: []
}))

describe('UNIT - AppController', () => {
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

  describe('deleteMovieBySlug', () => {
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

  describe('updateAMovie', () => {
    it('should update all the movie info', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToUpdate = moviesForTest.twoRandomMovies[1]
      const infoToUpdate = {
        slug: "A different slug",
        actors: "My new actors",
        awards: "My new awards",
        boxOffice: "My new boxOffice",
        director: "My new director",
        genre: "My new genre",
        imdbRating: "My new imdbRating",
        imdbVotes: "My new imdbVotes",
        plot: "My new plot",
        poster: "My new poster",
        released: "My new released",
        runtime: "My new runtime",
        title: "My new title",
        type: "My new type",
        writer: "My new writer",
        year: "My new actors"
      }

      const updatedMovie = appController.updateAMovie(movieToUpdate.slug, infoToUpdate)

      expect(updatedMovie).toStrictEqual(infoToUpdate);
    });


    it('should update partially the movie info', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToUpdate = moviesForTest.twoRandomMovies[1]
      const infoToUpdate: UpdateMovieDto = {
        slug: movieToUpdate.slug,
        director: "My new director",
        genre: "My new genre",
        imdbVotes: "My new imdbVotes",
        plot: "My new plot",
        poster: "My new poster"
      }

      const updatedMovie = appController.updateAMovie(movieToUpdate.slug, infoToUpdate)

      expect(updatedMovie).toStrictEqual({ ...movieToUpdate, ...infoToUpdate });
    });
  });
});
