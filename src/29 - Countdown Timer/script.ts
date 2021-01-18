let countDown;
function timer(seconds: Number) {
  //setInterval(..., 1000) doesn't quite "work" in IOS
  const now = Date.now;
  const then = now + seconds * 1000;
  setInterval(() => {
    let secondsLeft = Math.round((then - now) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(seconds) {
  console.log(seconds);
}
