using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
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
            float pesoIngresado = this.peso / (float) Math.Pow(this.altura,2);
            //Console.WriteLine(pesoIngresado);

            if (pesoIngresado < 20)
                Console.WriteLine($"El peso de {this.Nombre} es Bajo");
            else if (pesoIngresado >= 20 && pesoIngresado <= 25)
                Console.WriteLine($"El pesp de {this.Nombre} es Ideal");
            else if (pesoIngresado > 25)
                Console.WriteLine($"{this.Nombre} esta con SobrePeso");

        }
        public void EsMayor()
        {
            if (this.Edad >= 18)
                Console.WriteLine($"{this.Nombre} tiene {this.Edad} años entonces es Mayor de Edad");
            else
                
                Console.WriteLine($"{this.Nombre} tiene {this.Edad} años entonces es Pulpin");
        }
        public  void ComprobarSexo()
        {
            if (this.Sexo=='m' || this.Sexo == 'f')
            {
                Console.WriteLine($"{this.Nombre} tiene como Sexo='{this.Sexo}' entonces esCorrecto");
            }
            else
            {
                Console.WriteLine($"{this.Nombre} tiene como Sexo='{this.Sexo}' entonces es INCORRECTO");
             }
        }
        public void MostrarInfo()
        {
            Console.WriteLine($"Nombre: { this.Nombre}");
            Console.WriteLine($"DNI: { this.Dni}");
            Console.WriteLine($"Edad: { this.Edad} años");
            Console.WriteLine($"Sexo:'{ this.Sexo}'");
            Console.WriteLine($"Peso: { this.Peso} Kilos");
            Console.WriteLine($"Altura: { this.Altura} metros");
        }
        public void GenerarDni()
        {

        }
    }
}
