// Set the date we're counting down to
const countDownDate = new Date("December 11, 2025 15:29:59").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an elements with id="days" id="hours" id="minutes" id="seconds"
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text and set all the digits to 0
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("registration").innerHTML = "Registration Expired: ";
		document.getElementById("days").innerHTML = 0;
		document.getElementById("hours").innerHTML = 0;
		document.getElementById("minutes").innerHTML = 0;
		document.getElementById("seconds").innerHTML = 0;
  }
}, 1000);
