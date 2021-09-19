var billAmount = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-gn");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");

 checkButton.addEventListener("click", function validateBillAndCashAmount() {
     message.style.display = "none";

    if(billAmount.value > 0){

        if(cashGiven.value >= billAmount.value){
            var balanceAmount   =   cashGiven   -   billAmount;


        }
    }else{
       displayMessage("Amount should ge greater than 0");

    }

 

} );

function displayMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

}