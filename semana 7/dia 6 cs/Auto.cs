using System;
using System.Collections.Generic;
using System.Text;

namespace Clase1
{
    class Auto
    {
        //variables, caracteristicas Atributos
        //accesibilidad privada y publica

            //todo los metodos y atributos son por defecto privados
            //PRIVADO: solo se puede usar dentro de la clase
            //PUBLICO: cualquiera puede usar
        public string marca;
        public string modelo;
        public int año;
        public string placa;
        //constructor sin parametros

        //ctor constructor vacio
        //ctrl+. genera constructor marcando las variables de deseo
        public Auto()
        {
            //
            Console.WriteLine("Se creo un Auto");
        }
        public Auto(string marca, string modelo, int año, string placa)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
            this.placa = placa;
            Console.WriteLine("Se creo un auto con sus caracteristicas");
        }
        // funciones, comportamiento, metodos de clase
        public void Arrancar()
        {
            Console.WriteLine("Ruunnn");
        }
        public void Atropellar(string nombre)
        {
            Console.WriteLine($"{nombre} grita ahhhhhh!");
        }
        public void Atropellar(string atropellado, string sapo)
        {
            Console.WriteLine($"{atropellado} grita ahhhhhh!");
            Console.WriteLine($"{sapo} grita Policiaaa");
        } 
    }
}
