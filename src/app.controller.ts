import {Controller, Delete, Get, Param} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/movies')
    getMovies(): object[] {
        return this.appService.getMovies()
    }

    @Delete('/movies/:movieSlug')
    deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
        return this.appService.deleteMovieBySug(movieSlug)
    }
}
