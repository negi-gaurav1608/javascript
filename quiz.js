const questions=[
    {
        question:"Which is largest animal in world?",
        answer:[
            
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
            
        ]
    },
    {
        question:"Which is largest desert in world?",
        answer:[
            
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},
            
        ]
    },
    {
        question:"Which is smallest continent in world?",
        answer:[
            
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Europe",correct:false},
            {text:"Africa",correct:false},
            
        ]
    },
    {
        question:"Which is Tallest mountain peak in world?",
        answer:[
            
            {text:"Mount Everest",correct:true},
            {text:"Mount Fuji",correct:false},
            {text:"Kanchanjanga",correct:false},
            {text:"K2",correct:false},
            
        ]
    }
];

const questionElement=document.querySelector("#question");
const answerElement=document.querySelector("#answer");
const nextbtn=document.querySelector("#next");

let currentindex=0;
let score=0;

function startquiz(){
    currentindex=0;
    score=0;
    nextbtn.innerHTML="next";
    showquestions();
}

function showquestions(){

    resetState();

    let currentquestion=questions[currentindex];
    let questionNo=currentindex+1;
    questionElement.innerHTML=questionNo+". "+currentquestion.question;

    currentquestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}


function resetState(){
    nextbtn.style.display = "none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(buttons=>{
        if(buttons.dataset.correct === "true"){
            buttons.classList.add("correct");
        }
        buttons.disabled = true;
    });
    nextbtn.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextbtn.innerHTML="Play again";
    nextbtn.style.display="block";
}

function handleNextBtn(){
    currentindex++;
    if(currentindex < questions.length){
        showquestions();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentindex < questions.length){
        handleNextBtn();
    }
    else{
        startquiz();
    }
});
startquiz();