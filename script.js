let counter = 0;
let movecount = 0;
let min = 0;
let sec = 0;
let firstSelection = "";
let secondSelection = "";
const cards = document.querySelectorAll(".game-container .card");




//card shuffling
(function shuffle(){
  cards.forEach(card=>{
    let randompos = Math.floor(Math.random() * 16);
    card.style.order = randompos;
  })
})();


function movecounter(){
  document.getElementById("moves-count").innerHTML = "Move:"+movecount;
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    if(counter === 0){
      firstid = card.getAttribute("id");
      firstSelection = card.getAttribute("animal");
      console.log(firstSelection);
        counter++;
        movecount++;
      
        movecounter();
    }else{
      secondid = card.getAttribute("id");
      secondSelection = card.getAttribute("animal");
      counter = 0;
      movecount++;
      movecounter();
      if ((firstSelection === secondSelection) && (firstid != secondid)) {
        const correctCards = document.querySelectorAll(
          ".card[animal='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      }else{
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 500);
      }
    } 
  })
})