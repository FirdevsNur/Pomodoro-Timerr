let timer = document.getElementById("timer");
let long = document.getElementById("long");
let medium = document.getElementById("medium");
let short = document.getElementById("short");
let startt = document.getElementById("start");
let stopp = document.getElementById("stop");
let dakika,saniye;

let longBreakMinute=10;
let mediumBreakMinute=15;
let shortBreakMinute=10;

let seconds, breaksecond;
let breakInterval, timerInterval;
let i;

long.addEventListener("click",() => {
    i=50;
    b=20;
    long.classList.add("active");
    medium.classList.remove("active");
    short.classList.remove("active");
    seconds=i*60;
    breaksecond=b*60;
    timer.innerHTML="50:00"
    clearInterval(timerInterval);
    clearInterval(breakInterval);
})
medium.addEventListener("click",() => {
    i=45;
    b=15;
    medium.classList.add("active");
    long.classList.remove("active");
    short.classList.remove("active");
    seconds=i*60;
    breaksecond=b*60;
    timer.innerHTML="45:00"
    clearInterval(timerInterval);
    clearInterval(breakInterval);
})
short.addEventListener("click",() => {
    i=30;
    b=10;
    short.classList.add("active");
    medium.classList.remove("active");
    long.classList.remove("active");
    seconds=i*60;
    breaksecond=b*60;
    timer.innerHTML="30:00"
    clearInterval(timerInterval);
    clearInterval(breakInterval);
})

function timerstart(){
    document.getElementById("inform").innerHTML="Work Time!"
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    timerInterval=setInterval(() => {

    if(seconds<=0){
        clearInterval(timerInterval);
        document.getElementById("inform").innerHTML="Break Time!"
        breakInterval = setInterval(() => {
            if(breaksecond<=0){
                clearInterval(breakInterval);
                seconds=i*60;
                breaksecond=b*60;
                timerstart();
                                
            }else{
                breaksecond--;
                dakika = Math.floor(breaksecond/60)%60;
                saniye = Math.floor(breaksecond)%60;

                timer.innerHTML= `${format(dakika)}:${format(saniye)}`;
            }
        },1000)

    }else{
        seconds--;
        dakika = Math.floor(seconds/60)%60;
        saniye = Math.floor(seconds)%60;

        timer.innerHTML= `${format(dakika)}:${format(saniye)}`;
    }
},1000)}

startt.addEventListener("click",() => {
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    timerstart();
} )

stopp.addEventListener("click",() => {
    clearInterval(timerInterval);
    clearInterval(breakInterval);
} )

function format(a) {
    return a<10 ? `0${a}` : a ;
}