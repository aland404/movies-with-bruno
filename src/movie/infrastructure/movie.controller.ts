import {Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UpdateMovieDto} from "./movie.dto";
import {MovieRepository} from "../domain/movieRepository.interface";
import {Movie} from "../domain/movie";

@ApiTags('movies')
@Controller('movies')
export class MovieController {
    constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
    }

    @Get('/')
    getMovies(): Movie[] {
        return this.movieRepository.getMovies()
    }

    @Delete('/:movieSlug')
    deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
        return this.movieRepository.deleteMovieBySug(movieSlug)
    }

    @Get('/:movieSlug')
    getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
        return this.movieRepository.getAMovieBySlug(movieSlug)
    }


    @Put('/:movieSlug')
    updateAMovie(@Param('movieSlug') movieSlug: string, @Body() movieToUpdate: UpdateMovieDto) {
        if (movieSlug !== movieToUpdate.slug) throw new HttpException('Slug in url and slug in body are different', HttpStatus.BAD_REQUEST)

        return this.movieRepository.updateAMovie(movieSlug, movieToUpdate);
    }
}
