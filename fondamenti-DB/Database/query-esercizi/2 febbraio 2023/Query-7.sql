SELECT COUNT(*) AS conteggio, SUM(importo) AS totale, AVG(importo) AS media
FROM prenotazioni;

SELECT COUNT(*) AS conteggio, SUM(importo) AS totale, AVG(importo) AS media
FROM prenotazioni
WHERE tipo_struttura IN ('3 Stelle', '4 stelle');

SELECT COUNT(*) AS conteggio
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome = 'Milano'
AND importo > 200;

SELECT SUM(importo) AS importo_totale, AVG(importo) AS importo_medio 
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome IN ('Roma', 'Bologna');

SELECT nome, cognome, SUM(importo) AS importo_totale, AVG(importo) AS importo_medio 
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome IN ('Roma', 'Bologna')
GROUP BY nome, cognome;

SELECT nome, cognome, ROUND(SUM(importo), 2) AS importo_totale,ROUND( AVG(importo), 2) AS importo_medio 
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome IN ('Roma', 'Bologna')
GROUP BY nome, cognome;

SELECT *
FROM prenotazioni
WHERE YEAR(arrivo)= 2015
AND  MONTH(arrivo) = 10;

SELECT nome, cognome, ROUND(SUM(importo), 2) AS importo_totale,ROUND( AVG(importo), 2) AS importo_medio 
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome IN ('Roma', 'Bologna')
AND YEAR(arrivo)= 2015
AND MONTH(arrivo) = 10
GROUP BY nome, cognome;

SELECT concat(nome,' ', cognome) AS nome_cognome, ROUND(SUM(importo), 2) AS importo_totale,ROUND( AVG(importo), 2) AS importo_medio 
FROM prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = ID_citta
WHERE provincia_nome IN ('Roma', 'Bologna')
AND YEAR(arrivo)= 2015
AND MONTH(arrivo) = 10
GROUP BY nome, cognome;