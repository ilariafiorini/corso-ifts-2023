SELECT *
FROM prenotazioni
WHERE importo >(
	SELECT AVG(importo)
	FROM prenotazioni
);

SELECT *
FROM prenotazioni
INNER JOIN (
	SELECT id_cliente, nome, cognome, citta.citta
	FROM clienti
	INNER JOIN citta ON id_citta = clienti.citta
	WHERE cognome = 'rossi'
) AS derivata ON prenotazioni.cliente = derivata.id_cliente;

SELECT citta.citta, SUM(importo) AS totale
FROM prenotazioni
INNER JOIN clienti ON id_cliente = cliente
INNER JOIN citta ON id_citta = clienti.citta
GROUP BY citta.citta;

SELECT citta.citta, SUM(importo) AS totale
FROM prenotazioni
INNER JOIN clienti ON id_cliente = cliente
INNER JOIN citta ON id_citta = clienti.citta
GROUP BY citta.citta
HAVING SUM(importo) > 10000;

SELECT derivata.citta
FROM (
	SELECT citta.citta, SUM(importo) AS totale
	FROM prenotazioni
	INNER JOIN clienti ON id_cliente = cliente
	INNER JOIN citta ON id_citta = clienti.citta
	GROUP BY citta.citta
	) AS derivata
WHERE derivata.totale > 10000;

SELECT AVG(totale)
FROM (
	SELECT citta.citta, SUM(importo) AS totale
	FROM prenotazioni
	INNER JOIN clienti ON id_cliente = cliente
	INNER JOIN citta ON id_citta = clienti.citta
	GROUP BY citta.citta
	) AS derivata;


