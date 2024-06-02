var quizModel = require("../models/quizModel");

function cadastrarQuiz(req, res) {

    var acertos = req.body.questoesCorretasServer;

   
    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrarQuiz(acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}