// ESERCIZIO 1

// Creo una lista ipotetica di mail verificate

const emailVerificate = ['utente@email.it' , 'utente2@email.it' , 'utente3@email.it' , 'utente4@email.it' , 'utente5@email.it'];

// Chiedo la mail all'utente tramite un prompt

const userEmail = prompt ('Inserisci la tua mail');
 
// Controllo se la mail è presente nell'array creato

const verifica = emailVerificate.indexOf(userEmail) !== -1;

// Stampiamo un messaggio tramite Alert per l'esito

if (verifica) {
  alert ('Complimenti è consentito il tuo accesso, Benvenuto!')
} else {
  alert ('Mi dispiace, ma non ti è consentito l\accesso')
}

// ESERCIZIO 2

// Genero un numero casuale tramite math

function numeroCasuale() {
  return Math.ceil(Math.random() * 6);
}

function tira() {

  // Azzero i precedenti risultati

  document.getElementById('player-result').textContent = 'Giocatore: ';
  document.getElementById('computer-result').textContent = 'Computer: ';
  document.getElementById('final-result').textContent = '';

  // Genero i due punteggi

  const tiroGiocatore = numeroCasuale();
  const tiroComputer = numeroCasuale();



// Stampo a schermo i due risultati

document.getElementById('player-result').textContent += tiroGiocatore;
document.getElementById('computer-result').textContent += tiroComputer;

// Verifichiamo il vincitore

let finalResult
if (tiroGiocatore > tiroComputer) {
  finalResult = 'Complimenti, hai vinto!'
} else if (tiroComputer > tiroGiocatore) {
  finalResult = 'Mi dispiace, hai perso.'
} else {
  finalResult = 'Mi dispiace hai pareggiato'
}

// Stampiamo il risultato nell'HTML


document.getElementById('final-result').textContent = finalResult;
}

// Aggiungo la funzione al button

document.getElementById('dice').addEventListener('click', tira);
  



