//Dichiarazione variabili
var pc_q = 16;
var max_q = 100;
var user_q = max_q - pc_q;
var arr_insert = [];
var endGame = false;

//Esecuzione gioco
while (endGame == false) {
  var number_q = parseInt(prompt("Inserisci un numero"));
  if (number_q < 1) {
    alert("NUMERO TROPPO BASSO");
  } else if (number_q > max_q) {
    alert("NUMERO TROPPO ALTO");
  } else if (isNaN(number_q)) {
    alert("ATTENZIONE! Non ha inserito un numero");
  } else {
    if (arr_insert.includes(number_q)) {
      alert("ATTENZIONE! hai già inserito questo numero");
    } else if (pc_numbers(pc_q, max_q).includes(number_q) == true) {
      alert("Hai perso...");
      endGame = true;
    } else {
      arr_insert.push(number_q);
      if (arr_insert.length == user_q) {
        alert("INCREDIBILE, HAI VINTO!!");
        endGame = false;
      }
    }
  }
}

//Generatore numeri random
function randomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

//Funzione che genera i numeri del pc
function pc_numbers(limit, max) {
  var arrPc = [];
  while (arrPc.length !== limit) {
    var number = randomNum(max);
    if (arrPc.includes(number) == false) {
      arrPc.push(number);
    }
  }
  return arrPc;
}

//console.log(pc_numbers(16, 100))
