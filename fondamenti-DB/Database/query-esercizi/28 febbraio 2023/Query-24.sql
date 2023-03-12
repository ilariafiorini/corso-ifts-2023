SELECT DISTINCT camera
FROM prenotazioni
ORDER BY camera;

SELECT DISTINCT camera
FROM prenotazioni
ORDER BY CONVERT (camera, INTEGER) DESC;