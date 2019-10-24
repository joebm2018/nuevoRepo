using System;

namespace notaminima
{
    class Program
    {
        static void Main(string[] args)
        {// suma de numeros entre 2 nros
         //int n1 = int.Parse(Console.ReadLine());
         //int n2 = int.Parse(Console.ReadLine());
         //int suma = 0;
         //for (var i = n1; i <= n2; i++)
         //{
         //    suma = suma + i;
         //}
         //Console.WriteLine($"La Suma entre {n1} y {n2} es {suma}");

            //multiplicacion sin utilizar el operador *
            //int resultado=0;
            //for (var i = 1; i <= n1; i++)
            //{
            //    resultado=resultado+n2;
            //}
            //Console.WriteLine($"el resultado de la multiplicacion es igual {resultado}");

            //pendiente para la casa potencia

            //imprimir
            //    1 2 3 4 5  6  7  8  9  10
            //    2  4  6  8 10 12 14 16 18 20
            //    3  6  9 12 15 18 21 24 27 30
            //    4  8 12 16 20 24 28 32 26 40

            //for (int a = 1; a <= 10; a++)
            //{
            //    Console.WriteLine("\n");
            //    for (int b = 1; b <= 10; b++)
            //        //Console.Write($" {a * b} ");
            //        Console.Write($"{a*b}\t");
            //}

            //mostrar la idetidad de un numero
            //    eye(2)
            //    1 0
            //    0 1
            //    eye(3)
            //    1 0 0
            //    0 1 0
            //    0 0 1


            //n=4
            //    1
            //    1 2
            //    1 2 3
            //    1 2 3 4
            //    1 2 3
            //    1 2
            //    1
            //int n = 5;
            //for(int i = 1; i <= n; i++)
            //{
            //    for(int j = 1; j <= i; j++)
            //    {
            //        Console.Write($"{j} ");
            //    }
            //    Console.WriteLine();
            //}
            //for (int i = n-1; i >= 1; i--)
            //{
            //    for (int j = 1; j <=i; j++)
            //    {
            //        Console.Write($"{j} ");
            //    }
            //    Console.WriteLine();
            //}

            //factorial de un numero
            //tipos de variables int 2 a la 32
            //int64 2 a la 64
            //int n = 6, fact = 1;

            double n = 17, fact = 1;
            for (int i = 1; i <= n; i++)
            {
                fact = fact * i;
                Console.Write($" {i} * ");
            }
            Console.WriteLine($"={fact}");
        }
    }
}
