/*
?GLOBAL - No Window
examples
?__dirname - path to current directory
?__filename - file name
?require - function to use modules (CommonJs)
?module - info about current module
?process - info about env where program is being executed
*/

console.log(__dirname)
setInterval(() => {
    console.log('Hello World')
}, 1000)