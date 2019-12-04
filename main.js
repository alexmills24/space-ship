class Ship {
  constructor(name, life, damage, image) {
    this.name = name;
    this.life = life;
    this.damage = damage;
    this.image = image
  };

  reducePoints() {
    this.life >= this.damage ? this.life -= this.damage : this.life = 0;
  }
  render() {
    return `<div id="game-area"><img src=${this.image} alt=${this.name}/><p>${this.name}</p> <p>${this.life}</p> <p>${this.damage}</p></div>`
  };
};

let ships = [];

const makeMothership = () => {
  for (index = 0; index < 1; index++) {
    ships.push(new Ship("Mothership", 100, 9, "./images/mothership.jpg"));
  }
}

const makeDefence = () => {
  for (index = 0; index < 5; index++) {
    ships.push(new Ship("Defence-ship", 80, 10, "./images/defenceship.jpg"));
  }
};

const makeAttack = () => {
  for (index = 0; index < 8; index++) {
    ships.push(new Ship("Attack-ship", 45, 12, "./images/attackship.jpg"));
  }
};

const shipsOnPage = () => {
  let gameArea = document.getElementById("game-area");
  gameArea.innerHTML = "";
  ships.forEach(ship => {
    gameArea.innerHTML += ship.render();
  });
};

const startGame = () => {
  location.reload();
};

const getRandomNumber = () => {
  let random = Math.round(Math.random() * (ships.length - 1));
  return random
};

const hitShip = () => {
  let randomNumber = getRandomNumber();
  if (ships[randomNumber].life !== 0) {
    ships[randomNumber].reducePoints();
  } else {
    hitShip()
  }
  shipsOnPage();
};

const endGame = () => {
  if (ships[0].life === 0) {
    alert("game over")
  } else {
    hitShip()
  }
};

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("hit").addEventListener("click", endGame);

makeMothership();
makeDefence();
makeAttack();
shipsOnPage();



