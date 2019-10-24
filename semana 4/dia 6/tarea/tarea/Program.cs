using System;

namespace tarea
{
    class Program
    {
        static void Main(string[] args)
        {
            // n ultimos nros 
            //int n = int.Parse(Console.ReadLine());
            //int cont = 0;
            //int[] array = new int[100];
            //for (int a = 0; a < 100; a++)
            //{
            //    array[a] = a+1;
            //    Console.WriteLine(array[a]);
            //}

            //int i = 100;
            //do
            //{

            //    if (array[i - 1] % 2 != 0)
            //    {
            //        cont++;
            //        Console.WriteLine(i);
            //    }
            //    i--;
            //} while (cont == n);

            //int n = int.Parse(Console.ReadLine());
            //int cont = 0;
            //for (int i = 100; i >= 1; i--)
            //{
            //    if (i % 2 != 0)
            //    {
            //        cont++;
            //        Console.WriteLine(i);
            //    }
            //    if (cont == n)
            //        break;

            //}

            /* Imprimir suma de los números intermedios de dos números */
            //int n1 = int.Parse(Console.ReadLine());
            //int n2 = int.Parse(Console.ReadLine());
            //int suma = 0;
            //for (int i = n1 + 1; i < n2; i++)
            //{
            //    suma = suma + i;

            //}
            //Console.WriteLine(suma);

            // menu
            //int[] arreglo = { 45, 3, 45, 2, 3, 3, 9, 10 };

            //int ress;
            //do
            //{
            //    Console.WriteLine("MENU DE OPCIONES");
            //    Console.WriteLine("1- SUMA DE ELEMENTOS");
            //    Console.WriteLine("2- OBTENER MEDIA ");
            //    Console.WriteLine("3- ELEMENTO MAS GRANDE");
            //    Console.WriteLine("4- COPIA A OTRO ARREGLO");
            //    Console.WriteLine("5- REVERTIR ARREGLO");
            //    Console.WriteLine("6- SALIR");
            //    Console.WriteLine("Ingrese Opcion [1-6]=>");

            //    ress = int.Parse(Console.ReadLine());
            //    int suma = 0;
            //    int mayor = 0;
            //    switch (ress)
            //    {
            //        case 1:

            //            foreach (int name in arreglo)
            //            {
            //                suma = suma + name;
            //            }
            //            Console.WriteLine("La Suma es:" + suma);
            //            break;
            //        case 2:

            //            foreach (int name in arreglo)
            //            {
            //                suma = suma + name;
            //            }

            //            Console.WriteLine("La Media es:" + (suma) / arreglo.Length);
            //            break;
            //        case 3:
            //            foreach (int name in arreglo)
            //            {
            //                if (name > mayor)
            //                {
            //                    mayor = name;
            //                }
            //            }
            //            Console.WriteLine("El Mayor es:" + mayor);
            //            break;
            //        case 4:
            //            int[] arreglo2 = new int[arreglo.Length];

            //            for (int i = 0; i < arreglo.Length; i++)
            //            {
            //                arreglo2[i] = arreglo[i];
            //            }
            //            foreach (var item in arreglo2)
            //            {
            //                Console.Write(item + " ");
            //            }
            //            Console.WriteLine();

            //            //Console.WriteLine("MAtriz 1 :" + arreglo);
            //            //Console.WriteLine("MAtriz 2 :" + arreglo);
            //            break;
            //        case 5:
            //            int[] arreglo3 = new int[arreglo.Length];
            //            for (int i = arreglo.Length - 1; i < 0; i--)
            //            {
            //                arreglo3[i] = 1;
            //            }
            //            break;
            //    }
            //} while (ress != 6);

            //finoaci
            int N = int.Parse(Console.ReadLine());
            int[] arrfibonacci = new int[N];
            int pri = 0;
            int seg = 1;
            int sgte;
            arrfibonacci[0] = 0;
            arrfibonacci[1] = 1;
            for(int i = 2; i < N; i++)
            {
                arrfibonacci[i] = arrfibonacci[i - 1] + arrfibonacci[i - 2];

                //sin arreglos
                //sgte = pri + seg;
                //Console.WriteLine(sgte + " ");

            }
            foreach (var item in arrfibonacci)
            {
                Console.Write(item + " ");
            }

            ////potenciacion ssin multiplicacion

            //int n = 4;
            //int e = 3;
            //int num1 = int.Parse(Console.ReadLine());
            //int num2 = int.Parse(Console.ReadLine());
            //int resultado = 0;
            //for (int a = 1; a < e; a++)
            //{
            //int num1 = int.Parse(Console.ReadLine());
            //int num2 = int.Parse(Console.ReadLine());
            //int resultado = 0;
            //for (int i = 1; i <= num1; i++)
            //{
            //    resultado = resultado + num2;
            //}

            //}


            //triangulo

            //for (int i=1;i<n;i++)
        }
    }
}
