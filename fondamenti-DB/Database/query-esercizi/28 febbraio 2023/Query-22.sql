SELECT nome
FROM clienti
WHERE cognome = 'rossi'

UNION 

SELECT nome
FROM clienti
WHERE cognome = 'bianchi';

-- SELECT nome
-- FROM clienti
-- WHERE cognome = 'rossi'
-- 
-- UNION 
-- 
-- SELECT nome, cognome
-- FROM clienti
-- WHERE cognome = 'bianchi';
-- 
-- SELECT nome, cognome
-- FROM clienti
-- WHERE cognome = 'rossi'
-- 
-- UNION 
-- 
-- SELECT nome
-- FROM clienti
-- WHERE cognome = 'bianchi';

SELECT nome, cognome
FROM clienti
WHERE cognome = 'bianchi';

SELECT nome, cognome
FROM clienti
WHERE cognome = 'rossi'

UNION 

SELECT nome, 'costante' AS costante
FROM clienti
WHERE cognome = 'bianchi';

SELECT nome, cognome, 'vecchio'
FROM clienti
WHERE YEAR(datanascita)< 2000

UNION

SELECT nome, cognome, 'giovane'
FROM clienti
WHERE YEAR(datanascita) >= 2000;

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'bologna'

UNION

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'milano';

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'bologna'

UNION ALL 

SELECT nome
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
WHERE provincia_nome = 'milano';
