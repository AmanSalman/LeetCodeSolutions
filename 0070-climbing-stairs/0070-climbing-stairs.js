/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = 1, b = 2, c;
    if (n == 1) return a;
    if (n == 2) return b;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};