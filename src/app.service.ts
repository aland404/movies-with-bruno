import {Injectable} from '@nestjs/common';
import {Movie} from "./types";
import {movies} from "./movies";


@Injectable()
export class AppService {
    getMovies(): Movie[] {
        return movies
    }

    deleteMovieBySug(movieSlug: string) {
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

    updateAMovie(movieSlug: string, movieToUpdate: Omit<Partial<Movie>, 'slug'>): Movie {
        const movieToUpdateIndex = movies.findIndex(movie => movie.slug === movieSlug)

        movies[movieToUpdateIndex] = { ...movies[movieToUpdateIndex], ...movieToUpdate }

        return movies[movieToUpdateIndex]
    }
}
