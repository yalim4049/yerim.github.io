const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDay() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const Week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = Week[date.getDay()];

    day.innerText = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
}

getClock();
getDay();
setInterval(getClock, 1000);