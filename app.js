function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pertanyaan " + currentQuestionNumber + " dari " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Hasil</h1>";
    gameOverHTML += "<h2 id='score'> Nilai Kamu: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Manakah hal dibawah ini yang bukan termasuk gejala covid :", ["Suhu tubuh 35°C", "Mengalami anosmia","Batuk dan Pilek", "Tulang terasa sakit"], "Suhu tubuh 35°C"),

    new Question("Berapa lama kita dianjurkan untuk mengganti masker?", ["1 jam", "2 jam","3 jam", "4 jam"], "4 jam"),
    

    new Question("Berapa jarak minimal untuk mencegah covid?", ["1m", "2m","3m", "4m"], "1m"),
    

    new Question(" Langkah apa yang paling tepat  jika mengamai gejala covid?", ["Melakukan SWAB PCR", " Anggap remeh", "Tetap berkerumun", "Minum obat warung"], "Melakukan SWAB PCR"),

    new Question("Apa yang harus dibawa pada saat berpegian di era pandemi ini?", ["Parfum", "Masker","Handbody", "Payung"], "Masker"),
        

];


var quiz = new Quiz(questions);


populate();





