
//01- Function for add zero
function zero(time) {
    return time < 10 ? '0' + time : time;
}

// Data sent to local storage
function sendData(key, arr) {
    let data = JSON.stringify(arr)
    localStorage.setItem(key, data);
    return true;
}
// Data get from local storage
function getData(key) {
    let data = localStorage.getItem(key)

    return JSON.parse(data);
}