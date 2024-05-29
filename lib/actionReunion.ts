
"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Definimos un esquema para la validación de los datos del contrato
const MettingSchema = z.object({
  fecha: z.string().min(3), // Estado del contrato
  hora: z.string(), // Fecha de inicio del contrato
  lugar: z.string(), // Fecha de finalización del contrato
  // Puedes agregar más campos según sea necesario
});


// sirve para guardar un nuevo empleado
export const saveMetting = async (prevSate: any, formData: FormData) => {
  const validatedFields = MettingSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  //sirve para guardar un nuevo empleado
  try {
    await prisma.tablaReuniones.create({
      data: {
        fecha: validatedFields.data.fecha,
        hora: validatedFields.data.hora,
        lugar: validatedFields.data.lugar,
      },
    });
      
  } catch (error) {
    return { message: "Failed to create new contratos" };
  }
  
  revalidatePath("/reuniones");//sirve para redireccionar a la pagina de reuniones
  redirect("/reuniones");//sirve para redireccionar a la pagina de reuniones
};
 

// Función para obtener una lista de contratos
export const getMettingList = async (query: string) => {
  try {
    const mettings = await prisma.tablaReuniones.findMany({
      // Puedes personalizar la selección de campos según tus necesidades
      select: {
        reunion_id: true,
        fecha: true,
        lugar: true,
        hora: true,
        createdAt: true,
        updatedAt: true // Agregamos updatedAt para obtener la fecha de actualización
        // Puedes agregar más campos según sea necesario
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return mettings;
  } catch (error) {
    throw new Error("Failed to fetch reunion data");
  }
};
















