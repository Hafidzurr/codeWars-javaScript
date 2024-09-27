function solution(number){
    let sum = 0;

    for (i = number - 1; i > 0; i--){        
        if (i % 3 === 0 || i % 5 === 0) {
            if (number < 0) {
                console.log(0);
                }
        sum += i;
        } 
    }
    console.log(sum);
    return sum;
}

solution(10);

