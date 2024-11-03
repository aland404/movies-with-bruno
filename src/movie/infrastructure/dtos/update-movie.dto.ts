import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateMovieDto {
  @IsString()
  @IsNotEmpty()
  readonly slug: string

  @IsString()
  @IsOptional()
  readonly title?: string

  @IsString()
  @IsOptional()
  readonly year?: string

  @IsString()
  @IsOptional()
  readonly released?: string

  @IsString()
  @IsOptional()
  readonly runtime?: string

  @IsString()
  @IsOptional()
  readonly genre?: string

  @IsString()
  @IsOptional()
  readonly director?: string

  @IsString()
  @IsOptional()
  readonly writer?: string

  @IsString()
  @IsOptional()
  readonly actors?: string

  @IsString()
  @IsOptional()
  readonly plot?: string

  @IsString()
  @IsOptional()
  readonly awards?: string

  @IsString()
  @IsOptional()
  readonly poster?: string

  @IsString()
  @IsOptional()
  readonly imdbRating?: string

  @IsString()
  @IsOptional()
  readonly imdbVotes?: string

  @IsString()
  @IsOptional()
  readonly type?: string

  @IsString()
  @IsOptional()
  readonly boxOffice?: string
}
