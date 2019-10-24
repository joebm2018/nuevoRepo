using System;

namespace arreglos
{
    class Program
    {
        static void Main(string[] args)
        {
            //int[] arregloEnteros;
            //int[] arreglo = { 1, 2, 3, 4, 5 };
            //Console.WriteLine(arreglo[2]);
            //int[] arr = new int[10];
            //Console.WriteLine(arr[5]);
            //arr[0] = 10;
            //arr[1] = 32332;
            //arr[5] = 100;
            //foreach (var item in arr)
            //{

            //    Console.WriteLine(item+" ");
            //}
            //Console.WriteLine("Ingrese tamaño de arreglo:");
            //int tam = int.Parse(Console.ReadLine());
            //int[] arregloContamaño = new int[tam];
            //for (int i = 0; i < arregloContamaño.Length; i++)
            //{
            //    arregloContamaño[i]=i*2;
            //}
            //foreach (var elemento in arregloContamaño)
            //{
            //    Console.Write(elemento+" ");
            //}

            //progrsama con arreglos que imprima los pares de numeros ingresados por teclado
            //int n = int.Parse(Console.ReadLine());
            //int[] arreglo = new int[n];
            //for (int i = 0; i <n; i++)
            //{
            //    arreglo[i] = int.Parse(Console.ReadLine()); 
            //}
            //foreach (var item in arreglo)
            //{

            //    if (item % 2 == 0)
            //    {
            //        Console.WriteLine(item);
            //    }
            //}

            //PROGRAMA QUE IMPRIMA LOS NROS MULTIPLOS DE 5 7 Y DE 5Y7 EN UN RANGO DE 1 A 100
            int c5 = 0,c7 =0,c57 = 0;
            for (int i = 1; i <= 100; i++)
            {
                if ((i % 5 == 0) && (i % 7 == 0))
                {
                    c57++;

                }
                if (i % 5 == 0)
                {
                    c5++;
                }
                if (i % 7 == 0)
                {
                    c7++;
                }

            }
            Console.WriteLine($"de 5={c5} de 7={c7} de 5 y 7 {c57}");
        }
    }
}
