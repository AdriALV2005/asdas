// components/TableDataContratos.tsx
import Link from "next/link";
import { getCustomerList } from "../lib/actionCliente";
import { formatDate } from "../lib/utilsContratos";
import { DeleteButton } from "./delete";

const TableDataClientes= async ({
    query
}: {
    query: string;
}) => {
    const customers = await getCustomerList(query); // Usamos la función getContractList para obtener la lista de contratos
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
                {customers.map((customer, index) => (
                    <tr key={customer.cliente_id} className="bg-white border-b">
                         <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{customer.nombre}</td>
                        <td className="py-3 px-6">{customer.apellido}</td>
                        <td className="py-3 px-6">{customer.email}</td>
                        <td className="py-3 px-6">{customer.telefono}</td>
                        <td className="py-3 px-6">{formatDate(customer.createdAt.toString())}</td>
                        
                        {/* <td className="flex justify-center gap-1 py-3">
                            <Link href={`/reunion/edit/${map_reu.reunion_id}`} className="btn btn-info">
                                Editar
                            </Link>
                            
                        </td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDataClientes;
