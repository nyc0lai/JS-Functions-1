//Exercitiu 1

const kelvin = 293; //Change here!

function kelvinToFahrenheit(kelvin) { 

    const celsius = kelvin - 273; // transformam kelvin in celsius

    return Math.floor(celsius*(9/5)+32); // transformam in Fahrenheit si rotungim valoarea
}

console.log('The temperature is '+ kelvinToFahrenheit(kelvin) +' degrees Fahrenheit.'); //afisam raspunsu

//Exercitiu 2

const myAge = 38; //Change here!

const myName = 'Nicu'.toLowerCase();

function humanAgeInDogYears (myAge) {

    let earlyYears = 2 * 10.5; // primii 2 ani transformam in ani de cîine

    let laterYears = (myAge - 2) * 4; // restul anilor transformam in ani de ciine

    return  earlyYears + laterYears; // returnarea sumei anilor de cîine
}

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is `+ humanAgeInDogYears(myAge) +` years old in dog years.`);

//Exercitiu 3

let userName = ''; //Change Here!

const userQuestion = 'How do you think we will live better in the next 10 years?'; // and here!

if (!userName) {userName = 'USER';} // in cazul cind variabila userName are valoarea empty ii atribuim valoarea 'USER'

function answerMyQuestion (userName, userQuestion) {

    let eightBall=''; // declaram variabila eightBall si atribuim valoarea empty string.

    let randomNumber = Math.floor(Math.random() * 8); //declaram variabila randomNumber si ii atribuim o valoare aliatoare de la 0 la 7.

    switch (randomNumber) {
        case 0 :
            eightBall = 'It is certain';
            break;
        case 1 :
            eightBall = 'It is decidedly so';
            break;
        case 2 :
            eightBall = 'Reply hazy try again';
            break;
        case 3 :
            eightBall = 'Cannot predict now';
            break;
        case 4 :
            eightBall = 'Do not count on it';
            break;
        case 5 :
                eightBall = 'My sources say no';
            break;
        case 6 :
                eightBall = 'Mey be';
            break;
        case 7 :
                eightBall = 'Signs point to yes';
            break;
    }

    console.log(`Hello dear ${userName} !\n${userQuestion}\n${eightBall}`); //facem log la raspuns.
}

answerMyQuestion(userName, userQuestion); // apelăm funcția

//Exercitiu 4

let registeredEarly = true; //change here

let userAge = 26; // and here

function raceTime (userAge, registeredEarly) {

    let raceNumber = Math.floor(Math.random()*1000); // declaram variabila raceNumber și îi atribuim valoare de la 0 pînă la 1000.

    if (userAge >= 18 && registeredEarly) {

        raceNumber += 1000; // în acest caz la valoarea lui raceNumber o sumăm cu 1000.

        console.log(`You are race at 9:30 AM with Race Number = ${raceNumber}`); // facem log la raspuns in cazul ca se adeverește condiția dată

        } else if (userAge >= 18 && !registeredEarly) {

        console.log(`You are race at 11:00 AM with Race Number = ${raceNumber}`); // facem log la raspuns in cazul ca se adeverește condiția dată

        } else if (userAge < 18) {

        console.log(`You are race at 12:30 PM with Race Number = ${raceNumber}`); // // facem log la raspuns in cazul ca se adeverește condiția dată

        }

}

raceTime (userAge, registeredEarly); //apelăm funcția

/*îmi cer scuze pentru comentariile în limba română :)
Have a nice day!
*/
