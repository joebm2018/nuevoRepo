using System;

namespace trescifras
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Ingrese un NRO:");
            int nro = int.Parse(Console.ReadLine());
            if (nro < 0)
            {
                nro = nro * (-1);
            }
            if (nro > 0 && nro < 10)
            {
                Console.WriteLine("Numero de 1 cifra");
            }
            else if (nro > 9 && nro < 100)
            {
                Console.WriteLine("Numero de 2 cifras");
            }
            else if (nro > 99 && nro < 1000)
            {
                Console.WriteLine("Numero de 3 cifras");
            }
            else
            {
                Console.WriteLine("Mayor a 3 cifras");
            }
        }
    }
}
