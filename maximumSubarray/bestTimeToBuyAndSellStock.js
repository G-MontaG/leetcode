// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let bestSum = 0;
    let currentSum = 0;
    const length = prices.length;
    for (let i = 1; i < length; i++) {
        currentSum = Math.max(0, currentSum + prices[i] - prices[i-1]);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
};
