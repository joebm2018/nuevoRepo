using System;
using System.Collections.Generic;
using System.Text;

namespace Clases3
{
    class Cuenta
    {
        string titular;
        int cantidad;

        public Cuenta(string titular)
        {
            this.titular = titular;
            this.cantidad = 0;
        }

        public Cuenta(string titular, int cantidad)
        {
            this.titular = titular;
            this.cantidad = cantidad;
        }

        public string Titular { get => titular; set => titular = value; }
        public int Cantidad { get => cantidad; set => cantidad = value; }
        public int Ingresar(int monto)
        {
            if (monto > 0)
            {
                this.cantidad = this.cantidad + monto;
            }
            else
            {
                Console.WriteLine("Ingreso un monto negativo");
            }
            return this.cantidad;
        }
        public int Retirar(int monto)
        {

            this.cantidad = this.cantidad - monto;
            if (this.cantidad<0)
            {
                this.cantidad = 0;
            }
            return this.cantidad;
        }
    }

}
