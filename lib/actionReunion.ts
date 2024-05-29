
"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import internal from "stream";

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

//


// sirve para obtener la reu por id
export const getData = async (query: string) => {
  try {
    const mettings = await prisma.tablaReuniones.findMany({
        where: {
            fecha: {
            contains: query,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return mettings;
  } catch (error) {
    throw new Error("Failed to fetch employees data");
  }
};


// sirve para obtener un reu por id
export const getMettingById = async (reunion_id) => {
  try {
    const metting = await prisma.tablaReuniones.findUnique({
      where: { reunion_id},
    });
    return metting;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};
 
// sirve para actualizar un reu
export const updateMetting = async (
  id: string, 
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = MettingSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    await prisma.tablaReuniones.update({
      data: {
        fecha: validatedFields.data.fecha,
        hora: validatedFields.data.hora,
        lugar: validatedFields.data.lugar,
      },
      where: { reunion_id: parseInt(id) },
    });
  } catch (error) {
    return { message: "Failed to update employee" };
  }

  
  revalidatePath("/employee");
  redirect("/employee");
};


// sirve para eliminar una reunión
export const deleteMeeting = async (reunion_id: number) => {
  try {
    await prisma.tablaReuniones.delete({
      where: { reunion_id: reunion_id },
    });

    revalidatePath("/meeting");

    return { message: "Meeting deleted successfully" };
  } catch (error) {
    return { message: "Failed to delete meeting" };
  }
};









