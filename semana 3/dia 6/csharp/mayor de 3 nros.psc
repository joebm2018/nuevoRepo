Algoritmo sin_titulo
	Definir  n1,n2,n3,mayors Como Entero
	mostrar "valor n1:"
	leer n1
	mostrar "valor n2:"
	leer n2
	mostrar "valor n3:"
	leer n3
	
	si n1>n2 Y n1>n3
		mayors<-n1
	SiNo
		
		
	FinSi
	
	
	si n1>n2 
		si n1>n3
			mayors<-n1
			
		SiNo
			mayors<-n3
		FinSi
		si n2>n3
			mayors<-n2
		SiNo
			mayors<-n3
		FinSi
	SiNo
		si n2>n3
			mayors<-n2
		SiNo
			mayors<-n3
		FinSi
		
	FinSi
	Mostrar "el mayor",mayors
FinAlgoritmo
