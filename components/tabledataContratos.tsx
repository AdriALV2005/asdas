// components/TableDataContratos.tsx
import Link from "next/link";
import { getContractList } from "../lib/actionContratos";
import { formatDate } from "../lib/utilsContratos";
import { DeleteButton } from "./delete";

const TableDataContratos = async ({
    query
}: {
    query: string;
}) => {
    const contracts = await getContractList(query); // Usamos la función getContractList para obtener la lista de contratos
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Estado</th>
                    <th className="py-3 px-6">Fecha de Inicio</th>
                    <th className="py-3 px-6">Fecha de Fin</th>
                    <th className="py-3 px-6">Creado en</th>
                    <th className="py-3 px-6">Actualizado en</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {contracts.map((contract, index) => (
                    <tr key={contract.codigo_id} className="bg-white border-b">
                        <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{contract.estado}</td>
                        <td className="py-3 px-6">{contract.fechaInicio.toString()}</td>
                        <td className="py-3 px-6">{contract.fechaFin.toString()}</td>
                        <td className="py-3 px-6">{formatDate(contract.createdAt.toString())}</td>
                        
                        <td className="flex justify-center gap-1 py-3">
                            <Link href={`/contract/edit/${contract.codigo_id}`} className="btn btn-info">
                                Editar
                            </Link>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDataContratos;
