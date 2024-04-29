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
}
