
"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Definimos un esquema para la validación de los datos del contrato
const CustomerSchema = z.object({
    nombre: z.string().min(3), // Estado del contrato
    apellido: z.string(), // Fecha de inicio del contrato
    email: z.string(), // Fecha de finalización del contrato
    telefono: z.string(), 
  // Puedes agregar más campos según sea necesario
});


// sirve para guardar un nuevo empleado
export const saveCustomer = async (prevSate: any, formData: FormData) => {
  const validatedFields = CustomerSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  //sirve para guardar un nuevo empleado
  try {
    await prisma.tablaClientes.create({
      data: {
        nombre: validatedFields.data.nombre,
        apellido: validatedFields.data.apellido,
        email: validatedFields.data.email,
        telefono: validatedFields.data.telefono,
      },
    });
      
  } catch (error) {
    return { message: "Failed to create new clientes lupitanos" };
  }
  
  revalidatePath("/clientes");//sirve para redireccionar a la pagina de reuniones
  redirect("/clientes");//sirve para redireccionar a la pagina de reuniones
};
 

// Función para obtener una lista de contratos
export const getCustomerList = async (query: string) => {
  try {
    const customers = await prisma.tablaClientes.findMany({
      // Puedes personalizar la selección de campos según tus necesidades
      select: {
        cliente_id: true,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        createdAt: true,
        updatedAt: true // Agregamos updatedAt para obtener la fecha de actualización
        // Puedes agregar más campos según sea necesario
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return customers;
  } catch (error) {
    throw new Error("Failed to fetch reunion data");
  }
};
















