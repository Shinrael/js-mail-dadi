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