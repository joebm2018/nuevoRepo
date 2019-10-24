using System;

namespace Clases4
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor autor = new Autor("Mark Douglas", "mark@hmail.com");
            Libro libro = new Libro("trading en la zona",30);
            Console.WriteLine(autor);
		    Console.WriteLine(libro);
            
            libro.Autor=autor;
            console.WriteLine(libro);

            Libro vaca=new Libro("la vaca",3,new Autor("Azucena","ad@j.com"));
            Console.WriteLine(vaca.Autor.Nombre);
        }
    }
}
