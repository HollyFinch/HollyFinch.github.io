var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Fine evening";
} else if (hourNow > 12) {
  greeting = "Good afternoon";
} else if (hourNow > 0) {
  greeting = "Top of the morning to you 🎩☕";
} else {
  greeting = "Welcome";
}

document.write(greeting);
