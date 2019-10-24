using System;

namespace Clase1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[10];
            string a = "Chris";
            a.StartsWith("C"); // devuelve vevrdadero si existe 
            //creacion de un objeto - INSTANCIAR UNA CLASE
            Auto miAuto = new Auto();
            miAuto.marca = "VolksWagen";
            miAuto.modelo = "Golf GTi";
            miAuto.año = 2020;

            //Console.WriteLine($"Este es mi {miAutodelo} del " + $"año {miAuto.año}");
            Console.WriteLine($"Este es mi {miAuto.modelo} del año {miAuto.año}");
            miAuto.Arrancar();
            miAuto.Atropellar("Jorge");
            miAuto.Atropellar("Jorge", "Osmar");
            Console.WriteLine($"Apunta la placa, es {miAuto.placa}");

            Auto superAuto = new Auto("Daewo", "Tico", 1991, "T3M-ATO");
            Console.WriteLine($"Este es mi super auto {superAuto.modelo} del año {superAuto.año}, tapa la placa");
        }
        
    }
}
