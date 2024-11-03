import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Movie } from '../../domain/movie'
import { MovieRepository } from '../../domain/movieRepository.interface'
import { CreateMovieDto, UpdateMovieDto } from '../dtos'
import { AuthGuard } from '../../../auth/auth.guard'
import { GetMoviesUseCase } from '../../use-cases/get-movies.use-case'
import { DeleteAMovieUseCase } from '../../use-cases/delete-a-movie.use-case'

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(
        @Inject(MovieRepository) private readonly movieRepository: MovieRepository,
        private readonly getMoviesUseCase: GetMoviesUseCase,
        private readonly deleteAMovieUseCase: DeleteAMovieUseCase,
  ) {}

  @Get('/')
  getMovies(): Movie[] {
    return this.getMoviesUseCase.execute()
  }

  @Get('/:movieSlug')
  getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
    return this.movieRepository.getAMovieBySlug(movieSlug)
  }

  @UseGuards(AuthGuard)
  @Delete('/:movieSlug')
  deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
    return this.deleteAMovieUseCase.execute(movieSlug)
  }

  @Post('/')
  createAMovie(@Body() movieToCreate: CreateMovieDto): Movie {
    return this.movieRepository.createAMovie(movieToCreate)
  }

  @Put('/:movieSlug')
  updateAMovie(@Param('movieSlug') movieSlug: string, @Body() movieToUpdate: UpdateMovieDto): Movie {
    return this.movieRepository.updateAMovie(movieSlug, movieToUpdate)
  }
}
