SELECT *
FROM	clienti
WHERE cognome = 'rossi';

SELECT *
FROM	clienti
WHERE cognome = 'rossi'
LIMIT 0,2;

SELECT *
FROM	clienti
WHERE cognome = 'rossi'
LIMIT 3,8;

SELECT *
FROM	clienti
WHERE cognome = 'rossi'
ORDER BY id_cliente
LIMIT 3,8;

SELECT *
FROM prenotazioni
WHERE tipo_struttura = '3 stelle'
ORDER BY importo DESC
LIMIT 0,10;

SELECT nome, cognome, DataNascita
FROM clienti
INNER JOIN prenotazioni on cliente = id_cliente
ORDER BY importo desc
LIMIT 0,1;

SELECT nome, cognome, DataNascita, SUM(importo)  AS riccanza
FROM clienti
INNER JOIN prenotazioni on cliente = id_cliente
GROUP BY  id_cliente, nome, cognome, DataNascita
ORDER BY  SUM(importo) DESC
LIMIT 0,1;

