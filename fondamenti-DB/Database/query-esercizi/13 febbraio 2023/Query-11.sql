SELECT provincia_nome, COUNT(*) AS numero_prenotazioni
FROM prenotazioni 
INNER JOIN clienti ON ID_cliente = cliente
INNER JOIN citta ON clienti.citta = id_citta
WHERE	importo > 100
GROUP BY provincia_nome;

SELECT	provincia_nome, numero_prenotazioni
FROM prenotazioni_cento_provincia
WHERE numero_prenotazioni > 10 ;

SELECT	provincia_nome
FROM prenotazioni_cento_provincia
WHERE numero_prenotazioni > 10 ;

SELECT provincia_nome
FROM prenotazioni 
INNER JOIN clienti ON ID_cliente = cliente
INNER JOIN citta ON clienti.citta = id_citta
WHERE	importo > 100
GROUP BY provincia_nome
HAVING count(*) > 10