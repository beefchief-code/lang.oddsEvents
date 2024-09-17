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

//render any number
function renderNumber(numbers, $element){
    const $nums = numbers.map((num) => {
        const $num = document.createElement("span");
        $num.textContent = num;
        return $num;
    });
    $element.replaceChildren(...$nums);
}
    
    function render(){
        const $bank = document.querySelector("#numberBank output");
        renderNumber(bank, $bank);
        const $odds = document.querySelector("#odds output");
        renderNumber(odds, $odds);
        const $evens = document.querySelector("#evens output");
        renderNumber(evens, $evens);
    }
    //push bank to <#numberBank>
    //push odds to <#odds>
    //push evens to <#evens>

//SCRIPT
    //init render
    render();
    //send input to bank on submit
    const $form = document.querySelector("form");
        $form.addEventListener("submit", (event) => {
            //prevent refresh
            event.preventDefault();
            //get form to js
            const $input = document.querySelector("#number");
            //input value to var
            const input = $input.value;
            
            $input.value = "";

            addToBank(input);
            render();
        });
    //sort 1: send first num in bank to odds/evens
    const $sortOne = document.querySelector("#sortOne");
        $sortOne.addEventListener("click", () => {
            numberSorter();
            render();
        });

    //sort all: loop sort 1 until bank empty
        const $sortAll = document.querySelector("#sortAll");
        $sortAll.addEventListener("click", () =>{
            while (bank.length > 0){
                numberSorter();
            }
            render();
        });
