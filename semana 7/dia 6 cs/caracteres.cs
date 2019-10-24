using System;

namespace caracteres
{
    class Program
    {
        static void Main(string[] args)
        {
            String nombre = "Christian";
            char primeraInicial = 'C';
            char[] arregloNombre = nombre.ToCharArray();
            //as
            char c = 'c';
            char.IsLetter(primeraInicial);
            char.IsDigit(c);
            //sacar el costo total de un mensaje dado que una letra cuesta 0.1
            //yield un numero cuesta 0.15 y un simbolo cuesta 0.2 y espacios gratuitos

            //Console.WriteLine("Ingrese Telegrama");
            //string mensaje = Console.ReadLine();
            //char[] arregloMensaje = mensaje.ToCharArray();
            //double acumLetras = 0, acumNumeros = 0, acumSimbolos=0, acumEspacios=0;
            //double Total=0;
            //for (int i = 0; i < arregloMensaje.Length; i++)
            //{
            //    if (char.IsLetter(arregloMensaje[i]))
            //       acumLetras++;

            //    if (char.IsNumber(arregloMensaje[i]))
            //    {
            //        acumNumeros++;
            //    }
            //    if (char.IsSymbol(arregloMensaje[i]))
            //    {
            //        acumSimbolos++;
            //    }
            //    if (char.IsPunctuation(arregloMensaje[i]))
            //    {
            //        acumSimbolos++;
            //    }
            //}
            //javier
            //    j@v!3r

            //Total= (acumLetras * 0.10) + (acumNumeros * 0.15) + (acumSimbolos * 0.20);
            //Console.WriteLine("En costo total es:"+Total+" nuevos soles");}
            Console.WriteLine("Ingrese Telegrama");
            string mensaje1 = Console.ReadLine();
            string mensaje = mensaje1.ToLower();
            char[] arregloMensaje = mensaje.ToCharArray();

            //for (int i = 0; i < arregloMensaje.Length; i++)
            //{

            //    if (i % 2 == 0)
            //    {
            //        if (arregloMensaje[i] == 'a')
            //        {
            //            Console.Write("@");
            //        }
            //        else
            //        {
            //            Console.Write(char.ToUpper(arregloMensaje[i]));
            //        }
            //    }
            //    else
            //    {
            //        if (arregloMensaje[i] == 'a')
            //        {
            //            Console.Write("@");
            //        }
            //        else
            //        {
            //            Console.Write(arregloMensaje[i]);
            //        }

            //    }


            //}
            bool letraA = false, letraE = false, letraI = false, letraO = false, letraU = false;
            for (int i = 0; i < arregloMensaje.Length; i++)
            {
                switch (arregloMensaje[i])
                {
                    case 'a':
                            letraA = true;
                            break;
                    case 'e':
                        letraE = true;
                        break;
                    case 'i':
                        letraI = true;
                        break;
                    case 'o':
                        letraO = true;
                        break;
                    case 'u':
                        letraU = true;
                        break;

                }
            }
            if(letraA==true && letraE == true && letraI == true && letraO == true && letraU == true)
            {
                Console.WriteLine("TRUE");
            }
            else
            {
                Console.WriteLine("FALSE");
            }
        }
    }
}
