# React Quiz

Questo quiz è stato creato utilizzando Vite e React.

Questo progetto è un semplice quiz dove si dovrà rispondere a una lista di domande, inserite tramite il file question.js.
Le domande sono poste una alla volta e il loro numero dipende dalle domande presenti in question.js(aggiungendo o togliendo elementi all'array in question.js è possibile variare la lunghezza del quiz);
Per ogni domanda vengono mostrate quattro risposte opzionali(il numero delle domande dipende dalla lunghezza dell'array 'answers' in question.js), il cui ordine viene rismescolato poiché di default nell'array il primo elemento è la risposta corretta.

Alla fine del quiz viene mostrato un sommario con le statistiche relative a domande saltate, giuste o sbagliate.

Sotto le statistiche viene comunque mostrata una lista delle domande e delle relative risposte numerate ed evidenziate in base allo stato della risposta stessa(saltata, giusta o sbagliata).


#LICENSE
[MIT License]('./MIT-LICENSE');