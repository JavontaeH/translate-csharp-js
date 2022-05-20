// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

class Die {
  constructor(value) {
    this.value = value;
    this.dieString = "Unknown";
  }

  roll() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.value = getRandomInt(1, 6);
    switch (this.value) {
      case 1:
        this.dieString = "one";
        break;
      case 2:
        this.dieString = "two";
        break;
      case 3:
        this.dieString = "three";
        break;
      case 4:
        this.dieString = "four";
        break;
      case 5:
        this.dieString = "five";
        break;
      case 6:
        this.dieString = "six";
        break;
    }
  }
}

let die1 = new Die();
let die2 = new Die();

for (var i = 0; i < 10; i++) {
  die1.roll();
  die2.roll();

  message = `${die1.dieString} + ${die2.dieString} == ${
    die1.value + die2.value
  } `;
  if (die1.value == die2.value) {
    message += " DOUBLES!";
  }

  console.log(message);
}
