const input = process.argv;
let times = input.slice(2);



for (let time of times) {
  let delay = Number(time);
  
  if (delay < 0) {
    continue
  }

  setTimeout(() => {
    process.stdout.write("\x07");
    console.log("beep:" , delay);
  }, delay * 1000);

}
