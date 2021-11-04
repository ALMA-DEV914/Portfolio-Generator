//console.log("Hello Node!");
//console.log(document);

//var message = 'Hello Node';
//var sum = 5 + 3;
//console.log(message);
//console.log(sum);
//var commandLineArgs = process.argv;
//console.log(commandLineArgs);
//var profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

/*const message = 'Hello Node';

if (true === true){
    const message = 'Hello ES6';
    let sum = 5;
    sum += 10;
    console.log(message);
    console.log(sum);
}
console.log(message);
console.log(sum); */

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1){
    console.log(profileDataArr[i]);
    }

console.log('=============');

profileDataArr.forEach((profileItem) => 
    console.log(profileItem));
};