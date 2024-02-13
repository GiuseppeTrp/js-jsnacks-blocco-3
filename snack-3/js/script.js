// scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).




// Dichiarazione di un array di numeri
numbersArray = [0, 1, 2, 3, 4, 5, 6];



// Definizione della funzione cutArray che accetta tre argomenti: un array e due numeri
// minPosition e maxPosition, dove minPosition è più piccolo di maxPosition
// e maxPosition è al massimo uguale al numero di elementi nell'array
function cutArray(array, minPosition, maxPosition) {

    // Creazione di un nuovo array vuoto
    const newArray = [];

    // Ciclo attraverso gli elementi dell'array originale
    // partendo dall'indice minPosition fino all'indice maxPosition
    for(let i = minPosition; i <= maxPosition; i++) {

        // Aggiunta dell'elemento corrente all'array nuovo
        newArray.push(array[i]);
    }

    // Restituzione dell'array nuovo
    return newArray;
}




// risultato chiamando la funzione cutArray con gli argomenti specificati
document.getElementById("result").innerHTML = (cutArray(numbersArray, 2, 5));