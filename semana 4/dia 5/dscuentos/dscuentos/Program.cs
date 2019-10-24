using System;

namespace dscuentos
{
    class Program
    {
        static void Main(string[] args)
        {
                        /*
             
            int opcion = int.Parse(Console.ReadLine());
            switch (opcion)
            {
                case 1:
                    Console.WriteLine("Opcion 1");
                    break;
                case 2:
                    Console.WriteLine("Opcion 2");
                    break;

                default:
                    Console.WriteLine("No hay opcion");
                    break;
            }
            */

            double monto = double.Parse(Console.ReadLine());
            string modoPago = Console.ReadLine();
            switch (modoPago)
            {
                case "BCP":
                    monto = monto -10;
                    break;
                case "RIPLEY":
                    monto = monto * 0.15;
                    break;
                case "SAGA":
                    monto = monto * 0.20;
                    break;
                default:
                    break;
            }
            
            Console.WriteLine("Total " + monto);
        }
    }
}
