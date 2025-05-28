function otoslotto() {
    const numbers = new Set(); 

    while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 90) + 1; // 1 és 90 között
        numbers.add(randomNumber); 
    }

    return Array.from(numbers).sort((a, b) => a - b); 
}

console.log(otoslotto());
