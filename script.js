function christmasCountdown(){
    const christmasDate = new Date('December 25, 2024 00:00');
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minuts').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minuts').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }
}
function merryChristmas(){
    const heading = document.querySelector('h1');
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!!!"
    heading.classList.add('red');
}
        let timerID = setInterval(christmasCountdown,1000);

const search = document.querySelector('.input-line');
const box = document.querySelectorAll('.card')

search.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    box.forEach(item =>{
        item.querySelector('p').textContent.toLowerCase().includes(word) ?
        (item.style.display = 'block') : (item.style.display = 'none')
    })
})

const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const prediction = [
    "Christmas meetings will bring warmth and comfort to the house and the heart.",
    " A trip to the sea awaits you soon. ",
    " Let a tear of joy shed, soon an old friend will return! .",
    " Down with anger and revenge, you will receive good news. ",
    " Wait for the sunset, wait for the dawn, wait for a sweet greeting. ",
    " Every day and every hour someone thinks of you. ",
    " Look ahead more cheerfully, there wealth awaits you. ",
    " Wait a bit, the road is waiting for you. ",
    " Gingerbread and sweets, there will be a lot of joy. ",
    " Holidays and fun await you at the end of the week. ",
    " Suddenly you have a new friend. ",
    " Wait without crying, good luck will come to you. ",
    " The sun again and happiness again - you will meet a new love. ",
    " By next Saturday, expect success in your work. ",
    " You will always have delicious food in the house. "
]

button.addEventListener("click", ()=>{
    let randomPrediction = prediction[Math.floor(Math.random()*prediction.length)];
    par.style.display = "block";
    par.textContent = randomPrediction 
})