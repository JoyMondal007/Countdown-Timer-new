const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secondsEl=document.getElementById("seconds");

const futureDate="1 Jan 2024";

function countDown(){
    const futureDates=new Date(futureDate);
    const currentDate=new Date();
    
    const totalSeconds=(futureDates-currentDate)/1000;
    
    /*const days = Math.floor(second / (3600*24));
    const hours = Math.floor(second % (3600*24) / 3600);
    const mins = Math.floor(second % 3600 / 60);
    const seconds = Math.floor(second % 60);*/
  

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //console.log(days ,hours ,mins ,seconds);
      
    daysEl.textContent=(days);
    hoursEl.textContent=getZero(hours);
    minsEl.textContent=getZero(mins);
    secondsEl.textContent=getZero(seconds);

}

function getZero(zero){
    return  zero < 10 ? `0${zero}`:zero; 
}

countDown();
setInterval(countDown, 1000);