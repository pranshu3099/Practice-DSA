/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function Ispossible(bloomDays, k, day, m) {
  let count = 0;
  let numberOfbouquet = 0;
  let n = bloomDays.length;
  for (let i = 0; i < n; i++) {
    if (bloomDays[i] <= day) count++;
    else {
      numberOfbouquet += Math.floor(count / k);
      count = 0;
    }
  }
  numberOfbouquet += Math.floor(count / k);
  return numberOfbouquet >= m;
}

var minDays = function(bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;
  let maxi = -Infinity;
  let mini = +Infinity;
  let n = bloomDay.length;
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, bloomDay[i]);
    mini = Math.min(mini, bloomDay[i]);
  }

  let low = mini;
  let high = maxi;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (Ispossible(bloomDay, k, mid, m)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};