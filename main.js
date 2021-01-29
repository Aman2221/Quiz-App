const qiuzDB = [
    {
        question : 'Q1: What is the full form of HTML ?',
        a : 'Hello To My Land',
        b : 'Hey Text Markup Language',
        c : 'HyperText Makeup Language',
        d : 'HyperText Markup Language',
        ans : 'ans4'
    },
    {
        question : 'Q2: What is the full form of CSS ?',
        a : 'Cascading Style Sheet',
        b : 'Cascading Style Sleep',
        c : 'Cascading Style Sheets',
        d : 'Cascading Show Sheet',
        ans : 'ans1'
    },
    {
        question : 'Q3: What is the full form of HTTP ?',
        a : 'HyperText Transfer Protocol',
        b : 'HyperText Transfer Protocols',
        c : 'HyperText Testing Protocol',
        d : 'HyperText Transfer Process',
        ans : 'ans1'
    },
    {
        question : 'Q4: What is the full form of JS ?',
        a : 'JavaScript',
        b : 'JavaShell',
        c : 'JavaServer',
        d : 'JavaShop',
        ans : 'ans1'
    },
]

const question = document.querySelector('.question');
const Option1 = document.querySelector('#option1');
const Option2 = document.querySelector('#option2');
const Option3 = document.querySelector('#option3');
const Option4 = document.querySelector('#option4');
const Submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const totalScore = document.querySelector('#showScore');
let score= 0;

let questionCount = 0;
const loadQuetions = () => {
   const questionList = qiuzDB[questionCount];
   question.innerText =  questionList.question;
   Option1.innerText = questionList.a;
   Option2.innerText = questionList.b;
   Option3.innerText = questionList.c;
   Option4.innerText = questionList.d;
}
loadQuetions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach(currenAns => {
        if(currenAns.checked){
            answer = currenAns.id;
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((currenAns)=>{
        currenAns.checked = false;
    })
}

Submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    
    if(checkAnswer === qiuzDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deSelectAll();
    if(questionCount < qiuzDB.length){
        loadQuetions();
    }
    else{
        totalScore.classList.remove('scoreArea');
        totalScore.innerHTML = `<h3>Your total score is :<span id='score'>${score}</span></h3>
        <button class = 'btn' onclick='location.reload()' >Try again?</button>`;
    }
});
