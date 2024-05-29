import Link from "next/link";
//import { getEmployeelist } from "@/lib/action";
import { getData } from "../lib/action";
import { formatDate } from "../lib/utils";
import { DeleteButton } from "./delete";

const Employee = async ({
    query
}: {
    query: string;
}) => {
    const employees = await getData(query);
    return (
        <div className="overflow-x-auto bg-gray-900 text-white shadow-md rounded-lg">
            <table className="w-full divide-y divide-gray-800">
                <thead className="bg-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-700 divide-y divide-gray-800">
    {employees.map((rs, index) => (
        <tr key={rs.id}>
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{rs.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{rs.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{rs.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap">{formatDate(rs.createdAt.toString())}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center gap-1">
                <Link href={`/employee/edit/${rs.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                </Link>
                <DeleteButton id={rs.id} />
                
            </td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    );
};
  
export default Employee;
