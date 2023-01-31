SELECT *
FROM regioni
INNER JOIN citta ON id_regione = citta.regione
WHERE regioni.regione = 'lombardia';

SELECT citta.citta
FROM citta
INNER JOIN clienti ON id_citta = clienti.citta
INNER	JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura = '3 stelle';

SELECT DISTINCT  citta.citta
FROM citta
INNER JOIN clienti ON id_citta = clienti.citta
INNER	JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura = '3 stelle';

SELECT DISTINCT  citta.citta, nome
FROM citta
INNER JOIN clienti ON id_citta = clienti.citta
INNER	JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura = '3 stelle';

SELECT DISTINCT  nome, cognome
FROM citta
INNER JOIN clienti ON id_citta = clienti.citta
INNER JOIN prenotazioni ON id_cliente = cliente
WHERE provincia_nome IN  ('rimini' , 'bologna')
AND tipo_struttura IN ('3 stelle' , '4 stelle')
AND importo >= 100 AND importo <=150; 