const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');
//const profileDataArgs = process.argv.slice(2);
//const name =profileDataArgs[0];
//const github = profileDataArgs[1];
 //const [name, github] = profileDataArgs;
//const pageHTML = generatePage(name, github);

//console.log(name, github);
//console.log (generatePage(name, github));
//fs.writeFile('index.html', pageHTML, err => {
   // if(err) throw new Error(err);
    //console.log('Portfolio complete! Check out index.html to see the output!');
//});
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));