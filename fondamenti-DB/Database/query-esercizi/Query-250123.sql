SELECT nome, cognome
FROM clienti 
WHERE cognome >= 'At'
ORDER BY cognome ;

SELECT arrivo, partenza, camera, importo
FROM prenotazioni
WHERE importo > 400
ORDER BY camera DESC, arrivo ASC;


