-- JOIN  JUNTAR TABLAS HORIZONTALMENTE
select p.product_name, b.brand_name from production.products as p
inner join production.brands as b
on p.brand_id=b.brand_id;

-- mostrar el empleado con la tienda donde trabaja

select staffs.first_name, stores.store_name 
from sales.staffs as staffs 
join sales.stores as stores 
on staffs.store_id=stores.store_id;

-- mostrar poroductos con precio menor a 1000 con su respectiva categoria
select p.product_name, c.category_name from production.products as p
join  production.categories as c
on p.category_id= c.category_id
where p.list_price<1000;

-- mostrar el producto con las existencias en la tienda santa cruz bikes
select p.product_name,s.quantity from production.products as p
join production.stocks as s
on p.product_id=s.product_id
-- otro join 
where s.store_id=1;