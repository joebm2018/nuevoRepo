using System;

namespace Clases3
{
    class Program
    {
        static void Main(string[] args)
        {
            //interactuando con la clase Cuenta
            /*
            Cuenta cta1 = new Cuenta("Joe", 100);
            cta1.Ingresar(10);
            Console.WriteLine(cta1.Cantidad);
            cta1.Retirar(30);
            Console.WriteLine(cta1.Cantidad);

            Cuenta cta2 = new Cuenta("Renzo");
            cta2.Ingresar(1000);
            Console.WriteLine(cta2.Cantidad);
            cta2.Retirar(2000);
            Console.WriteLine(cta2.Cantidad);
            */
            // con la Clase Persona
            Persona p1 = new Persona();
            p1.ComprobarSexo();
            Persona p2 = new Persona("joe",20,"29712720",'m',81,1.70f);
            p2.PesoIdeal();
        }
    }
}
