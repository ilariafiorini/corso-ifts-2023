SELECT citta 
FROM citta 
INNER JOIN regioni ON citta.regione = regioni.ID_regione 
WHERE area_geografica = 'sud'
utentiverificaauthors