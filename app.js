const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
//const name =profileDataArgs[0];
//const github = profileDataArgs[1];
 const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
return `
       <DOCTYPE html>
       <html lang = "en">
       <head>
       <meta charset = "UTF-8">
       <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
       <meta http-equiv= "X-UA-compatible" content= "ie=edge">
       <title>Portfolio Generator</title>
       </head>

       <body>
       <h1>${name}</h1>
       <h2><a href= "https://github.com/${github}"> Github </a></h2>
       </body>
       </html>
       `;
};
//console.log(name, github);
//console.log (generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);
    console.log('Portfolio complete! Check out index.html to see the output!');
});