import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {MovieController} from "./movie/infrastructure/controller/movie.controller";
import {InMemoryMovieRepository} from "./movie/infrastructure/movie.repository";
import {MovieRepository} from "./movie/domain/movieRepository.interface";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppLoggerMiddleware } from "./infra/middlewares";

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MovieController],
  providers: [{provide: MovieRepository, useClass: InMemoryMovieRepository}],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*')
  }
}
