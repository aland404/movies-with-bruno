import {Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {Movie} from "./types";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/movies')
    getMovies(): Movie[] {
        return this.appService.getMovies()
    }

    @Delete('/movies/:movieSlug')
    deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
        return this.appService.deleteMovieBySug(movieSlug)
    }

    @Get('/movies/:movieSlug')
    getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
        return this.appService.getAMovieBySlug(movieSlug)
    }


    @Put('/movies/:movieSlug')
    updateAMovie(@Param('movieSlug') movieSlug: string, movieToUpdate: Omit<Partial<Movie>, 'slug'>) {
        return this.appService.updateAMovie(movieSlug, movieToUpdate);
    }
}
