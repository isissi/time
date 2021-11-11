const input = process.argv;
let times = input.slice(2);

times.sort((a, b) => a - b);

for (let time of times) {
  time *= 1000;
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time);
}
