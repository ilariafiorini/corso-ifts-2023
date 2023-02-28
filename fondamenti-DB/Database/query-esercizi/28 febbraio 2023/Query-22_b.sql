EXPLAIN

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'bologna'

UNION

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'milano';