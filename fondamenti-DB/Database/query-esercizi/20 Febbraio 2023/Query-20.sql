SELECT id_cliente, nome, cognome
FROM clienti 
LEFT OUTER JOIN prenotazioni ON id_cliente = cliente
WHERE id_prenotazione IS NULL;