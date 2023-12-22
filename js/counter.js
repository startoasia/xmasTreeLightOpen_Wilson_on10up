function timeLeft() {
    // 倒數計時結束時間
    let end = new Date("12/31/2023 23:59:59");

    // 當下時間
    let currentTime = new Date();

    // 要帶入計時器的總毫秒數
    let total_ms = parseInt(end.getTime()) - parseInt(currentTime.getTime());
    countDown(total_ms);
}

let count = window.setInterval(timeLeft, 1);

function countDown(total_ms) {
    // 秒數
    let secs = Math.floor(total_ms / 1000);

    // 毫秒
    let ms = total_ms
        .toString()
        .substring(total_ms.toString().length - 3, total_ms.toString().length - 2);

    // 天數
    let days = Math.floor(secs / 86400);
    secs %= 86400;

    // 小時
    let hours = Math.floor(secs / 3600);
    secs %= 3600;

    // 分鐘
    let mins = Math.floor(secs / 60);
    secs %= 60;

    let timer;
    if (total_ms <= 0) {
        timer = `00:00:00`;
        clearInterval(count);
    } else {
        timer =
            (days < 10 ? "0" : "") +
            days +
            "天" +
            (hours < 10 ? "0" : "") +
            hours +
            "時" +
            (mins < 10 ? "0" : "") +
            mins +
            "分" +
            (secs < 10 ? "0" : "") +
            secs +
            "." +
            ms;
    }

    document.getElementById("countdown").innerHTML = timer;
}