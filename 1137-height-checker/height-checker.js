/**
 * @param {number[]} heights
 * @return {number}
 */


var heightChecker = function (heights = []) {
  let n = heights.length;
  let count = 0;
  const expected = [...heights].sort((a, b) => a - b);
  for(let i=0;i<n;i++){
    if(heights[i]!==expected[i]){
        count++;
    }
  }
  return count;
};