DELETE
FROM clienti
WHERE cognome = 'rossi';

SELECT cognome, COUNT(*)
FROM clienti
WHERE cognome = 'rossi'
GROUP BY cognome;

SELECT tipo_struttura, id_prenotazione, caparra, importo
FROM prenotazioni
WHERE tipo_struttura = '2 stelle' 
AND importo < 100 
AND caparra < 50;

DELETE	
FROM prenotazioni
WHERE tipo_struttura = '2 stelle' 
AND importo < 100 
AND caparra < 50;


