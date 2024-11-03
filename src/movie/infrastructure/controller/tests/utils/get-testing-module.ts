import { Test, TestingModule } from '@nestjs/testing'
import { AuthModule } from '../../../../../auth/auth.module'
import { UsersModule } from '../../../../../users/users.module'
import { MovieController } from '../../movie.controller'
import { MovieRepository } from '../../../../domain/movieRepository.interface'
import { InMemoryMovieRepository } from '../../../movie.repository'
import { DeleteAMovieUseCase, GetAMovieUseCase, GetMoviesUseCase } from '../../../../use-cases'

export async function getTestingModule(): Promise<TestingModule> {
  return await Test.createTestingModule({
    imports: [AuthModule, UsersModule],
    controllers: [MovieController],
    providers: [{ provide: MovieRepository, useClass: InMemoryMovieRepository }, GetAMovieUseCase, GetMoviesUseCase, DeleteAMovieUseCase],
  }).compile()
}
