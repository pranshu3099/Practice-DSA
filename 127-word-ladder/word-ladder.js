/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */




var ladderLength = function(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if(!set.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    let start = 0;
    while(start < queue.length){
        const [word, level] = queue[start++];
        if(word === endWord) return level;
        const wordArr = word.split('');
        for(let i = 0; i<word.length; i++){
            const originalChar = word[i];
            for(let charCode = 97; charCode <= 122; charCode++) {
                const newChar = String.fromCharCode(charCode);
                if(newChar === originalChar)continue;
                wordArr[i] = newChar;
                const newWord = wordArr.join("");
                if(set.has(newWord)){
                    queue.push([newWord, level+1]);
                    set.delete(newWord);
                }
            }
            wordArr[i] = originalChar;
        }
    }
    return 0;
};