const chalk = require('chalk');

const nota = 6;

if(nota >= 7) {
    console.log(chalk.bold('Parabéns! Você está aprovado!'));
} else {
    console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação!'));
} 