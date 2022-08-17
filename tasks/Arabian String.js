/*
Arabian String

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.
 */

const camelize = str => {
    return str.replace(/[^a-z0-9]/gi,' ').split(' ').map(el => el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase()).join('')
}