-- exercicio 1 --
DROP DATABASE IF EXISTS aula2;
CREATE DATABASE IF NOT EXISTS aula2;
USE aula2;

CREATE TABLE fornecedor (
    codigo CHAR(10),
    nome VARCHAR(50) NOT NULL,
    cidade VARCHAR(50),
    PRIMARY KEY(codigo)
);

CREATE TABLE peca (
    codpeca CHAR(10),
    nome VARCHAR(50) NOT NULL,
    cidade VARCHAR(50),
    PRIMARY KEY (codpeca)
);

CREATE TABLE venda (
    codforn CHAR(10),
    codpeca CHAR(10),
    quantidade INT NOT NULL,
    PRIMARY KEY(codforn, codpeca),
    FOREIGN KEY (codforn) REFERENCES fornecedor(codigo) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (codpeca) REFERENCES peca(codpeca) ON DELETE RESTRICT ON UPDATE CASCADE
);


-- Exercicio 2 --
DROP DATABASE IF EXISTS aula2b;
CREATE DATABASE IF NOT EXISTS aula2b;
USE aula2b;

DROP TABLE IF EXISTS empregado;

CREATE TABLE IF NOT EXISTS empregado(
    matricula CHAR(9),
    nome VARCHAR(15) NOT NULL,
    datanasc DATE,
    endereco VARCHAR(30),
    sexo CHAR(1),
    salario NUMERIC(10,2),
    supervisor CHAR(9),
    depto INT(11) NOT NULL
);

CREATE TABLE departamento (
    coddep INT(11),
    nomedep VARCHAR(15) NOT NULL,
    gerente CHAR(9) NOT NULL,
    datainicioger DATE 
);

ALTER TABLE empregado
    ADD CONSTRAINT emppk PRIMARY KEY(matricula);

ALTER TABLE departamento
    ADD CONSTRAINT deppk PRIMARY KEY(coddep);

ALTER TABLE empregado
    ADD CONSTRAINT empsuperfk FOREIGN KEY (supervisor) REFERENCES empregado (matricula) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE empregado
    ADD CONSTRAINT empdep FOREIGN KEY (depto) REFERENCES departamento(coddep);

ALTER TABLE departamento
    ADD CONSTRAINT depnome UNIQUE (nomedep);

ALTER TABLE departamento
    ADD CONSTRAINT depger FOREIGN KEY (gerente) REFERENCES empregado (matricula);