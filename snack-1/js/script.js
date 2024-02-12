function start() {
    // Funzione che inverte una stringa inserita dall'utente
    function reverse() {
        // Inizializza una stringa vuota per contenere la stringa invertita
        let inputWord = document.getElementById("word").value; 
        let reversedWord = "";  // Variabile per contenere la stringa invertita
        
        // Ciclo dalla fine della stringa fino all'inizio
        for (let i = inputWord.length - 1; i >= 0; i--) {
            // Aggiungo ogni carattere alla stringa 'reversedWord' in ordine inverso
            reversedWord += inputWord[i]; 
        }
        // Restituisco la stringa invertita
        return reversedWord; 
    }

    // Visualizza la stringa invertita nell'elemento HTML con id "result"
    document.getElementById("result").innerHTML =  reverse();
}

// Aggiunge un listener per eseguire la funzione 'start' al click dell'utente
document.getElementById("start").addEventListener("click", start);
