using ConexionDB_6.Entidades;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6.Controladores
{
    //GESTIONAR LOS COMANDOS QUE LE VAMOS A DAR
    //uSA LAS ENTIDADES QU ESTAN LIGADOS 
    class ControladorUsuario
    {
        //PARA QUE SE CONECTE y poder usar la DB
        ConexionDB con = new ConexionDB();
        SqlCommand cmd;
        public void Login(Usuario user)
        {
            cmd = new SqlCommand($"select * from Usuarios where correo='{user.Correo}' and contrasena='{user.Clave}'", con.getConexion());
            con.AbrirConexion();
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader[0] + "\t\t" + reader[1]);
            }

            con.CerrarConexion();
        }
        /*
        public void InsertarUsuario(Usuario user)
        {
            cmd = new SqlCommand($"insert into usuarios values ('{user.Nombre}','{user.Clave}')", con.getConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        public void CambiarContraseña(Usuario user)
        {
            cmd = new SqlCommand($"UPDATE usuarios set clave ='{user.Clave}' where nombre='{user.Nombre}'", con.getConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        
    */
    }
}
