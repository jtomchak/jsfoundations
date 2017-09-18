//TODO
// In this project, we will be building what is called Bing Bong.This application will loop through a list of
//   0 - 100. For each number,
//   if it is divisible by 3, you will print 'Bing'
// to the console.If it is divisible by 5, you will print 'Bong'
// to the console.If the number is divisible by 3 and 5, you will print both 'Bing'
// and 'Bong'

for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Bing Bong -- " + i);
  } else if (i % 3 === 0) {
    console.log(`Bing -- ${i}`);
  } else if (i % 5 === 0) {
    console.log(`Bong -- ${i}`);
  } else {
    console.log(i);
  }
}
