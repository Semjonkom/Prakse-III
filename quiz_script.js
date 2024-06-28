const quizData = [
    {
        question: "Kura viela ir galvenais tumšās matērijas komponents Visumā?",
        a: "Protoni",
        b: "Neitrīno",
        c: "WIMPs",
        d: "Elektroni",
        correct: "c"
    },
    {
        question: "Kurš vienādojums saista enerģiju, masu un gaismas ātrumu relativitātes teorijā?",
        a: "E = mc^2",
        b: "F = ma",
        c: "E = hv",
        d: "pV = nRT",
        correct: "a"
    },
    {
        question: "Kurš no šiem skaitļiem ir pirmskaitlis?",
        a: "51",
        b: "87",
        c: "97",
        d: "91",
        correct: "c"
    },
    {
        question: "Kurš uzrakstīja romānu 'Brāļi Karamazovi'?",
        a: "Ļevs Tolstojs",
        b: "Fjodors Dostojevskis",
        c: "Antons Čehovs",
        d: "Igors Turgenevs",
        correct: "b"
    },
    {
        question: "Kura planēta Saules sistēmā ir vismasīvākā?",
        a: "Zeme",
        b: "Saturns",
        c: "Jupiters",
        d: "Neptūns",
        correct: "c"
    },
    {
        question: "Kurš ir autors viļņu funkcijas vienādojumam kvantu mehānikā?",
        a: "Makss Planks",
        b: "Ervīns Šrēdingers",
        c: "Nīls Bors",
        d: "Verners Heizenbergs",
        correct: "b"
    },
    {
        question: "Kuram ķīmiskajam elementam ir atomu skaitlis 79?",
        a: "Platīns",
        b: "Sudrabs",
        c: "Zelts",
        d: "Dzīvsudrabs",
        correct: "c"
    },
    {
        question: "Kura valsts pirmā nosūtīja cilvēku kosmosā?",
        a: "ASV",
        b: "PSRS",
        c: "Ķīna",
        d: "Lielbritānija",
        correct: "b"
    },
    {
        question: "Kurš no šiem māksliniekiem ir sirreālisma pārstāvis?",
        a: "Vinsents van Gogs",
        b: "Klods Monē",
        c: "Salvadors Dalī",
        d: "Pablo Pikaso",
        correct: "c"
    },
    {
        question: "Kurš atklāja radioaktivitāti?",
        a: "Alberts Einšteins",
        b: "Marija Kirī",
        c: "Anrī Bekerels",
        d: "Ernests Rezerfords",
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const resultContainer = document.getElementById('result');

let score = 0;
let quizSubmitted = false;

function loadQuiz() {
    const quizHTML = quizData.map((q, index) => {
        return `
            <div class="question">
                <h3>${index + 1}. ${q.question}</h3>
                <ul class="answers">
                    <li>
                        <input type="radio" id="q${index}a" name="q${index}" value="a">
                        <label for="q${index}a">${q.a}</label>
                    </li>
                    <li>
                        <input type="radio" id="q${index}b" name="q${index}" value="b">
                        <label for="q${index}b">${q.b}</label>
                    </li>
                    <li>
                        <input type="radio" id="q${index}c" name="q${index}" value="c">
                        <label for="q${index}c">${q.c}</label>
                    </li>
                    <li>
                        <input type="radio" id="q${index}d" name="q${index}" value="d">
                        <label for="q${index}d">${q.d}</label>
                    </li>
                </ul>
            </div>
        `;
    }).join('');

    quizContainer.innerHTML = quizHTML;
    resultContainer.innerHTML = '';
    submitButton.style.display = 'block';
    score = 0;
    quizSubmitted = false;
}

function calculateScore() {
    if (!quizSubmitted) {
        quizData.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.correct) {
                score++;
            }
        });

        resultContainer.innerHTML = `Jūs ieguvāt ${score} no ${quizData.length} pareizām atbildēm!`;
        submitButton.style.display = 'none';
        quizSubmitted = true;
    }
}

function restartQuiz() {
    loadQuiz();
}

submitButton.addEventListener('click', calculateScore);
restartButton.addEventListener('click', restartQuiz);

loadQuiz();
