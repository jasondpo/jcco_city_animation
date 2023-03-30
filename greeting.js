//// Greeting ////

function showGreeting(){
    let d = new Date();
    let currtime = d.getHours() * 100 + d.getMinutes();

    if (currtime > 1199 && currtime < 1800) {
        document.querySelector('#greeting-message').innerHTML = 'Good afternoon, from the County Clerk!';
    } if (currtime > 1799 && currtime < 2399) {
        document.querySelector('#greeting-message').innerHTML = 'Good evening, from the County Clerk!';
    } if (currtime > 0 && currtime < 1200) {
        document.querySelector('#greeting-message').innerHTML = 'Good morning, from the County Clerk!';
    }
}
showGreeting();

setInterval(showGreeting, 10000);
