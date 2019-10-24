using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6
{
    //CLASE ENCARGADA DE GESTIONAR LA CONEXION A LA BASE DE DATOS
    class ConexionDB
    {
        SqlConnection con;
        string cadenaConexion= 
                "Data source= .\\SQLEXPRESS;  " +    //SERVIDOR DONDE ESTAN LOS DATOS
                "Initial catalog = BikeStores;" +   // BASE DE DATOS DONDE NOS VAMOS A CONECTAR
                "Integrated security = true;";
        public ConexionDB()
        {
            con = new SqlConnection(cadenaConexion);
        }
        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se Conecto correctamente");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo abrir la conexion.");
                
            }
            
        }
        public void CerrarConexion()
        {
            try
            {
                con.Close();
                Console.WriteLine("Se Desconecto correctamente");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo Desconectar");

            }
        }
        public SqlConnection getConexion()
        {
            return con;
        }
    }
}
