now = new Date(), now.getTimezoneOffset() * 60 * 1000;
g = document.getElementById('greeting');
g.innerText = "";
if (now.getHours() < 12) g.innerText = "Good morning.";
else if (now.getHours() < 17) g.innerText = "Good afternoon.";
else g.innerText = "Good evening.";