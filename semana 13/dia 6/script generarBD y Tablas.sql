create database registroAccidentes;
use registroAccidentes;
create table Policia(
idPolicia int not null auto_increment primary key,
nombre varchar(45) not null,
grado varchar(20) not null,
inicioActividad date not null);

-- Agregar datos a la tabla
insert into registroAccidentes.policia
(idPolicia,nombre,grado,inicioActividad)
values(1,'Christian','Sargento','2019-03-10');

insert into policia(nombre,grado,inicioactividad) values('Jorge Garnica','soldado','2019-03-20');
insert into policia values(3,'Juan Perez','Tecnico','2019-03-29');

insert into policia(nombre,grado,inicioactividad)
values('Diego','Alferez','2019-04-01'),
	  ('Rodrigo','Teniente','2019-04-02');
      
      
alter table policia
add column codpistola varchar(20);

create table vehiculo(
placa varchar(7) primary key not null ,
fechaTitulo date not null ,
marca varchar(20) not null,
modelo varchar(20) not null,
color varchar(100) not null,
combustible varchar(25) not null,
ruedas int not null,
placaAnterior varchar(7) 
);

insert into vehiculo values('A4I-952','2000-01-01','volvo','fl7','amarillo,naranja,verde','petroleo',6,'uh-3121'),
	('V4D-958','2003-02-21','volvo','b10','amarillo ,naranja','petroleo',8,'uh-4020'),
    ('D2I-236','2016-02-21','MERCEDES Benz','OF-1730','plata, gris oscuro,amarillo','petroleo',8,'');    
    
create table infractor(
	idInfractor int primary key not null auto_increment,
    dni varchar(8),
    nombre varchar(50)
);    
-- se llena datos para infractor

create table RegistroAccidente(
 idRegistro int not null auto_increment primary key,
 idVehiculo int not null,
 idInfractor int not null,
 idPolicia int not null,
 hora time not null,
 fecha date not null,
 coordenadax decimal not null,
 coordenaday decimal not null,
 heridos bool,
 foreign key(idVehiculo) references vehiculo(idVehiculo),
 foreign key(idInfractor) references infractor(idInfractor),
 foreign key(idPolicia) references policia(idPolicia)
); 