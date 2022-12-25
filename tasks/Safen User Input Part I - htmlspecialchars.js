/*
Safen User Input Part I - htmlspecialchars

https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
 */

function htmlspecialchars(formData) {
    const arr = [];

    for (let i = 0; i < formData.length; i++) {
        switch (formData[i]) {
            case '<':
                arr.push('&lt;');
                break;
            case '>':
                arr.push('&gt;');
                break;
            case '"':
                arr.push('&quot;');
                break;
            case '&':
                arr.push('&amp;');
                break;
            default:
                arr.push(formData[i]);
        }
    }

    return arr.join('');
}
