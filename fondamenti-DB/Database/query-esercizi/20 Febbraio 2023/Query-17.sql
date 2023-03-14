INSERT INTO clienti (nome, cognome)
VALUES ('Ilaria', 'Fiorini');

SELECT *
FROM clienti
LEFT OUTER JOIN prenotazioni ON id_cliente = cliente;

SELECT *
FROM clienti
LEFT OUTER JOIN prenotazioni ON id_cliente = cliente
WHERE importo IS NULL;



