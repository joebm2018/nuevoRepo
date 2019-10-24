-- MOSTRAR LOS CLIENTES CON CORREO CON EL DOMINIO GMAIL.commit
SELECT * FROM sales.customers where email like "%gmail.com";

-- MOSTRAR TODOS LOS EMPLEADOS DE LA TIENDA ROWLETT BIKES
SELECT * FROM sales.staffs WHERE store_id IN
(
   SELECT store_id FROM sales.stores WHERE store_name="Rowlett Bikes"
);

-- MOSTRAR LAS ORDENES DE COMPRA DE LA CLIENTE ADELLE LARSEN
SELECT * FROM sales.orders 
where customer_id in
(
	select customer_id from sales.customers where first_name="Adelle" and last_name="Larsen"
);
-- MOSTRAR LOS PRODUCTOS DEL 2017 DE LA MARCA STRIDER
select * from production.products where model_year=2017 and  brand_id in
(
	select brand_id from production.brands where brand_name="Surly" 
);

-- MOSTRAR LA CANTIUDAD DE EXISTENCIAS DEL PRODUCTO Surly Krampus - 2018

SELECT store_id, quantity FROM production.stocks where product_id in 
(
	select product_id from production.products where product_name="Surly Krampus - 2018"
);
-- MOSTRAR LOS CLIENTES QUE VIVAN EN UNA AVENIDA EN NEVA YORK
SELECT * FROM sales.customers where street like "%Ave.%";

-- MOSTRAR TODO LOS CLIENTES QUE NO TENGAN NUMERO DE TELEFONO
SELECT * FROM sales.customers where phone IS NULL;

-- MOSTRAR LAS ORDENES ENTREGADAS (SHIPPED) ENTRE ENERO Y ABRIL DEL 20107
SELECT * FROM sales.orders where shipped_date between CAST('2017-01-01' AS DATE) AND cast('2017-04-30' AS DATE);
SELECT * FROM sales.orders where shipped_date between '2017-01-01'  AND '2017-04-30';