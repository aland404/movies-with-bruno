import {Injectable} from '@nestjs/common';
import {movies} from "./movies";
import {MovieRepository} from "../domain/movieRepository.interface";
import {UpdateMovieDto} from "./movie.dto";
import {Movie} from "../domain/movie";


@Injectable()
export class InMemoryMovieRepository implements MovieRepository {
    getMovies(): Movie[] {
        return movies
    }

    deleteMovieBySug(movieSlug: string): string {
        const movieIndex = movies.findIndex(movie => {
            return movie.slug === movieSlug
        })
        if (movieIndex < 0) return 'No corresponding movie found'

        movies.splice(movieIndex, 1)
        return `Movie with slug ${movieSlug} has been deleted`
    }

    getAMovieBySlug(slug: string): Movie | undefined {
        return movies.find(movie => movie.slug === slug);
    }

    updateAMovie(movieSlug: string, movieToUpdate: UpdateMovieDto): Movie {
        const movieToUpdateIndex = movies.findIndex(movie => movie.slug === movieSlug)

        movies[movieToUpdateIndex] = { ...movies[movieToUpdateIndex], ...movieToUpdate }

        return movies[movieToUpdateIndex]
    }
}
