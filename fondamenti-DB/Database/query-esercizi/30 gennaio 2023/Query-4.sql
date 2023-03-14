
SELECT *
FROM prenotazioni
INNER JOIN clienti ON cliente = ID_cliente;

SELECT nome, cognome
FROM clienti
INNER JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura IN ('2 stelle','3 stelle')
AND importo > 100;

SELECT clienti.*,  arrivo, partenza
FROM clienti
INNER JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura IN ('2 stelle','3 stelle')
AND importo > 100;

SELECT clienti.*,  nome, arrivo, partenza
FROM clienti
INNER JOIN prenotazioni ON id_cliente = cliente
WHERE tipo_struttura IN ('2 stelle','3 stelle')
AND importo > 100;

SELECT citta, citta.regione AS codice_regione, regioni.regione AS nome_regione
FROM citta
INNER JOIN regioni ON id_regione = regioni.regione 