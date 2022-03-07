/*
Computer problem series #1: Fill the Hard Disk Drive

Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
 */

function save(sizes, hd) {
    if (sizes.length === 0) {
        return 0
    } else if (sizes.reduce((a, b) => a + b) <= hd) {
        return sizes.length
    } else {
        let count = 0
        for (let i = 0; i < sizes.length; i++) {
            count += sizes[i]

            if (count > hd) {
                return i
            }
        }
    }
}