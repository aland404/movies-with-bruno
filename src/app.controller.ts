import {Body, Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {Movie} from "./types";
import {ApiTags} from "@nestjs/swagger";
import {UpdateMovieDto} from "./UpdateMovieDto";

@ApiTags('movies')
@Controller('movies')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/')
    getMovies(): Movie[] {
        return this.appService.getMovies()
    }

    @Delete('/:movieSlug')
    deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
        return this.appService.deleteMovieBySug(movieSlug)
    }

    @Get('/:movieSlug')
    getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
        return this.appService.getAMovieBySlug(movieSlug)
    }


    @Put('/:movieSlug')
    updateAMovie(@Param('movieSlug') movieSlug: string, @Body() movieToUpdate: UpdateMovieDto) {
        return this.appService.updateAMovie(movieSlug, movieToUpdate);
    }
}
