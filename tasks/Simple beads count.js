/*
Simple beads count

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
 */

function countRedBeads(n) {
    if (n < 2) return 0;
    return (n - 1) * 2;
}