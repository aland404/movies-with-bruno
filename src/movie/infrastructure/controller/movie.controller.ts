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
import {GetMoviesUseCase} from "../../use-cases/get-movies/get-movies.use-case";

@ApiTags('movies')
@Controller('')
export class MovieController {
    constructor(
        @Inject(MovieRepository) private readonly movieRepository: MovieRepository,
        private readonly getMovieUseCase: GetMoviesUseCase)
    {}

    @Get('/')
    getMovies(): Movie[] {
        return this.getMovieUseCase.execute()
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
