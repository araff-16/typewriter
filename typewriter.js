const sentence = "hello there from lighthouse labs"

let wait = 0
for (const char of sentence) {
  //process.stdout.write(char)
  setTimeout(() => {
    process.stdout.write(char);
  }, wait)
  wait += 70
}

setTimeout(() => {
  console.log('\n');
}, wait)