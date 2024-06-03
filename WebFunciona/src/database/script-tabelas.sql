-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE Cadastro;

USE Cadastro;

CREATE TABLE Usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	pais VARCHAR (45),
	cpf CHAR(14)
	senha VARCHAR(50)
);

CREATE TABLE Quiz (
	idQuiz int primary key AUTO_INCREMENT,
	questoes int,
	questoesCorretas int,
	fkUsuario int,
	CONSTRAINT fkQuizUsuario FOREIGN KEY(fkUsuario)
	REFERENCES Usuario(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

