INSERT INTO clienti (nome, cognome)
VALUES ('Ilaria', 'Fiorini');

INSERT INTO prenotazioni (cliente, camera, arrivo, partenza, tipo_struttura, importo, caparra)
VALUES (15, 33, '2024-01-01', '2024-01-04', '4 stelle', 350 , 75);

SELECT * 
FROM	prenotazioni
WHERE cliente = 15
AND arrivo = '2024-01-01';

DELETE	
FROM	prenotazioni
WHERE cliente = 15
AND arrivo = '2024-01-01';

SELECT *
FROM clienti
WHERE nome = 'ilaria' AND cognome = 'fiorini';

DELETE
FROM clienti
WHERE nome = 'ilaria' AND cognome = 'fiorini';