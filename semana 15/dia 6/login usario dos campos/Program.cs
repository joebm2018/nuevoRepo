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
            Console.WriteLine("MENU");
            Console.WriteLine("1- LOGIN");
            Console.WriteLine("2- ¿ Sin Usuario ? CREAR USUARIO");

            ControladorUsuario cUsuario = new ControladorUsuario();
            Usuario usu = new Usuario() { Nombre="Christian", Clave="123"};
            cUsuario.InsertarUsuario(usu);
            cUsuario.InsertarUsuario(new Usuario() { Nombre = "Yo", Clave = "666" });

/*
            string nombre = "joel";
            string clave = "123";
            //SqlCommand cmd = new SqlCommand("select * from usuarios");
            SqlCommand cmd = new SqlCommand($"select * from usuarios where nombre='{nombre}' and clave='{clave}'",con);

            var resultado = cmd.ExecuteScalar();
            if (resultado == null)
                Console.WriteLine("No hubo resultados");
            else
                Console.WriteLine(resultado.ToString());
            //primera fila primera columna
            // string resultado= cmd.ExecuteScalar().ToString();
            // Console.WriteLine(resultado);

            cmd = new SqlCommand($"select count(*) from usuarios where nombre='{nombre}' and clave='{clave}'", con);

            int respuesta = Convert.ToInt32(cmd.ExecuteScalar());   //Convert.ToInt32 convierte un objeto a int

            Console.WriteLine($"Se encontraron {respuesta} resultado(s)");
            //insert

            string nuevoNombre, nuevaClave;
            //Console.WriteLine("******** cREACION DE USUARIO *********");
            //Console.WriteLine("Nombre:");
            //nuevoNombre = Console.ReadLine();
            //Console.WriteLine("Contraseña:");
            //nuevaClave= Console.ReadLine();
            //cmd= new SqlCommand($"insert into usuarios values ('{nuevoNombre}','{nuevaClave}')", con);
            //cmd.ExecuteNonQuery();

            //UPDATE
            //Console.WriteLine("******** UPDATE DE USUARIO *********");
            //Console.WriteLine("Usuario:");
            //nombre = Console.ReadLine();
            //Console.WriteLine("Nueva Contraseña:");
            //nuevaClave = Console.ReadLine();
            //cmd = new SqlCommand($"UPDATE usuarios set clave ='{nuevaClave}' where nombre='{nombre}'", con);
            //cmd.ExecuteNonQuery();

            //DELETE
            //Console.WriteLine("******** DELETE *********");
            //Console.WriteLine("Usuario:");
            //nombre = Console.ReadLine();

            //cmd = new SqlCommand($"delete usuarios WHERE nombre='{nombre}'", con);
            //cmd.ExecuteNonQuery();

            Console.WriteLine("******** select nombre de los usuarios *********");           
            cmd = new SqlCommand($"select nombre,clave from usuarios", con);
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader[0]+"\t\t"+ reader[1]);
            }
        */    
        }
    }
}
