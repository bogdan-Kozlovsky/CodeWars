/*
Password maker

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
 */

const makePassword = phrase =>  {
    let a = []
    let newArr = phrase.split('').map(m => {
        return (
            m === 'i' || m === 'I' ? m = 1 : m
            && m === 'o' || m === 'O' ? m = 0 : m
            && m === 's' || m === 'S' ? m = 5 : m
        )
    })
    let b = newArr.join('')
    let c = b.split(' ').map( m => a.push(m[0]))
    return a.join('')
}