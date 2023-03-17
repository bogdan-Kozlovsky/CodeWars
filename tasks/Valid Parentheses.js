/*
Valid Parentheses

https://www.codewars.com/kata/6411b91a5e71b915d237332d
 */

function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (pairs[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const top = stack.pop();
            if (!top || pairs[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses( ")("));
