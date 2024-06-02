const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


import questions from "./questions.js"; 

let currentIndex = 0;
let questionsCorrect = 0;

var questoesCorretasVar = questionsCorrect;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e){

    if(e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if(currentIndex < questions.length - 1){
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";

    // if(questionsCorrect == questions.length){
    //     window.alert("Parabéns,acertou todas perguntas");
    // } 
    CadastrarQuestoes();
}

function loadQuestion(){

    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;

        answers.appendChild(div);

    });

     document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}


loadQuestion();

function CadastrarQuestoes(){

    fetch("/cadastrarQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          questoesCorretasServer: questoesCorretasVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
            console.log("Oi")
            // cardErro.style.display = "block";
  
            // mensagem_erro.innerHTML =
            //   "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            // setTimeout(() => {
            //   window.location = "login.html";
            // }, "2000");
  
            // limparFormulario();
          } else {
            throw "Houve um erro ao tentar cadastrar no quiz!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        //   finalizarAguardar();
        });
        return false;
  
    }

