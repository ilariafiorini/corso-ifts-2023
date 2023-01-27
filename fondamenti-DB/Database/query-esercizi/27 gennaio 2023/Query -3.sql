SELECT *
FROM prenotazioni
WHERE importo > 100 
AND caparra < 50
AND (tipo_struttura = '2 stelle' OR tipo_struttura = '3 stelle')