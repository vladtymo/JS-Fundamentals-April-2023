// ------------- working with BOM
window.console.log("Hello BOM!");

// --------- window
console.log(window);
console.log(`Window size: ${window.innerHeight}x${window.innerWidth}`);

// --------- history
console.log(window.history);

//history.go(-3);   // go back 3 pages
//history.go(3);      // go forward 3 pages

backBtn.onclick = () => {
    history.back();
}
forwardBtn.onclick = () => history.forward();

// --------- screen
console.log(window.screen);

// --------- location
console.log(location);

//location.assign("https://google.com"); // save history

w3schoolBtn.onclick = () => location.replace("https://w3schools.com"); // remove history

// --------- navigator
console.log(navigator);

// --------- geolocation
console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((res) => {
    console.log(`My location: ${res.coords.latitude} : ${res.coords.longitude}`);
}, () => console.log("Cannot get your location!"));
