using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Persona p1 = new Persona();
            p1.ComprobarSexo();
            Persona p2 = new Persona("joe", 20, "29712720", 'm', 81, 1.70f);
            p2.MostrarInfo();
            p2.PesoIdeal();
            p2.EsMayor();

            Persona p3 = new Persona("Dulce", 16, 'f');
            p3.EsMayor();
            p3.ComprobarSexo();

            Persona p4 = new Persona("Camila", 28, "01562789", 'f', 61, 1.60f);
            p4.MostrarInfo();
            p4.PesoIdeal();
            p4.EsMayor();
        }
    }
}
