import { Movie } from "../../domain/movie";

const theShining: Movie = {
    slug: 'the-shining',
    title: "The Shining",
    year: "1980",
    released: "13 Jun 1980",
    runtime: "146 min",
    genre: "Drama, Horror",
    director: "Stanley Kubrick",
    writer: "Stephen King, Stanley Kubrick, Diane Johnson",
    actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd",
    plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    awards: "6 wins & 9 nominations",
    poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    imdbRating: "8.4",
    imdbVotes: "1,103,358",
    type: "movie",
    boxOffice: "$45,634,352",
}

const sinister: Movie = {
    slug: 'sinister',
    title: "Sinister",
    year: "2012",
    released: "12 Oct 2012",
    runtime: "110 min",
    genre: "Horror, Mystery, Thriller",
    director: "Scott Derrickson",
    writer: "Scott Derrickson, C. Robert Cargill",
    actors: "Ethan Hawke, Juliet Rylance, James Ransone",
    plot: "A controversial true-crime writer finds a box of Super 8 home movies in his new home, revealing that the murder case he is currently researching could be the work of an unknown serial killer whose legacy dates back to the 1960s.",
    awards: "3 wins & 14 nominations",
    poster: "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_SX300.jpg",
    imdbRating: "6.8",
    imdbVotes: "278,524",
    type: "movie",
    boxOffice: "$48,086,903",
}

const unexistingMovie: Movie = {
    slug: 'unexisting-movie',
    title: "None",
    year: "None",
    released: "1None",
    runtime: "None",
    genre: "None",
    director: "None",
    writer: "None",
    actors: "None",
    plot: "None",
    awards: "None",
    poster: "None",
    imdbRating: "None",
    imdbVotes: "None",
    type: "None",
    boxOffice: "None",
}

export const moviesForTest = {
    theShining,
    sinister,
    unexistingMovie,
    twoRandomMovies: [theShining, sinister]
}