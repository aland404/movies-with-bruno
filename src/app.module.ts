import {Module} from '@nestjs/common';
import {MovieController} from "./movie/infrastructure/movie.controller";
import {InMemoryMovieRepository} from "./movie/infrastructure/movie.repository";
import {MovieRepository} from "./movie/domain/movieRepository.interface";

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [{provide: MovieRepository, useClass: InMemoryMovieRepository}],
})
export class AppModule {}
