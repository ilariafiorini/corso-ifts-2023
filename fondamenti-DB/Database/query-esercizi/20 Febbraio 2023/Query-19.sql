SELECT *
FROM regioni
LEFT OUTER JOIN citta ON id_regione = citta.regione;

SELECT *
FROM regioni
LEFT OUTER JOIN citta ON id_regione = citta.regione
WHERE id_citta IS NULL;