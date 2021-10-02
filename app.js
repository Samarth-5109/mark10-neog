var billAmount = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-gn");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes   =   [2000, 500, 100, 20, 10, 5, 1];

 checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount !==""){
        if(Number(billAmount.value) > 0){

            if((Number(cashGiven.value)) >= (Number(billAmount.value))){
                var balanceAmount   =   cashGiven.value   -   billAmount.value;
               
                calculateBalanceAmount(balanceAmount);
    
    
            } else{
                displayMessage("Cash provided should be atleast equal to the bill amount ");
            }
        }else{
           displayMessage("Amount should ge greater than 0 or check if any field is missing");
    
        }
    }
   

 

} );


function calculateBalanceAmount(balanceAmount){
    for(var i =0; i< notes.length; i++){
        var numberOfNOtes   =   Math.trunc(balanceAmount / notes[i]);
        balanceAmount   %=   notes[i];
        noOfNotes[i].innerText = numberOfNOtes;        


    }

}

function hideMessage(){
    message.style.display = "none";
}

function displayMessage(msg){
    message.style.display = "block";
    message.innerText = msg;

}