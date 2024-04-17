const clock = document.getElementById('clock');
const dinak = document.getElementById('dinak');
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    let month = date.getMonth()
    const year = date.getUTCFullYear()
    const day = date.getUTCDate()
    month = month + 1;
    dinak.innerHTML = `${day}.0${month}.${year}`;
}, 1000);
