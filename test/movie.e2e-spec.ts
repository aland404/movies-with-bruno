import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common'
import * as request from 'supertest'
import { JwtService } from '@nestjs/jwt'
import { moviesForTest } from '../src/movie/tests/data/movies'
import { UpdateMovieDto } from '../src/movie/infrastructure/dtos'
import { AppModule } from '../src/app.module'
import { toMovieDTO } from '../src/movie/domain/mappers'

const MockedMovies = jest.requireMock('../src/movie/infrastructure/movies')

jest.mock('../src/movie/infrastructure/movies', () => ({
  movies: [],
}))

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    MockedMovies.movies = [...moviesForTest.twoRandomMovies]

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalPipes(new ValidationPipe())
    await app.init()
  })

  it('/movies (GET 200)', () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(HttpStatus.OK)
      .expect(MockedMovies.movies.map(toMovieDTO))
  })

  it('/movies/:movieSlug (GET 200)', () => {
    const movieToGet = moviesForTest.twoRandomMovies[1]

    return request(app.getHttpServer())
      .get(`/movies/${movieToGet.slug}`)
      .expect(HttpStatus.OK)
      .expect(toMovieDTO(movieToGet))
  })

  it('/movies/:movieSlug (DELETE 200)', async () => {
    const movieToDelete = moviesForTest.twoRandomMovies[0]
    const token = await generateValidToken()

    return request(app.getHttpServer())
      .delete(`/movies/${movieToDelete.slug}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect(`Movie with slug ${movieToDelete.slug} has been deleted`)
  })

  it('/movies/:movieSlug (DELETE 401)', () => {
    const movieToDelete = moviesForTest.twoRandomMovies[0]

    return request(app.getHttpServer())
      .delete(`/movies/${movieToDelete.slug}`)
      .expect(HttpStatus.UNAUTHORIZED)
  })

  it('/movies/:movieSlug (PUT 200)', () => {
    const movieToUpdate = moviesForTest.twoRandomMovies[1]
    const fieldsToUpdate: UpdateMovieDto = {
      slug: movieToUpdate.slug,
      type: '',
      genre: 'My new genre',
    }

    return request(app.getHttpServer())
      .put(`/movies/${movieToUpdate.slug}`)
      .send(fieldsToUpdate)
      .expect(HttpStatus.OK)
      .expect({ ...movieToUpdate, ...fieldsToUpdate })
  })

  it('/movies/:movieSlug (POST 200)', () => {
    const movieToCreate = moviesForTest.unexistingMovie

    return request(app.getHttpServer())
      .post(`/movies`)
      .send(movieToCreate)
      .expect(HttpStatus.CREATED)
      .expect(movieToCreate)
  })
})

export async function generateValidToken() {
  const jwtService = new JwtService({ secret: 'temporary_secret_to_test', signOptions: { expiresIn: '10s' } })
  return await jwtService.signAsync({ sub: `user:userId}:userName`, username: 'userName' })
}
