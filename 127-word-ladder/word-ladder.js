/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function wordLadder(s, beginWord, endWord) {
    if (!s.has(endWord)) return 0;

    let queue = [];
    let index = 0;
    queue.push([beginWord, 1]);

    while (index < queue.length) {
      let [word, frequency] = queue[index];
      index++;

      let charArray = word.split("");

      for (let i = 0; i < charArray.length; i++) {
        let originalChar = charArray[i];

        for (let c = 97; c <= 122; c++) {
          let ch = String.fromCharCode(c);
          if (ch === originalChar) continue;

          charArray[i] = ch;
          let newWord = charArray.join("");

          if (s.has(newWord)) {
            if (newWord === endWord) return frequency + 1;

            queue.push([newWord, frequency + 1]);
            s.delete(newWord);
          }
        }

        charArray[i] = originalChar;
      }
    }

    return 0;
  }

var ladderLength = function(beginWord, endWord, wordList) {
        let s = new Set([...wordList]);
        let ans = wordLadder(s, beginWord, endWord);
        return ans;
};