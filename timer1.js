const input = process.argv;
let times = input.slice(2);

times.sort((a, b) => a - b);

let validTimes = [];

for (let time of times) {
  if (time > 0 || Number.isInteger(time)) {
    validTimes.push(time);
  }

  if (validTimes.length === 0) {
    console.log("No invalid time provided");
    return false;
  } else {
    for (let time of validTimes) {
      time *= 1000;
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time);
    }
  }
}
