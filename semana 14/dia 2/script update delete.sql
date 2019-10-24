-- update

update production.prueba
set nombre="Joe BM" , id=11 where id=8;

select * from production.prueba;

-- delete - elimina filas segun condicion

delete from production.prueba where id=1;

-- AS
SELECT first_name as Nombre, last_name as Apellido 
from sales.customers as clientes;

select * from sales.customers;

-- UNION EXCEPT INTERSECT
select first_name from sales.customers union 
select product_name from production.products;


select * from sales.customers
where customer_id in
(
    select id from production.prueba
);

-- MOSTRAR LAS MARCAS (brands) DE LOS PROUDCTOS CON PRECIOS 379.99 Y 749.99

Select brand_name from production.brands
where brand_id in
(
  select distinct brand_id from production.products 
  where list_price in(379.99,749.99)
);

-- las categorias de los productos del modelo 2016
select category_name from production.categories
where category_id in
(
 select distinct category_id from production.products
 where model_year=2016
)