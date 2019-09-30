function randomFlip(elem){
    
    



    if (elem.id === 'btnPlayer1') {
        let random1 = Math.floor(Math.random() * (14 - 2 + 1) + 2);
            if (random1 === 11) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/jack.png" width="100px" />`;
        } else if (random1 === 12) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/queen.png" width="100px" />`;
        } else if (random1 === 13) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/king.jpg" width="100px" />`;
        } else if (random1 === 14) {
            document.body.querySelector('#vegasDeck').innerHTML = `<img src="images/cards/ace.jpg" width="100px" />`;
        } else {
            document.body.querySelector('#vegasDeck').innerHTML = random1;
        }
        document.body.querySelector('#btnPlayer1').disabled = true;
        document.body.querySelector('#btnPlayer1').style.backgroundColor = "black";
        document.body.querySelector('#p1').dataset.result = random1;
        
        let suitsArray = ["images/cards/heart.png" , "images/cards/club.png" , "images/cards/diamond.png" , "images/cards/spade.png" ]
        let randomSuit = Math.floor(Math.random()* 4);
        console.log(suitsArray[randomSuit]);
        document.querySelector("#suitcardChange0").src = suitsArray[randomSuit];
        document.querySelector("#suitcardChange1").src = suitsArray[randomSuit];

    } else if (elem.id === 'btnPlayer2') {
        let random = Math.floor(Math.random() * (14 - 2 + 1) + 2);
        if (random === 11) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/jack.png" width="100px" />`;
        } else if (random === 12) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/queen.png" width="100px" />`;
        } else if (random === 13) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/king.jpg" width="100px" />`;
        } else if (random === 14) {
            document.body.querySelector('#renoDeck').innerHTML = `<img src="images/cards/ace.jpg" width="100px" />`;
        } else {
            document.body.querySelector('#renoDeck').innerHTML = random;
        }
        document.body.querySelector('#btnPlayer2').disabled = true;
        document.body.querySelector('#btnPlayer2').style.backgroundColor = "black";
        document.body.querySelector('#p2').dataset.result = random;
        
        let suitsArray = ["images/cards/heart.png" , "images/cards/club.png" , "images/cards/diamond.png" , "images/cards/spade.png" ]
        let randomSuit = Math.floor(Math.random()* 4);
        console.log(suitsArray[randomSuit]);
        document.querySelector("#suitcardChange2").src = suitsArray[randomSuit];
        document.querySelector("#suitcardChange3").src = suitsArray[randomSuit];
    }

    let res1 = document.body.querySelector('#p1').dataset.result;
    let res2 = document.body.querySelector('#p2').dataset.result;

    if (res1 === '' || res2 === '') {
        document.body.querySelector('#gameResult').innerHTML = "GAME IN PROGRESS";
    } else {
        document.body.querySelector('#gameResult').innerHTML = res1 + " - " + res2;
        if (Number(res1) > Number(res2)) {
            document.body.querySelector('#gameResult').innerHTML = "PLAYER 1 WIN";
        } else if (Number(res1) < Number(res2)) {
            document.body.querySelector('#gameResult').innerHTML = "PLAYER 2 WIN";
        } else if (Number(res1) === Number(res2)) {
            document.body.querySelector('#gameResult').innerHTML = "EVEN";
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
}


