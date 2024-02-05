var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Fine evening";
} else if (hourNow > 11) {
  greeting = "Good afternoon";
} else if (hourNow > 3) {
  greeting = "Top of the morning to you 🎩☕";
} else if (hourNow == 0) {
  greeting = "Happy midnight 👻🕯️";
} else {
  greeting = "Welcome";
}

document.write(greeting);
