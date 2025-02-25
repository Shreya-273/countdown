const endDate ="7 october 2025 12:00 AM";
document.getElementById("end-date").innerText = endDate; 
const inputs = document.querySelectorAll("input");
function clock() {
const end = new Date(endDate);
const now = new Date();
const diff = (end - now) / 1000;
if(diff < 0) return;
const days = Math.floor(diff / 3600 / 24);
const hours = Math.floor((diff / 3600) % 24);
const minutes= Math.floor((diff / 60) % 60);
const seconds = Math.floor(diff %60);

console.log(`Days: ${days}, Hour: ${hours}, Minutes: ${minutes}, Secounds: ${seconds}`);

inputs[0].value = days;
inputs[1].value = hours;
inputs[2].value = minutes;
inputs[3].value = seconds;


}

setInterval(clock,1000);

clock()