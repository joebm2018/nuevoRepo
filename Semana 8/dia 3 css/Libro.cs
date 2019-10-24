using System;
using System.Collections.Generic;
using System.Text;

namespace Clases4
{
    class Libro
    {
        string titulo;
        int precio;
        Autor autor;

        public Libro(string titulo, int precio)
        {
            this.titulo = titulo;
            this.precio = precio;
        }
        public override string ToString()
        {
            return $"titulo:{titulo}-precio:{precio} autor:{autor}";
        }
        public string Titulo { get => titulo; set => titulo = value; }
        public int Precio { get => precio; set => precio = value; }
        internal Autor Autor { get => autor; set => autor = value; }
    }
}
