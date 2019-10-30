// // // console.log("hey running in node");

// // // console.log(process.argv);

// // var fs = require("fs");

// // fs.readFile("data.csv", "utf8", function(err, data) {
// //   if (err) {
// //     fs.writeFile("log.txt", err, function(error) {
// //       if (error) {
// //         return console.log(err);
// //       }

// //       console.log("Error Check Your Logs!");
// //     });
// //     return;
// //   }

// //   console.log(data);
// // });

// // let userInput = process.argv.slice(2);

// // fs.writeFile("log.txt", userInput, function(err) {
// //   if (err) {
// //     return console.log(err);
// //   }

// //   console.log("Success!");
// // });

// const inquirer = require("inquirer");

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your user name?",
//       name: "username"
//     },
//     {
//       type: "password",
//       message: "What is your password?",
//       name: "password"
//     }
//   ])
//   .then(function(res) {
//     console.log("Welcome Back " + res.username);
//     fs.writeFile("log.txt", userInput, function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   });

// let movieName = "The";

// movieName = movieName.split(" ").join("%");

// console.log(movieName);

const axios = require("axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res);
  });
