var date;
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 80);
    setTicketTime();
    setPhoneTime();
    setTicketDate();
    setInterval(setTicketTime, 1000);
    setInterval(setPhoneTime, 30000);
}, false);

function setTicketTime() {
    date = new Date();
    ticketTime.innerText = pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
}
function setPhoneTime() {
    phoneTime.innerText = pad(date.getHours()) + ':' + pad(date.getMinutes());
}
function setTicketDate() {
    ticketDate.innerText = date.toLocaleString('en-us', {month: 'short'}) + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function pad(time) {
    return ('0' + time).slice(-2);
}