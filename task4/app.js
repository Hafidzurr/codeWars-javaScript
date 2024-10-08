
function findWord(words) {
    const longest = words.reduce(function(a, b) {
        return a.length > b.length ? a : b;
    });
    
    const shortest = words.reduce(function(a, b) {
        return a.length < b.length ? a : b;
    });
    
    return (`Kata terpanjang adalah ${longest}, dan kata terpendek adalah ${shortest}`);
}

console.log(findWord(['Adiwarna', 'Bentala', 'Candramawa', 'Derana', 'Ejawantah']));