
function ladder(word) {
    result = [];

    for (let i = word.length; i > 0; i--) {
        let row = [];
        for (let j = 0; j < i; j++) {
            row.push(word[j]);
        }
        result.push(row);
    }

    return result;
}

console.log(ladder('hacktiv8'));