using System;

namespace Clases2
{
    class Program
    {
        static void Main(string[] args)
        {
            Celular miLadrillo = new Celular("NOKIA", "8110", "Celeste", "972129345", "9872367190267");
            miLadrillo.Llamar("958952015");
            miLadrillo.Colgar();

            Celular miCel = new Celular("HUAWEI", "p20Lite", "rojo", "958952015", "1234565789012");

            Console.WriteLine($"Has creado {Celular.nroCelulares} celulares");
            Console.WriteLine($"Mi Numero es {miLadrillo.Numero}");
            Console.WriteLine($"Mi otro numero es {miCel.Numero}, marca {miCel.GetMarca()}");

            //cambio color}
            miCel.SetColor("Azul");
            //Asignacion de Valores
            miCel.IMEI1="0000000001112";

            //listas
        }
    } 
    class Celular
    {
        //ATRIBUTOS DE LA CLASE ESTATICA
        public static int nroCelulares = 0;
        //ATRIBUTOS DE LOS OBJETOS
        string marca;
        string modelo;
        string color;
        string numero;
        string IMEI;

        //propfull
        private char colorFunda;

        public char ColorFunda
        {
            get { return colorFunda; }
            set { colorFunda = value; }
        }

        public string Numero { get => numero; set => numero = value; }
        public string Marca { get => marca; set => marca = value; }
        public string IMEI1 { get => IMEI; set => IMEI = value; }

        //GET - OBTENER
        //SET - PONER

        public string GetMarca()
        {
            return marca;
        }
        public string GetColor()
        {
            return color;
        }
        public void SetColor(string color)
        {
            this.color = color;
        }
        public Celular()
        {
            Console.WriteLine("se creo  un celular");
        }

        public Celular(string marca, string modelo, string color, string numero, string iMEI)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.numero = numero;
            IMEI = iMEI;
            nroCelulares++;
        }

        public void Llamar(string numero)
        {
            Console.WriteLine($"ALO? {numero}");
        }
        public int Colgar()
        {
            return 0;
        }
    }
}
