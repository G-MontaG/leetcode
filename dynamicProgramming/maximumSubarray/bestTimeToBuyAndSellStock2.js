// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    return prices.reduce((acc, value, index) => {
        if (index < 1) return acc;
        return acc += Math.max(0, value - prices[index-1])
    }, 0);
};
