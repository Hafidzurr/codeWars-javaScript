function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
 }
 
 const result = disemvowel('This website is for losers LOL!');
 console.log(result);