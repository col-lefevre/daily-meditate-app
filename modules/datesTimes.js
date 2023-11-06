// Converts seconds to Min:Sec format
function formatTimer(timer) {
    let mins = Math.floor(timer / 60);
    let secs = timer % 60;

    let formatMins = String(mins).padStart(2, "0");
    let formatSecs = String(secs).padStart(2, "0");

    return `${formatMins}:${formatSecs}`;
}

// Formats timestamp into readable string
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let formattedTime = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // timeZoneName: "short",
    }).format(date);
    return formattedTime;
}

function getDay() {
    let date = new Date();
    let formattedTime = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
    }).format(date);
    return formattedTime;
}

export { formatTimer, formatDate, getDay };
