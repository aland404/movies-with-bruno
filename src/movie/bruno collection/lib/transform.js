function toSeparatedHyphens(sentence) {
    const lowerCaseSentence = sentence.toLowerCase()
    const hyphenSeparated = lowerCaseSentence.replace(/\s+/g, '-')

    return hyphenSeparated;
}

module.exports = {
    toSeparatedHyphens
}