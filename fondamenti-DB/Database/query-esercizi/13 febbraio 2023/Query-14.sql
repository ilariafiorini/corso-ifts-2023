SELECT caparra, importo, giorni_permanenza, tipo_struttura
FROM prenotazioni
WHERE tipo_struttura IN ('3 stelle' , '4 stelle')
AND giorni_permanenza > 10;

UPDATE prenotazioni
SET caparra = 100, importo = importo*2
WHERE tipo_struttura IN ('3 stelle' , '4 stelle')
AND giorni_permanenza > 10;

SELECT caparra, importo, giorni_permanenza, tipo_struttura
FROM prenotazioni
WHERE tipo_struttura IN ('3 stelle' , '4 stelle')
AND giorni_permanenza > 10;


