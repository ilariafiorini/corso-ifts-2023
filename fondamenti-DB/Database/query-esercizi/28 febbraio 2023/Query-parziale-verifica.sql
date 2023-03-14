UPDATE prenotazioni
SET importo = importo + 10
WHERE cliente IN (
SELECT prenotazioni.cliente
FROM citta
INNER JOIN clienti ON citta.ID_citta = clienti.citta
INNER JOIN prenotazioni ON clienti.ID_cliente = prenotazioni.cliente
WHERE citta.provincia_nome = "roma")