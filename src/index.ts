
import * as inquirer from "inquirer";
import figlet from 'figlet';
import chalk from 'chalk';
const prompt = inquirer.createPromptModule();
console.log(chalk.cyan(figlet.textSync('Word & Char Counter', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
})));
function main(): void {
    prompt([
        {
            type: "input",
            name: "input",
            message: "Enter Paragraph. I am listening... \n"
        }
    ]).then(answer => {
        if(answer["input"] !== ""){
            let noOfChars: number = answer["input"].replace(/\s/g, "").length;


            function wordsCount(str: string) {
                return str.split(' ').filter(function(item) { return item != '' }).length;
           }
           let noOfWords: number = wordsCount(answer["input"]);

           console.log(chalk.bold(chalk.green(`Characters in a paragragh: "${noOfChars}"`)));
           console.log(chalk.bold(chalk.green(`Words in a paragragh: "${noOfWords}"\n`)));
           main();
        }
    })
}

main();