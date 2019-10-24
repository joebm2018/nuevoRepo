using System;

namespace T
{
    class Program
    {
        static void Main(string[] args)
        {
            Televisor t1 = new Televisor();
            t1.ComprobarConsumo();
            Console.WriteLine(t1.PrecioFinal());
            Console.WriteLine(t1);

            t1.ControlRemoto.apagar();
            t1.ControlRemoto.encender();
        }
    }
}
