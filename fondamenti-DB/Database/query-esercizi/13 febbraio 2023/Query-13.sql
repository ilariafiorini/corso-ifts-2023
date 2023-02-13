SELECT *
FROM clienti
WHERE cognome= 'rossi';

SELECT *
FROM prenotazioni
WHERE tipo_struttura = '2 stelle' 
AND importo < 100 
AND caparra < 50;

SELECT *
FROM prenotazioni
WHERE camera = '22';


UPDATE prenotazioni
SET importo = 200, caparra = 50
WHERE camera = '22';

SELECT *
FROM prenotazioni
WHERE camera = '22';


UPDATE prenotazioni
SET importo = importo + (importo/100*10), 
caparra = caparra + (caparra/100*10)
WHERE camera = '22';

SELECT *
FROM prenotazioni
WHERE camera = '22';
