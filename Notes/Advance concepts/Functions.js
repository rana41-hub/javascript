let value = prompt("Enter the string : ");


function vowelcount(value) {
    
    let lowercaseValue = value.toLowerCase();
    
    let count = 0;
    
    for(let j = 0 ; j < lowercaseValue.length ; j++) {
        
        if(lowercaseValue[j] == "a" || lowercaseValue[j] == "e" || lowercaseValue[j] == "i" || lowercaseValue[j] == "o" || lowercaseValue[j] == "u") {
            
            count++;
        }
    }
    
    console.log(`Total number of vowels in ${value} = ${count}`);
}

vowelcount(value);