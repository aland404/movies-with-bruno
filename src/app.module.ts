import {Module} from '@nestjs/common';
import {MovieController} from "./movie/infrastructure/controller/movie.controller";
import {InMemoryMovieRepository} from "./movie/infrastructure/movie.repository";
import {MovieRepository} from "./movie/domain/movieRepository.interface";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MovieController],
  providers: [{provide: MovieRepository, useClass: InMemoryMovieRepository}],
})
export class AppModule {}
