import {Movie} from "../domain/movie";
import {MovieRepository} from "../domain/movieRepository.interface";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class DeleteAMovieUseCase {
    constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
    }

    execute(movieSlug: string):string{
        return this.movieRepository.deleteAMovieBySlug(movieSlug)
    }
}