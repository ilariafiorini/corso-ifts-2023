SELECT citta.citta, ROUND(AVG(importo), 2) AS importo_medio, MAX(importo) AS importo_massimo
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
GROUP BY citta.citta;

SELECT citta.citta, 
	ROUND(AVG(importo), 2) AS importo_medio, 
	MAX(importo) AS importo_massimo, 
	ROUND(SUM(importo), 2) AS importo_totale
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
GROUP BY citta.citta;

SELECT citta.citta, 
	ROUND(AVG(importo), 2) AS importo_medio, 
	MAX(importo) AS importo_massimo, 
	ROUND(SUM(importo), 2) AS importo_totale
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
GROUP BY citta.citta
ORDER BY importo_totale;

SELECT regioni.regione, COUNT(*) AS numero_prenotazioni, ROUND(AVG(importo), 2) AS importo_medio
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
INNER JOIN regioni on citta.regione = ID_regione 
WHERE importo < 300
AND importo > 100
AND tipo_struttura IN ('2 stelle' , '4 stelle')
GROUP BY regione;