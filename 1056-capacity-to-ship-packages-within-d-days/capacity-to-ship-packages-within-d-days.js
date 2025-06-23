/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function getMinElement(weights = []) {
  let min = -999999;
  for (let i = 0; i < weights.length; i++) {
    min = Math.max(weights[i], min);
  }
  return min;
}

function getMaxElement(weights = []) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum = sum + weights[i];
  }
  return sum;
}

function calculateActualDays(weights = [], min_capacity) {
  let num_of_days = 0;
  let capacity = 0;
  for (let i = 0; i < weights.length; i++) {
    capacity = capacity + weights[i];

    if (capacity > min_capacity) {
      capacity = weights[i];
      num_of_days += 1;
    }
  }

  num_of_days = num_of_days + 1;

  return num_of_days;
}
var shipWithinDays = function(weights, days) {
  let low = getMinElement(weights);
  let high = getMaxElement(weights);
  let ans = -1;
  while (low <= high) {
    let min_capacity = Math.floor((low + high) / 2);
    let Actualdays = calculateActualDays(weights, min_capacity);
    if (Actualdays <= days) {
      ans = min_capacity;
      high = min_capacity - 1;
    } else {
      low = min_capacity + 1;
    }
  }
  return ans;
};