/*
Sort Arrays (Ignoring Case)

Sort the given array of strings in alphabetical order, case insensitive. For example:

 */

const sortme = names => {
    return names.sort(
        function (a, b) {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
            return 0;
        }
    );
}
