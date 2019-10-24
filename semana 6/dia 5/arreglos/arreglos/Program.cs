using System;

namespace arreglos
{
    class Program
    {
        static void mostrarArreglo(int[] arreglo)
        {
            foreach (var item in arreglo)
            {
                Console.Write(item + " ");
            }
        }
        static int [] Push(int n, int[] arr)
        {
            //creo un nuevo arreglo del tamaño existente + 1
            int[] arregloNuevo = new int[arr.Length + 1];
            for (int i = 0; i < arr.Length; i++)
            {
                arregloNuevo[i] = arr[i];
            }
            mostrarArreglo(arr);
            Console.WriteLine();
            arregloNuevo[arregloNuevo.Length -1] = n;
            arr = arregloNuevo;
            mostrarArreglo(arr);
            return arr;
        }
        static int[] QuitarElemento(int n, int[] arr)
        {
                        
            int[] nuevoArr = new int[arr.Length - 1];
            int contador=0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (i != n)
                {
                    nuevoArr[contador] = arr[i];
                    contador++;
                }
            }
            mostrarArreglo(arr);
            Console.WriteLine();
            arr = nuevoArr;
            mostrarArreglo(arr);
            return arr;
        }
        static int[] Pop(int[] arr)
        {
            if (arr.Length > 0)
            {
                int[] nuevoArr = new int[arr.Length - 1];
                for (int i = 0; i < arr.Length - 1; i++)
                {
                    nuevoArr[i] = arr[i];
                }
                mostrarArreglo(arr);
                Console.WriteLine();
                arr = nuevoArr;
                mostrarArreglo(arr);

            }
            else
            {
                Console.WriteLine("ya no hay valores");
            } 
            return arr;
        }


        static void OrdenarArreglo(int[] arr)
        {
            mostrarArreglo(arr);
            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = i; j < arr.Length; j++)
                {
                    if (arr[i] > arr[j])
                    {
                        int aux;
                        aux = arr[i];
                        arr[i] = arr[j];
                        arr[j] = aux;
                    }
                }
            }
            Console.WriteLine();
            mostrarArreglo(arr);
            
        }
        static void Main(string[] args)
        {
            //menu funciones 
            //funcion push
            //funcion pop
            //ordenar arreglo (mayor a menor)
            //el arreglo es simetrico
            //quitar elemento por posicion
            int[] arreglo = { 6, 3, 5, 9, 2, 10, 32, 7 };
            int opcion;
            do
            {
                //28593650717049
                Console.WriteLine("********MENU*******");
                Console.WriteLine("1- Funcion push");
                Console.WriteLine("2- Funcion pop");
                Console.WriteLine("3- Ordenar Arreglo");
                Console.WriteLine("4- El Arreglo es Simetrico");
                Console.WriteLine("5- Quitar elemento por posicion");
                Console.WriteLine("6- Salir");
                Console.Write("... ingrese una opcion");
                opcion = int.Parse(Console.ReadLine());
                switch (opcion)
                {
                    case 1:
                        Console.Write("\n ingrese un numero para hacer push:");
                        int n = int.Parse(Console.ReadLine());
                        arreglo=Push(n,arreglo);
                        break;
                    case 2:
                        arreglo=Pop(arreglo);
                        break;
                    case 3:
                        OrdenarArreglo(arreglo);
                        break;
                    case 4:
                        //arregloEsSimetrico();

                        break;
                    case 5:
                        Console.Write("ingrese posicion:");
                        int n1 = int.Parse(Console.ReadLine());
                        arreglo=QuitarElemento(n1,arreglo);
                        break;
                    default:
                        break;
                }

            } while (opcion != 6);
        }
    }
}
