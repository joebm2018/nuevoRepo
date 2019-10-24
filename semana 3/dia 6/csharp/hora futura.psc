Algoritmo sin_titulo
	definir horas,hActual,horafutura como entero
	Mostrar "ingrese hora actual"
	leer hActual
	Mostrar "horas pasadas"
	leer horas;
	
	horaFutura<-hActual+horas
	
	horaFutura <-hActual mod 12
	si horaFutura=0 
		horaFutura<-12
	FinSi
	
	mostrar horaFutura
	
FinAlgoritmo
