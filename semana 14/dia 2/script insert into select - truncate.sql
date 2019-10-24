create table production.prueba(
	id int not null,
    nombre varchar(50) not null
);
-- INSERTA RESULTADOS DE UNA CPONSULTA A OTRA TABLA
insert into production.prueba
select customer_id,last_name from sales.customers limit 10;

truncate table production.prueba; -- borrar datos de una tabla