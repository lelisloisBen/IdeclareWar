let roundNumber = 0;
function randomFlip(elem){
    
    if (elem.id === 'btnPlayer1') {
        let random1 = Math.floor(Math.random() * (14 - 2 + 1) + 2);
            if (random1 === 11) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/jack.png" width="100px" />`;
        } else if (random1 === 12) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/queen.png" width="100px" />`;
        } else if (random1 === 13) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/king.png" width="100px" />`;
        } else if (random1 === 14) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/ace.png" width="100px" />`;
        } else if (random1 === 2) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/2.png" width="100px" />`;
        } else if (random1 === 3) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/3.png" width="100px" />`;
        } else if (random1 === 4) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/4.png" width="100px" />`;
        } else if (random1 === 5) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/5.png" width="100px" />`;
        } else if (random1 === 6) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/6.png" width="100px" />`;
        } else if (random1 === 7) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/7.png" width="100px" />`;
        } else if (random1 === 8) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/8.png" width="100px" />`;
        } else if (random1 === 9) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/9.png" width="100px" />`;
        } else if (random1 === 10) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/10.png" width="100px" />`;
        } else {
            document.body.querySelector('#vegasDeck').innerHTML = '';
        }
        document.body.querySelector('#btnPlayer1').disabled = true;
        document.body.querySelector('#btnPlayer1').style.backgroundColor = "black";
        document.body.querySelector('#p1').dataset.result = random1;
        document.body.querySelector('#cardLeft').className = "myCard mx-auto frontCard";
        let suitsArray = ["images/cards/heart.png" , "images/cards/club.png" , "images/cards/diamond.png" , "images/cards/spade.png" ]
        let randomSuit = Math.floor(Math.random()* 4);
        document.querySelector("#suitcardChange0").src = suitsArray[randomSuit];
        document.querySelector("#suitcardChange1").src = suitsArray[randomSuit];

    } else if (elem.id === 'btnPlayer2') {
        let random = Math.floor(Math.random() * (14 - 2 + 1) + 2);
        if (random === 11) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/jack.png" width="100px" />`;
        } else if (random === 12) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/queen.png" width="100px" />`;
        } else if (random === 13) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/king.png" width="100px" />`;
        } else if (random === 14) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/ace.png" width="100px" />`;
        } else if (random === 2) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/2.png" width="100px" />`;
        } else if (random === 3) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/3.png" width="100px" />`;
        } else if (random === 4) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/4.png" width="100px" />`;
        } else if (random === 5) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/5.png" width="100px" />`;
        } else if (random === 6) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/6.png" width="100px" />`;
        } else if (random === 7) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/7.png" width="100px" />`;
        } else if (random === 8) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/8.png" width="100px" />`;
        } else if (random === 9) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/9.png" width="100px" />`;
        } else if (random === 10) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/10.png" width="100px" />`;
        } else {
            document.body.querySelector('#renoDeck').innerHTML = '';
        }
        document.body.querySelector('#btnPlayer2').disabled = true;
        document.body.querySelector('#btnPlayer2').style.backgroundColor = "black";
        document.body.querySelector('#p2').dataset.result = random;
        document.body.querySelector('#cardRight').className = "myCard mx-auto frontCard";
        
        
        let suitsArray = ["images/cards/heart.png" , "images/cards/club.png" , "images/cards/diamond.png" , "images/cards/spade.png" ]
        let randomSuit = Math.floor(Math.random()* 4);
        document.querySelector("#suitcardChange2").src = suitsArray[randomSuit];
        document.querySelector("#suitcardChange3").src = suitsArray[randomSuit];
    }

    let res1 = document.body.querySelector('#p1').dataset.result;
    let res2 = document.body.querySelector('#p2').dataset.result;
    let listClass = 'class="list-group-item list-group-item-danger mb-2"';
    let redText = `style="color: red; font-weight:bold;"`;
    let evevLeftCard = `<div class="evenLeftCard1"></div><div class="evenLeftCard2"></div><div class="evenLeftCard3"></div>`;
    let evevRightCard = `<div class="evenRightCard1"></div><div class="evenRightCard2"></div><div class="evenRightCard3"></div>`;

    if (res1 === '' || res2 === '') {
        document.body.querySelector('#gameResult').innerHTML = "GAME IN PROGRESS";
    } else {
        document.body.querySelector('#gameResult').innerHTML = res1 + " - " + res2;
        if (Number(res1) > Number(res2)) {
            roundNumber++;
            document.body.querySelector('#gameResult').innerHTML = "PLAYER 1 WIN";
            document.body.querySelector('#rounds').innerHTML += `<li ${listClass}>ROUND: ${roundNumber} = <span ${redText}>PLAYER 1 WON</span></li>`;
        } else if (Number(res1) < Number(res2)) {
            roundNumber++;
            document.body.querySelector('#gameResult').innerHTML = "PLAYER 2 WIN";
            document.body.querySelector('#rounds').innerHTML += `<li ${listClass}>ROUND: ${roundNumber} = <span ${redText}>PLAYER 2 WON</span></li>`;
        } else if (Number(res1) === Number(res2)) {
            roundNumber++;
            document.body.querySelector('#gameResult').innerHTML = "EVEN";
            document.body.querySelector('#rounds').innerHTML += `<li ${listClass}>ROUND: ${roundNumber} = <span ${redText}>EVEN</span></li>`;
            document.body.querySelector('#firstEven').innerHTML = evevLeftCard;
            document.body.querySelector('#secondEven').innerHTML = evevRightCard;
        }
    }  
}


function reset() {
    
    document.body.querySelector('#btnPlayer1').disabled = false;
    document.body.querySelector('#btnPlayer2').disabled = false; 
    document.body.querySelector('#btnPlayer1').style.backgroundColor = "";
    document.body.querySelector('#btnPlayer2').style.backgroundColor = "";
    document.body.querySelector('#p1').dataset.result = "";
    document.body.querySelector('#p2').dataset.result = "";
    document.body.querySelector('#gameResult').innerHTML = "PLAY";
    document.body.querySelector('#cardLeft').className = "myCard mx-auto backCard";
    document.body.querySelector('#cardRight').className = "myCard mx-auto backCard";
    document.body.querySelector('#suitcardChange0').src = '';
    document.body.querySelector('#suitcardChange1').src = '';
    document.body.querySelector('#suitcardChange2').src = '';
    document.body.querySelector('#suitcardChange3').src = '';
    document.body.querySelector('#vegasDeck').innerHTML = '';
    document.body.querySelector('#renoDeck').innerHTML = '';
}