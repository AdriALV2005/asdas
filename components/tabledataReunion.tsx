// components/TableDataContratos.tsx
import Link from "next/link";
import { getMettingList } from "../lib/actionReunion";
import { formatDate } from "../lib/utilsContratos";
import { DeleteButton , DeleteButtonReunion } from "./delete";

const TableDataReuniones= async ({
    query
}: {
    query: string;
}) => {
    const mettings = await getMettingList(query); // Usamos la función getContractList para obtener la lista de contratos
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">fecha</th>
                    <th className="py-3 px-6">hora</th>
                    <th className="py-3 px-6">lugar</th>
                    <th className="py-3 px-6">Creado en</th>
                    <th className="py-3 px-6">Actualizado en</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {mettings.map((metting, index) => (
                    <tr key={metting.reunion_id} className="bg-white border-b">
                         <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{metting.hora}</td>
                        <td className="py-3 px-6">{metting.fecha}</td>
                        <td className="py-3 px-6">{metting.lugar}</td>
                        <td  className="py-3 px-6">{formatDate(metting.createdAt.toString())}</td>
                        
                         <td className="flex justify-center gap-1 py-3">
                            <Link href={`/reunion/edit/${metting.reunion_id}`} className="btn btn-info">
                                Editar
                            </Link>
                            {/* <DeleteButtonReunion reunion_id={metting.reunion_id} /> */}
                            
                        </td> 
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDataReuniones;
