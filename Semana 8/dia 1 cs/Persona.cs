using System;
using System.Collections.Generic;
using System.Text;

namespace Clases3
{
    class Persona
    {
        string nombre;
        int edad;
        string dni;
        char sexo;
        float peso;
        float altura;
        public Persona()
        {
            this.nombre = "";
            this.edad = 0;
            this.dni = "";
            this.sexo = 'a';
            this.peso = 0;
            this.altura = 0;
        }

        public Persona(string nombre, int edad, char sexo)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
        }

        public Persona(string nombre, int edad, string dni, char sexo, float peso, float altura)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.dni = dni;
            this.sexo = sexo;
            this.peso = peso;
            this.altura = altura;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public int Edad { get => edad; set => edad = value; }
        public string Dni { get => dni; set => dni = value; }
        public char Sexo { get => sexo; set => sexo = value; }
        public float Peso { get => peso; set => peso = value; }
        public float Altura { get => altura; set => altura = value; }

        public void PesoIdeal()
        {
            float pesoIngresado = 0;
            pesoIngresado= this.peso / (float) Math.Pow(this.altura,2);
            if (pesoIngresado > 20)
                Console.WriteLine("Bajo");
            else if (pesoIngresado >= 20 && pesoIngresado <= 25)
                Console.WriteLine("Idela");
            else if (pesoIngresado > 25)
                Console.WriteLine("SobrePeso");
            
        }
        public void EsMayor(int edad)
        {
            if (edad >= 18)
                Console.WriteLine("Mayor de Edad");
            else
                Console.WriteLine("eres Pulpin");
        }
        public  void ComprobarSexo()
        {
            if (this.Sexo=='m' || this.Sexo == 'f')
            {
                Console.WriteLine("Correcto");
            }
            else
            {
                Console.WriteLine("ERROR");
             }
        }
        public void MostrarInfo()
        {

        }
        public void GenerarDni()
        {

        }
    }
}
