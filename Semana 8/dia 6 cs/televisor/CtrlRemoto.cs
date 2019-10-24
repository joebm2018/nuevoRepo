using System;
using System.Collections.Generic;
using System.Text;

namespace T
{
    class CtrlRemoto
    {
        bool encendido = false;
        public void encender()
        {
            encendido = true;
            Console.WriteLine("ENCENDIDO");
        }
        public void apagar()
        {
            encendido = false;
            Console.WriteLine("APAGADO");
        }
    }
}
