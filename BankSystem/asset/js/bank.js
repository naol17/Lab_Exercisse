//Bank System!!! 



var initialamount = 1000;

function deposit() {
    let amount = prompt("Enter amount of Deposit to be made.")
    afterdepo = initialamount + parseInt(amount)
    initialamount = afterdepo;
    window.alert("Deposit is made and your balance is: " + afterdepo);

}

function withdraw() {
    let draw = window.prompt("Enter Amount to Windrow")
    let x = parseInt(draw);

    if (x > initialamount || x < 100) {
        window.alert("Your balance is insufficient for this service");

    } else {
        let wzdrawal;

        wzdrawal = initialamount - x;
        window.alert("windrow made & your remaining balance is : " + wzdrawal);

    }

}

function balance() {
    window.alert("Your current balance is. " + initialamount);

}


let trans = {
    personname: "John",
    accnum: "123456",


}


function transfer(x, y) {
    x = prompt("Enter Receiver name");
    y = prompt("Enter Account number");
    let transaction;
    let amounttransfer = prompt("Enter amount")

    transmoney = parseInt(amounttransfer);

    if (x != trans.personname || y != trans.accnum) {
        window.alert("Incorrect user Name or account number!..")
    } else {
        if (transmoney > initialamount && transmoney < 100) {
            window.alert("Your balance is insufficient ")
        } else {
            transaction = initialamount - transmoney;
            window.alert("Trans made to : " + x + " : " + " And account number: " + y + " and  ur remaining balance is: " + transaction)
        }
    }

}

window.alert("WelCome what Action Do yur prefer?")
choice = ['1: Deposit\n', '2: withdraw\n', '3: Check Balance\n', '4: Transfer\n', "0 to exit"];
let entry;
entry = window.prompt(choice);


switch (entry) {
    case "1":
        deposit();
        break;
    case "2":
        withdraw();
        break;
    case "3":
        balance();
        break;
    case "4":
        transfer();
        break;
    default:
        window.prompt("Error Service not found!!.")
        break;

}



console.log("***************************************************");
console.log("Your Balance is: " + initialamount);
console.log("***************************************************");