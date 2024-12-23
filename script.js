

function monthlyBudgetPlanner() {
    let income = prompt("enter the income : ")

    let list = prompt("enter the total no of items : ")
    let sum = 0;
    for (let i = 0; i < list; i++) {
        let expenses = +prompt("enter the expenses : ")
        sum += expenses;
    }

    let remaining = income - sum;
    document.write(`The remaining balance - ${remaining}`);
    console.log(remaining);
}


function taxiFareCalculator() {
    let distance = +prompt("enter the distance : ");
    let amount = 0;

    if (distance < 2) {
        amount = distance * 3;
    } else if (distance > 2) {
        let extra = distance - 2;
        amount = (extra * 5) + (2 * 3);
    }
    document.write(`The Total fare is : ${amount} `)

    console.log(amount);
}


function universityAttendanceTracker() {
    let students = prompt("enter the number of students :  ")
    let details = []
    for (let i = 0; i < students; i++) {
        let obj = {};
        obj.name = prompt("enter the name : ")
        obj.attendence = +prompt("enter the attendence : ")
        details.push(obj);
    }
    let ans = details.filter((val) => val.attendence >= 75)
    for (x of ans) {
        console.log(x)
    }
}

function speedingTicketCheck() {
    let speed = prompt("Enter the speed : ");
    let speedLimit = prompt("Enter the speed limit : ");

    if (speed > speedLimit) {
        console.log("crossing speed limit")
    }
}



function currencyConverter() {
    let inr = Number(prompt("enter the currency in inr to convert in dollars:"));
    let dollars = (inr / 84).toPrecision(2);
    if (dollars < 1 && dollars > 0) {
        console.log(`${inr} rupees in dollars is ${dollars}cents`);
    }
    else {
        console.log(`${inr} rupees in dollars is ${dollars} dollars`);
    }
}