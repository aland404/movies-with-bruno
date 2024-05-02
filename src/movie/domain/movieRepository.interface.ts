import {UpdateMovieDto} from "../infrastructure/movie.dto";
import {Movie} from "./movie";

export interface MovieRepository {
    getMovies(): Movie[]
    deleteMovieBySug(movieSlug: string): string
    getAMovieBySlug(slug: string): Movie | undefined
    updateAMovie(movieSlug: string, movieToUpdate: UpdateMovieDto): Movie
}

export const MovieRepository = Symbol("MovieRepository")