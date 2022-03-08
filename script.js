document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");

  const imgArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
  imgArray.sort(() => 0.5 - Math.random());
  // var

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // code

  window.addEventListener("DOMContentLoaded", showSet);
  
  // for show cards at firsts secends after load

  function showSet() {
    let images = document.querySelectorAll("img");
    images.forEach((element) => {
      let cardSet = element.getAttribute("data-id");
      element.setAttribute("src", imgArray[cardSet].img);
    });
    setTimeout((element) => {
      let images = document.querySelectorAll("img");
      images.forEach((element) => {
        element.setAttribute("src", "images/blank.png");
      });
    }, 3000);
  }
  // for make a balnk 
  function createBoard() {
    for (let i = 0; i < imgArray.length; i++) {
      const newImg = document.createElement("img");
      newImg.setAttribute("src", "images/blank.png");
      grid.appendChild(newImg);
      newImg.setAttribute("data-id", i);
      newImg.addEventListener("click", flipCard);
    }
  }
  // mach cards 
  function machCards() {
    let imgs = document.querySelectorAll("img");
    cardOne = cardsChosenId[0];
    cardTwo = cardsChosenId[1];
    if (cardOne === cardTwo) {
      imgs[cardOne].setAttribute("src", "images/blank.png");
      imgs[cardTwo].setAttribute("src", "images/blank.png");
      cardsChosenId = [];
      cardsChosen = [];
    } else if (cardsChosen[0] === cardsChosen[1]) {
      imgs[cardTwo].setAttribute("src", "images/white.png");
      imgs[cardOne].setAttribute("src", "images/white.png");
      imgs[cardOne].removeEventListener("click", flipCard);
      imgs[cardTwo].removeEventListener("click", flipCard);
      cardsChosenId = [];
      cardsChosen = [];
    } else if (cardsChosenId[0] !== cardsChosenId[1]) {
      imgs[cardOne].setAttribute("src", "images/blank.png");
      imgs[cardTwo].setAttribute("src", "images/blank.png");
      cardsChosenId = [];
      cardsChosen = [];
    }
  }
  // flipe the cards 
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(imgArray[cardId].name);
    this.setAttribute("src", imgArray[cardId].img);
    cardsChosenId.push(cardId);
    if (cardsChosen.length == 2) {
      setTimeout(machCards, 500);
    }
  }
  createBoard();
});
