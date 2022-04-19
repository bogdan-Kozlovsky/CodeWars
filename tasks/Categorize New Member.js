/*
Categorize New Member

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

 */

function openOrSenior(data){
    const result = [];

    for(let i = 0; i < data.length; i++){
        result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }

    return result;
}