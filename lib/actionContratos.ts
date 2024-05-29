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
















