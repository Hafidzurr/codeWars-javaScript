function getCount(str) {
    str = str.toLowerCase();
    
    const matches = str.match(/[aeiou]/g);
    const counts = matches ? matches.length : 0;
    
    return counts;
}

const result = getCount('This website is for losers LOL!');
console.log(result);