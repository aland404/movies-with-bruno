const { randMovie, randFirstName, randLastName, randPastDate } = require('@ngneat/falso')
const { toSeparatedHyphens } = require("./transform")

function generateRandomMovieToPost(bodyToPost = {}) {
    const randomTitle = randMovie()

    return {
        title: bodyToPost.title ??  randomTitle,
        slug: bodyToPost.slug ??  toSeparatedHyphens(randomTitle),
        actors: bodyToPost.actors ?? `${randFirstName()} ${randLastName()}`,
        boxOffice: bodyToPost.boxOffice ??  "My boxOffice",
        director: bodyToPost.director ??  "My director",
        genre: bodyToPost.genre ??  "My genre",
        plot: bodyToPost.plot ??  "My plot",
        runtime: bodyToPost.runtime ??  "My runtime",
        type: bodyToPost.type ??  "My type",
        writer: bodyToPost.writer ??  `${randFirstName()} ${randLastName()}`,
        year: bodyToPost.year ??  randPastDate({ years: 20 }).getFullYear().toString(),
        awards: bodyToPost.awards ??  "My awards",
        imdbRating: bodyToPost.imdbRating ??  "My imdbRating",
        imdbVotes: bodyToPost.imdbVotes ??  "My imdbVotes",
        poster: bodyToPost.poster ??  "My poster",
        released: bodyToPost.released ??  "My released"
    }
}

module.exports = {
    generateRandomMovieToPost
}