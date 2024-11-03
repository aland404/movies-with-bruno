import { Module } from '@nestjs/common'
import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface'
import { AuthModule } from '../auth/auth.module'
import { MovieController } from './infrastructure/controller/movie.controller'
import { MovieRepository } from './domain/movieRepository.interface'
import { InMemoryMovieRepository } from './infrastructure/movie.repository'
import {
  CreateAMovieUseCase,
  DeleteAMovieUseCase,
  GetAMovieUseCase,
  GetMoviesUseCase,
  UpdateAMovieUseCase,
} from './use-cases'

const movieModuleMetadata: ModuleMetadata = {
  imports: [AuthModule],
  controllers: [MovieController],
  providers: [
    { provide: MovieRepository, useClass: InMemoryMovieRepository },
    CreateAMovieUseCase,
    GetAMovieUseCase,
    GetMoviesUseCase,
    DeleteAMovieUseCase,
    UpdateAMovieUseCase,
  ],
}

@Module(movieModuleMetadata)
export class MovieModule {}
