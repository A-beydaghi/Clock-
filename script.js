let hh = document.querySelector(".h")
let mm = document.querySelector(".m")
let ss = document.querySelector(".s")
let session = document.querySelector(".status")


function time() {
    let now = new Date();
    let currentTime = Intl.DateTimeFormat('en-US', {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).formatToParts(now)

    hh.textContent = currentTime[0].value;
    mm.textContent = currentTime[2].value;
    ss.textContent = currentTime[4].value;
    session.textContent = currentTime[6].value;
}
setInterval(time, 1000)
