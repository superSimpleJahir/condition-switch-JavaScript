// relational oprator
//    >, <, >=, <=, ==, ===, !=, !==

let num1 = 20;
let num2 = 30;
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);

let num3 = 40;
let num4 = '40';
console.log(num3 == num4);
console.log(num3 === num4);
console.log(25 != 20);
console.log(num3 !== num4);

// logical oprator
//    &&, ||, !

let num5 = 30;
let num6 = 22;
let num7 = 24;

console.log(num5>num6 && num5>num7);
console.log(num6>num5 && num6>num7);
console.log(num7>num5 && num7>num6);


console.log(num5>num6 || num5>num7);
console.log(num6>num5 || num6>num7);
console.log(num7>num5 || num7>num6);


console.log(!(num5 > num6));
console.log(!(num5 < num6));


// letter grating use by control flow == conditional

let grat = parseInt(prompt('Enter your grat point: '));

if (grat >= 80 && grat<=100) {
  console.log('Your grat is A+')
}
else if (grat >= 70 && grat < 80) {
  console.log('Your grat is A')
}
else if (grat >= 60 && grat < 70) {
  console.log('Your grat is A-')
}
else if (grat >= 50 && grat < 60) {
  console.log('Your grat is B')
}
else if (grat >= 40 && grat < 50) {
  console.log('Your grat is C')
}
else if (grat >= 33 && grat < 40) {
  console.log('Your grat is D')
}
else if (grat >= 1 && grat < 33) {
  console.log('Your grat is F')
}
else {
  console.log('Invalid input.')
}

// big number idify 
let number1 = prompt('Enter First Number :')
let number2 = prompt('Enter second Number :')
let number3 = prompt('Enter third Number :')

if (number1 > number2 && number1 > number3) {
  console.log(number1 + ' is the big numbe.');
}
else if (number2 > number1 && number2 > number3) {
  console.log(number2 + ' is the big number.');
}
else {
  console.log(number3 + ' is the big number.');
}

let latter = prompt('Enter your latter: ');
latter = latter.toLowerCase();

if (latter == 'a' || latter == 'e' || latter == 'i' || latter == 'o' || latter == 'u') {
  console.log('Vowel');
} else {
  console.log('consonent');
}
// switch control flow

let digit  = prompt('Enter your digit :');

switch(digit){
  case '0':
    console.log('zero');
    break;
  case '1':
    console.log('One');
    break;
  case '2':
    console.log('Two');
    break;
  case '3':
    console.log('Three');
    break;
  case '4':
    console.log('Four');
    break;
  case '5':
    console.log('Five');
    break;
  case '6':
    console.log('Six');
    break;
  case '7':
    console.log('Seven');
    break;
  case '8':
    console.log('Eight');
    break;
  case '9':
    console.log('Nine');
    break;
  default:
    console.log('Not a digit');
}

let latter1  = prompt('Enter your Latter :');
latter = latter.toLowerCase();

switch(latter){
  case 'a':
    console.log('Vowel');
    break;
  case 'e':
    console.log('Vowel');
    break;
  case 'i':
    console.log('Vowel');
    break;
  case 'o':
    console.log('Vowel');
    break;
  case 'u':
    console.log('Vowel');
    break;
  default:
    console.log('consonant');
}