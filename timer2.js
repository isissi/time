const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
process.stdin.write(`Please input a number between 1 and 9: \n`);

stdin.on("data", (key) => {
  if (key === "b" || key === "B") {
    process.stdout.write("\x07\n");
    process.stdin.write(`Please input a number between 1 and 9: \n`);
  }
  if (Number(key) > 0 && Number(key) < 10) {
    setTimeout(() => {
      process.stdout.write("\x07");
      process.stdin.write(`\nPlease input a number between 1 and 9: \n`);
    }, 1000*Number(key));

  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});

// rl.question(`Please input a number between 1 and 9: \n`, (answer) => {
//   if (Number.isInteger && answer < 10 && answer > 0) {
//     console.log(`Setting timer for ${answer} seconds...`);
//     setTimeout(() => {
//       process.stdout.write("\x07");
//     }, answer * 1000);
//     rl.close();
//   } else {
//     console.log("Invalid input!");
//   }
// });
