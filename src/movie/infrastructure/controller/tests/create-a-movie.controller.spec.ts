import { Test, TestingModule } from '@nestjs/testing';
import { MovieRepository } from "../../../domain/movieRepository.interface";
import { moviesForTest } from "../../../tests/data/movies";
import { CreateMovieDto } from "../../dtos";
import { InMemoryMovieRepository } from "../../movie.repository";
import { MovieController } from "../movie.controller";
import { HttpException } from '@nestjs/common';

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - createAMovie', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [{provide: MovieRepository, useClass: InMemoryMovieRepository}],
    }).compile();

    appController = app.get<MovieController>(MovieController);
  });

  describe('createAMovie', () => {
    it('should create a movie with default values', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToCreate: CreateMovieDto = {
        slug: "A different slug",
        actors: "My actors",
        boxOffice: "My boxOffice",
        director: "My director",
        genre: "My genre",
        plot: "My plot",
        runtime: "My runtime",
        title: "My title",
        type: "My type",
        writer: "My writer",
        year: "My actors"
      }

      const createdMovie = appController.createAMovie(movieToCreate)

      expect(createdMovie).toStrictEqual({
        ...movieToCreate,
        awards: '',
        imdbRating: '',
        imdbVotes: '',
        poster: '',
        released: ''
      });
    });

    it('should create a movie with all values', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToCreate: CreateMovieDto = {
        slug: "A different slug",
        actors: "My actors",
        boxOffice: "My boxOffice",
        director: "My director",
        genre: "My genre",
        plot: "My plot",
        runtime: "My runtime",
        title: "My title",
        type: "My type",
        writer: "My writer",
        year: "My actors",
        awards: "My awards",
        imdbRating: "My imdbRating",
        imdbVotes: "My imdbVotes",
        poster: "My poster",
        released: "My released"
      }

      const createdMovie = appController.createAMovie(movieToCreate)

      expect(createdMovie).toStrictEqual(movieToCreate);
    })
    it('should crash with slug already existing error', async () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToCreate: CreateMovieDto = {
        slug: moviesForTest.twoRandomMovies[0].slug,
        actors: "My actors",
        boxOffice: "My boxOffice",
        director: "My director",
        genre: "My genre",
        plot: "My plot",
        runtime: "My runtime",
        title: "My title",
        type: "My type",
        writer: "My writer",
        year: "My actors"
      }

      try {
        await appController.createAMovie(movieToCreate)
        expect(true).toBe(false)
      } catch(error) {
        expect(error).toBeInstanceOf(HttpException)
      }
    });
  });
});
