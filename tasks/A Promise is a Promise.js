/*

A Promise is a Promise

Create a resolved javascript Promise that will return 'Hello World!'.

 */

function promiseHelloWorld() {
  let promise = new Promise((res , rej ) => {
    res('Hello World!');
  })

  return promise
}