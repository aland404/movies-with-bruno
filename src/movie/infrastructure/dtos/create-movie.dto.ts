import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    readonly slug: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly year: string;

    @IsString()
    @IsOptional()
    readonly released?: string;

    @IsString()
    @IsOptional()
    readonly runtime: string;

    @IsString()
    readonly genre: string;

    @IsString()
    readonly director: string;

    @IsString()
    readonly writer: string;

    @IsString()
    readonly actors: string;

    @IsString()
    readonly plot: string;

    @IsString()
    @IsOptional()
    readonly awards?: string;

    @IsString()
    @IsOptional()
    readonly poster?: string;

    @IsString()
    @IsOptional()
    readonly imdbRating?: string;

    @IsString()
    @IsOptional()
    readonly imdbVotes?: string;

    @IsString()
    readonly type: string;

    @IsString()
    readonly boxOffice: string;
}