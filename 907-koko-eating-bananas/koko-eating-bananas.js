/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function getMaxElement(piles = []) {
  let max = -999999;
  for (let i = 0; i < piles.length; i++) {
    max = Math.max(piles[i], max);
  }
  return max;
}

function calculateHours(hourly, piles) {
  let totalhrs = 0;
  for (let i = 0; i < piles.length; i++) {
    totalhrs = totalhrs + Math.ceil(piles[i] / hourly);
  }
  return totalhrs;
}



var minEatingSpeed = function(piles, h) {
  let maxELement = getMaxElement(piles);
  let low = 1;
  let high = maxELement;
  let ans = 99999;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2); // hourly banana eating rate
    let Totalhrs = calculateHours(middle, piles);
    if (Totalhrs <= h) {
      ans = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return ans
};