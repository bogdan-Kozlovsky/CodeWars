/*
esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
 */

const reverse = function(array) {
  let result = [];
  for (i = 0; i < array.length; i++){
    result[i] = array[(array.length - 1) - i]
  }
  return result
}