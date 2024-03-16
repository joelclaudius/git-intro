const x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
