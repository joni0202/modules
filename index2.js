// FILE PACKAGE

// const calculate = require("./hisob");

// const result = calculate.kopaytirish(80, 20);
// console.log("natija: ", result);
// console.log("***************");

// const result2 = calculate.ayrish(80, 20);
// console.log("natija: ", result2);

//******************************************************* */

const Account = require("./account");

Account.tellMeAboutClass();
Account.tellMeTime();

const myAccount = new Account("Martin", 200000, 2345234672534);

myAccount.giveMeDetails();
myAccount.makeDeposit(123);
myAccount.withdrawMoney(24000000);
