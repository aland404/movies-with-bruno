import { Movie } from "src/movie/domain/movie";
import { CreateMovieDto } from "../dtos";

export function createMovieDtoToMovie(movieDto: CreateMovieDto): Movie {
    return {
        actors: movieDto.actors,
        awards: movieDto.awards ?? '',
        boxOffice: movieDto.boxOffice,
        director: movieDto.director,
        genre: movieDto.genre,
        imdbRating: movieDto.imdbRating ?? '',
        imdbVotes: movieDto.imdbVotes ?? '',
        plot: movieDto.plot,
        poster: movieDto.poster ?? '',
        released: movieDto.released ?? '',
        runtime: movieDto.runtime,
        slug: movieDto.slug,
        title: movieDto.title,
        type: movieDto.type,
        writer: movieDto.writer,
        year: movieDto.year
    }
}