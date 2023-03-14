SELECT tipo_struttura, AVG(importo)
FROM prenotazioni
GROUP BY tipo_struttura
HAVING AVG(importo) >150;

SELECT camera,  COUNT(*),	ROUND(SUM(importo), 2)
FROM prenotazioni
GROUP BY camera
HAVING SUM(importo) > 500;

SELECT camera,  ROUND(SUM(importo), 2)
FROM prenotazioni
GROUP BY camera
HAVING SUM(importo) > 500;

SELECT camera,  ROUND(SUM(importo), 2)
FROM prenotazioni
GROUP BY camera;

SELECT camera
FROM prenotazioni
GROUP BY camera
HAVING SUM(importo) > 500;

SELECT camera
FROM prenotazioni
GROUP BY camera
HAVING SUM(importo) > 8000;

SELECT COUNT(*) AS camere_500
FROM camere_500;
