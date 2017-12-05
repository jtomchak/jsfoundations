//TODO
// In this project, we will be building what is called Bing Bong.This application will loop through a list of
//   0 - 100. For each number,
//   if it is divisible by 3, you will print 'Bing'
// to the console.If it is divisible by 5, you will print 'Bong'
// to the console.If the number is divisible by 3 and 5, you will print both 'Bing'
// and 'Bong'.

for (var i = 0; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log(i + " Bing Bong");
  } else if (!(i % 5)) {
    console.log(i + " Bong(5)");
  } else if (!(i % 3)) {
    console.log(i + " Bing(3)");
  } else {
    console.log(i);
  }
}
