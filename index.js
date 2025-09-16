// // Module package CORE
// let number = 0;
// setInterval(function () {
//   console.log("hisob", number);
//   number++;
// }, 1000);

// const fs = require(`fs`);
// const data = fs.readFileSync(`./input.txt`, `utf8`);
// console.log(data);

// console.log(`****************`);

// fs.writeFileSync("./input.txt", `${data} \n\t\t by BekzodAli`);
// const new_data = fs.readFileSync(`./input.txt`, `utf8`);
// console.log(new_data);

// Module package EXTERNAL

// const moments = require(`moment`);
// const time = moments().format();
// // console.log(time);

// setInterval(() => {
//   const time = moments().format();
//   console.log(`hozzigi vaqt: ${time}`);
// }, 1000);

// const inquirer = require(`inquirer `);
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting! :" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const validator = require("validator");
// const test = validator.isIP("123.345.45");
// console.log("test:", test);

// const { v4: uuidv4 } = require(`uuid`);
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require("chalk");
// const log = console.log;

// log(chalk.yellow("hello") + chalk.red(" world"));
