/*
Survive the attack
 */

function hasSurvived(attackers, defenders) {
    if (attackers.length > defenders.length) {
        return false;
    }

    let countAttackers = 0;
    let countDefenders = 0;

    for (let i = 0; i < attackers.length; i++) {
        if (attackers[i] > defenders[i] || defenders[i] === undefined) {
            ++countAttackers;
        } else if (defenders[i] > attackers[i] || attackers[i] === undefined) {
            ++countDefenders;
        }
    }

    if (countAttackers === countDefenders) {
        const sumA = attackers.reduce((acc, el) => acc + el, 0);
        const sumD = defenders.reduce((acc, el) => acc + el, 0);

        return sumA <= sumD;
    }

    return countDefenders > countAttackers;
}

console.log(hasSurvived([49, 36, 31, 29, 74, 82, 1, 58, 98, 69], [47, 58, 79, 39, 5, 45, 8, 60, 85, 54]));
