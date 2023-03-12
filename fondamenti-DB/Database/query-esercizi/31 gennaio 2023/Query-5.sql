SELECT nome, cognome, arrivo, partenza, importo
FROM clienti
INNER JOIN citta ON id_citta = clienti.citta
INNER JOIN prenotazioni ON iD_cliente = cliente
WHERE provincia_nome = 'Milano' AND tipo_struttura IN ('3 stelle' , '4 stelle')
ORDER BY arrivo DESC, cognome ASC;

SELECT *
FROM clienti
WHERE cognome LIKE 'C%';

SELECT *
FROM clienti
WHERE cognome LIKE 'rossi%';

SELECT *
FROM clienti
WHERE cognome LIKE '%rossi';

SELECT *
FROM clienti
WHERE cognome LIKE '%rossi%';

SELECT nome, cognome, importo, camera
FROM prenotazioni
INNER JOIN clienti ON id_cliente = cliente
WHERE nome LIKE 'a%';


SELECT nome, cognome, importo, camera
FROM prenotazioni
INNER JOIN clienti ON id_cliente = cliente
WHERE nome LIKE 'a%' OR nome LIKE 'd%';


SELECT nome, cognome, importo, camera
FROM prenotazioni
INNER JOIN clienti ON id_cliente = cliente
WHERE nome LIKE 'a%' AND nome LIKE '%n%';



