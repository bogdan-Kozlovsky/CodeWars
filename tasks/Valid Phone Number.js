/*
Valid Phone Number
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
 */

const validPhoneNumber = phoneNumber => /^ *\( *\d{3} *\) *\d{3} *- *\d{4} *$/.test(phoneNumber);
