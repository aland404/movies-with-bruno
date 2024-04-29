import {Injectable} from '@nestjs/common';
import {Movie} from "./types";
import {movies} from "./movies";


@Injectable()
export class AppService {
    getMovies(): Movie[] {
        return movies
    }
}
