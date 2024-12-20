import { Movie } from '../domain/movie'

export const movies: Movie[] = [
  {
    slug: 'mississippi-grind',
    title: 'Mississippi Grind',
    year: '2015',
    released: '2015-09-25',
    runtime: '108 min',
    genre: 'Drame',
    director: 'Anna Boden, Ryan Fleck',
    writer: 'Anna Boden, Ryan Fleck',
    actors: 'Ben Mendelsohn, Ryan Reynolds, Sienna Miller',
    plot: 'Deux joueurs compulsifs nouent une amitié improbable et embarquent dans un road trip à travers le sud des États-Unis à la recherche de gros gains.',
    awards: '2 nominations aux festivals de cinéma.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzUwNjI5MF5BMl5BanBnXkFtZTgwOTIwODI0NjE@._V1_SX300.jpg',
    imdbRating: '6.4',
    imdbVotes: '22,000',
    type: 'film',
    boxOffice: '422 746 $',
  },
  {
    slug: 'the-cooler',
    title: 'The Cooler',
    year: '2003',
    released: '2003-11-26',
    runtime: '101 min',
    genre: 'Drame, Romance',
    director: 'Wayne Kramer',
    writer: 'Frank Hannah, Wayne Kramer',
    actors: 'William H. Macy, Maria Bello, Alec Baldwin',
    plot: 'Un employé de casino malchanceux, surnommé le \'Cooler\', voit sa chance tourner lorsqu\'il tombe amoureux, bouleversant son rôle de porte-poisse professionnel.',
    awards: '1 nomination aux Oscars et 12 victoires dans divers festivals.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA3NTcyMTk4NV5BMl5BanBnXkFtZTYwNDMxMzM3._V1_SX300.jpg',
    imdbRating: '7.0',
    imdbVotes: '36,000',
    type: 'film',
    boxOffice: '8 291 572 $',
  },
  {
    slug: 'hard-eight',
    title: 'Sydney',
    year: '1996',
    released: '1996-10-04',
    runtime: '102 min',
    genre: 'Crime, Drame',
    director: 'Paul Thomas Anderson',
    writer: 'Paul Thomas Anderson',
    actors: 'Philip Baker Hall, John C. Reilly, Gwyneth Paltrow',
    plot: 'Un joueur expérimenté prend un jeune homme sous son aile et lui enseigne les astuces du métier dans le monde des casinos.',
    awards: '1 victoire et 5 nominations.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA4OTk3MzkwNl5BMl5BanBnXkFtZTgwNjU4ODU2MDE@._V1_SX300.jpg',
    imdbRating: '7.2',
    imdbVotes: '35,000',
    type: 'film',
    boxOffice: '222 559 $',
  },
  {
    slug: 'rain-man',
    title: 'Rain Man',
    year: '1988',
    released: '1988-12-16',
    runtime: '133 min',
    genre: 'Drame',
    director: 'Barry Levinson',
    writer: 'Barry Morrow, Ronald Bass',
    actors: 'Dustin Hoffman, Tom Cruise, Valeria Golino',
    plot: 'Un homme apprend qu\'il a un frère autiste, doté d\'incroyables capacités de calcul, qu\'il exploite pour gagner dans les casinos.',
    awards: '4 Oscars, dont Meilleur Film et Meilleur Acteur.',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjNkMGEyMjItNDczYS00ZjdmLThkMzUtODVkNjE4ODU4OTUzXkEyXkFqcGdeQXVyNTE0Nzc5MzY@._V1_SX300.jpg',
    imdbRating: '8.0',
    imdbVotes: '500,000',
    type: 'film',
    boxOffice: '354 825 435 $',
  },
  {
    slug: 'the-gambler',
    title: 'The Gambler',
    year: '2014',
    released: '2014-12-25',
    runtime: '111 min',
    genre: 'Crime, Drame, Thriller',
    director: 'Rupert Wyatt',
    writer: 'William Monahan, James Toback',
    actors: 'Mark Wahlberg, Jessica Lange, John Goodman',
    plot: 'Un professeur universitaire accro au jeu s\'enfonce dans les dettes et doit se battre pour sa survie.',
    awards: '1 nomination.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTkxMzUyOTM3MF5BMl5BanBnXkFtZTgwNDg2NzMwMzE@._V1_SX300.jpg',
    imdbRating: '6.0',
    imdbVotes: '60,000',
    type: 'film',
    boxOffice: '39 280 133 $',
  },
  {
    slug: 'lucky-you',
    title: 'Lucky You',
    year: '2007',
    released: '2007-05-04',
    runtime: '124 min',
    genre: 'Drame, Romance, Sport',
    director: 'Curtis Hanson',
    writer: 'Eric Roth, Curtis Hanson',
    actors: 'Eric Bana, Drew Barrymore, Robert Duvall',
    plot: 'Un joueur de poker professionnel à Las Vegas lutte pour équilibrer sa carrière et sa relation avec son père et une femme qu\'il aime.',
    awards: 'Aucune récompense majeure.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA0NzE5MDAyNl5BMl5BanBnXkFtZTcwOTkxMDE0MQ@@._V1_SX300.jpg',
    imdbRating: '5.9',
    imdbVotes: '15,000',
    type: 'film',
    boxOffice: '8 382 477 $',
  },
  {
    slug: 'bugsy',
    title: 'Bugsy',
    year: '1991',
    released: '1991-12-20',
    runtime: '136 min',
    genre: 'Biopic, Crime, Drame',
    director: 'Barry Levinson',
    writer: 'James Toback',
    actors: 'Warren Beatty, Annette Bening, Harvey Keitel',
    plot: 'L\'histoire de Bugsy Siegel, un gangster ambitieux qui a contribué à la création de Las Vegas.',
    awards: '2 Oscars et 9 nominations.',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2Q3ZDg5YmUtNjkwZi00MmQ2LThkYjgtY2FhOGEwNDlkZTc1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    imdbRating: '6.8',
    imdbVotes: '25,000',
    type: 'film',
    boxOffice: '49 114 016 $',
  },

]
