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


