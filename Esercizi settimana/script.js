/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/Stringhe: (Strings): Le stringhe sono come catene di perline colorate che compongono le parole e le frasi. Ad esempio, "cane", "gatto", "mangio una mela" sono tutte stringhe. Puoi mettere insieme diverse stringhe per creare delle storie!

Numeri :(Numbers): I numeri sono come i mattoncini che usi per costruire un castello di sabbia. Possono essere numeri interi (come 5, 10, 100) o decimali (come 3.14, 2.5). Con i numeri, puoi contare quante caramelle hai o quanta acqua c'è dentro ad un secchio!

Booleani :(Booleans): I booleani sono come dei cartellini con scritto "sì" o "no". Possono essere solo due: vero o falso. Per esempio, "Ho fame" potrebbe essere vero, mentre "Il cielo è rosso" è falso. Con i booleani, puoi rispondere a domande semplici come "È giorno?" oppure "Ho sonno?".

Array: Gli array sono come scatole in cui puoi mettere molti oggetti diversi. Supponi di avere una scatola di giocattoli con dentro una palla, un camion e un orsacchiotto. Questa è un array! Puoi mettere tutti i tuoi giocattoli preferiti in una scatola così da trovarli facilmente quando vuoi giocarci.

Oggetti :(Objects): Gli oggetti sono come le case delle bambole con tante stanze e oggetti dentro. Ogni oggetto ha delle proprietà, come il colore delle pareti o il tipo di mobili. Ad esempio, potresti avere un oggetto "macchina" con proprietà come "colore" e "anno di fabbricazione". Con gli oggetti, puoi organizzare le informazioni in modo ordinato e facile da capire.

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
In JavaScript, un oggetto è una struttura di dati composita che può contenere diversi tipi di valori, come primitive (numeri, stringhe, booleani), funzioni, array o altri oggetti. Gli oggetti sono utili per organizzare e gestire gruppi di dati correlati, dotandoli di proprietà e metodi che permettono di operare su di essi in maniera flessibile ed efficiente.
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const num1 = 12;
const num2 = 20;
const somma = num1 + num2;
console.log(somma);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/let name = "Emi";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let x = 12;
let y = 4;
let sottrazione = x - y;
console.log(sottrazione);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
const name1 = 'john';
const name2 = 'John';

console.log(name1 !== name2);

const lowerCaseName1 = name1.toLowerCase();
console.log(lowerCaseName1 === name2); 
/* SCRIVI QUI LA TUA RISPOSTA */
