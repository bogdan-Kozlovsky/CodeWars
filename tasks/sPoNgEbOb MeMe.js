/*
sPoNgEbOb MeMe

Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
 */

const spongeMeme = sentence => {
    return sentence.split('').map((v,i) => i % 2 !== 0
        ? v.toLowerCase()
        : v.toUpperCase())
        .join('')
}