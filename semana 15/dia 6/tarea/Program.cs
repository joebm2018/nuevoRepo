using ConexionDB_6.Controladores;
using ConexionDB_6.Entidades;
using System;
using System.Data.SqlClient;

namespace ConexionDB_6
{
    class Program
    {
        static void Main(string[] args)
        {
            int opcion;
            do
            {
                Console.Clear();
                Console.WriteLine("****** MENU ******");
                Console.WriteLine("1- LOGIN");
                Console.WriteLine("2- ¿ Sin Usuario ? CREAR USUARIO");
                Console.WriteLine("3- Salir");
                Console.Write("\nIngrese una opcion:");
                opcion = int.Parse(Console.ReadLine());
                switch (opcion)
                {
                    case 1:
                        Console.WriteLine("****** MENU/LOGIN ******");
                        Console.Write("correo:");
                        string email = Console.ReadLine();
                        Console.Write("Password:");
                        string passw = Console.ReadLine();
                        ControladorUsuario cUsuario = new ControladorUsuario();
                        Usuario usu = new Usuario();
                        cUsuario.Login(usu);
                        break;
                }
            } while (opcion != 3);
        }
    }
}
