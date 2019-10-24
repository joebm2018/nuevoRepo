using System;

namespace Excepciones_X
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b;
            a= int.Parse(Console.ReadLine());
            b = int.Parse(Console.ReadLine());
            int[] arreglo = { 1, 2, 3, 4, 5 };
            try
            {
                Console.WriteLine(a / b);
                Console.WriteLine(arreglo[9]);
            }
            //catch (Exception ex)
            catch(DivideByZeroException ex)
            {
                Console.WriteLine("No se puede dividir por cero");

                // Lanzar la excepcion y termina
                // throw;  

                // enviar mensaje al administrador sobre la excepcion
                Console.WriteLine("Desea enviar MSG al ADMIN S/N");
                char opc = char.Parse(Console.ReadLine());
                if (opc == 's')
                    Console.WriteLine(ex.StackTrace);
                else if (opc == 'n')
                    Console.WriteLine("No se envio nada");
            }
            catch(IndexOutOfRangeException ioorEx)
            {
                Console.WriteLine("Te fuiste muy lejos");
            }
            Console.WriteLine("El programa funciona despues de la excepcion");

            //crear un arreglo con 5 elementos y mostrar la posicion 7

        }
    }
}
