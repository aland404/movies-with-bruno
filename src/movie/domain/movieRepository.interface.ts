import {CreateMovieDto, UpdateMovieDto} from "../infrastructure/dtos";
import {Movie} from "./movie";

export interface MovieRepository {
    createAMovie(movieToCreate: CreateMovieDto): Movie
    getMovies(): Movie[]
    deleteMovieBySug(movieSlug: string): string
    getAMovieBySlug(slug: string): Movie | undefined
    updateAMovie(movieSlug: string, movieToUpdate: UpdateMovieDto): Movie
}

export const MovieRepository = Symbol("MovieRepository")