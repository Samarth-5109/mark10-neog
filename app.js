var billAmount = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-gn");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector()

 checkButton.addEventListener("click", function validateBillAndCashAmount() {

    if(billAmount.value > 0){

        if(cashGiven.value >= billAmount.value){
            var balanceAmount   =   cashGiven   -   billAmount;


        }
    }else{
        
    }

 

} );
