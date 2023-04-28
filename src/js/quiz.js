'use strict';

let questions = [
    {
        "question": "V jakém roce byla vyrobena první trubka v plynové peci svařená na tupo? Jednalo se o první trubka vyrobenou v Rakousko-uherské monarchii. Do té doby se dovážely z Anglie nebo Německa. ",
        "options1": "1880",
        "options2": "1896",
        "options3": "1883",
        "options4": "1905",
        "correct ": "C"
    },
    {
        "question": "Díky modernizaci tratí byla navýšena roční kapacita výroby trub na: ",
        "options1": "60 tisíc tun",
        "options2": "123 tisíc tun",
        "options3": "90 tisíc tun",
        "options4": "140 tisíc tun",
        "correct ": "B"
    },
    {
        "question": "Válcovna trub je schopná vyrobit také pouze jednu trubku podle specifikací zákazníka: ",
        "options1": "ANO",
        "options2": "NE",
        "correct ": "A"
    },
    {
        "question": "Jak se jmenuje obkročné vozidlo, kterým převážíme materiál? ",
        "options1": "Mannesmann",
        "options2": "Ingoty",
        "options3": "Kalibr",
        "options4": "Clark",
        "correct ": "D"
    },
    {
        "question": "Probíhá výroba stejným způsobem na Malém Mannesmannu a Velkém Mannesmannu? ",
        "options1": "Ano",
        "options2": "Ne",
        "correct ": "A"
    },
    {
        "question": "Vysokotlaký odstřik je používán k zbavování okují. ",
        "options1": "Pravda",
        "options2": "Lež",
        "correct ": "A"
    },
    {
        "question": "Vady uvnitř materiálu jsou zjišťovány pomocí: ",
        "options1": "Kalibrovny",
        "options2": "Elektromagnetických metod",
        "options3": "Ultrazvuku",
        "options4": "Karuselové pece",
        "correct ": "C"
    },
    {
        "question": "Rovnoměrnost prohřátí je velmi důležité pro další tváření. ",
        "options1": "Pravda",
        "options2": "Lež",
        "correct ": "A"
    },
    {
        "question": "Jak se říká procesu, při kterém ze surového železa vzniká tekutá ocel? ",
        "options1": "Zkujňování",
        "options2": "Legování",
        "options3": "Trasnformování",
        "correct ": "A"
    },
    {
        "question": "Kolik válců používá poutní stolice VM při válcování? ",
        "options1": "4",
        "options2": "3",
        "options3": "2",
        "correct ": "C"
    },
    /*
    {
        "question": "Co se stane se žhavou ocelovou trubkou, když ji prudce vložíme do studené vody? ",
        "options1": "Nic, ochladí se",
        "options2": "Vzniknou strukturní produkty odpovídající intenzitě ochlazení",
        "options3": "Stane se to, že se trubka ohne a nebude splňovat požadavky zákazníka a musí se vyřadit ",
        "correct ": "B"
    },
    */
    {
        "question": "Jakou technologii dělení trub používáme za poutní stolicí? ",
        "options1": "Pásové pily",
        "options2": "Kotoučové pily",
        "options3": "Trubky dělíme, až jsou studené",
        "correct ": "B"
    },
    {
        "question": "Jakou metodu používáme pro konečnou povrchovou ochranu trub před expedicí? ",
        "options1": "Práškování",
        "options2": "Lakování",
        "options3": "Fermežování",
        "correct ": "B"
    },
    {
        "question": "Kolika válci je tvořen děrovací stroj? ",
        "options1": "3",
        "options2": "2",
        "options3": "4",
        "correct ": "A"
    },
    {
        "question": "Jaké jsou vstupní rozměry vsázky pro Velký Mannesmann? ",
        "options1": "290, 400, 450",
        "options2": "300, 390, 460",
        "options3": "320, 410, 470",
        "correct ": "C"
    },
    {
        "question": "Ve kterém roce proběhla rekonstrukce a modernizace Velkého Mannesmannu? ",
        "options1": "2008",
        "options2": "2009",
        "options3": "2010",
        "correct ": "A"
    },
    {
        "question": "Jaký je rozsah vyráběných průměrů ve Válcovně trub? ",
        "options1": "60 – 406",
        "options2": "85 – 400",
        "options3": "70 – 410",
        "correct ": "A"
    },
    {
        "question": "K jakým účelům jsou používány závitované trubky vyráběné ve VT? ",
        "options1": "Potrubní pošta",
        "options2": "Těžba ropy a plynu",
        "options3": "Vodovodní potrubí",
        "correct ": "B"
    },
    {
        "question": "Kolik kusů nejdelších trub (14m) je potřeba spojit pro vytvoření potrubí okolo země v úrovní rovníku? ",
        "options1": "Cca 3 150 000 kusů",
        "options2": "Cca 2 520 000 kusů ",
        "options3": "Cca 2 860 000 kusů",
        "correct ": "C"
    },
    {
        "question": "Jaká je průměrná roční spotřeba zemního plynu v posledních pěti letech ve Válcovně trub? ",
        "options1": "132 596 MWh",
        "options2": "243 498 MWh",
        "options3": "89 264 MWh",
        "correct ": "A"
    },
    {
        "question": "Jaká byla procentuální úspora provozní recirkulované vody v roce 2022 proti roku 2013? ",
        "options1": "Více než 55 %",
        "options2": "Více než 79 %",
        "options3": "Více než 37 %",
        "correct ": "B"
    },
    {
        "question": "Kolik v průměru kubických metrů kyslíku ročně potřebuje Špalkárna na dělení špalků pro výrobu VT? ",
        "options1": "Průměrně 470 000 Nm3",
        "options2": "Průměrně 810 000 Nm3",
        "options3": "Průměrně 660 000 Nm3 ",
        "correct ": "C"
    },
    {
        "question": "Kolik mostových jeřábu je na provoze VT? ",
        "options1": "27",
        "options2": "43",
        "options3": "51",
        "correct ": "B"
    },
    {
        "question": "Jaký je výkon největšího motoru na VT? ",
        "options1": "1,5 MW",
        "options2": "2,1 MW",
        "options3": "2,7 MW",
        "correct ": "C"
    },
    {
        "question": "Jaké jsou vstupní rozměry vsázky pro Malý Mannesmann? ",
        "options1": "120, 150, 180",
        "options2": "150, 180, 210",
        "options3": "180, 210, 240",
        "correct ": "B"
    },
    {
        "question": "Ve kterém roce byla vyrobena první trubka na tupo v plynové peci v původním výrobním závodu v rámci bývalých Vítkovických železáren?",
        "options1": "1875",
        "options2": "1895",
        "options3": "1883",
        "correct ": "C"
    }
]


const btnStart = document.getElementById( "btn-start" );

const btnScore = document.getElementById( "btn-result" );

//const btnEnd = document.getElementById( "btn-end" );

const quiz = document.getElementById( "quiz" );

const question = document.getElementById( "question" );

const options1 = document.getElementById( "A" );

const options2 = document.getElementById( "B" );

const options3 = document.getElementById( "C" );

const options4 = document.getElementById( "D" );

const counter = document.getElementById( "counter" );

const progress = document.getElementById( "progress" );

const scoreDiv = document.getElementById( "score-container" );

const scoreNav = document.getElementById( "score" );

const extractNav = document.getElementById( "extract" );

const selectSettings = document.getElementById( "select-settings" );

const userName = document.getElementById( "selectName" );

const userTeam = document.getElementById( "selectTeam" );

const printUser = document.getElementById( "user" );

const formTeam = document.getElementById( "form-Team" );

const formUser = document.getElementById( "form-Name" );

const formScore = document.getElementById( "form-Score" );


let team = "";
let user = "";


// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const progressValue = 60;
const questionTime = 60; // 60s
//const gaugeWidth = 150; // 150px
//const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let scoreSave = 0;
let progresTime = 0;
let extract = 0;
const countExtract = 7;

// render a question
function renderQuestion() {
    let q = questions[ runningQuestion ];

    question.innerHTML = "<p>" + q.question + "</p>" + "<br>";
    if ( q.options3 === undefined ) {
        options1.innerHTML = q.options1;
        options2.innerHTML = q.options2;
        options3.style.display = "none";
        options4.style.display = "none";
    } else if ( q.options3 !== undefined ) {
        options1.innerHTML = q.options1;
        options2.innerHTML = q.options2;
        options3.innerHTML = q.options3;
        options4.innerHTML = q.options4;
        options3.style.display = "";
        options4.style.display = "";
    }
    if ( q.options4 === undefined ) {
        options1.innerHTML = q.options1;
        options2.innerHTML = q.options2;
        options3.innerHTML = q.options3;
        options4.style.display = "none";
    } else if ( q.options4 !== undefined ) {
        options1.innerHTML = q.options1;
        options2.innerHTML = q.options2;
        options3.innerHTML = q.options3;
        options4.style.display = "";
    }

    if ( countExtract <= extract ) {
        extract;
    }

    extract++;
    extractNav.innerHTML = extract + "/" + 30;
}

// start quiz

btnStart.addEventListener( "click", function () {
    
    user = userName.value;
    team = userTeam.value;
    if ( user === "" || team === "" ) {
        alert( "Zadej jméno a tým" );
    }
    else {
        setUser();
        extractNav.innerHTML = extract + "/" + 30;
        renderQuestion();
        quiz.style.display = "block";
        //renderProgress();
        renderCounter();
        TIMER = setInterval( renderCounter, 1000 ); // 1000ms = 1s
    }
} );

/*
// render progress
function renderProgress() {
    for ( let qIndex = 0; qIndex <= lastQuestion; qIndex++ ) {
    }
}
*/

function renderCounter() {
    if ( count <= questionTime ) {
        progresTime = progressValue - count;
        progress.value = progresTime;
        counter.innerHTML = progressValue - count;
        count++;
    } else {
        count = 0;
        if ( runningQuestion < lastQuestion ) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval( TIMER );
            scoreRender();
        }
    }
}

// checkAnwer
function checkAnswer( answer ) {
    if ( answer === questions[ runningQuestion ][ "correct " ] ) {
        // answer is correct
        score += progresTime / 10;
        scoreNav.innerHTML = score.toFixed();
        scoreNav.value = score.toFixed();
        scoreNav.value = score.toFixed();
        scoreSave = score.toFixed();
        scoreNav.style.color = "#FF3860";
    }
    count = 0;
    if ( runningQuestion < lastQuestion ) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval( TIMER );
        scoreRender();
    }
}


// score render
function scoreRender() {
    quiz.style.display = "none";
    scoreDiv.style.display = "inherit";

    formTeam.value = userTeam.value;
    formUser.value = userName.value;
    formScore.value = score.toFixed();

}

function setUser() {
    printUser.innerHTML = "<h2 class='has-text-link'>" + team + " - " + user + "</h2>"; team = "";
    btnStart.style.display = "none";
    btnScore.style.display = "none";
    selectSettings.style.display = "none";
}


/*
function refreshPage () {
    team = userTeam.value;
    user = userName.value;

    db.result.bulkPut( [
        { team: team, name: user, score: scoreSave },
    ] );
    window.location.reload();
} 


db.result.where( "team" ).startsWith( '1' )
    .each( function ( user ) {
        console.log( "score: " + user.score )
    } );
*/
/*
onClick=refreshPage() 
db.result
    .where( 'team' ).above( '1' ).shortBy( 'score')
    .each( function ( user ) {
        console.log( "score: " + user.score )
    } );
  */
  