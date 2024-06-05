var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT Round((Sum(questoesCorretas)/Sum(questoes))*100) as porcentagem, 
    Quiz.questoesCorretas,
    Quiz.questoes
     from Quiz where fkUsuario = ${idUsuario}
     group by questoesCorretas,questoes
     Order by questoesCorretas,questoes;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT Round((Sum(questoesCorretas)/Sum(questoes))*100)
    from Quiz where fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
