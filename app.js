const inputEl = document.querySelectorAll('.ip-elmnt');
const checkBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output-div');
    
function clickHandler() {
    if(inputEl[0].value === "" || inputEl[1].value === "" || inputEl[2].value === ""){
        showMessage(`Please enter the required field`)
    }else if(inputEl[0].value <= 0 || inputEl[1].value <= 0 || inputEl[2].value <= 0) {
        showMessage(`Please enter correct value for input`)
    } else {
        var initialPrice = Number(inputEl[0].value);
        var stockQuantity = Number(inputEl[1].value);
        var currentPrice = Number(inputEl[2].value);
    
        calculateProfitAndLoss(initialPrice, stockQuantity, currentPrice);
    }
   
}
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / (initial * quantity)) * 100).toFixed(2) ;
        outputDiv.style.color = "green";
        showMessage(`Your profit is ₹${profit} & profit percentage is ${profitPercentage}%`);
    } else if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / (initial * quantity)) * 100).toFixed(2) ;
        outputDiv.style.color = "red";
        showMessage(`Your loss is ₹${loss} & loss percentage is ${lossPercentage}%`);
    } else {
        showMessage(`No profit! No loss!!`)
    }
}

function showMessage(msg) {
    outputDiv.innerText = msg;
}

checkBtn.addEventListener('click', clickHandler);