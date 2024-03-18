let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Nerners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },

    {
        'question': 'Was ist Shareware...',
        'answer_1': '...eine Software, die sich mehrere Nutzer teilen können.',
        'answer_2': '...die Auswahl preiswerter Aktienindex-Fonds durch ein Computersystem.',
        'answer_3': '...eine Cloud, die die Verbreitung von besonders vielen Daten zulässt.',
        'answer_4': '...eine Software, die als kostenlose Testvesrion zur Verfügung gestellt wird.',
        'right_answer': 4
    },

    {
        'question': 'Im Binärsystem gubt es...',
        'answer_1': '...alle Zahlen von 0 bis 9.',
        'answer_2': '...nur die Ziffern 0 und 1.',
        'answer_3': '...nur die Ziffern 1 und 2.',
        'answer_4': '...nur die Zahlen 10 und 11.',
        'right_answer': 2
    },

    {
        'question': 'Was ist ein Bit',
        'answer_1': 'Eine Folge aus 4 Zahlen',
        'answer_2': 'Eine Folge aus 8 Zahlen',
        'answer_3': 'Eine Binärziffer',
        'answer_4': 'Eine Kombination aus Ziffern des Binärsystems',
        'right_answer': 3
    },
    
    {
        'question': 'Wie viele Zustände kann man mit zwei Bits herstellen?',
        'answer_1': '2',
        'answer_2': '4',
        'answer_3': '6',
        'answer_4': '8',
        'right_answer': 2
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all_questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
   
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    
}