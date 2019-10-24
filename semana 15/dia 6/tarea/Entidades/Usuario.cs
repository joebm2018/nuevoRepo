using System;
using System.Collections.Generic;
using System.Text;

namespace ConexionDB_6.Entidades
{
    class Usuario
    {
        string correo;
        string clave;
        string nombre;
        string privilegios;
        DateTime fechaNacimiento;
        

        //encapsular campo pero seguir usuandolo
        //con su respectivo GET SET
        public string Nombre { get => nombre; set => nombre = value; }
        public string Clave { get => clave; set => clave = value; }
        public string Privilegios { get => privilegios; set => privilegios = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public string Correo { get => correo; set => correo = value; }
    }
   
}
