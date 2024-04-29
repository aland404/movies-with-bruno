import {Injectable} from '@nestjs/common';
import {Movie} from "./types";
import {movies} from "./movies";


@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    getMovies(): Movie[] {
        return movies
    }
}
