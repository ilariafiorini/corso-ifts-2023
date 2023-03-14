SELECT*
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
INNER JOIN regioni on citta.regione = ID_regione;

SELECT regioni.regione, area_geografica, citta.citta, provincia_nome, provincia_sigla, 
nome, cognome, dataNascita, importo, tipo_struttura, giorni_permanenza, costo_giornaliero,
 arrivo, partenza, caparra
FROM  prenotazioni
INNER JOIN clienti ON cliente = id_cliente
INNER JOIN citta ON clienti.citta = id_citta
INNER JOIN regioni on citta.regione = ID_regione;

SELECT *
FROM dati
WHERE tipo_struttura IN ('2 stelle' , '3 stelle')
ORDER BY regione
