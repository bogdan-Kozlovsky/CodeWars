/*
My Language Skills

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)
 */

function myLanguages(results) {

  const result = [];
  for (const key in results) {
    result.push([key, results[key]]);
  }

  return result.sort((a, b) => b[1] - a[1]).filter(item => item[1] >= 60).map(item => item[0]);
}