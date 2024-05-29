// lib/action.ts
import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Definimos un esquema para la validación de los datos del contrato
const ContractSchema = z.object({
  estado: z.string().min(3), // Estado del contrato
  fechaInicio: z.date(), // Fecha de inicio del contrato
  fechaFin: z.date(), // Fecha de finalización del contrato
  // Puedes agregar más campos según sea necesario
});

// Interfaz para los datos del contrato
export interface ContractData {
  estado: string;
  fechaInicio: Date;
  fechaFin: Date;
}

// Función para guardar un nuevo contrato
export const saveContract = async (contractData: ContractData) => {
  const validatedFields = ContractSchema.safeParse(contractData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contratos.create({
      data: {
        estado: validatedFields.data.estado,
        fechaInicio: validatedFields.data.fechaInicio,
        fechaFin: validatedFields.data.fechaFin,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error al crear un nuevo contrato:", error);
    return { error: "No se pudo crear un nuevo contrato. Por favor, inténtalo de nuevo más tarde." };
  }
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

// Función para obtener un contrato por su ID
export const getContractById = async (id: string) => {
  try {
    const contract = await prisma.contratos.findUnique({
      where: { codigo_id: parseInt(id) }, // Convertimos el ID a entero
    });
    return contract;
  } catch (error) {
    throw new Error("Failed to fetch contract data");
  }
};

// Función para actualizar un contrato
export const updateContract = async (
  id: string,
  formData: FormData
) => {
  const validatedFields = ContractSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contratos.update({
      data: {
        estado: validatedFields.data.estado,
        fechaInicio: validatedFields.data.fechaInicio,
        fechaFin: validatedFields.data.fechaFin,
        // Puedes agregar más campos aquí si es necesario
      },
      where: { codigo_id: parseInt(id) }, // Convertimos el ID a entero
    });
  } catch (error) {
    return { error: "Failed to update contract" };
  }

  revalidatePath("/contracts");
  redirect("/contracts");
};

// Función para eliminar un contrato
export const deleteContract = async (id: string) => {
  try {
    await prisma.contratos.delete({
      where: { codigo_id: parseInt(id) }, // Convertimos el ID a entero
    });
  } catch (error) {
    return { error: "Failed to delete contract" };
  }

  revalidatePath("/contracts");
};
