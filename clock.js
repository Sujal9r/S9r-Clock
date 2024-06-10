function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // Convert 24-hour time to 12-hour time
  
    const secondDegree = seconds * 6; // 360 degrees / 60 seconds
    const minuteDegree = minutes * 6 + seconds * 0.1; // 360 degrees / 60 minutes + 6 degrees / 60 seconds
    const hourDegree = hours * 30 + minutes * 0.5; // 360 degrees / 12 hours + 30 degrees / 60 minutes
  
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
  
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
  }
  
  setInterval(updateClock, 1000);  
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12; // Convert 24-hour time to 12-hour time

  const secondDegree = seconds * 6; // 360 degrees / 60 seconds
  const minuteDegree = minutes * 6 + seconds * 0.1; // 360 degrees / 60 minutes + 6 degrees / 60 seconds
  const hourDegree = hours * 30 + minutes * 0.5; // 360 degrees / 12 hours + 30 degrees / 60 minutes
 
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
 
setInterval(updateClock, 1000);