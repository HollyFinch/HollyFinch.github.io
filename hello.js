var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow == 0) {
  greeting = "Happy midnight ⛤🕯️👻";
} else if (hourNow > 3 && hourNow <= 11) {
  greeting = "Top of the morning to you 🎩☕";
} else if (hourNow > 11 && hourNow <= 17) {
  greeting = "Good afternoon";
} else if (hourNow > 17 && hourNow <= 21) {
  greeting = "Fine evening";
} else {
  greeting = "Bonne nuit";
}

document.write(greeting);
console.log(hourNow);
