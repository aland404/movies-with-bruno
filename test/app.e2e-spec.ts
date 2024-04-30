import { Test, TestingModule } from '@nestjs/testing';
import {INestApplication, ValidationPipe} from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {moviesForTest} from "../src/tests/data/movies";
import {UpdateMovieDto} from "../src/UpdateMovieDto";

const MockedMovies = jest.requireMock('../src/movies');

jest.mock('../src/movies', () => ({
  movies: []
}))

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    MockedMovies.movies = [...moviesForTest.twoRandomMovies]

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/movies (GET)', () => {
    return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect(MockedMovies.movies);
  });

  it('/movies/:movieSlug (DELETE)', () => {
    const movieToDelete = moviesForTest.twoRandomMovies[0]

    return request(app.getHttpServer())
        .delete(`/movies/${movieToDelete.slug}`)
        .expect(200)
        .expect(`Movie with slug ${movieToDelete.slug} has been deleted`);
  });

  it('/movies/:movieSlug (PUT)', () => {
    const movieToUpdate = moviesForTest.twoRandomMovies[1]
    const fieldsToUpdate: UpdateMovieDto = {
      slug: movieToUpdate.slug,
      type: '',
      genre: 'My new genre'
    }

    return request(app.getHttpServer())
        .put(`/movies/${movieToUpdate.slug}`)
        .send(fieldsToUpdate)
        .expect(200)
        .expect({ ...movieToUpdate, ...fieldsToUpdate });
  });
});
