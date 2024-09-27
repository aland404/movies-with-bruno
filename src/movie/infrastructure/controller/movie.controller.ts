import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { Movie } from "../../domain/movie";
import { MovieRepository } from "../../domain/movieRepository.interface";
import { CreateMovieDto, UpdateMovieDto } from "../dtos";
import {AuthGuard} from "../../../auth/auth.guard";

@ApiTags('movies')
@Controller('')
export class MovieController {
    constructor(@Inject(MovieRepository) private readonly movieRepository: MovieRepository) {
    }

    @Get('/')
    getMovies(): Movie[] {
        return this.movieRepository.getMovies()
    }

    @UseGuards(AuthGuard)
    @Delete('/:movieSlug')
    deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
        return this.movieRepository.deleteAMovieBySug(movieSlug)
    }

    @Get('/:movieSlug')
    getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
        return this.movieRepository.getAMovieBySlug(movieSlug)
    }


    @Post('/')
    createAMovie(@Body() movieToCreate: CreateMovieDto): Movie {
        return this.movieRepository.createAMovie(movieToCreate);
    }


    @Put('/:movieSlug')
    updateAMovie(@Param('movieSlug') movieSlug: string, @Body() movieToUpdate: UpdateMovieDto): Movie {
        return this.movieRepository.updateAMovie(movieSlug, movieToUpdate);
    }
}
