using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFrameWorkPrueba
{
    class Program
    {
        static void Main(string[] args)
        {
            // using crea un bloque que al terminar elimina de la memoria todo lo que habia en este
            using (FACTURAEntities context = new FACTURAEntities())
            {
                // CONTEXT CONTROLA TODAS LAS ENTIDADES DE LA BD
                var clientes = context.Customers.ToList();
                // EL MÉTODO ToList() HACE UNA CONSULTA A LA BD

                foreach (var cliente in clientes)
                {
                    //Console.WriteLine(cliente.Name);
                }

                //Customer unCliente = new Customer()
                //{
                //    Name = "pedro1"
//                };

                // FUNCION ADD, AÑADE UN CLIENTE A LA LISTA DE CLIENTES
//                context.Customers.Add(unCliente);
                // GUARDA LOS CAMBIOS EN LA BASE DE DATOS
//                context.SaveChanges();

                //context.Items.Add(new Item() { Description = "Un producto nuevo" });


                // BUSCAR CLIENTE
                // BUSQUEDA POR ID
                var cliente10 = context.Customers.Find(10);
                Console.WriteLine(cliente10.CustomerId + " " + cliente10.Name);
                try
                {
                    var cliente500 = context.Customers.Find(500);
                    Console.WriteLine(cliente500.CustomerId + " " + cliente500.Name);
                }
                catch (Exception)
                {
                    Console.WriteLine("No se encontro el Cliente 500");
                    //throw
                }
                //ACTUALIZACION DE DATOS
                var cliente1 = context.Customers.Find(1);
                cliente1.Name = "PEPELEON";
                context.SaveChanges();

                //BORRADO DE DATOS
                try
                {
                    var cliente100 = context.Customers.Find(100);
                    context.Customers.Remove(cliente100);
                    context.SaveChanges();
                }
                catch (Exception)
                {

                    Console.WriteLine("No se encontro el cliente 100");
                }
                

                clientes = context.Customers.ToList();
                // EL MÉTODO ToList() HACE UNA CONSULTA A LA BD

                foreach (var cliente in clientes)
                {
                    Console.WriteLine(cliente.Name);
                }
                //firstOrDefault devuelve el primer elmeneto encontrado
                var primerItem = context.Items.FirstOrDefault(x=>x.Description=="Okra");
                Console.WriteLine(primerItem);


                var clientesconR = context.Customers.Where(x => x.Name.StartsWith("R")).ToList();
                foreach (var cliente in clientesconR)
                {
                    Console.WriteLine(cliente.Name);
                }
            }
        }
    }
}
