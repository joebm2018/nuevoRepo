select * from production.brands;
select * from production.categories;
select brand_name from production.brands;
select * from sales.customers
where state='NY';
select * from sales.customers
where zip_code=11550;


-- ordenamiento por defecto ascendenete
select * from sales.customers order by city;
-- ordenamiento descendete
select * from sales.customers order by city desc;

select * from sales.customers order by first_name,last_name;
-- agrupamiento
select state, count(*) from sales.customers group by state;

-- count
select state, count(*) from sales.customers group by state having count(*)>1000;

select * from production.products;
-- en que registro va a empezar y donde termina
-- OFFSET
select * from production.products order by product_id desc limit 10;

-- NO MUESTRA REPETICIPONES EN RESULTADOS CON DISTINCT
select distinct first_name from sales.customers
order by first_name;

select * from production.products
where list_price in(379.99,749.99,2899.99,549.99);

select * from production.products
where list_price between 200 and 1000;

-- % igual que el* en D.O.S.
select * from production.products
where product_name like 'Trek%';
