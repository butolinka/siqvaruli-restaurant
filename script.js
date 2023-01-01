// menu
const items=document.querySelectorAll(".item");
items.forEach(item=>{
    item.addEventListener("click", ()=>{
        removeFocus();
        item.classList.add('selected');
    })
})
removeFocus=()=>{
    items.forEach(item=>{
        item.classList.remove('selected');
    })
}

// first event countdown
function firstEvent(){
    const firstevent = new Date ('July 30, 2023 18:00');
    
    const now = new Date();
    const diff = firstevent-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#firsteventd').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#firsteventh').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#firsteventm').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#firstevents').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#firsteventd').textContent=0;
        document.querySelector('#firsteventh').textContent=0;
        document.querySelector('#firsteventm').textContent=0;
        document.querySelector('#firstevents').textContent=0;
        clearInterval(timerFirst);

        hereIsFirstEvent();
    }
}
let timerFirst=setInterval( firstEvent, 1000);

function hereIsFirstEvent(){
    const selebrateFE= document.querySelector('#happyFE');
    selebrateFE.textContent="Let's enjoy Georgian music! 07/30/2023"
}

// second event countdown
function secondEvent(){
    const secondevent = new Date ('August 06, 2023 18:00');
    
    const now = new Date();
    const diff = secondevent-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#secondeventd').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#secondeventh').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#secondeventm').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#secondevents').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#secondeventd').textContent=0;
        document.querySelector('#secondeventh').textContent=0;
        document.querySelector('#secondeventm').textContent=0;
        document.querySelector('#secondevents').textContent=0;
        clearInterval(timerSecond);

        hereIsSecondEvent();
    }
}
let timerSecond=setInterval( secondEvent, 1000);

function hereIsSecondEvent(){
    const selebrateSE= document.querySelector('#happySE');
    selebrateSE.textContent="Sheff's special honey backlava for you as a complement! Enjoy! 08/06/2023"
}

// third event countdown
function thirdEvent(){
    const thirdevent = new Date ('September 03, 2023 18:00');
    
    const now = new Date();
    const diff = thirdevent-now;
     
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    const DisplayDay=Math.floor(diff/msInDay);
    document.querySelector('#thirdeventd').textContent=DisplayDay;
    const DisplayHour=Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#thirdeventh').textContent=DisplayHour;
    const DisplayMinutes=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#thirdeventm').textContent=DisplayMinutes;
    const DisplaySeconds=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#thirdevents').textContent=DisplaySeconds;

    if (diff<=0){
        document.querySelector('#thirdeventd').textContent=0;
        document.querySelector('#thirdeventh').textContent=0;
        document.querySelector('#thirdeventm').textContent=0;
        document.querySelector('#thirdevents').textContent=0;
        clearInterval(timerThird);

        hereIsThirdEvent();
    }
}
let timerThird=setInterval( thirdEvent, 1000);

function hereIsThirdEvent(){
    const selebrateTE= document.querySelector('#happyTE');
    selebrateTE.textContent="Happy Labor Day weekend! 09/03/2023"
}

// animations
gsap.from('h1',{
    duration:2, opacity:0
})
gsap.from(".description",{
    duration:2, opacity:0
})

gsap.from('a',{
    duration:1.5, x:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.item',{
    duration:1.5, x:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.bookAnim',{
    duration:2, y:-200, stagger:0.5, delay:0.5, opacity:0
})

gsap.from('.picture',{ scale:0.1, duration:2})


