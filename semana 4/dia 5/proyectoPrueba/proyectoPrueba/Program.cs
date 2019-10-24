using System;

namespace proyectoPrueba
{
    class Program
    {
        static void Main(string[] args)
        {
            
            string nombre;
            Console.Write("ingresa tu nombre: ");
            nombre=Console.ReadLine();
            Console.WriteLine($"Hello {nombre}!");
            Console.WriteLine("Hello " + nombre + "!");
            Console.WriteLine("HEllo {0}!", nombre);
            Console.Write("t\ne\nx\nt\no\n");
            //tabulacion  \t
            Console.Write("mas \ttexto");
            int x;
            char c;
            float f;
            Console.Write("Ingrese Edad:");
            x =int.Parse(Console.ReadLine());
           // c = char.Parse(Console.ReadLine());
            //f = float.Parse(Console.ReadLine());
            
            if (x > 17 && x>0)
            {
                Console.WriteLine($"Tienes { x } años, eress mayor");
            }
            else
            {
                Console.WriteLine($"Tienes { x } años, eress MENOR");
            }
            
            

            
        }
    }
}
