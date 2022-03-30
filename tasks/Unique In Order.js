/*
Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 */

const uniqueInOrder = iterable => {
    return (typeof iterable == "object") ? iterable.filter((v,i,a) => a[i] !== a[i+1]) : iterable.split("").filter((v,i,a) => a[i] !== a[i+1]);
}