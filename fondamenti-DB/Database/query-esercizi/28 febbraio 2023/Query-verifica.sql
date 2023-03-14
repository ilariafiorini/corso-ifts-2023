SELECT  MAX(prenotazioni.importo)
FROM citta
INNER JOIN clienti ON citta.ID_citta = clienti.citta
INNER JOIN prenotazioni ON clienti.ID_cliente = prenotazioni.cliente;

SELECT citta.citta
FROM citta
INNER JOIN clienti ON citta.ID_citta = clienti.citta
INNER JOIN prenotazioni ON clienti.ID_cliente = prenotazioni.cliente
WHERE prenotazioni.importo = (
SELECT  MAX(prenotazioni.importo)
FROM citta
INNER JOIN clienti ON citta.ID_citta = clienti.citta
INNER JOIN prenotazioni ON clienti.ID_cliente = prenotazioni.cliente);

SELECT prenotazioni.ID_Prenotazione
FROM regioni
INNER JOIN citta ON regioni.ID_regione = citta.regione
INNER JOIN clienti ON citta.ID_citta = clienti.citta
INNER JOIN prenotazioni ON clienti.ID_cliente = prenotazioni.cliente
WHERE regioni.area_geografica IN ("nord-ovest", "nord_est")
AND prenotazioni.importo >= 50
AND prenotazioni.importo <= 150

