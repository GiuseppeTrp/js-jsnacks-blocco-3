// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Funzione che mescola in modo alternante gli elementi di due array
function arrayMix() {
    // Dichiaro i due array
    let array1 = [1, 2, 3];
    let array2 = ['a', 'b', 'c'];
    
    // Array risultante contenente gli elementi mescolati
    let mixedArray = [];

    // Ciclo attraverso entrambi gli array e li mescolo alternativamente
    for (let i = 0; i < array1.length; i++) {
        mixedArray.push(array1[i]);
        mixedArray.push(array2[i]);
    } 

    // Restituisco l'array risultante
    return mixedArray;
}

// Stampiamo il risultato della funzione nell'elemento HTML con id "result"
document.getElementById("result").innerHTML = arrayMix();