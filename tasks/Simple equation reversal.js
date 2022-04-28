/*
Simple equation reversal
Given a mathematical equation that has *,+,-,/, reverse it as follows:
 */

const solve = eq => eq.split(/([*+-/])/).reverse().join('')
