Algoritmo sin_titulo
	Escribir "convertir de soles a Euros";
	definir soles Como real;
	definir euros como real;
	definir opc como entero;
	
	Mostrar "1 - convertir de euros a soles"
	Mostrar "2 - convertir de soles a euros"
	leer opc;
	si opc=1 entonces
		escribir "Ingrese Monto en euros:";
		Leer euros;
		soles<-3.76*euros;
		mostrar euros," euros en soles es ",soles;
	FinSi
	
	si opc=2 entonces
		escribir "Ingrese Monto en soles:";
		Leer soles;
		euros<-0.26647*soles;
		mostrar soles," soles en euros es ",euros;
	FinSi
	
	FinAlgoritmo
