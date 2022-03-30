/*
ONE ONe One one

that takes in array nums and returns the maximum consecutive 1's


 */
function consecutiveOnes(nums) {
    let result = 0;
    let amount = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            amount++;
            if (amount >= result) {
                result = amount;
            }
        } else {
            amount = 0;
        }
    }
    return result;
};