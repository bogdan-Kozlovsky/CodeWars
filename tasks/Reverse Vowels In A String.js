/*
Reverse Vowels In A String

https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
 */


function reverseVowels(str) {
    const chars = str.split('')

    function isVowel(char) {
        return /[aeiou]/i.test(char);
    }

    let vowels = chars.filter(isVowel)

    vowels = vowels.reverse()

    console.log(vowels)
    for (let i = 0, j = 0; i < chars.length; i++) {
        if (isVowel(chars[i])) {
            chars[i] = vowels[j];
            j++;
        }
    }

    return chars.join('');
}

// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

console.log(reverseVowels("Reverse Vowels In A String"))
