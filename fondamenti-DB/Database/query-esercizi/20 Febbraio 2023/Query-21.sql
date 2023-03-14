SELECT id_citta
	FROM citta
	WHERE regione = 3;

SELECT *
FROM clienti
WHERE citta IN (
	SELECT id_citta
	FROM citta
	WHERE regione = 3
	);

SELECT id_regione
		FROM regioni
		WHERE regione = 3;

SELECT *
FROM clienti
WHERE citta IN (
	SELECT id_citta
	FROM citta
	WHERE regione IN (
		SELECT id_regione
		FROM regioni
		WHERE regione = 3
		)
	);

SELECT *
FROM prenotazioni
WHERE importo > (
	SELECT AVG(importo)
	FROM prenotazioni
	);