using System;

namespace ejercicios
{
    class Program
    {
        static void Main(string[] args)
        {
 /*           for (int i = 1; i <= 12; i++)
            {
                Console.WriteLine($"{i}*{9}={i * 9}");
            }
        */
            int x = 3,c=1,i=0;
        
            for (; ;)
            {
                i++;
                if (i %2 != 0) {
                    Console.WriteLine(i);
                    c++;
                }
                if (c == x)
                {
                    break;
                }
            }
            //n nros multiplos de 3
            int n = 6,suma=0;
            for (int xy = 1; xy <= n; xy++)
            {
                if (xy % 3 == 0)
                {
                    suma = suma + xy;
                    Console.WriteLine(xy);
                }
                    
            }
            Console.WriteLine("la suma es "+suma);

        }
    }
}
