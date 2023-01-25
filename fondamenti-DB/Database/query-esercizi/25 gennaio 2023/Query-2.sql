SELECT arrivo, importo, caparra
FROM prenotazioni
WHERE tipo_struttura = '3 stelle' OR tipo_struttura = '4 stelle';
