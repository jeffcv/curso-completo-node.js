const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "qual seu nome?",
    },
    {
      name: "idade",
      message: "qual sua idade?",
    },
  ])
  .then((answers) => {
    try {
      const idade = Number(answers.idade);
      if (isNaN(idade)) {
        throw new Error("A idade precisa ser um número!");
      }
      console.log(
        chalk.bgYellow.black(`Seu nome é ${answers.nome} e sua idade é ${idade}`)
      );
    } catch (error) {
      console.error(chalk.bgRed.white(`Erro capturado: (${error.name}): ${error.message}`));
    }
  });
