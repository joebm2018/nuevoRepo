using System;

namespace MiPrimeraAplicacion
{
   class Program
   {
      static void Main(string[] args)
      {
         Console.WriteLine("Ingresar primera nota");
         int nota1 = int.Parse(Console.ReadLine());
         Console.WriteLine("Ingresar segunda nota");
         int nota2 = int.Parse(Console.ReadLine());
         Console.WriteLine("Ingresar la nota para aprobar");
         int notaMinima = int.Parse(Console.ReadLine());
         int nota3 = notaMinima * 3 - nota1 - nota2;
         if (nota3 >20)
            Console.WriteLine("Proximo año con fuerza");
         else
            Console.WriteLine($"Necesitas {nota3} para aprobar");


      }
   }
}
