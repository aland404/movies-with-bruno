import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieRepository } from "../../../domain/movieRepository.interface";
import { moviesForTest } from "../../../tests/data/movies";
import { UpdateMovieDto } from "../../dtos";
import { InMemoryMovieRepository } from "../../movie.repository";
import { MovieController } from "../movie.controller";
import {getTestingModule} from "./utils";

const MockedMovies = jest.requireMock('../../movies');

jest.mock('../../movies', () => ({
  movies: []
}))

describe('UNIT - AppController - updateAMovie', () => {
  let appController: MovieController;

  beforeEach(async () => {
    jest.resetModules()

    const app: TestingModule = await getTestingModule()

    appController = app.get<MovieController>(MovieController);
  });

  describe('updateAMovie', () => {
    it('should update all the movie info', () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToUpdate = moviesForTest.twoRandomMovies[1]
      const infoToUpdate = {
        slug: movieToUpdate.slug,
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
    it('should crash with different slug error', async () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToUpdate = moviesForTest.twoRandomMovies[1]
      const infoToUpdate = {
        slug: "My different slug",
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

      try {
        await appController.updateAMovie(movieToUpdate.slug, infoToUpdate)
        expect(true).toBe(false)
      } catch(error) {
        expect(error).toBeInstanceOf(HttpException)
      }
    });
    it('should crash with no matching movie found error', async () => {
      MockedMovies.movies = [...moviesForTest.twoRandomMovies]
      const movieToUpdate = { ...moviesForTest.twoRandomMovies[1], slug: "Inexisting slug" }
      
      const infoToUpdate = {
        slug: movieToUpdate.slug,
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

      try {
        await appController.updateAMovie(movieToUpdate.slug, infoToUpdate)
        expect(true).toBe(false)
      } catch(error) {
        expect(error).toBeInstanceOf(HttpException)
      }
    });
  });
});
