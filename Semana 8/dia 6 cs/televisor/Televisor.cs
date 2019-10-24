using System;
using System.Collections.Generic;
using System.Text;

namespace T
{
    class Televisor
    {
        double precio;
        string color;
        char consumoEnergetico;
        string pulgadas;
        bool encendido;
        CtrlRemoto controlRemoto = new CtrlRemoto();
        

        internal CtrlRemoto ControlRemoto { get => controlRemoto; set => controlRemoto = value; }

        public override string ToString()
        {
            return $"Mi tele es {color} con {pulgadas}'' de consumo{consumoEnergetico}";
        }
        public Televisor()
        {
            //colores disponibles blanco negro  gris
            this.color = "blanco";
            this.consumoEnergetico = 'F';
            this.precio = 1000;
            this.pulgadas = "32";
            this.encendido = false;

        }

        public Televisor(double precio, string pulgadas)
        {
            this.precio = precio;
            this.pulgadas = pulgadas;
        }

        public Televisor(double precio, string color, char consumoEnergetico, string pulgadas, bool encendido)
        {
            this.precio = precio;
            this.color = color;
            this.consumoEnergetico = consumoEnergetico;
            this.pulgadas = pulgadas;
            this.encendido = encendido;
        }

        public Televisor(double precio, string color, char consumoEnergetico, string pulgadas, bool encendido, CtrlRemoto controlRemoto)
        {
            this.precio = precio;
            this.color = color;
            this.consumoEnergetico = consumoEnergetico;
            this.pulgadas = pulgadas;
            this.encendido = encendido;
            this.controlRemoto = controlRemoto;
        }

        public void ComprobarConsumo()
        {
            if(this.consumoEnergetico=='A' || this.consumoEnergetico == 'B' || this.consumoEnergetico == 'C' 
            || this.consumoEnergetico == 'D' || this.consumoEnergetico == 'E' || this.consumoEnergetico == 'F')
            {
                Console.WriteLine($"El consumo Energetico:'{this.consumoEnergetico}' ingresado es Correcto");
                
            }
            else
            {
                Console.WriteLine($"El consumo Energetico:'{this.consumoEnergetico}' ingresado es Correcto");
                //this.consumoEnergetico = 'F';
            }

        }
        
        public double PrecioFinal()
        {
            //segun el consumo
            /* CONSUMO
             * A:100    B:80    C:60    D:40     E:30    F:20 */
            //PULGADAS => 32'':100  40'':150   48'':200  55'':250  60'':300 
            //precio final= precio inicial + [A|B|C|D|E|F]+[32''|40''|48''|55''|60'']
            double consumoE = 0;
            switch (this.consumoEnergetico)
            {
                case 'A':
                    consumoE = 100;
                    break;
                case 'B':
                    consumoE = 80;
                    break;
                case 'C':
                    consumoE = 60;
                    break;
                case 'D':
                    consumoE = 40;
                    break;
                case 'E':
                    consumoE = 30;
                    break;
                case 'F':
                    consumoE = 20;
                    break;
            }
            double consumoP=0;
            switch (this.pulgadas)
            {
                case "32":
                    consumoP = 100;
                    break;
                case "40":
                    consumoP = 150;
                    break;
                case "48":
                    consumoP = 200;
                    break;
                case "55":
                    consumoP = 250;
                    break;
                case "60":
                    consumoP = 300;
                    break;
            }
            double precioF = this.precio+consumoE+consumoP;
            return precioF;
        }   
    }
}
