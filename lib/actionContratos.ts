

"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Definimos un esquema para la validación de los datos del contrato
const ContractSchema = z.object({
  estado: z.string().min(3), // Estado del contrato
  fechaInicio: z.string(), // Fecha de inicio del contrato
  fechaFin: z.string(), // Fecha de finalización del contrato
  // Puedes agregar más campos según sea necesario
});


// sirve para guardar un nuevo empleado
export const saveContract = async (prevSate: any, formData: FormData) => {
  const validatedFields = ContractSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }
  //sirve para guardar un nuevo empleado
  try {
    await prisma.contratos.create({
      data: {
        estado: validatedFields.data.estado,
        fechaInicio: validatedFields.data.fechaInicio,
        fechaFin: validatedFields.data.fechaFin,
      },
    });
      
  } catch (error) {
    return { message: "Failed to create new contratos" };
  }
  
  revalidatePath("/contratos");
  redirect("/contratos");
};
 

// Función para obtener una lista de contratos
export const getContractList = async (query: string) => {
  try {
    const contracts = await prisma.contratos.findMany({
      // Puedes personalizar la selección de campos según tus necesidades
      select: {
        codigo_id: true,
        estado: true,
        fechaInicio: true,
        fechaFin: true,
        createdAt: true,
        updatedAt: true // Agregamos updatedAt para obtener la fecha de actualización
        // Puedes agregar más campos según sea necesario
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return contracts;
  } catch (error) {
    throw new Error("Failed to fetch contracts data");
  }
};
















