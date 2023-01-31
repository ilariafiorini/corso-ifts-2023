SELECT *
FROM prenotazioni
WHERE importo > 100 
AND caparra < 50
AND (tipo_struttura = '2 stelle' 
OR tipo_struttura = '3 stelle');

SELECT nome, cognome, dataNascita
FROM clienti
WHERE (nome = 'mario' OR nome = 'giorgia' OR nome = 'luigi')
AND (cognome = 'rossi' OR cognome = 'bianchi' OR cognome = 'rossini');

SELECT arrivo, partenza, importo/100*22
FROM prenotazioni;

SELECT arrivo, partenza, importo/100*22 AS iva
FROM prenotazioni;

SELECT arrivo, camera, (importo - caparra) AS saldo
FROM prenotazioni
WHERE (tipo_struttura = '2 stelle' OR tipo_struttura = '3 stelle' or tipo_struttura = '4 stelle');




