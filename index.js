// TODO: this file! :)

//STATE
    //vars for each box
const bank = [];
const odds = [];
const evens = [];

//to add input number to bank
function addToBank(num){
    bank.push(num);
}

//sort odds and evens
function numberSorter(){
    //grab first number from bank
    const num = bank.shift();
    //if num % 2 === 0; => append to evens
    if(num % 2 ===0){
        evens.push(num);
    }   else {
        odds.push(num);
    }
    //else append to odd
}
//end state

//RENDER
    //push bank to <#numberBank>
    //push odds to <#odds>
    //push evens to <#evens>

//SCRIPT
    //sort 1: send first num in bank to odds/evens
    //sort all: loop sort 1 for length of bank

