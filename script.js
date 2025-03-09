// Selecting by id name like hour minute second inside HTML tag
let hour = document.getElementById('hour');
let minute = document.getElementById('min');
let second = document.getElementById('sec');

function ViewTime(){
    // selected in  current Date 
    let date = new Date();

    // Getting hours, mins, secs from date
    let HourOfHours = date.getHours();
    let MinuteOfMinuts = date.getMinutes();
    let SecondOfSeconds = date.getSeconds();

    // For rotaion code in 24 Hours 
    let HourR = 30*HourOfHours + MinuteOfMinuts/2;
    let MinuteR = 6*MinuteOfMinuts;
    let SecondR = 6*SecondOfSeconds;

    // For transform setting in rotate 360deg
    hour.style.transform = `rotate(${HourR}deg)`;
    minute.style.transform = `rotate(${MinuteR}deg)`;
    second.style.transform = `rotate(${SecondR}deg)`;

}

// setInterval method calls a Viewtime Method and repeating task again and again 
setInterval(ViewTime, 1000);
