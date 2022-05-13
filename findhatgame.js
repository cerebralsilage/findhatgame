const prompt = require('prompt-sync')({sigint: true}); //input to node

const hat = '^';
const hole = 'O';
const fieldCharacter = '░'; //alt 176 on keyboard
const pathCharacter = '*';

class Field {
  constructor(fieldArr) {
    this.field = fieldArr;
  }

  print() {
    let fieldString = '';
    for (let i = 0; i < this.field.length; i++){
      this.field[i].forEach(elem =>
      fieldString += elem);
      fieldString += '\n';
      }
      console.log(fieldString);
  }
};

//Here is where you can create your own field
const myField = new Field([
  ['*', '░', 'O', 'O'],
  ['░', 'O', '░', 'O'],
  ['░', '░', 'O', 'O'],
  ['O', '░', '░', '░'],
  ['░', 'O', '░', 'O'],
  ['O', '^', '░', 'O']
]);

myField.print();

let gameStatus = '';
// i is column, j is row
let i = 0, j = 0;
while (gameStatus != 'You Lose' || gameStatus != 'You Win!') {
  let currentPosition = myField.field[i][j];
  let playerChoice = prompt('Which direction would you like to go?');
  if (playerChoice === 'u' && (i === 0 || myField.field[i-1][j] === hole || myField.field[i-1][j] === pathCharacter)) {
    gameStatus = 'You Lose';
    break;
  } 
  else if (playerChoice === 'd' && (i === -1 || myField.field[i+1][j] === hole || myField.field[i+1][j] === pathCharacter)) {
    gameStatus = 'You Lose'; 
    break;
  }
  else if (playerChoice === 'l' && (j === 0 || myField.field[i][j-1] === hole || myField.field[i][j-1] === pathCharacter)) {
    gameStatus = 'You Lose';
    break;
  }
  else if (playerChoice === 'r' && (j === -1 || myField.field[i][j+1] === hole || myField.field[i][j+1] === pathCharacter)) {
    gameStatus = 'You Lose';
    break;
  }
  else if (playerChoice === 'u' && myField.field[i-1][j] === hat || playerChoice === 'd' && myField.field[i+1][j] === hat || playerChoice === 'l' && myField.field[i][j-1] === hat || playerChoice === 'r' && myField.field[i][j+1] === hat) {
  gameStatus = 'You Win';
  break;
  } 
  else if (playerChoice === 'u' && myField.field[i-1][j] === fieldCharacter) {
    myField.field[i-1][j] = pathCharacter;
    console.clear();
    myField.print()
    i -= 1;
  }
  else if (playerChoice === 'd' && myField.field[i+1][j] === fieldCharacter) {
    myField.field[i+1][j] = pathCharacter;
    console.clear();
    myField.print()
    i += 1;
  }
  else if (playerChoice === 'l' && myField.field[i][j-1] === fieldCharacter) {
    myField.field[i][j-1] = pathCharacter;
    console.clear();
    myField.print()
    j -= 1;
  }
  else if (playerChoice === 'r' && myField.field[i][j+1] === fieldCharacter) {
    myField.field[i][j+1] = pathCharacter;
    console.clear();
    myField.print()
    j += 1;
  }
}; 

console.log(gameStatus)



