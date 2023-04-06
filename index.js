function test1(num) {
    const divisible = (divisor, num) => num % divisor === 0

    if(divisible(3, num) && divisible(5, num)) return 'Es multiplo de 3 y multiplo de 5'

    if(divisible(3, num)) return 'Es multiplo de 3'

    if(divisible(5, num)) return 'Es multiplo de 5';

    return 'No multiplo'    
}

function num(numRecord) {
    for(let i = 1; i < numRecord; i++) {
        console.log(`${i}: ${test1(i)}`);
    } 
} 

num(101)
