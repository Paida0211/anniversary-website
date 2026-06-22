function updateAnniversaryCounter(){

    const marriageDate =
    new Date("July 2, 2000 00:00:00");

    const now = new Date();

    let diff =
    now - marriageDate;

    let seconds =
    Math.floor(diff / 1000);

    let minutes =
    Math.floor(seconds / 60);

    let hours =
    Math.floor(minutes / 60);

    let days =
    Math.floor(hours / 24);

    let years =
    Math.floor(days / 365.25);

    days =
    Math.floor(days % 365.25);

    let months =
    Math.floor(days / 30.44);

    days =
    Math.floor(days % 30.44);

    hours =
    hours % 24;

    minutes =
    minutes % 60;

    seconds =
    seconds % 60;

    document.getElementById(
    "anniversaryCounter"
    ).innerHTML =

`❤️ ${years} Years • ${months} Months • ${days} Days • ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds ❤️`;
}

updateAnniversaryCounter();

setInterval(
updateAnniversaryCounter,
1000
);
function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML ='<img src="rose-petal.png" class="petal-img">';

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    (Math.random()*5 + 5) + "s";

    document
    .getElementById("petals-container")
    .appendChild(petal);

    setTimeout(() => {
        petal.remove();
    },10000);
}

let petalsStarted = false;

function playStoryMusic(){

    const song =
    document.getElementById("loveSong");

    song.play();

    if(!petalsStarted){

        petalsStarted = true;

        setInterval(createPetal,100);
    }

}
function openLetter(){

document
.getElementById("letterContent")
.classList.add("show");

}
const canvas =
document.getElementById("fireworksCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let fireworksStarted = false;

function createFirework(){

    const x =
    Math.random()*canvas.width;

    const y =
    Math.random()*canvas.height*0.6;

    for(let i=0;i<50;i++){

        const particle =
        document.createElement("div");

        particle.style.position="fixed";

        particle.style.left=x+"px";
        particle.style.top=y+"px";

        particle.style.width="6px";
        particle.style.height="6px";

        particle.style.background=
        `hsl(${Math.random()*360},100%,50%)`;

        particle.style.borderRadius="50%";

        particle.style.pointerEvents="none";

        particle.style.zIndex="1001";

        document.body.appendChild(particle);

        const angle =
        Math.random()*Math.PI*2;

        const distance =
        Math.random()*150+50;

        particle.animate([

        {
            transform:
            "translate(0,0)",
            opacity:1
        },

        {
            transform:
            `translate(
            ${Math.cos(angle)*distance}px,
            ${Math.sin(angle)*distance}px
            )`,
            opacity:0
        }

        ],{

            duration:2000,
            easing:"ease-out"
        });

        setTimeout(()=>{
            particle.remove();
        },2000);
    }
}
window.addEventListener("scroll",()=>{

const finale =
document.getElementById("finale");

const rect =
finale.getBoundingClientRect();

if(rect.top < window.innerHeight*0.7
&& !fireworksStarted){

    fireworksStarted = true;

    setInterval(createFirework,1200);
}

});
function showPoem(){

    const poemContainer =
    document.getElementById("poemContainer");

    poemContainer.classList.add("show");

    const poemLines = [

`❤️ મા અને ડેડી ❤️`,

`સમયની નદીમાં
વર્ષો તો વહેતા રહ્યા,`,

`પણ તમારા પ્રેમનો દીવો
ક્યારેય ધીમો ન પડ્યો.`,

`ક્યારેક હાસ્ય બની,
ક્યારેક હિંમત બની,`,

`ક્યારેક એકબીજાની આંખોમાં
શાંતિ બની રહ્યો.`,

`એક હાથમાં વિશ્વાસ,
બીજા હાથમાં પ્રેમ લઈને,`,

`તમે વર્ષોને નહીં,
એક સુંદર જીવનને પાર કર્યું છે.`,

`ઋતુઓ બદલાતી રહી,
સમય આગળ વધતો રહ્યો,`,

`પણ તમારા સંબંધનો રંગ
ક્યારેય ફીકો ન પડ્યો.`,

`અને આજે પણ,`,

`જ્યારે તમે એકબીજા તરફ જુઓ છો,`,

`ત્યારે લાગે છે કે`,

`સમય તો આગળ વધ્યો છે,`,

`પણ પ્રેમ હજુ પણ
એ જ જગ્યાએ ઉભો છે...`,

`પહેલા દિવસ જેટલો જ સુંદર.`,

`❤️ Happy Anniversary ❤️`,

`— Harsh`
];

    const poemText =
    document.getElementById("poemText");

    poemText.innerHTML = "";

    let i = 0;

    const interval = setInterval(()=>{

        if(i < poemLines.length){

            const stanza = document.createElement("div");

            stanza.classList.add("poem-stanza");

            stanza.innerHTML = poemLines[i];

            poemText.appendChild(stanza);
            

            i++;

        }else{

            clearInterval(interval);
        }

    },1500);

}
function startJourney(){

    document.body.style.overflow = "auto";

    const welcome =
    document.getElementById("welcomeScreen");

    welcome.style.opacity = "0";

    setTimeout(()=>{

        welcome.style.display = "none";

    },2000);

    const song =
    document.getElementById("loveSong");

    song.play();

}
const text =
"A journey of love, trust and beautiful memories.";

let index = 0;

function typeWriter(){

    if(index < text.length){

        document
        .getElementById("typingText")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,50);
    }
}

window.onload = typeWriter;