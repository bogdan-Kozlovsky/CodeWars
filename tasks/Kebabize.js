/*
Kebabize

Modify the kebabize function so that it converts a camel case string into a kebab case.
 */

const kebabize = str => {
    return str.replace(/([A-Z])/g,'-$1').toLowerCase().replace(/[0-9]/g,'').replace(/^-/,'')
}