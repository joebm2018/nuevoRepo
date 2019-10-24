using System;

namespace calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("CALCULADORA");
            int x = int.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());
            string ope = Console.ReadLine();
            switch (ope)
            {
                case "+":
                    //Console.WriteLine($"{x} + {y} = {x+y}");
                    Console.WriteLine(x + "+" + y + "=" + (x + y));
                    break;
                case "-":
                    Console.WriteLine(x + "-" + y + "=" + (x - y));
                    break;
                case "*":
                    Console.WriteLine(x + "*" + y + "=" + (x * y));
                    break;
                case "/":
                    if (y == 0)
                    {
                        Console.WriteLine("no se puede dividir entre 0");
                    }
                    else
                    {
                        Console.WriteLine(x + "/" + y + "=" + (x / y));
                    }
                    
                    break;
                default:
                    break;
            }



        }
    }
}
