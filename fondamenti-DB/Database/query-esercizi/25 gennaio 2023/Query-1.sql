SELECT nome, cognome
FROM clienti 
WHERE cognome >= 'At'
ORDER BY cognome ;

SELECT arrivo, partenza, camera, importo
FROM prenotazioni
WHERE importo > 400
ORDER BY camera DESC, arrivo ASC;

SELECT arrivo, partenza, importo, caparra
FROM prenotazioni
WHERE tipo_struttura = '2 stelle' 
ORDER BY importo ASC;

SELECT arrivo, partenza, importo, caparra
FROM prenotazioni
WHERE tipo_struttura = '2 stelle' AND arrivo > '2015-06-30 23:59:59'
ORDER BY importo ASC;

SELECT arrivo, partenza, importo, caparra
FROM prenotazioni
WHERE arrivo < '2015-03-01 00:00:00' OR arrivo > '2015-08-31 23:59:59'
ORDER BY importo ASC;

SELECT *
FROM clienti
WHERE nome = 'claudio' AND cognome = 'rossi';

SELECT *
FROM clienti
WHERE nome = 'claudio' OR cognome = 'rossi';

SELECT *
FROM clienti
WHERE nome = 'claudio' OR nome = 'ilario';

SELECT *
FROM prenotazioni
WHERE tipo_struttura = '3 stelle' AND caparra > '100';

SELECT *
FROM prenotazioni
WHERE tipo_struttura = '3 stelle' AND caparra > '50';

