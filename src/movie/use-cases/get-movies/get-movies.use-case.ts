import {Movie} from "../../domain/movie";
import {MovieRepository} from "../../domain/movieRepository.interface";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class GetMoviesUseCase {
    constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
    }

    execute():Movie[]{
        return this.movieRepository.getMovies()
    }
}