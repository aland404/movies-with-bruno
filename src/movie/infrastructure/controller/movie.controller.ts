import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
import { GetAMovieUseCase } from '../../use-cases/get-a-movie.use-case'
import { CreateAMovieUseCase } from '../../use-cases/create-a-movie.use-case'
import { UpdateAMovieUseCase } from '../../use-cases'

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(
        @Inject(MovieRepository) private readonly movieRepository: MovieRepository,
        private readonly createAMovieUseCase: CreateAMovieUseCase,
        private readonly getMoviesUseCase: GetMoviesUseCase,
        private readonly getAMovieUseCase: GetAMovieUseCase,
        private readonly deleteAMovieUseCase: DeleteAMovieUseCase,
        private readonly updateAMovieUseCase: UpdateAMovieUseCase,
  ) {}

  @Get('/')
  getMovies(): Movie[] {
    return this.getMoviesUseCase.execute()
  }

  @Get('/:movieSlug')
  getAMovieBySlug(@Param('movieSlug') movieSlug: string): Movie | undefined {
    return this.getAMovieUseCase.execute(movieSlug)
  }

  @UseGuards(AuthGuard)
  @Delete('/:movieSlug')
  deleteMovieBySlug(@Param('movieSlug') movieSlug: string): string {
    return this.deleteAMovieUseCase.execute(movieSlug)
  }

  @Post('/')
  createAMovie(@Body() movieToCreate: CreateMovieDto): Movie {
    return this.createAMovieUseCase.execute(movieToCreate)
  }

  @Put('/:movieSlug')
  updateAMovie(@Param('movieSlug') movieSlug: string, @Body() movieToUpdate: UpdateMovieDto): Movie {
    if (movieSlug !== movieToUpdate.slug)
      throw new HttpException('Slug in url and slug in body are different', HttpStatus.BAD_REQUEST)

    return this.updateAMovieUseCase.execute(movieToUpdate)
  }
}
