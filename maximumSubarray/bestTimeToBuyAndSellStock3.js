/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let one_buy = Number.MAX_SAFE_INTEGER;
    let two_buy = Number.MAX_SAFE_INTEGER;
    let one_profit = 0; 
    let two_profit = 0;
    prices.forEach((price) => {
        one_buy = Math.min(one_buy, price);
        one_profit = Math.max(one_profit, price - one_buy);
        two_buy = Math.min(two_buy, price - one_profit);
        two_profit = Math.max(two_profit, price - two_buy);
    });
    return two_profit;
};
